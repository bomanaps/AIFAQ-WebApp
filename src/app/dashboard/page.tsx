'use client'

import { useAuth } from '@/context/AuthContext'
import Link from 'next/link'

export default function DashboardPage() {
  const { user } = useAuth()

  return (
    <div className="space-y-6">
      <div className="bg-white shadow rounded-lg p-6">
        <h1 className="text-2xl font-bold text-gray-900">Welcome, {user?.email}</h1>
        <p className="mt-2 text-gray-600">
          {user?.role === 'admin'
            ? 'You have access to all features including knowledge base management.'
            : 'You can access the chatbot with your private documents.'}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Quick Actions */}
        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h2>
          <div className="space-y-3">
            <Link
              href="/dashboard/chat"
              className="flex items-center p-3 bg-gray-50 rounded-md hover:bg-gray-100 transition-colors"
            >
              <span className="material-symbols-outlined mr-3 text-primary-600">chat</span>
              <span>Start Chat</span>
            </Link>
            
            {user?.role === 'admin' && (
              <>
                <Link
                  href="/dashboard/admin/config"
                  className="flex items-center p-3 bg-gray-50 rounded-md hover:bg-gray-100 transition-colors"
                >
                  <span className="material-symbols-outlined mr-3 text-primary-600">settings</span>
                  <span>Manage Configuration</span>
                </Link>
                
                <Link
                  href="/dashboard/admin/knowledge-base"
                  className="flex items-center p-3 bg-gray-50 rounded-md hover:bg-gray-100 transition-colors"
                >
                  <span className="material-symbols-outlined mr-3 text-primary-600">folder</span>
                  <span>Manage Knowledge Base</span>
                </Link>
              </>
            )}
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h2>
          <div className="space-y-4">
            <p className="text-gray-600">No recent activity</p>
          </div>
        </div>

        {/* System Status */}
        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">System Status</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-gray-600">Knowledge Base</span>
              <span className="px-2 py-1 text-xs font-semibold text-green-800 bg-green-100 rounded-full">
                Active
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-600">Chat Service</span>
              <span className="px-2 py-1 text-xs font-semibold text-green-800 bg-green-100 rounded-full">
                Active
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 