import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Layout } from '@/components/Layout'
import { Home } from '@/pages/Home'
import { Login } from '@/pages/Login'
import { Register } from '@/pages/Register'
import { Dashboard } from '@/pages/Dashboard'
import { Course } from '@/pages/Course'
import { Module } from '@/pages/Module'
import { Profile } from '@/pages/Profile'
import { ProtectedRoute } from '@/components/ProtectedRoute'

function App() {
  return (
    <Router>
      <Routes>
        {/* Public routes */}
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          
          {/* Protected routes */}
          <Route element={<ProtectedRoute />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/courses/:courseId" element={<Course />} />
            <Route path="/courses/:courseId/modules/:moduleId" element={<Module />} />
            <Route path="/profile" element={<Profile />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  )
}

export default App 