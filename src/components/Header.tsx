'use client'

import { useState } from 'react'
import { Phone, Menu, X, ChevronDown } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { cities } from '@/lib/cities'
import { popularRoutes } from '@/lib/routes'

interface NavLink {
  label: string
  href: string
}

const cityLinks: NavLink[] = cities.map((c) => ({ label: c.name, href: `/taxi-${c.slug}` }))

const airportLinks: NavLink[] = [
  { label: 'Tous les aéroports', href: '/taxi-aeroport' },
  { label: 'Aéroport Orly', href: '/taxi-orly' },
  { label: 'Aéroport Roissy CDG', href: '/taxi-cdg' },
  { label: 'Gare Massy TGV', href: '/taxi-gare-massy-tgv' },
]

const serviceLinks: NavLink[] = [
  { label: 'Conventionné CPAM', href: '/taxi-conventionne-cpam-91' },
  { label: 'Taxi entreprise', href: '/taxi-entreprise' },
  { label: 'École Polytechnique', href: '/taxi-ecole-polytechnique' },
  { label: 'Paris-Saclay', href: '/taxi-paris-saclay' },
  { label: 'PMR / mobilité réduite', href: '/taxi-pmr-mobilite-reduite' },
  { label: 'Tarifs', href: '/tarifs' },
]

const routeLinks: NavLink[] = popularRoutes.map((r) => ({ label: `${r.from} → ${r.to}`, href: `/${r.slug}` }))

const menus: { label: string; links: NavLink[]; wide?: boolean }[] = [
  { label: 'Villes', links: cityLinks, wide: true },
  { label: 'Aéroports & Gares', links: airportLinks },
  { label: 'Services', links: serviceLinks },
  { label: 'Trajets', links: routeLinks, wide: true },
]

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const closeMenu = () => setIsMenuOpen(false)

  return (
    <header className="bg-white border-b-2 sm:border-b-4 border-yellow-400 sticky top-0 z-50">
      <div className="container mx-auto px-3 sm:px-4">
        <div className="flex items-center justify-between py-2 sm:py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 sm:gap-3 shrink-0">
            <Image src="/logo.webp" alt="TAXI Pro 91" width={356} height={124} className="h-10 sm:h-14 w-auto" priority />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-5">
            <Link href="/" className="text-gray-700 hover:text-yellow-600 font-medium">Accueil</Link>

            {menus.map((menu) => (
              <div key={menu.label} className="relative group">
                <button className="text-gray-700 hover:text-yellow-600 font-medium flex items-center gap-1">
                  {menu.label}
                  <ChevronDown className="w-4 h-4" />
                </button>
                <div
                  className={`absolute top-full left-0 pt-2 ${menu.wide ? 'w-[420px]' : 'w-56'} opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all`}
                >
                  <div className={`bg-white rounded-lg shadow-lg border border-gray-200 p-2 ${menu.wide ? 'grid grid-cols-2 gap-1' : ''}`}>
                    {menu.links.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="block px-3 py-2 text-sm text-gray-700 rounded hover:bg-yellow-50 hover:text-yellow-600"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ))}

            <Link href="/blog" className="text-gray-700 hover:text-yellow-600 font-medium">Blog</Link>
            <Link href="/contact" className="text-gray-700 hover:text-yellow-600 font-medium">Contact</Link>
          </nav>

          {/* Phone CTA - visible partout */}
          <a
            href="tel:+33180859191"
            className="flex items-center gap-1.5 sm:gap-2 lg:gap-3 bg-yellow-400 hover:bg-yellow-500 text-black font-bold text-sm sm:text-base lg:text-lg px-2.5 sm:px-4 lg:px-5 py-2 sm:py-2.5 lg:py-3 rounded-lg whitespace-nowrap ml-auto lg:ml-0"
            aria-label="Appeler 01 80 85 91 91"
          >
            <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
            <span>01 80 85 91 91</span>
          </a>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 ml-1 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Menu"
            aria-expanded={isMenuOpen}
          >
            <div className="relative w-6 h-6">
              <Menu className={`w-6 h-6 absolute transition-all duration-300 ${isMenuOpen ? 'opacity-0 rotate-90' : 'opacity-100 rotate-0'}`} />
              <X className={`w-6 h-6 absolute transition-all duration-300 ${isMenuOpen ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-90'}`} />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Navigation - Overlay */}
      <div
        className={`lg:hidden fixed inset-0 top-[52px] bg-white z-40 overflow-y-auto transition-all duration-300 ease-out ${
          isMenuOpen
            ? 'opacity-100 translate-y-0 pointer-events-auto'
            : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}
      >
        <nav className="flex flex-col gap-1 p-4 pb-24">
          <Link href="/" className="text-gray-900 font-semibold py-3 px-3 hover:bg-gray-50 rounded-lg" onClick={closeMenu}>
            Accueil
          </Link>

          {menus.map((menu) => (
            <div key={menu.label} className="py-3 px-3 border-t border-gray-100">
              <p className="text-gray-500 text-sm font-medium mb-3">{menu.label}</p>
              <div className="grid grid-cols-2 gap-2">
                {menu.links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-gray-700 text-sm py-2.5 px-3 bg-gray-50 rounded-lg hover:bg-yellow-50"
                    onClick={closeMenu}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}

          <Link href="/blog" className="text-gray-900 font-semibold py-3 px-3 border-t border-gray-100 hover:bg-gray-50 rounded-lg" onClick={closeMenu}>
            Blog
          </Link>
          <Link href="/contact" className="text-gray-900 font-semibold py-3 px-3 hover:bg-gray-50 rounded-lg" onClick={closeMenu}>
            Contact
          </Link>

          <a
            href="tel:+33180859191"
            className="flex items-center justify-center gap-2 bg-yellow-400 hover:bg-yellow-500 text-black font-bold px-4 py-4 rounded-lg mt-4"
          >
            <Phone className="w-5 h-5" />
            01 80 85 91 91
          </a>
        </nav>
      </div>
    </header>
  )
}
