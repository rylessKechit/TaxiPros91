import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import RelatedCities from '@/components/RelatedCities'
import BookingForm from '@/components/BookingForm'
import { Phone, MapPin, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Taxi Ballainvilliers (91160) | Réservation 24h/24 - Essonne',
  description: 'Taxi à Ballainvilliers 91160. Service de taxi disponible 24h/24, 7j/7. Transferts gares, aéroports, trajets quotidiens. Tarifs transparents. Appelez maintenant !',
  keywords: ['taxi ballainvilliers', 'taxi ballainvilliers 91160', 'taxi ballainvilliers essonne', 'réservation taxi ballainvilliers', 'taxi 91160'],
  openGraph: {
    title: 'Taxi Ballainvilliers (91160) | Service 24h/24',
    description: 'Votre taxi à Ballainvilliers. Disponible 24h/24 pour tous vos trajets.',
    url: 'https://taxipros91.fr/taxi-ballainvilliers',
  },
  alternates: {
    canonical: 'https://taxipros91.fr/taxi-ballainvilliers',
  },
}

const destinations = [
  { name: 'Gare de Longjumeau', distance: '5 min', description: 'Accès rapide aux trains RER C' },
  { name: 'Gare Massy TGV', distance: '10 min', description: 'Pour vos voyages en TGV' },
  { name: 'Aéroport d\'Orly', distance: '15 min', description: 'Transfert vers tous les terminaux' },
  { name: 'Centre commercial', distance: '10 min', description: 'Accès aux zones commerciales environnantes' },
  { name: 'Paris Centre', distance: '35 min', description: 'Liaison directe vers Paris' },
  { name: 'Versailles', distance: '25 min', description: 'Accès au château et à la ville' },
]

const communesProches = [
  'Longjumeau', 'La Ville-du-Bois', 'Nozay', 'Villejust',
  'Montlhéry', 'Linas', 'Marcoussis', 'Saulx-les-Chartreux'
]

export default function TaxiBallainvilliers() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="bg-yellow-400 py-4">
          <div className="container mx-auto px-4 text-center">
            <p className="text-black font-medium">
              Taxi à Ballainvilliers :{' '}
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
                  <span className="font-medium">Ballainvilliers (91160) - Essonne</span>
                </div>

                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                  Taxi à Ballainvilliers
                </h1>

                <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                  Votre <strong>taxi à Ballainvilliers</strong> disponible 24 heures sur 24.
                  Nous desservons la commune et toutes les villes environnantes de l'Essonne.
                  Transferts gares, aéroports et tous vos trajets quotidiens.
                </p>

                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">Disponible 24h/24</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">Prise en charge rapide</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">Prix annoncé à l'avance</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">Chauffeurs locaux</span>
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
              Destinations depuis Ballainvilliers
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

        {/* Communes proches */}
        <section className="py-12 md:py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 text-center">
              Communes desservies autour de Ballainvilliers
            </h2>

            <div className="flex flex-wrap justify-center gap-3 mb-10">
              {communesProches.map((commune) => (
                <span key={commune} className="bg-white text-gray-700 px-4 py-2 rounded-lg border border-gray-200">
                  {commune}
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
                Service de taxi à Ballainvilliers
              </h2>

              <div className="prose prose-lg text-gray-600">
                <p>
                  <strong>Ballainvilliers</strong> est une commune résidentielle de l'Essonne située à proximité
                  des grands axes routiers (N20, A6, A10). Notre service de taxi vous permet de rejoindre
                  facilement les gares, aéroports et toutes vos destinations.
                </p>

                <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">Taxi pour vos trajets quotidiens</h3>
                <p>
                  Que ce soit pour aller à la gare, au travail, chez le médecin ou faire vos courses,
                  notre service de taxi à Ballainvilliers s'adapte à tous vos besoins. Réservation par téléphone,
                  prise en charge rapide.
                </p>

                <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">Transferts aéroport et gare</h3>
                <p>
                  Depuis Ballainvilliers, nous vous conduisons à l'aéroport d'Orly en 15 minutes,
                  à la gare Massy TGV en 10 minutes. Service disponible 24h/24, même pour les départs tôt le matin.
                </p>

                <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">Connaissance du secteur</h3>
                <p>
                  Nos chauffeurs connaissent parfaitement Ballainvilliers et les communes environnantes.
                  Ils empruntent les meilleurs itinéraires pour vous faire gagner du temps.
                </p>
              </div>

              <div className="mt-8 p-6 bg-yellow-50 rounded-xl border border-yellow-200">
                <p className="text-gray-900 font-medium mb-4">
                  Réservez votre taxi à Ballainvilliers
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
      <RelatedCities currentSlug="taxi-ballainvilliers" />
      </main>
      <Footer />
    </>
  )
}
