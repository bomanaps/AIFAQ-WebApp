'use client'

import { useAuth } from '@/context/AuthContext'
import { useRouter, usePathname } from 'next/navigation'
import { useEffect } from 'react'
import Link from 'next/link'

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const { user, loading } = useAuth()
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    if (!loading && !user) {
      router.push('/login')
    }
  }, [loading, user, router])

  // Show loading state while checking auth
  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
      </div>
    )
  }

  // Don't render anything until auth check is complete
  if (!user) {
    return null
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="flex h-screen">
        {/* Sidebar */}
        <div className="w-64 bg-white shadow-lg">
          <div className="p-4 border-b">
            <div className="flex flex-col mb-3">
              <span className="text-2xl font-bold text-primary-700 font-lato tracking-tight">AIFAQ</span>
            </div>
            <div className="flex items-center p-2 bg-gray-50 rounded-md">
              <div className="w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center text-primary-700 flex-shrink-0">
                {user.email.charAt(0).toUpperCase()}
              </div>
              <div className="ml-2 min-w-0">
                <p className="text-sm font-medium text-gray-700 truncate">{user.email}</p>
                <p className="text-xs text-gray-500 capitalize">{user.role}</p>
              </div>
            </div>
          </div>
          
          <nav className="mt-6">
            <div className="px-4 space-y-1">
              <Link
                href="/dashboard"
                className={`flex items-center px-4 py-2 text-gray-700 ${
                  pathname === '/dashboard' ? 'bg-gray-100' : 'hover:bg-gray-100'
                } rounded-md`}
              >
                <span className="material-symbols-outlined mr-3">dashboard</span>
                Dashboard
              </Link>
              
              <Link
                href="/dashboard/chat"
                className={`flex items-center px-4 py-2 text-gray-700 ${
                  pathname === '/dashboard/chat' ? 'bg-gray-100' : 'hover:bg-gray-100'
                } rounded-md`}
              >
                <span className="material-symbols-outlined mr-3">chat</span>
                Chat
              </Link>

              {user.role === 'admin' && (
                <>
                  <Link
                    href="/dashboard/admin/config"
                    className={`flex items-center px-4 py-2 text-gray-700 ${
                      pathname === '/dashboard/admin/config' ? 'bg-gray-100' : 'hover:bg-gray-100'
                    } rounded-md`}
                  >
                    <span className="material-symbols-outlined mr-3">settings</span>
                    Configuration
                  </Link>
                  
                  <Link
                    href="/dashboard/admin/knowledge-base"
                    className={`flex items-center px-4 py-2 text-gray-700 ${
                      pathname === '/dashboard/admin/knowledge-base' ? 'bg-gray-100' : 'hover:bg-gray-100'
                    } rounded-md`}
                  >
                    <span className="material-symbols-outlined mr-3">folder</span>
                    Knowledge Base
                  </Link>
                </>
              )}

              <button
                onClick={() => {
                  router.push('/')
                  setTimeout(() => {
                    // Give time for navigation before logout
                    // to prevent component unmounting issues
                    router.refresh()
                  }, 100)
                }}
                className="w-full flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md"
              >
                <span className="material-symbols-outlined mr-3">logout</span>
                Back to Home
              </button>
            </div>
          </nav>
        </div>

        {/* Main content */}
        <div className="flex-1 overflow-auto">
          <main className="p-6">{children}</main>
        </div>
      </div>
    </div>
  )
} 