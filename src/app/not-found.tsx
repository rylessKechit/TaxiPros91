import Link from 'next/link'
import { Phone, Home, MapPin } from 'lucide-react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { SITE } from '@/lib/site'

export const metadata = {
  title: 'Page introuvable',
  description: 'La page que vous cherchez n\'existe pas. Réservez votre taxi en Essonne au 01 80 85 91 91, disponible 24h/24.',
  robots: { index: false, follow: true },
}

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />

      <section className="flex-1 container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-yellow-500 font-semibold mb-2">Erreur 404</p>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Cette page n&apos;existe pas
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Mais on est toujours là pour vous emmener où vous voulez en Essonne !
            Notre centrale est disponible 24h/24 au <strong>{SITE.phone.display}</strong>.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-12">
            <a
              href={SITE.phone.tel}
              className="inline-flex items-center justify-center gap-2 bg-yellow-400 hover:bg-yellow-500 text-black font-bold px-6 py-3 rounded-lg"
            >
              <Phone className="w-5 h-5" />
              Appeler {SITE.phone.display}
            </a>
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 bg-gray-900 hover:bg-gray-800 text-white font-bold px-6 py-3 rounded-lg"
            >
              <Home className="w-5 h-5" />
              Retour à l&apos;accueil
            </Link>
          </div>

          <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 text-left">
            <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
              <MapPin className="w-5 h-5 text-yellow-500" />
              Pages les plus consultées
            </h2>
            <ul className="grid sm:grid-cols-2 gap-2 text-sm">
              <li><Link href="/taxi-massy" className="text-gray-700 hover:text-yellow-600">→ Taxi Massy</Link></li>
              <li><Link href="/taxi-orly" className="text-gray-700 hover:text-yellow-600">→ Taxi aéroport Orly</Link></li>
              <li><Link href="/taxi-cdg" className="text-gray-700 hover:text-yellow-600">→ Taxi aéroport CDG</Link></li>
              <li><Link href="/taxi-gare-massy-tgv" className="text-gray-700 hover:text-yellow-600">→ Taxi gare Massy TGV</Link></li>
              <li><Link href="/taxi-palaiseau" className="text-gray-700 hover:text-yellow-600">→ Taxi Palaiseau</Link></li>
              <li><Link href="/taxi-conventionne-cpam-91" className="text-gray-700 hover:text-yellow-600">→ Taxi conventionné CPAM</Link></li>
              <li><Link href="/tarifs" className="text-gray-700 hover:text-yellow-600">→ Tarifs</Link></li>
              <li><Link href="/contact" className="text-gray-700 hover:text-yellow-600">→ Contact</Link></li>
            </ul>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
