import { Phone, Mail, MapPin, Clock } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { SITE } from '@/lib/site'
import { cities } from '@/lib/cities'
import { popularRoutes } from '@/lib/routes'

const linkClass = 'text-gray-300 hover:text-yellow-400'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer id="contact" className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-6">
          {/* Identité + NAP + contact */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="mb-4">
              <Image src="/logo.webp" alt="TAXI Pro 91" width={356} height={124} className="h-14 w-auto" />
            </div>
            <p className="text-gray-300 mb-4 text-sm">
              Service de taxi en Essonne (91), disponible 24h/24 et 7j/7.
            </p>
            <address className="not-italic text-sm text-gray-400 space-y-1 mb-4">
              <div className="font-semibold text-gray-200">{SITE.name}</div>
              <div>{SITE.address.street}</div>
              <div>{SITE.address.postalCode} {SITE.address.locality}</div>
            </address>
            <ul className="space-y-2 text-sm">
              <li>
                <a href={SITE.phone.tel} className="flex items-center gap-2 text-gray-300 hover:text-yellow-400">
                  <Phone className="w-4 h-4 text-yellow-400 shrink-0" />
                  <span className="font-semibold">{SITE.phone.display}</span>
                </a>
              </li>
              <li>
                <a href={`mailto:${SITE.email}`} className="flex items-center gap-2 text-gray-300 hover:text-yellow-400">
                  <Mail className="w-4 h-4 text-yellow-400 shrink-0" />
                  {SITE.email}
                </a>
              </li>
              <li className="flex items-center gap-2 text-gray-400">
                <Clock className="w-4 h-4 text-yellow-400 shrink-0" />
                {SITE.hours}
              </li>
            </ul>
          </div>

          {/* Villes (data-driven) */}
          <div>
            <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
              <MapPin className="w-4 h-4 text-yellow-400" /> Villes
            </h3>
            <ul className="space-y-2 text-sm">
              {cities.map((c) => (
                <li key={c.slug}>
                  <Link href={`/taxi-${c.slug}`} className={linkClass}>Taxi {c.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Aéroports & Gares + Trajets */}
          <div>
            <h3 className="font-bold text-lg mb-4">Aéroports &amp; Gares</h3>
            <ul className="space-y-2 text-sm mb-6">
              <li><Link href="/taxi-aeroport" className={linkClass}>Tous les aéroports</Link></li>
              <li><Link href="/taxi-orly" className={linkClass}>Aéroport Orly</Link></li>
              <li><Link href="/taxi-cdg" className={linkClass}>Aéroport Roissy CDG</Link></li>
              <li><Link href="/taxi-gare-massy-tgv" className={linkClass}>Gare Massy TGV</Link></li>
            </ul>
            <h3 className="font-bold text-lg mb-4">Trajets</h3>
            <ul className="space-y-2 text-sm">
              {popularRoutes.map((r) => (
                <li key={r.slug}>
                  <Link href={`/${r.slug}`} className={linkClass}>{r.from} → {r.to}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-lg mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/taxi-conventionne-cpam-91" className={linkClass}>Conventionné CPAM</Link></li>
              <li><Link href="/taxi-pmr-mobilite-reduite" className={linkClass}>Taxi PMR</Link></li>
              <li><Link href="/taxi-entreprise" className={linkClass}>Taxi entreprise</Link></li>
              <li><Link href="/taxi-ecole-polytechnique" className={linkClass}>École Polytechnique</Link></li>
              <li><Link href="/taxi-paris-saclay" className={linkClass}>Paris-Saclay</Link></li>
              <li><Link href="/tarifs" className={linkClass}>Tarifs</Link></li>
              <li><Link href="/blog" className={linkClass}>Blog</Link></li>
              <li><Link href="/contact" className={linkClass}>Contact</Link></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-sm text-gray-400">
          <p>© {currentYear} {SITE.name}. Tous droits réservés.</p>
          <div className="flex flex-wrap gap-4">
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
          Ballainvilliers, Verrières-le-Buisson, Évry-Courcouronnes, Corbeil-Essonnes et toute l&apos;Essonne.
          Transferts aéroport Orly et Roissy CDG, gare Massy TGV, transport médical conventionné CPAM. Disponible 24h/24, 7j/7.
        </p>
      </div>
    </footer>
  )
}
