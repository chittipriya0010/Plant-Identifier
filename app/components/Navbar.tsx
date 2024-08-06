"use client";
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Navbar() {
    const pathname = usePathname()

  return (
    <nav className="bg-green-800 text-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="font-bold text-xl">
              PlantID
            </Link>
          </div>
          <div className="flex space-x-4">
          <Link href="/" className={`${pathname === '/' ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white'} px-3 py-2 rounded-md text-sm font-medium`}>
                  Home
                </Link>
                <Link href="/about" className={`${pathname === '/about' ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white'} px-3 py-2 rounded-md text-sm font-medium`}>
                  About
                </Link>
                <Link href="/contact" className={`${pathname === '/contact' ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white'} px-3 py-2 rounded-md text-sm font-medium`}>
                  Contact
                </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}