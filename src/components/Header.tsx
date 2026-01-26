'use client'

import { useState } from 'react'
import { Phone, Menu, X } from 'lucide-react'
import Link from 'next/link'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white border-b-2 sm:border-b-4 border-yellow-400 sticky top-0 z-50">
      <div className="container mx-auto px-3 sm:px-4">
        <div className="flex items-center justify-between py-2 sm:py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 sm:gap-3">
            <div className="w-9 h-9 sm:w-14 sm:h-14 bg-yellow-400 rounded-lg flex items-center justify-center">
              <span className="text-black font-bold text-lg sm:text-2xl">T</span>
            </div>
            <div>
              <div className="font-bold text-base sm:text-2xl text-gray-900">Taxi Pros 91</div>
              <div className="text-gray-600 text-xs sm:text-sm hidden sm:block">Essonne - 24h/24</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            <Link href="/" className="text-gray-700 hover:text-yellow-600 font-medium">
              Accueil
            </Link>
            <Link href="/#services" className="text-gray-700 hover:text-yellow-600 font-medium">
              Services
            </Link>
            <div className="relative group">
              <button className="text-gray-700 hover:text-yellow-600 font-medium flex items-center gap-1">
                Nos zones
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                <Link href="/taxi-massy" className="block px-4 py-2 text-gray-700 hover:bg-yellow-50 hover:text-yellow-600">
                  Taxi Massy
                </Link>
                <Link href="/taxi-palaiseau" className="block px-4 py-2 text-gray-700 hover:bg-yellow-50 hover:text-yellow-600">
                  Taxi Palaiseau
                </Link>
                <Link href="/taxi-ballainvilliers" className="block px-4 py-2 text-gray-700 hover:bg-yellow-50 hover:text-yellow-600">
                  Taxi Ballainvilliers
                </Link>
                <Link href="/taxi-longjumeau" className="block px-4 py-2 text-gray-700 hover:bg-yellow-50 hover:text-yellow-600">
                  Taxi Longjumeau
                </Link>
                <Link href="/taxi-antony" className="block px-4 py-2 text-gray-700 hover:bg-yellow-50 hover:text-yellow-600">
                  Taxi Antony
                </Link>
              </div>
            </div>
            <Link href="/contact" className="text-gray-700 hover:text-yellow-600 font-medium">
              Contact
            </Link>
          </nav>

          {/* Phone - Always visible on desktop */}
          <a
            href="tel:+33680036463"
            className="hidden lg:flex items-center gap-3 bg-yellow-400 hover:bg-yellow-500 text-black font-bold text-lg px-5 py-3 rounded-lg"
          >
            <Phone className="w-5 h-5" />
            06 80 03 64 63
          </a>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-1"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-3 border-t border-gray-200">
            <nav className="flex flex-col gap-1">
              <Link
                href="/"
                className="text-gray-700 font-medium py-2 px-2 hover:bg-gray-50 rounded"
                onClick={() => setIsMenuOpen(false)}
              >
                Accueil
              </Link>
              <Link
                href="/#services"
                className="text-gray-700 font-medium py-2 px-2 hover:bg-gray-50 rounded"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>

              {/* Zones submenu */}
              <div className="py-2 px-2">
                <p className="text-gray-500 text-sm font-medium mb-2">Nos zones :</p>
                <div className="grid grid-cols-2 gap-2">
                  <Link
                    href="/taxi-massy"
                    className="text-gray-700 text-sm py-2 px-3 bg-gray-50 rounded hover:bg-yellow-50"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Massy
                  </Link>
                  <Link
                    href="/taxi-palaiseau"
                    className="text-gray-700 text-sm py-2 px-3 bg-gray-50 rounded hover:bg-yellow-50"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Palaiseau
                  </Link>
                  <Link
                    href="/taxi-ballainvilliers"
                    className="text-gray-700 text-sm py-2 px-3 bg-gray-50 rounded hover:bg-yellow-50"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Ballainvilliers
                  </Link>
                  <Link
                    href="/taxi-longjumeau"
                    className="text-gray-700 text-sm py-2 px-3 bg-gray-50 rounded hover:bg-yellow-50"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Longjumeau
                  </Link>
                  <Link
                    href="/taxi-antony"
                    className="text-gray-700 text-sm py-2 px-3 bg-gray-50 rounded hover:bg-yellow-50 col-span-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Antony
                  </Link>
                </div>
              </div>

              <Link
                href="/contact"
                className="text-gray-700 font-medium py-2 px-2 hover:bg-gray-50 rounded"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>

              <a
                href="tel:+33680036463"
                className="flex items-center justify-center gap-2 bg-yellow-400 text-black font-bold px-4 py-3 rounded-lg mt-2"
              >
                <Phone className="w-5 h-5" />
                06 80 03 64 63
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
