import { Phone, CheckCircle } from 'lucide-react'
import BookingForm from './BookingForm'

export default function Hero() {
  return (
    <section id="accueil" className="min-h-[calc(100vh-80px)] flex flex-col">
      {/* Bandeau téléphone */}
      <div className="bg-yellow-400 py-2">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-3 text-center">
            <Phone className="w-5 h-5 text-black" />
            <span className="text-black font-medium">Réservation immédiate :</span>
            <a href="tel:+33100000000" className="text-black font-bold text-xl hover:underline">
              01 XX XX XX XX
            </a>
          </div>
        </div>
      </div>

      {/* Hero principal */}
      <div className="bg-gray-50 flex-1 flex items-center py-8 lg:py-6">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Colonne gauche - Texte */}
            <div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                Votre Taxi en Essonne
              </h1>

              <p className="text-lg md:text-xl text-gray-600 mb-6">
                Service de taxi professionnel disponible <strong>24h/24</strong> à Massy, Palaiseau,
                Ballainvilliers, Longjumeau et Antony.
              </p>

              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">Chauffeurs professionnels et ponctuels</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">Tarifs transparents, prix fixe à l'avance</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">Transferts aéroport Orly et gares</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">Transport médical conventionné CPAM</span>
                </div>
              </div>

              {/* Bouton appel mobile */}
              <a
                href="tel:+33100000000"
                className="lg:hidden flex items-center justify-center gap-3 bg-gray-900 text-white font-bold text-lg py-4 px-6 rounded-lg w-full"
              >
                <Phone className="w-5 h-5" />
                Appeler maintenant
              </a>

              {/* Stats desktop */}
              <div className="hidden lg:flex items-center gap-8 mt-6 pt-6 border-t border-gray-200">
                <div>
                  <p className="text-2xl font-bold text-gray-900">500+</p>
                  <p className="text-gray-500 text-sm">Clients satisfaits</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">24/7</p>
                  <p className="text-gray-500 text-sm">Disponibilité</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">15 min</p>
                  <p className="text-gray-500 text-sm">Délai moyen</p>
                </div>
              </div>
            </div>

            {/* Colonne droite - Formulaire */}
            <div className="hidden lg:block">
              <BookingForm compact />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
