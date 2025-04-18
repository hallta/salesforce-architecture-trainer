export type CohortType = 'engineer' | 'product_manager' | 'sales' | 'general'

export interface User {
  id: string
  email: string
  full_name: string
  cohort_type: CohortType
  company?: string
  job_title?: string
  bio?: string
  is_active: boolean
  is_verified: boolean
}

export interface Course {
  id: string
  title: string
  description: string
  skill_level: string
  tags: string[]
  total_modules: number
  total_duration: number
  modules: Module[]
  created_at: string
  updated_at: string
}

export interface Module {
  id: string
  course_id: string
  title: string
  description: string
  order: number
  content: string
  quiz_content: Record<CohortType, Quiz>
  estimated_duration: number
  difficulty_level: string
  prerequisites: string[]
  created_at: string
  updated_at: string
}

export interface Quiz {
  questions: Record<string, Question>
}

export interface Question {
  text: string
  options: string[]
  correct_answer: string
  explanation: string
}

export interface Progress {
  id: string
  user_id: string
  module_id: string
  started_at: string
  completed_at?: string
  is_completed: boolean
  last_position: number
  quiz_results: QuizResult[]
}

export interface QuizResult {
  id: string
  progress_id: string
  score: number
  answers: Record<string, string>
  feedback: Record<string, {
    correct: boolean
    explanation: string
  }>
  attempt_number: number
  completed_at: string
} 