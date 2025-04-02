'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

export default function UseCases() {
  return (
    <div className="min-h-screen w-full max-w-[1200px] mx-auto font-sans bg-gradient-to-b from-white to-gray-50">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="py-8 md:py-12 px-4 md:px-8 text-center"
      >
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Use Cases</h1>
        <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
          Discover how AIFAQ is transforming industries with AI-powered solutions
        </p>
      </motion.div>

      {/* Use Cases Grid */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4 md:px-8 pb-12"
        variants={staggerContainer}
        initial="initial"
        animate="animate"
      >
        {/* Hyperledger Fabric Case */}
        <motion.div
          variants={fadeInUp}
          className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow duration-300"
        >
          <div className="relative h-48 w-full">
            <Image
              src="/assets/hyper.png"
              alt="Hyperledger Logo"
              fill
              className="object-contain p-4"
            />
          </div>
          <div className="p-6 md:p-8">
            <h2 className="text-2xl font-bold mb-4 text-primary-600">Revolutionizing Hyperledger Fabric Development</h2>
            <h3 className="text-xl font-semibold mb-4">AI-Powered Assistance for Blockchain Developers</h3>
            <p className="text-gray-600 mb-6">
              In the fast-evolving landscape of blockchain technology, developers building on Hyperledger Fabric often face steep learning curves, complex deployments, and intricate smart contract implementations. AIFAQ, an advanced AI-driven FAQ and chatbot solution, is here to streamline the process and empower developers, enterprises, and researchers with instant, intelligent support.
            </p>
            <div className="space-y-4">
              <h4 className="font-semibold text-lg">Key Features:</h4>
              <ul className="space-y-3">
                {[
                  {
                    title: "Enterprise-Grade Assistance",
                    description: "Whether you're building PoCs or production-grade blockchain solutions, AIFAQ ensures smooth, error-free deployment with AI-driven insights."
                  },
                  {
                    title: "Seamless Integration",
                    description: "AIFAQ is designed to integrate effortlessly with Hyperledger Fabric environments, providing developers with real-time guidance on configurations, deployment strategies, and troubleshooting."
                  },
                  {
                    title: "Natural Language Query Support",
                    description: "Get instant answers to technical queries, smart contract development issues, and best practices without sifting through extensive documentation."
                  },
                  {
                    title: "Smart Recommendations",
                    description: "Receive proactive suggestions for optimizing chaincode, network topology, and security implementations."
                  }
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="material-symbols-outlined text-primary-600 mr-2 mt-1">check_circle</span>
                    <div>
                      <h5 className="font-medium">{item.title}</h5>
                      <p className="text-gray-600 text-sm">{item.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Founders Institute Case */}
        <motion.div
          variants={fadeInUp}
          className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow duration-300"
        >
          <div className="relative h-48 w-full">
            <Image
              src="/assets/founder_institute_logo.webp"
              alt="Founders Institute Logo"
              fill
              className="object-contain p-4"
            />
          </div>
          <div className="p-6 md:p-8">
            <h2 className="text-2xl font-bold mb-4 text-primary-600">AIFAQ for Founders Institute</h2>
            <h3 className="text-xl font-semibold mb-4">Empowering Startups with AI-Driven Insights</h3>
            <p className="text-gray-600 mb-6">
              Entrepreneurs in the Founders Institute program face numerous challenges, from refining their business models to securing investment and scaling operations. AIFAQ is a game-changing AI assistant designed to provide instant, reliable, and data-driven insights to startup founders, helping them navigate the complexities of launching and growing their ventures.
            </p>
            <div className="space-y-4">
              <h4 className="font-semibold text-lg">How AIFAQ Helps Startup Founders:</h4>
              <ul className="space-y-3">
                {[
                  {
                    title: "AI-Powered Mentorship",
                    description: "Complements traditional mentorship with 24/7 access to expert knowledge tailored for early-stage startups."
                  },
                  {
                    title: "Business Model Validation",
                    description: "Get AI-powered feedback on your business model, ensuring product-market fit and long-term sustainability."
                  },
                  {
                    title: "Fundraising Insights",
                    description: "Understand investor expectations, craft compelling pitch decks, and refine your fundraising strategy with AI-driven recommendations."
                  },
                  {
                    title: "Go-To-Market Strategy",
                    description: "Gain real-time suggestions on market entry, customer segmentation, and competitive positioning."
                  },
                  {
                    title: "Operational Excellence",
                    description: "Learn best practices for team building, lean startup methodologies, and scaling your business efficiently."
                  }
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="material-symbols-outlined text-primary-600 mr-2 mt-1">check_circle</span>
                    <div>
                      <h5 className="font-medium">{item.title}</h5>
                      <p className="text-gray-600 text-sm">{item.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Back to Home Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center pb-12"
      >
        <Link
          href="/"
          className="inline-flex items-center px-6 py-3 bg-primary-600 text-white rounded-md hover:bg-primary-700 transition-all duration-300 transform hover:-translate-y-1 shadow-md hover:shadow-lg"
        >
          <span className="material-symbols-outlined mr-2">arrow_back</span>
          Back to Home
        </Link>
      </motion.div>
    </div>
  )
} 