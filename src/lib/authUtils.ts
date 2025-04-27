import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

// This function would be used in server components
export function getAuthSession() {
  try {
    // In a real application, this would validate a session token from cookies
    // or work with NextAuth, Auth.js, or other auth libraries
    const cookieStore = cookies()
    const userCookie = cookieStore.get('user')
    
    if (!userCookie) {
      return null
    }
    
    return JSON.parse(userCookie.value)
  } catch (error) {
    console.error('Error getting auth session:', error)
    return null
  }
}

// Redirect from server components if not authenticated
export function requireAuth() {
  const session = getAuthSession()
  
  if (!session) {
    redirect('/login')
  }
  
  return session
}

// Redirect if authenticated (for login pages)
export function redirectIfAuthenticated() {
  const session = getAuthSession()
  
  if (session) {
    redirect('/dashboard')
  }
}

// Check if user has admin role
export function requireAdmin() {
  const session = getAuthSession()
  
  if (!session || session.role !== 'admin') {
    redirect('/dashboard')
  }
  
  return session
} 