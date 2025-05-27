'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Navbar from '../Components/Navbar'

export default function HeroSection() {
  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-blue-700 to-white/90 backdrop-blur-md">
        <Navbar />
      </header>

      <section className="bg-gradient-to-r from-blue-700 to-white pt-40 px-6 pb-16">
        <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between">
          
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
              Build Your Dream Website
            </h1>
            <p className="text-white/80 text-lg mb-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut eligendi soluta dignissimos eum, incidunt amet maiores sit cum repellendus ea quas quasi neque totam sed ab voluptatem numquam alias nam.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mt-8">
              <Link href="/get-started">
                <button className="bg-white text-blue-700 px-6 py-3 rounded-xl hover:bg-black hover:text-white transition">
                  Get Started
                </button>
              </Link>
              <Link href="/learn-more">
                <button className="flex items-center gap-2 border border-white text-white px-6 py-3 rounded-xl hover:bg-white hover:text-blue-700 transition">
                  Learn More <ArrowRight size={20} />
                </button>
              </Link>
            </div>
          </div>

          <motion.div
            className="w-full md:w-1/2 mb-10 md:mb-0"
            animate={{ y: [0, 20, 0] }}
            transition={{
              duration: 4,
              ease: 'easeInOut',
              repeat: Infinity,
            }}
          >
            <Image
              src="/images/spin.jpg"
              alt="Travel Image"
              width={600}
              height={400}
              className="mx-auto rounded-xl shadow-lg"
              priority
            />
          </motion.div>
        </div>
      </section>
    </>
  )
}
