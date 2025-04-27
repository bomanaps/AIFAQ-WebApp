'use client'

import { useState, useRef, useEffect } from 'react'
import { useAuth } from '@/context/AuthContext'
import Link from 'next/link'

interface Message {
  id: string
  role: 'user' | 'assistant'
  content: string
  timestamp: Date
}

export default function PublicChatPage() {
  const { user } = useAuth()
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      role: 'assistant',
      content: "Hello! I'm your AI assistant. I have access to public documents only. For personalized help with your own documents, please login. How can I help you today?",
      timestamp: new Date(),
    },
  ])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
    // Focus the input when the page loads
    inputRef.current?.focus()
  }, [messages])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim()) return

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: input,
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInput('')
    setIsLoading(true)

    try {
      // TODO: Replace with actual API call to your backend
      // This is a mock implementation
      setTimeout(() => {
        const response: Message = {
          id: (Date.now() + 1).toString(),
          role: 'assistant',
          content: generateMockResponse(input),
          timestamp: new Date(),
        }
        setMessages((prev) => [...prev, response])
        setIsLoading(false)
      }, 1000)
    } catch (error) {
      console.error('Error fetching response:', error)
      setIsLoading(false)
    }
  }

  const generateMockResponse = (query: string): string => {
    // Handle example query from screenshots
    if (query.toLowerCase().includes('medical condition') || query.toLowerCase().includes('treatment')) {
      return "I'm sorry, I don't have access to confidential medical information because you're in guest mode. For personalized medical information and treatment options, please login to access private documents with your healthcare provider's information.";
    }

    // Mock implementation - would be replaced with actual AI response
    if (query.toLowerCase().includes('confidential')) {
      return "I'm sorry, I don't have access to confidential information because you're in guest mode. Please login to access private documents.";
    }

    if (query.toLowerCase().includes('help')) {
      return "I can answer questions based on the public knowledge base. Try asking about specific topics or documents. For access to private documents, please login.";
    }

    return `Based on the public knowledge base, I found the following information for your query: "${query}"\n\nThis is a simulated response that would be generated from your actual AI backend using only public documents.`;
  }

  // Example query handler
  const handleExampleQuery = () => {
    setInput("Can you tell me about my medical condition and treatment options?");
    // Focus the input to make it more obvious
    inputRef.current?.focus();
  };

  return (
    <div className="min-h-screen pt-24 pb-8 px-4 md:px-8">
      <div className="max-w-4xl mx-auto flex flex-col bg-white rounded-lg shadow-lg h-[calc(100vh-8rem)]">
        {/* Chat header */}
        <div className="p-4 border-b bg-gradient-to-r from-primary-50 to-white">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="h-10 w-10 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0">
                <span className="material-symbols-outlined text-primary-600">smart_toy</span>
              </div>
              <div>
                <h1 className="text-xl font-semibold text-gray-800">AI Assistant</h1>
                <p className="text-sm text-gray-500">Guest mode - Access to public documents only</p>
              </div>
            </div>
            <div className="ml-4">
              {!user && (
                <Link
                  href="/login"
                  className="px-4 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 whitespace-nowrap"
                >
                  Log in for full access
                </Link>
              )}
              {user && (
                <Link
                  href="/dashboard/chat"
                  className="px-4 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 whitespace-nowrap"
                >
                  Go to dashboard
                </Link>
              )}
            </div>
          </div>
        </div>

        {/* Example query button */}
        <div className="px-4 py-2 bg-gray-50 border-b">
          <button
            onClick={handleExampleQuery}
            className="text-sm text-primary-600 hover:text-primary-800 transition-colors flex items-center"
          >
            <span className="material-symbols-outlined mr-1 text-sm">lightbulb</span>
            Try an example query: "Can you tell me about my medical condition and treatment options?"
          </button>
        </div>

        {/* Chat messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${
                message.role === 'user' ? 'justify-end' : 'justify-start'
              }`}
            >
              <div
                className={`max-w-3/4 rounded-lg p-3 ${
                  message.role === 'user'
                    ? 'bg-primary-100 text-primary-800'
                    : 'bg-gray-100 text-gray-800'
                }`}
              >
                <div className="text-sm whitespace-pre-wrap">{message.content}</div>
                <div className="text-xs text-gray-500 mt-1">
                  {message.timestamp.toLocaleTimeString()}
                </div>
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-gray-100 rounded-lg p-3">
                <div className="flex space-x-2 items-center">
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Chat input */}
        <div className="p-4 border-t">
          <form onSubmit={handleSubmit} className="flex space-x-2">
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your message..."
              className="flex-1 px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              disabled={isLoading}
            />
            <button
              type="submit"
              className="px-4 py-2 bg-primary-600 text-white rounded-full hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 disabled:opacity-50"
              disabled={isLoading || !input.trim()}
            >
              <span className="material-symbols-outlined">send</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  )
} 