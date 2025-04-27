'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { useAuth } from '@/context/AuthContext'

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { user, logout } = useAuth()
  const router = useRouter()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleLogout = async () => {
    await logout()
    router.push('/')
    setIsMenuOpen(false)
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/80 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="flex items-center">
            <div className="flex flex-col mr-4">
              <span className="text-2xl font-bold text-primary-700 font-lato tracking-tight">AIFAQ</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {!user ? (
              <>
                <Link
                  href="/chat"
                  className={`relative text-gray-700 hover:text-primary-600 transition-colors duration-300 ${
                    scrolled ? 'text-gray-700' : 'text-white'
                  }`}
                >
                  Try Chat
                </Link>
                <Link
                  href="/login"
                  className="px-4 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700 transition-colors duration-300"
                >
                  Login
                </Link>
              </>
            ) : (
              <>
                <Link
                  href="/dashboard"
                  className={`relative text-gray-700 hover:text-primary-600 transition-colors duration-300 ${
                    scrolled ? 'text-gray-700' : 'text-white'
                  }`}
                >
                  Dashboard
                </Link>
                <Link
                  href="/dashboard/chat"
                  className={`relative text-gray-700 hover:text-primary-600 transition-colors duration-300 ${
                    scrolled ? 'text-gray-700' : 'text-white'
                  }`}
                >
                  My Chat
                </Link>
                <button
                  onClick={handleLogout}
                  className="px-4 py-2 bg-white text-primary-600 rounded-md hover:bg-gray-100 transition-colors duration-300"
                >
                  Logout
                </button>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className="material-symbols-outlined">
              {isMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-white shadow-lg"
          >
            <div className="container mx-auto px-4 py-4">
              <div className="flex flex-col space-y-4">
                {!user ? (
                  <>
                    <Link
                      href="/chat"
                      className="text-gray-700 hover:text-primary-600 transition-colors duration-300"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Try Chat
                    </Link>
                    <Link
                      href="/login"
                      className="px-4 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700 transition-colors duration-300 text-center"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Login
                    </Link>
                  </>
                ) : (
                  <>
                    <Link
                      href="/dashboard"
                      className="text-gray-700 hover:text-primary-600 transition-colors duration-300"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Dashboard
                    </Link>
                    <Link
                      href="/dashboard/chat"
                      className="text-gray-700 hover:text-primary-600 transition-colors duration-300"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      My Chat
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="px-4 py-2 bg-white text-primary-600 border border-primary-600 rounded-md hover:bg-gray-100 transition-colors duration-300 text-center"
                    >
                      Logout
                    </button>
                  </>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
} 