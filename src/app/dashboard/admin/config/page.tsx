'use client'

import { useState } from 'react'
import { useAuth } from '@/context/AuthContext'

export default function AdminConfigPage() {
  const { user } = useAuth()
  const [settings, setSettings] = useState({
    maxFileSize: 10, // MB
    allowedFileTypes: ['pdf', 'doc', 'docx', 'txt'],
    maxDocumentsPerUser: 100,
    chatHistoryRetention: 30, // days
  })

  const handleSave = async () => {
    // TODO: Implement settings save to backend
    console.log('Saving settings:', settings)
  }

  if (user?.role !== 'admin') {
    return (
      <div className="bg-white shadow rounded-lg p-6">
        <h1 className="text-2xl font-bold text-gray-900">Access Denied</h1>
        <p className="mt-2 text-gray-600">You don't have permission to access this page.</p>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div className="bg-white shadow rounded-lg p-6">
        <h1 className="text-2xl font-bold text-gray-900">System Configuration</h1>
        <p className="mt-2 text-gray-600">Manage system settings and preferences</p>
      </div>

      <div className="bg-white shadow rounded-lg p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Document Settings</h2>
        
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Maximum File Size (MB)
            </label>
            <input
              type="number"
              value={settings.maxFileSize}
              onChange={(e) => setSettings({ ...settings, maxFileSize: Number(e.target.value) })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Allowed File Types
            </label>
            <div className="mt-1 flex flex-wrap gap-2">
              {settings.allowedFileTypes.map((type, index) => (
                <span
                  key={type}
                  className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary-100 text-primary-800"
                >
                  {type}
                  <button
                    onClick={() => {
                      const newTypes = [...settings.allowedFileTypes]
                      newTypes.splice(index, 1)
                      setSettings({ ...settings, allowedFileTypes: newTypes })
                    }}
                    className="ml-1 text-primary-600 hover:text-primary-800"
                  >
                    ×
                  </button>
                </span>
              ))}
              <input
                type="text"
                placeholder="Add file type"
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && e.currentTarget.value) {
                    setSettings({
                      ...settings,
                      allowedFileTypes: [...settings.allowedFileTypes, e.currentTarget.value],
                    })
                    e.currentTarget.value = ''
                  }
                }}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Maximum Documents per User
            </label>
            <input
              type="number"
              value={settings.maxDocumentsPerUser}
              onChange={(e) => setSettings({ ...settings, maxDocumentsPerUser: Number(e.target.value) })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
            />
          </div>
        </div>
      </div>

      <div className="bg-white shadow rounded-lg p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Chat Settings</h2>
        
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Chat History Retention (days)
            </label>
            <input
              type="number"
              value={settings.chatHistoryRetention}
              onChange={(e) => setSettings({ ...settings, chatHistoryRetention: Number(e.target.value) })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
            />
          </div>
        </div>
      </div>

      <div className="flex justify-end">
        <button
          onClick={handleSave}
          className="px-4 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
        >
          Save Changes
        </button>
      </div>
    </div>
  )
} 