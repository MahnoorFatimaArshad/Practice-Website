'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Navbar from '../Components/Navbar'

export default function HeroSection() {
  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
        <Navbar />
      </header>

      <section className="relative min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]" />
        
        <div className="relative pt-28 lg:pt-36 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center lg:text-left"
              >
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight">
                  Build Your Dream
                  <span className="text-blue-600"> Website</span>
                </h1>
                <p className="mt-6 text-lg sm:text-xl text-gray-600 max-w-3xl">
                  Create stunning, responsive websites with our powerful tools and templates. 
                  Start building your online presence today.
                </p>
                <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <Link href="/get-started">
                    <motion.button 
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-blue-600 text-white px-8 py-4 rounded-xl text-lg font-medium hover:bg-blue-700 transition-colors"
                    >
                      Get Started
                    </motion.button>
                  </Link>
                  <Link href="/learn-more">
                    <motion.button 
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 bg-white text-gray-900 px-8 py-4 rounded-xl text-lg font-medium border-2 border-gray-200 hover:border-blue-600 hover:text-blue-600 transition-colors"
                    >
                      Learn More <ArrowRight className="w-5 h-5" />
                    </motion.button>
                  </Link>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <motion.div
                  animate={{ y: [0, 15, 0] }}
                  transition={{
                    duration: 4,
                    ease: 'easeInOut',
                    repeat: Infinity,
                  }}
                  className="relative z-10"
                >
                  <Image
                    src="/images/spin.jpg"
                    alt="Hero Image"
                    width={600}
                    height={400}
                    className="rounded-2xl shadow-2xl"
                    priority
                  />
                </motion.div>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl filter blur-3xl -z-10 transform scale-95" />
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

