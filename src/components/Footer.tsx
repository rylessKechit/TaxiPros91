import { Phone, Mail, MapPin, Clock } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { SITE } from '@/lib/site'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer id="contact" className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Identité + NAP */}
          <div>
            <div className="mb-4">
              <Image src="/logo.webp" alt="TAXI Pro 91" width={356} height={124} className="h-14 w-auto" />
            </div>
            <p className="text-gray-300 mb-4">
              Service de taxi en Essonne (91), disponible 24h/24 et 7j/7.
            </p>
            <address className="not-italic text-sm text-gray-400 space-y-1">
              <div className="font-semibold text-gray-200">{SITE.name}</div>
              <div>{SITE.address.street}</div>
              <div>{SITE.address.postalCode} {SITE.address.locality}</div>
              <div className="text-gray-500 text-xs mt-2">
                Zone d&apos;intervention principale : Massy (91300) et toute l&apos;Essonne
              </div>
            </address>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-bold text-lg mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/taxi-orly" className="text-gray-300 hover:text-yellow-400">Taxi aéroport Orly</Link></li>
              <li><Link href="/taxi-cdg" className="text-gray-300 hover:text-yellow-400">Taxi aéroport CDG</Link></li>
              <li><Link href="/taxi-gare-massy-tgv" className="text-gray-300 hover:text-yellow-400">Taxi gare Massy TGV</Link></li>
              <li><Link href="/taxi-conventionne-cpam-91" className="text-gray-300 hover:text-yellow-400">Taxi conventionné CPAM</Link></li>
              <li><Link href="/tarifs" className="text-gray-300 hover:text-yellow-400">Tarifs</Link></li>
              <li><Link href="/contact" className="text-gray-300 hover:text-yellow-400">Contact</Link></li>
            </ul>
          </div>

          {/* Zones */}
          <div>
            <h3 className="font-bold text-lg mb-4">Zones desservies</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/taxi-massy" className="text-gray-300 hover:text-yellow-400">Taxi Massy</Link></li>
              <li><Link href="/taxi-palaiseau" className="text-gray-300 hover:text-yellow-400">Taxi Palaiseau</Link></li>
              <li><Link href="/taxi-antony" className="text-gray-300 hover:text-yellow-400">Taxi Antony</Link></li>
              <li><Link href="/taxi-longjumeau" className="text-gray-300 hover:text-yellow-400">Taxi Longjumeau</Link></li>
              <li><Link href="/taxi-les-ulis" className="text-gray-300 hover:text-yellow-400">Taxi Les Ulis</Link></li>
              <li><Link href="/taxi-saclay" className="text-gray-300 hover:text-yellow-400">Taxi Saclay</Link></li>
              <li><Link href="/taxi-ballainvilliers" className="text-gray-300 hover:text-yellow-400">Taxi Ballainvilliers</Link></li>
              <li><Link href="/taxi-verrieres-le-buisson" className="text-gray-300 hover:text-yellow-400">Taxi Verrières-le-Buisson</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a href={SITE.phone.tel} className="flex items-center gap-3 text-gray-300 hover:text-yellow-400">
                  <Phone className="w-5 h-5 text-yellow-400 shrink-0" />
                  <span className="font-semibold">{SITE.phone.display}</span>
                </a>
              </li>
              <li>
                <a href={`mailto:${SITE.email}`} className="flex items-center gap-3 text-gray-300 hover:text-yellow-400">
                  <Mail className="w-5 h-5 text-yellow-400 shrink-0" />
                  {SITE.email}
                </a>
              </li>
              <li className="flex items-center gap-3 text-gray-300">
                <MapPin className="w-5 h-5 text-yellow-400 shrink-0" />
                {SITE.address.locality}, Essonne (91)
              </li>
              <li className="flex items-center gap-3 text-gray-300">
                <Clock className="w-5 h-5 text-yellow-400 shrink-0" />
                {SITE.hours}
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-sm text-gray-400">
          <p>© {currentYear} {SITE.name}. Tous droits réservés.</p>
          <div className="flex flex-wrap gap-4">
            <Link href="/blog" className="hover:text-yellow-400">Blog</Link>
            <Link href="/plan-du-site" className="hover:text-yellow-400">Plan du site</Link>
            <Link href="/mentions-legales" className="hover:text-yellow-400">Mentions légales</Link>
            <Link href="/cgv" className="hover:text-yellow-400">CGV</Link>
            <Link href="/politique-confidentialite" className="hover:text-yellow-400">Confidentialité</Link>
          </div>
        </div>
      </div>

      {/* SEO sr-only */}
      <div className="sr-only">
        <p>
          TAXI Pro 91 — service de taxi professionnel en Essonne basé à Palaiseau (1A avenue du 1er Mai, 91120).
          Nous intervenons en priorité à Massy (91300) et desservons Palaiseau, Antony, Longjumeau, Les Ulis, Saclay,
          Ballainvilliers, Verrières-le-Buisson et toute l&apos;Essonne. Transferts aéroport Orly et Roissy CDG,
          gare Massy TGV, transport médical conventionné CPAM. Disponible 24h/24, 7j/7.
        </p>
      </div>
    </footer>
  )
}
