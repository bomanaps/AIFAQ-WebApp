'use client'

import { useState, useRef, useEffect } from 'react'
import { useAuth } from '@/context/AuthContext'

interface Message {
  id: string
  role: 'user' | 'assistant'
  content: string
  timestamp: Date
}

export default function ChatPage() {
  const { user } = useAuth()
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      role: 'assistant',
      content: `Hello! I'm your AI assistant. ${
        user
          ? 'I have access to both public documents and your private documents. How can I help you today?'
          : 'I have access to public documents only. For personalized help with your own documents, please login. How can I help you today?'
      }`,
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
          content: generateMockResponse(input, user !== null),
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

  const generateMockResponse = (query: string, hasPrivateAccess: boolean): string => {
    // Handle example query from screenshots
    if (query.toLowerCase().includes('medical condition') || query.toLowerCase().includes('treatment')) {
      if (hasPrivateAccess) {
        return "Based on your private medical records, I found information about your condition. Your doctor has recommended the following treatment plan...\n\nNote: This is a simulated response that would contain actual private medical information if this were a real implementation with access to your private documents.";
      } else {
        return "I'm sorry, I don't have access to your medical records as you're not logged in. Please login to access private documents.";
      }
    }

    // Mock implementation - would be replaced with actual AI response
    if (query.toLowerCase().includes('confidential') && !hasPrivateAccess) {
      return "I'm sorry, I don't have access to confidential information because you're not logged in. Please login to access private documents.";
    }

    if (query.toLowerCase().includes('help')) {
      return "I can answer questions based on the knowledge base. Try asking about specific topics or documents.";
    }

    if (hasPrivateAccess) {
      return `Based on the ${
        user?.role === 'admin' ? 'complete' : 'personal'
      } knowledge base, I found the following information for your query: "${query}"\n\nThis is a simulated response that would be generated from your actual AI backend using both public and private documents.`;
    } else {
      return `Based on the public knowledge base, I found the following information for your query: "${query}"\n\nThis is a simulated response that would be generated from your actual AI backend using only public documents.`;
    }
  }

  // Example query handler
  const handleExampleQuery = () => {
    setInput("Can you tell me about my medical condition and treatment options?");
    // Focus the input to make it more obvious
    inputRef.current?.focus();
  };

  return (
    <div className="h-[calc(100vh-6rem)] flex flex-col bg-white rounded-lg shadow-lg">
      {/* Chat header */}
      <div className="p-4 border-b bg-gradient-to-r from-primary-50 to-white">
        <div className="flex items-center">
          <div className="h-10 w-10 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0">
            <span className="material-symbols-outlined text-primary-600">smart_toy</span>
          </div>
          <div className="ml-4 flex-1 min-w-0">
            <h1 className="text-xl font-semibold text-gray-800">AI Assistant</h1>
            <p className="text-sm text-gray-500 truncate">
              {user
                ? `Logged in as ${user.email} (${user.role}). You have access to both public and private documents.`
                : 'Guest mode - Access to public documents only.'}
            </p>
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
  )
} 