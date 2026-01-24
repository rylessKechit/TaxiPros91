import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import BookingForm from '@/components/BookingForm'
import { Phone, MapPin, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Taxi Palaiseau (91120) | Plateau de Saclay & Polytechnique - 24h/24',
  description: 'Taxi à Palaiseau 91120. Desserte du plateau de Saclay, École Polytechnique, HEC, campus universitaire. Service 24h/24, chauffeurs professionnels. Réservez maintenant !',
  keywords: ['taxi palaiseau', 'taxi palaiseau 91120', 'taxi plateau saclay', 'taxi polytechnique', 'taxi palaiseau gare', 'réservation taxi palaiseau'],
  openGraph: {
    title: 'Taxi Palaiseau (91120) | Plateau de Saclay',
    description: 'Votre taxi à Palaiseau : Polytechnique, plateau de Saclay, gare RER. Disponible 24h/24.',
    url: 'https://taxipros91.fr/taxi-palaiseau',
  },
  alternates: {
    canonical: 'https://taxipros91.fr/taxi-palaiseau',
  },
}

const destinations = [
  { name: 'École Polytechnique', distance: '10 min', description: 'Accès direct au campus de l\'X sur le plateau de Saclay' },
  { name: 'Plateau de Saclay', distance: '10-15 min', description: 'Desserte de toutes les écoles et entreprises du plateau' },
  { name: 'Gare RER Palaiseau', distance: '5 min', description: 'Connexion RER B vers Paris et Massy' },
  { name: 'HEC Paris', distance: '15 min', description: 'Transport vers le campus de Jouy-en-Josas' },
  { name: 'Aéroport d\'Orly', distance: '20 min', description: 'Transfert rapide vers tous les terminaux' },
  { name: 'Paris Centre', distance: '35 min', description: 'Liaison directe vers la capitale' },
]

const quartiers = [
  'Centre-ville', 'Lozère', 'Pileu', 'Villebon', 'Camille Claudel',
  'Les Mathieux', 'Le Tronchet', 'Polytechnique'
]

export default function TaxiPalaiseau() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="bg-yellow-400 py-4">
          <div className="container mx-auto px-4 text-center">
            <p className="text-black font-medium">
              Taxi à Palaiseau disponible maintenant :{' '}
              <a href="tel:+33100000000" className="font-bold text-xl hover:underline">01 XX XX XX XX</a>
            </p>
          </div>
        </section>

        <section className="bg-gray-50 py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div>
                <div className="flex items-center gap-2 text-yellow-600 mb-4">
                  <MapPin className="w-5 h-5" />
                  <span className="font-medium">Palaiseau (91120) - Essonne</span>
                </div>

                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                  Taxi à Palaiseau
                </h1>

                <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                  Service de <strong>taxi à Palaiseau</strong> pour le <strong>plateau de Saclay</strong>,
                  l'<strong>École Polytechnique</strong>, les grandes écoles et le centre-ville.
                  Disponible 24h/24 pour étudiants, professeurs et professionnels.
                </p>

                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">Plateau de Saclay</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">Polytechnique</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">24h/24 - 7j/7</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">Tarifs fixes</span>
                  </div>
                </div>

                <a
                  href="tel:+33100000000"
                  className="inline-flex items-center gap-3 bg-gray-900 text-white font-bold text-xl py-4 px-8 rounded-lg hover:bg-gray-800"
                >
                  <Phone className="w-6 h-6" />
                  01 XX XX XX XX
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
              Destinations depuis Palaiseau
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
              Tous les quartiers de Palaiseau desservis
            </h2>

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
                Taxi Palaiseau : spécialiste du plateau de Saclay
              </h2>

              <div className="prose prose-lg text-gray-600">
                <p>
                  Palaiseau est au cœur du plus grand pôle scientifique et technologique d'Europe : le <strong>plateau de Saclay</strong>.
                  Notre service de taxi à Palaiseau est spécialisé dans les transferts vers les écoles, universités et entreprises du plateau.
                </p>

                <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">Transport vers les grandes écoles</h3>
                <p>
                  L'<strong>École Polytechnique</strong>, CentraleSupélec, ENS Paris-Saclay, AgroParisTech...
                  Nous connaissons parfaitement l'accès à chaque établissement du plateau de Saclay.
                  Idéal pour les étudiants, professeurs et visiteurs.
                </p>

                <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">Transferts professionnels</h3>
                <p>
                  De nombreuses entreprises sont implantées sur le plateau de Saclay. Nous assurons le transport
                  de vos collaborateurs et visiteurs avec professionnalisme. Facturation entreprise disponible.
                </p>

                <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">Connexion gare et aéroport</h3>
                <p>
                  Depuis Palaiseau, nous vous conduisons rapidement à la gare Massy TGV, aux gares RER,
                  ou à l'aéroport d'Orly. Service disponible 24h/24, même pour les vols tôt le matin.
                </p>
              </div>

              <div className="mt-8 p-6 bg-yellow-50 rounded-xl border border-yellow-200">
                <p className="text-gray-900 font-medium mb-4">
                  Réservez votre taxi à Palaiseau
                </p>
                <a
                  href="tel:+33100000000"
                  className="inline-flex items-center gap-3 bg-yellow-400 text-black font-bold text-lg py-3 px-6 rounded-lg hover:bg-yellow-500"
                >
                  <Phone className="w-5 h-5" />
                  01 XX XX XX XX
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
