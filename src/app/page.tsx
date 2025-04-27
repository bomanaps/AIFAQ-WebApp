'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useAuth } from '@/context/AuthContext'

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

export default function Home() {
  const { user } = useAuth()
  
  return (
    <div className="min-h-screen w-full max-w-[1200px] mx-auto font-sans bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <section className="py-8 md:py-16 px-4 md:px-8 flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/2 mb-8 md:mb-0 pr-0 md:pr-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6 leading-tight">Private Data, Secure with Custom Chatbots</h2>
            <p className="text-base md:text-lg mb-6 md:mb-8 text-gray-700">Enterprise-grade AI chatbots that keep your data secure while providing personalized responses. Integrate with your existing systems and workflows.</p>
            <div className="flex flex-wrap gap-4">
              {user ? (
                <>
                  <Link
                    href="/dashboard/chat"
                    className="px-4 md:px-6 py-2 md:py-3 bg-primary-600 text-white rounded-md hover:bg-primary-700 transition-all duration-300 transform hover:-translate-y-1 shadow-md hover:shadow-lg text-sm md:text-base inline-flex items-center"
                  >
                    <span className="material-symbols-outlined mr-2 text-sm md:text-base">chat</span>
                    Start Chat
                  </Link>
                  <Link
                    href="/dashboard"
                    className="px-4 md:px-6 py-2 md:py-3 bg-white border border-primary-600 text-primary-600 rounded-md hover:bg-primary-50 transition-all duration-300 transform hover:-translate-y-1 shadow-sm hover:shadow-md text-sm md:text-base inline-flex items-center"
                  >
                    <span className="material-symbols-outlined mr-2 text-sm md:text-base">dashboard</span>
                    Dashboard
                  </Link>
                </>
              ) : (
                <>
                  <Link
                    href="/chat"
                    className="px-4 md:px-6 py-2 md:py-3 bg-primary-600 text-white rounded-md hover:bg-primary-700 transition-all duration-300 transform hover:-translate-y-1 shadow-md hover:shadow-lg text-sm md:text-base inline-flex items-center"
                  >
                    <span className="material-symbols-outlined mr-2 text-sm md:text-base">chat</span>
                    Try as Guest
                  </Link>
                  <Link
                    href="/login"
                    className="px-4 md:px-6 py-2 md:py-3 bg-white border border-primary-600 text-primary-600 rounded-md hover:bg-primary-50 transition-all duration-300 transform hover:-translate-y-1 shadow-sm hover:shadow-md text-sm md:text-base inline-flex items-center"
                  >
                    <span className="material-symbols-outlined mr-2 text-sm md:text-base">login</span>
                    Login
                  </Link>
                </>
              )}
            </div>
          </motion.div>
        </div>
        <div className="w-full md:w-1/2 flex justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative w-full max-w-md"
          >
            <div className="absolute -z-10 w-full h-full bg-primary-100 rounded-full blur-3xl opacity-20 transform -translate-x-4 translate-y-4"></div>
            <div className="bg-white p-4 md:p-6 rounded-xl shadow-xl border border-gray-200 transform transition-transform hover:-translate-y-2 duration-300">
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-primary-600 flex items-center justify-center text-white">
                  <span className="material-symbols-outlined text-sm md:text-base">smart_toy</span>
                </div>
                <div className="ml-3">
                  <h3 className="font-semibold text-sm md:text-base">AIFAQ Assistant</h3>
                  <p className="text-xs text-gray-500">Secured & Personalized</p>
                </div>
              </div>
              <div className="space-y-2 md:space-y-3">
                <div className="bg-gray-100 p-2 md:p-3 rounded-lg rounded-tl-none w-4/5">
                  <p className="text-xs md:text-sm">How can I help with your enterprise data needs today?</p>
                </div>
                <div className="bg-primary-50 p-2 md:p-3 rounded-lg rounded-tr-none w-4/5 ml-auto">
                  <p className="text-xs md:text-sm">I need a secure chatbot for our customer service team.</p>
                </div>
                <div className="bg-gray-100 p-2 md:p-3 rounded-lg rounded-tl-none w-4/5">
                  <p className="text-xs md:text-sm">I can help with that! AIFAQ provides enterprise-grade secure chatbots with data integration...</p>
                </div>
              </div>
              <div className="mt-4 flex border-t pt-4">
                <input
                  type="text"
                  placeholder="Ask a question..."
                  className="flex-1 p-2 text-xs md:text-sm border rounded-l-md focus:outline-none focus:ring-2 focus:ring-primary-300"
                />
                <button className="bg-primary-600 text-white p-2 rounded-r-md hover:bg-primary-700 transition-colors">
                  <span className="material-symbols-outlined text-sm">send</span>
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-8 md:py-12 px-4 md:px-8 bg-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 md:mb-12"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Features</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">Our AI-powered platform offers enterprise-grade security with customizable chatbot solutions.</p>
        </motion.div>
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-8"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {[
            {
              title: "Personalized AI",
              description: "Custom AI solutions trained on your specific business data and requirements.",
              icon: "psychology"
            },
            {
              title: "Secure Chatbots",
              description: "Enterprise-grade security protocols to protect sensitive data and communications.",
              icon: "security"
            },
            {
              title: "Enterprise Data Integration",
              description: "Seamlessly connect with your existing systems and databases for comprehensive solutions.",
              icon: "integration_instructions"
            }
          ].map((feature, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="p-6 border border-gray-200 rounded-xl hover:shadow-md transition-all duration-300 hover:-translate-y-2 bg-white"
            >
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <span className="material-symbols-outlined text-primary-600">{feature.icon}</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-8 md:mt-16 bg-gray-50 p-4 md:p-8 rounded-xl overflow-x-auto"
        >
          <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-center">AIFAQ vs. Alternatives</h3>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[600px]">
              <thead>
                <tr className="bg-gray-100">
                  <th className="p-4 text-left">Features</th>
                  <th className="p-4 text-center">AIFAQ</th>
                  <th className="p-4 text-center">Competitors</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { feature: "Private Data Handling", aiFAQ: true, competitors: false },
                  { feature: "Enterprise Integration", aiFAQ: true, competitors: "Limited" },
                  { feature: "Customizable Solutions", aiFAQ: true, competitors: false },
                  { feature: "Linux Foundation Support", aiFAQ: true, competitors: false }
                ].map((row, index) => (
                  <tr key={index} className="border-b border-gray-200 hover:bg-gray-50">
                    <td className="p-4">{row.feature}</td>
                    <td className="p-4 text-center text-green-600">
                      <span className="material-symbols-outlined">check_circle</span>
                    </td>
                    <td className="p-4 text-center">
                      {typeof row.competitors === 'boolean' ? (
                        <span className="material-symbols-outlined text-red-600">cancel</span>
                      ) : (
                        <span className="text-yellow-600">{row.competitors}</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-8 md:py-12 px-4 md:px-8 bg-gray-50">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 md:mb-12"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Pricing Plans</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">Choose the right plan for your business needs.</p>
        </motion.div>
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-8"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {[
            {
              title: "Starter",
              description: "For small businesses and startups",
              price: "299",
              features: [
                "Basic chatbot customization",
                "Standard security protocols",
                "5 user accounts",
                "Enterprise data integration"
              ],
              highlighted: false,
              cta: "Get Started",
              ctaStyle: "outline"
            },
            {
              title: "Professional",
              description: "For growing businesses",
              price: "799",
              features: [
                "Advanced chatbot customization",
                "Enhanced security protocols",
                "20 user accounts",
                "Basic data integration"
              ],
              highlighted: true,
              cta: "Get Started",
              ctaStyle: "solid"
            },
            {
              title: "Enterprise",
              description: "For large organizations",
              price: "Custom",
              features: [
                "Full chatbot customization",
                "Enterprise-grade security",
                "Unlimited user accounts",
                "Full enterprise data integration"
              ],
              highlighted: false,
              cta: "Contact Sales",
              ctaStyle: "outline"
            }
          ].map((plan, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className={`bg-white p-8 rounded-xl border ${
                plan.highlighted ? 'border-2 border-primary-600 shadow-lg' : 'border-gray-200'
              } relative transform transition-all duration-300 hover:-translate-y-2`}
            >
              {plan.highlighted && (
                <div className="absolute top-0 right-0 bg-primary-600 text-white text-xs py-1 px-3 rounded-bl-lg rounded-tr-lg font-semibold">
                  POPULAR
                </div>
              )}
              <h3 className="text-xl font-bold mb-2">{plan.title}</h3>
              <p className="text-gray-600 mb-4">{plan.description}</p>
              <div className="text-3xl font-bold mb-6">
                {plan.price === "Custom" ? "Custom" : `$${plan.price}`}
                {plan.price !== "Custom" && <span className="text-base font-normal text-gray-600">/month</span>}
              </div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center">
                    <span className="material-symbols-outlined text-green-500 mr-2">check_circle</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <button
                className={`w-full py-3 ${
                  plan.ctaStyle === "solid"
                    ? "bg-primary-600 text-white hover:bg-primary-700"
                    : "bg-white border border-primary-600 text-primary-600 hover:bg-primary-50"
                } rounded-md transition-colors duration-300`}
              >
                {plan.cta}
              </button>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-8 md:py-12 px-4 md:px-8 bg-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 md:mb-12"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Have questions? Want to learn more?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">Please feel free to reach out to AIFAQ. Fill in the form below, and we will get back to you as soon as we can.</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <form className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            <div>
              <label className="block mb-2 font-medium">Name (required)</label>
              <input
                type="text"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-300 focus:border-transparent transition-all"
                required
              />
            </div>
            <div>
              <label className="block mb-2 font-medium">Email (required)</label>
              <input
                type="email"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-300 focus:border-transparent transition-all"
                required
              />
            </div>
            <div className="md:col-span-2">
              <label className="block mb-2 font-medium">Message</label>
              <textarea
                rows={4}
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-300 focus:border-transparent transition-all"
              ></textarea>
            </div>
            <div className="md:col-span-2">
              <button
                type="submit"
                className="px-6 py-3 bg-primary-600 text-white rounded-md hover:bg-primary-700 transition-all duration-300 transform hover:-translate-y-1 shadow-md hover:shadow-lg"
              >
                Send Message
              </button>
            </div>
          </form>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-8 md:py-12 px-4 md:px-8 bg-gray-50">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 md:mb-12"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-4">About AIFAQ</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">Meet the team behind AIFAQ's success in revolutionizing enterprise AI solutions.</p>
        </motion.div>
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-8"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {[
            {
              name: "Gianluca Capuzzi",
              role: "CEO & Founder",
              bio: "🚀 PhD in AI | Project Manager | Linux Foundation Innovator",
              description: "With a deep background in AI, blockchain, and enterprise tech, Gianluca leads AIFAQ to revolutionize data-driven AI.",
              image: "/Gianluca.jpg"
            },
            {
              name: "Bobbi Muscara",
              role: "CIO",
              bio: "🎓 Director, Ledger Academy | AI & Blockchain Expert | Tech Leader",
              description: "Bobbi ensures AIFAQ delivers secure, enterprise-ready AI solutions through cutting-edge research and development.",
              image: "/Boobi.webp"
            },
            {
              name: "Peter Chmiel",
              role: "COO",
              bio: "📈 Serial Entrepreneur | AI Business Strategist | Ex-Andersen Consulting",
              description: "Peter drives AIFAQ's business growth, partnerships, and market expansion.",
              image: "/Peter.png"
            }
          ].map((member, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="bg-white p-8 rounded-xl border border-gray-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-2"
            >
              <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gray-100 overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={128}
                  height={128}
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-center mb-2">
                <a 
                  href={
                    member.name === "Gianluca Capuzzi" 
                      ? "https://www.linkedin.com/in/gianluca-capuzzi-04b04994?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                      : member.name === "Bobbi Muscara"
                      ? "https://www.linkedin.com/in/bobbijn?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                      : "https://www.linkedin.com/in/peterchmiel?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary-600 transition-colors"
                >
                  {member.name}
                </a>
              </h3>
              <p className="text-primary-600 text-center mb-2">{member.role}</p>
              <p className="text-gray-600 text-center mb-4">{member.bio}</p>
              <p className="text-gray-700 text-center">{member.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 md:py-12">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">AIFAQ</h3>
              <div className="space-y-2">
                <p className="flex items-center">
                  <span className="material-symbols-outlined mr-2">location_on</span>
                  Princeton, New Jersey
                </p>
                <p className="flex items-center">
                  <span className="material-symbols-outlined mr-2">mail</span>
                  <a href="mailto:Info@aifaq.pro" className="hover:text-primary-400 transition-colors">
                    Info@aifaq.pro
                  </a>
                </p>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Connect With Us</h3>
              <div className="flex space-x-4">
              <a href="https://www.youtube.com/live/dOC4KGYjpJI" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary-400 transition-colors">
  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 576 512" fill="currentColor">
    <path d="M549.7 124.1C538.9 89.5 511.6 62.1 477 51.3C436.6 39 288 39 288 39S139.4 39 99 51.3C64.4 62.1 37.1 89.5 26.3 124.1C14 165.3 14 256 14 256s0 90.7 12.3 131.9c10.8 34.6 38.1 62 72.7 72.8C139.4 473 288 473 288 473s148.6 0 189-12.3c34.6-10.8 61.9-38.1 72.7-72.7C574 346.7 574 256 574 256s0-90.7-12.3-131.9zM232 343V169l142 87-142 87z"/>
  </svg>
</a>


                <a href="https://www.linkedin.com/groups/13199044/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary-400 transition-colors">
  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 3A2 2 0 0 1 21 5V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19V5A2 2 0 0 1 5 3H19M8 17V10H5V17H8M6.5 8.5A1.5 1.5 0 1 0 6.5 5.5A1.5 1.5 0 0 0 6.5 8.5M19 17V13.5C19 11.3 17.2 10 15.3 10C14.2 10 13.4 10.5 13 11H12.9V10H10V17H13V13.8C13 12.6 13.8 12 14.7 12C15.6 12 16 12.5 16 13.3V17H19Z" />
  </svg>
</a>

                <a href="mailto:Info@aifaq.pro" className="text-gray-400 hover:text-primary-400 transition-colors">
                  <span className="material-symbols-outlined text-2xl">mail</span>
                </a>
              </div>
            </div>
          </div>
          <div className="mt-6 md:mt-8 pt-6 md:pt-8 border-t border-gray-800 text-center text-gray-400 text-sm md:text-base">
            <p>© {new Date().getFullYear()} AIFAQ. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
} 