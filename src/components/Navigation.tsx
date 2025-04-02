'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

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
          <Link href="/" className="text-2xl font-bold text-primary-700 font-lato">
            AIFAQ
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {[
              { href: '#features', label: 'Features' },
              { href: '#pricing', label: 'Pricing' },
              { href: '#business-cases', label: 'Business Cases' },
              { href: '#about', label: 'About' },
              { href: '#contact', label: 'Contact' }
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`relative text-gray-700 hover:text-primary-600 transition-colors duration-300 ${
                  scrolled ? 'text-gray-700' : 'text-white'
                }`}
              >
                {item.label}
                <motion.span
                  className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-600"
                  whileHover={{ width: '100%' }}
                  transition={{ duration: 0.3 }}
                />
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <button className="px-4 py-2 bg-white border border-primary-600 text-primary-600 rounded-md hover:bg-primary-50 transition-colors duration-300">
              Demo
            </button>
            <button className="px-4 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700 transition-colors duration-300">
              Get Started
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            className={`md:hidden p-2 rounded-lg transition-colors duration-200 ${
              scrolled ? 'text-gray-700' : 'text-white'
            }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className="material-symbols-outlined">
              {isMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden overflow-hidden"
            >
              <div className="py-4 space-y-4">
                {[
                  { href: '#features', label: 'Features' },
                  { href: '#pricing', label: 'Pricing' },
                  { href: '#business-cases', label: 'Business Cases' },
                  { href: '#about', label: 'About' },
                  { href: '#contact', label: 'Contact' }
                ].map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`block px-4 py-2 rounded-lg transition-colors duration-200 ${
                      scrolled ? 'text-gray-700 hover:bg-gray-100' : 'text-white hover:bg-white/10'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
                <div className="px-4 py-2 space-y-2">
                  <button className="w-full px-4 py-2 bg-white border border-primary-600 text-primary-600 rounded-md hover:bg-primary-50 transition-colors duration-300">
                    Demo
                  </button>
                  <button className="w-full px-4 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700 transition-colors duration-300">
                    Get Started
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  )
} 