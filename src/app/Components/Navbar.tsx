'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import Image from 'next/image'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  return (
    <nav className="shadow-md px-6 py-4 font-bold text-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        
        {/* Logo - Smaller Size */}
        <div className="w-24 h-auto"> {/* w-32 → w-24 */}
          <Link href="/">
            <Image
              src="/images/spin2.jpeg"
              alt="Logo"
              width={50} 
              height={26}// 40 → 30
              priority
              className="object-contain"
            />
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 items-center">
          <Link href="/features" className="text-blue-600 hover:text-black transition-colors">Features</Link>
          <Link href="/about" className="text-blue-600 hover:text-black transition-colors">About</Link>
          <Link href="/customers" className="text-blue-600 hover:text-black transition-colors">Customers</Link>
          <Link href="/help" className="text-blue-600 hover:text-black transition-colors">Help</Link>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-black transition">
            Cost for Free
          </button>
        </div>

        {/* Mobile Toggle Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-4 flex flex-col space-y-4 px-4">
          <Link href="/features" className="text-blue-600 font-bold hover:text-black transition-colors">Features</Link>
          <Link href="/about" className="text-blue-600 font-bold hover:text-black transition-colors">About</Link>
          <Link href="/customers" className="text-blue-600 font-bold hover:text-black transition-colors">Customers</Link>
          <Link href="/help" className="text-blue-600 font-bold hover:text-black transition-colors">Help</Link>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-black transition w-fit">
            Cost for Free
          </button>
        </div>
      )}
    </nav>
  )
}
