'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import Image from 'next/image'
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'

export default function Footer() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <footer className="bg-black shadow-md px-6 py-8 font-bold text-lg">
      <div className="max-w-7xl mx-auto flex flex-col items-center space-y-6">

        <div className="w-24 h-auto shadow-md">
          <Link href="/">
            <Image
              src="/images/spin2.jpeg"
              alt="Logo"
              width={100}
              height={40}
              className="object-contain mb-8"
              priority
            />
          </Link>
        </div>


        <div className="hidden md:flex space-x-6 items-center mt-16">
          <Link href="/features" className="text-white hover:text-blue-600 hover:border-b-2 ">Features</Link>
          <Link href="/about" className="text-white hover:text-blue-600 hover:border-b-2 ">About</Link>
          <Link href="/customers" className="text-white hover:text-blue-600 hover:border-b-2">Customers</Link>
          <Link href="/help" className="text-white hover:text-blue-600 hover:border-b-2 ">Help</Link>
        </div>

        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden flex flex-col items-center space-y-4">
            <Link href="/features" className="text-white hover:text-blue-600 ">Features</Link>
            <Link href="/about" className="text-white hover:text-blue-600">About</Link>
            <Link href="/customers" className="text-white hover:text-blue-600">Customers</Link>
            <Link href="/help" className="text-white hover:text-blue-600">Help</Link>
          </div>
        )}

        <div className="flex space-x-6 text-white justify-center text-2xl">
          <a href="https://facebook.com" target="_blank" className="hover:text-blue-600">
            <FaFacebook />
          </a>
          <a href="https://twitter.com" target="_blank"  className="hover:text-blue-600">
            <FaTwitter />
          </a>
          <a href="https://instagram.com" target="_blank"  className="hover:text-blue-600">
            <FaInstagram />
          </a>
        </div>
              <p className="text-xl sm:text-lg md:text-xl text-white mt-16 mb-4 font-semibold">
                Lorem ipsum dolor sit amet
      </p>

      </div>
    </footer>
  )
}
