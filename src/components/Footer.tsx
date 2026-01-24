import { Phone, Mail, MapPin, Clock } from 'lucide-react'

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
                <div className="font-bold text-xl">Taxi Pros 91</div>
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
              <li><span className="text-gray-400">Taxi Massy</span></li>
              <li><span className="text-gray-400">Taxi Palaiseau</span></li>
              <li><span className="text-gray-400">Taxi Ballainvilliers</span></li>
              <li><span className="text-gray-400">Taxi Longjumeau</span></li>
              <li><span className="text-gray-400">Taxi Antony</span></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contact</h3>
            <ul className="space-y-3">
              <li>
                <a href="tel:+33100000000" className="flex items-center gap-3 text-gray-400 hover:text-yellow-400">
                  <Phone className="w-5 h-5 text-yellow-400" />
                  01 XX XX XX XX
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
            © {currentYear} Taxi Pros 91. Tous droits réservés.
          </p>
        </div>
      </div>

      {/* SEO text */}
      <div className="sr-only">
        <p>
          Taxi Pros 91 - Service de taxi professionnel en Essonne.
          Nous desservons Massy, Palaiseau, Ballainvilliers, Longjumeau, Antony.
          Transferts aéroport Orly et Roissy CDG, gares, transport médical.
          Disponible 24h/24, 7j/7.
        </p>
      </div>
    </footer>
  )
}
