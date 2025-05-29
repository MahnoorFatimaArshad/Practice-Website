'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div>
            <Link href="/">
              <Image
                src="/images/spin2.jpeg"
                alt="Logo"
                width={40}
                height={40}
                className="rounded-full"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/features" className="text-gray-600 hover:text-blue-600">Features</Link>
            <Link href="/about" className="text-gray-600 hover:text-blue-600">About</Link>
            <Link href="/customers" className="text-gray-600 hover:text-blue-600">Customers</Link>
            <Link href="/help" className="text-gray-600 hover:text-blue-600">Help</Link>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4">
            <div className="flex flex-col space-y-4">
              <Link href="/features" className="text-gray-600 hover:text-blue-600 py-2">Features</Link>
              <Link href="/about" className="text-gray-600 hover:text-blue-600 py-2">About</Link>
              <Link href="/customers" className="text-gray-600 hover:text-blue-600 py-2">Customers</Link>
              <Link href="/help" className="text-gray-600 hover:text-blue-600 py-2">Help</Link>
              <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 w-full">
                Get Started
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar
