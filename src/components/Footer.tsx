import { Phone, Mail, MapPin, Clock } from 'lucide-react'
import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer id="contact" className="bg-gray-900 text-white">
      {/* Main footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-yellow-400 rounded-lg flex items-center justify-center">
                <span className="text-black font-bold text-2xl">T</span>
              </div>
              <div>
                <div className="font-bold text-xl">TAXI Pro 91</div>
                <div className="text-gray-400 text-sm">Essonne</div>
              </div>
            </div>
            <p className="text-gray-400">
              Votre service de taxi de confiance en Essonne.
              Disponible 24h/24 et 7j/7.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-bold text-lg mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li><a href="#accueil" className="text-gray-400 hover:text-yellow-400">Accueil</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-yellow-400">Services</a></li>
              <li><a href="#zones" className="text-gray-400 hover:text-yellow-400">Nos zones</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-yellow-400">Contact</a></li>
            </ul>
          </div>

          {/* Zones */}
          <div>
            <h3 className="font-bold text-lg mb-4">Zones desservies</h3>
            <ul className="space-y-2">
              <li><Link href="/taxi-massy" className="text-gray-400 hover:text-yellow-400">Taxi Massy</Link></li>
              <li><Link href="/taxi-palaiseau" className="text-gray-400 hover:text-yellow-400">Taxi Palaiseau</Link></li>
              <li><Link href="/taxi-ballainvilliers" className="text-gray-400 hover:text-yellow-400">Taxi Ballainvilliers</Link></li>
              <li><Link href="/taxi-longjumeau" className="text-gray-400 hover:text-yellow-400">Taxi Longjumeau</Link></li>
              <li><Link href="/taxi-antony" className="text-gray-400 hover:text-yellow-400">Taxi Antony</Link></li>
              <li><Link href="/taxi-verrieres-le-buisson" className="text-gray-400 hover:text-yellow-400">Taxi Verrières-le-Buisson</Link></li>
              <li><Link href="/taxi-les-ulis" className="text-gray-400 hover:text-yellow-400">Taxi Les Ulis</Link></li>
              <li><Link href="/taxi-saclay" className="text-gray-400 hover:text-yellow-400">Taxi Saclay</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contact</h3>
            <ul className="space-y-3">
              <li>
                <a href="tel:+33680036463" className="flex items-center gap-3 text-gray-400 hover:text-yellow-400">
                  <Phone className="w-5 h-5 text-yellow-400" />
                  06 80 03 64 63
                </a>
              </li>
              <li>
                <a href="mailto:contact@taxipros91.fr" className="flex items-center gap-3 text-gray-400 hover:text-yellow-400">
                  <Mail className="w-5 h-5 text-yellow-400" />
                  contact@taxipros91.fr
                </a>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <MapPin className="w-5 h-5 text-yellow-400" />
                Massy, Essonne (91)
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Clock className="w-5 h-5 text-yellow-400" />
                24h/24 - 7j/7
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <p className="text-gray-500 text-center">
            © {currentYear} TAXI Pro 91. Tous droits réservés.
          </p>
        </div>
      </div>

      {/* SEO text */}
      <div className="sr-only">
        <p>
          TAXI Pro 91 - Service de taxi professionnel en Essonne.
          Nous desservons Massy, Palaiseau, Ballainvilliers, Longjumeau, Antony, Verrières-le-Buisson, Les Ulis et Saclay.
          Transferts aéroport Orly et Roissy CDG, gares, transport médical.
          Disponible 24h/24, 7j/7.
        </p>
      </div>
    </footer>
  )
}
