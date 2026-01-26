import { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import BookingForm from '@/components/BookingForm'
import { Phone, MapPin, Train, Plane, Clock, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Taxi Massy (91300) | Réservation 24h/24 - Gare TGV & Aéroport',
  description: 'Réservez votre taxi à Massy 91300. Service disponible 24h/24 pour vos trajets gare Massy TGV, RER B, aéroport Orly. Chauffeurs professionnels, tarifs transparents. Appelez maintenant !',
  keywords: ['taxi massy', 'taxi massy 91300', 'taxi gare massy tgv', 'taxi massy palaiseau', 'taxi massy orly', 'réservation taxi massy', 'taxi massy aéroport'],
  openGraph: {
    title: 'Taxi Massy (91300) | Service 24h/24',
    description: 'Votre taxi à Massy : gare TGV, RER B, aéroport Orly. Réservation rapide, tarifs transparents.',
    url: 'https://taxipros91.fr/taxi-massy',
  },
  alternates: {
    canonical: 'https://taxipros91.fr/taxi-massy',
  },
}

const destinations = [
  { name: 'Gare Massy TGV', distance: '5 min', description: 'Desserte directe de la gare TGV pour vos voyages en province' },
  { name: 'Gare Massy-Palaiseau RER', distance: '3 min', description: 'Connexion RER B vers Paris et le plateau de Saclay' },
  { name: 'Aéroport d\'Orly', distance: '15 min', description: 'Transfert rapide vers les terminaux Orly 1, 2, 3 et 4' },
  { name: 'Centre commercial Massy', distance: '5 min', description: 'Accès facilité pour vos courses et shopping' },
  { name: 'Opéra de Massy', distance: '7 min', description: 'Transport pour vos soirées culturelles' },
  { name: 'Paris Centre', distance: '30 min', description: 'Liaison directe vers tous les arrondissements parisiens' },
]

const quartiers = [
  'Massy-Villaine', 'Massy-Verrières', 'Massy-Opéra', 'Atlantis',
  'Grand Ouest', 'Le Pileu', 'Villaine', 'La Bonde'
]

export default function TaxiMassy() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="bg-yellow-400 py-4">
          <div className="container mx-auto px-4 text-center">
            <p className="text-black font-medium">
              Besoin d'un taxi à Massy ? Appelez le{' '}
              <a href="tel:+33680036463" className="font-bold text-xl hover:underline">06 80 03 64 63</a>
            </p>
          </div>
        </section>

        <section className="bg-gray-50 py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div>
                <div className="flex items-center gap-2 text-yellow-600 mb-4">
                  <MapPin className="w-5 h-5" />
                  <span className="font-medium">Massy (91300) - Essonne</span>
                </div>

                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                  Taxi à Massy
                </h1>

                <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                  Votre service de <strong>taxi à Massy</strong> disponible 24h/24 et 7j/7.
                  Nous assurons tous vos trajets depuis et vers <strong>la gare Massy TGV</strong>,
                  <strong>la gare Massy-Palaiseau RER B</strong>, l'<strong>aéroport d'Orly</strong> et tous les quartiers de Massy.
                </p>

                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">Disponible 24h/24</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">Réservation rapide</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">Tarifs transparents</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">Chauffeurs pro</span>
                  </div>
                </div>

                <a
                  href="tel:+33680036463"
                  className="inline-flex items-center gap-3 bg-gray-900 text-white font-bold text-xl py-4 px-8 rounded-lg hover:bg-gray-800"
                >
                  <Phone className="w-6 h-6" />
                  06 80 03 64 63
                </a>
              </div>

              <div>
                <BookingForm />
              </div>
            </div>
          </div>
        </section>

        {/* Destinations */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
              Principales destinations depuis Massy
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
              {destinations.map((dest) => (
                <div key={dest.name} className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-bold text-gray-900">{dest.name}</h3>
                    <span className="text-yellow-600 font-medium text-sm">{dest.distance}</span>
                  </div>
                  <p className="text-gray-600 text-sm">{dest.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Quartiers */}
        <section className="py-12 md:py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 text-center">
              Taxi dans tous les quartiers de Massy
            </h2>
            <p className="text-gray-600 text-center mb-8 max-w-2xl mx-auto">
              Nous intervenons dans tous les quartiers de Massy pour vous prendre en charge ou vous déposer à l'adresse de votre choix.
            </p>

            <div className="flex flex-wrap justify-center gap-3 mb-10">
              {quartiers.map((quartier) => (
                <span key={quartier} className="bg-white text-gray-700 px-4 py-2 rounded-lg border border-gray-200">
                  {quartier}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* SEO Content */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Votre taxi de confiance à Massy
              </h2>

              <div className="prose prose-lg text-gray-600">
                <p>
                  <strong>Taxi Pros 91</strong> est votre partenaire de confiance pour tous vos déplacements à Massy et dans l'Essonne.
                  Située au carrefour de plusieurs axes de transport majeurs, Massy est une ville dynamique qui nécessite
                  un service de taxi fiable et disponible à toute heure.
                </p>

                <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">Transferts gare Massy TGV</h3>
                <p>
                  La gare Massy TGV est l'une des gares les plus fréquentées d'Île-de-France. Nos chauffeurs vous attendent
                  à l'arrivée de votre train et vous conduisent rapidement à votre destination. Nous assurons également
                  le trajet inverse pour ne jamais manquer votre TGV.
                </p>

                <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">Navettes aéroport Orly</h3>
                <p>
                  L'aéroport d'Orly se trouve à seulement 15 minutes de Massy. Nous proposons un service de navette
                  aéroport fiable avec suivi de vol. En cas de retard de votre avion, nous adaptons l'heure de prise en charge.
                </p>

                <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">Transport médical conventionné</h3>
                <p>
                  Nous sommes agréés par la CPAM pour le transport médical. Si vous avez besoin d'un taxi pour vos
                  rendez-vous médicaux à Massy ou dans les environs, nous vous accompagnons avec professionnalisme et bienveillance.
                </p>
              </div>

              <div className="mt-8 p-6 bg-yellow-50 rounded-xl border border-yellow-200">
                <p className="text-gray-900 font-medium mb-4">
                  Réservez votre taxi à Massy dès maintenant
                </p>
                <a
                  href="tel:+33680036463"
                  className="inline-flex items-center gap-3 bg-yellow-400 text-black font-bold text-lg py-3 px-6 rounded-lg hover:bg-yellow-500"
                >
                  <Phone className="w-5 h-5" />
                  06 80 03 64 63
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
