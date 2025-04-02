import type { Metadata } from 'next'
import { Open_Sans, Lato } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'

const openSans = Open_Sans({ 
  subsets: ['latin'],
  variable: '--font-opensans',
})

const lato = Lato({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-lato',
})

export const metadata: Metadata = {
  title: 'AIFAQ - Private Data, Secure with Custom Chatbots',
  description: 'Enterprise-ready AI solutions with personalized chatbots and secure data integration.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${openSans.variable} ${lato.variable}`}>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
          rel="stylesheet"
        />
      </head>
      <body className={`${openSans.className} bg-gradient-to-b from-white to-gray-50`}>
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
      </body>
    </html>
  )
} 