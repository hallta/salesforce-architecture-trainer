import { create } from 'zustand'
import axios from 'axios'
import { User } from '@/types'

interface AuthState {
  user: User | null
  token: string | null
  loading: boolean
  error: string | null
  login: (email: string, password: string) => Promise<void>
  register: (userData: {
    email: string
    password: string
    full_name: string
    cohort_type: string
    company?: string
    job_title?: string
    bio?: string
  }) => Promise<void>
  logout: () => void
}

export const useAuth = create<AuthState>((set) => ({
  user: null,
  token: localStorage.getItem('token'),
  loading: false,
  error: null,

  login: async (email: string, password: string) => {
    try {
      set({ loading: true, error: null })
      
      const response = await axios.post('/api/auth/token', {
        username: email,
        password,
      })
      
      const { access_token } = response.data
      localStorage.setItem('token', access_token)
      
      // Get user profile
      const userResponse = await axios.get('/api/users/me', {
        headers: { Authorization: `Bearer ${access_token}` },
      })
      
      set({
        user: userResponse.data,
        token: access_token,
        loading: false,
      })
    } catch (error) {
      set({
        loading: false,
        error: 'Invalid email or password',
      })
    }
  },

  register: async (userData) => {
    try {
      set({ loading: true, error: null })
      
      const response = await axios.post('/api/auth/register', userData)
      const user = response.data
      
      // Login after successful registration
      await useAuth.getState().login(userData.email, userData.password)
      
      set({ loading: false })
    } catch (error) {
      set({
        loading: false,
        error: 'Registration failed. Please try again.',
      })
    }
  },

  logout: () => {
    localStorage.removeItem('token')
    set({
      user: null,
      token: null,
    })
  },
})) 