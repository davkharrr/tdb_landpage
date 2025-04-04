"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, Search } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-end h-10 items-center">
            <div className="flex space-x-4 text-xs">
              <Link href="#" className="text-gray-600 hover:text-blue-900">
                БИДНИЙ ТУХАЙ
              </Link>
              <Link href="#" className="text-gray-600 hover:text-blue-900">
                ҮЙЛЧИЛГЭЭ
              </Link>
              <Link href="#" className="text-gray-600 hover:text-blue-900">
                ХӨРӨНГӨ БАРИА
              </Link>
              <Link href="#" className="text-gray-600 hover:text-blue-900">
                ТУСЛАМЖ
              </Link>
              <div className="relative ml-4">
                <select className="appearance-none bg-transparent pr-8 text-xs text-blue-500 font-medium focus:outline-none">
                  <option>MONGOLIA</option>
                  <option>ENGLISH</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-blue-500">
                  <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <Image src="/images/logo-tdb.svg" alt="TDB Logo" width={120} height={40} className="h-8 w-auto" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:ml-6 md:flex md:space-x-8">
            {["Хөрөнгө оруулалт", "Судалгаа", "Мэдээ", "Боловсрол"].map((item) => (
              <Link
                key={item}
                href="#"
                className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-700 hover:text-blue-900 hover:border-blue-900"
              >
                {item}
              </Link>
            ))}
            <button className="text-gray-700">
              <Search className="h-5 w-5" />
            </button>
          </nav>

          <div className="hidden md:ml-6 md:flex md:items-center space-x-4">
            <Link href="#" className="text-blue-900 font-medium">
              Нэвтрэх
            </Link>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md text-sm font-medium">Данс нээх</button>
          </div>

          {/* Mobile header */}
          <div className="flex items-center md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-900 hover:bg-gray-100 focus:outline-none"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              <Menu className="block h-6 w-6" aria-hidden="true" />
            </button>
          </div>

          {/* Mobile menu, show/hide based on menu state */}
          {isMenuOpen && (
            <div className="absolute top-16 left-0 w-full bg-white shadow-lg z-50 md:hidden">
              <div className="pt-2 pb-3 space-y-1">
                {["Хөрөнгө оруулалт", "Судалгаа", "Мэдээ", "Боловсрол"].map((item) => (
                  <Link
                    key={item}
                    href="#"
                    className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-700 hover:text-blue-900 hover:bg-gray-50 hover:border-blue-900"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item}
                  </Link>
                ))}
                <div className="mt-4 pl-3 pr-4 space-y-2">
                  <Link href="#" className="block text-blue-900 font-medium">
                    Нэвтрэх
                  </Link>
                  <button className="w-full bg-blue-500 text-white px-4 py-2 rounded-md text-sm font-medium">
                    Данс нээх
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}

