import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import BookingForm from '@/components/BookingForm'
import { Phone, MapPin, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Taxi Antony (92160) | Orlyval, RER B, Aéroport Orly - 24h/24',
  description: 'Taxi à Antony 92160. Connexion Orlyval, RER B, aéroport Orly. Service 24h/24, chauffeurs professionnels. Parc de Sceaux, centre-ville. Réservez maintenant !',
  keywords: ['taxi antony', 'taxi antony 92160', 'taxi antony orly', 'taxi antony orlyval', 'taxi antony rer b', 'taxi parc de sceaux', 'réservation taxi antony'],
  openGraph: {
    title: 'Taxi Antony (92160) | Orlyval & RER B',
    description: 'Votre taxi à Antony : Orlyval, RER B, aéroport Orly. Disponible 24h/24.',
    url: 'https://taxipros91.fr/taxi-antony',
  },
  alternates: {
    canonical: 'https://taxipros91.fr/taxi-antony',
  },
}

const destinations = [
  { name: 'Aéroport d\'Orly', distance: '10 min', description: 'Via Orlyval ou route directe' },
  { name: 'Gare Antony RER B', distance: '5 min', description: 'Connexion RER B et Orlyval' },
  { name: 'Parc de Sceaux', distance: '5 min', description: 'Accès au domaine et aux jardins' },
  { name: 'Paris Centre', distance: '25 min', description: 'Via RER B ou route directe' },
  { name: 'Gare Massy TGV', distance: '10 min', description: 'Connexion TGV vers la province' },
  { name: 'La Défense', distance: '30 min', description: 'Quartier d\'affaires' },
]

const quartiers = [
  'Centre-ville', 'La Fontaine', 'Les Rabats', 'Pajeaud',
  'La Croix de Berny', 'Les Baconnets', 'Le Noyer Doré'
]

export default function TaxiAntony() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="bg-yellow-400 py-4">
          <div className="container mx-auto px-4 text-center">
            <p className="text-black font-medium">
              Taxi Antony - Connexion Orly :{' '}
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
                  <span className="font-medium">Antony (92160) - Hauts-de-Seine</span>
                </div>

                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                  Taxi à Antony
                </h1>

                <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                  Service de <strong>taxi à Antony</strong> avec connexion directe vers l'<strong>aéroport d'Orly</strong>.
                  Desserte du <strong>RER B</strong>, de l'<strong>Orlyval</strong>, du <strong>Parc de Sceaux</strong>
                  et de tous les quartiers d'Antony 24h/24.
                </p>

                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">Orly en 10 min</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">RER B & Orlyval</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">Service 24h/24</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">Suivi des vols</span>
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
              Destinations depuis Antony
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
              Tous les quartiers d'Antony desservis
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
                Taxi Antony : votre connexion vers Orly
              </h2>

              <div className="prose prose-lg text-gray-600">
                <p>
                  <strong>Antony</strong> est une ville stratégique située aux portes de Paris et à proximité
                  de l'aéroport d'Orly. Grâce à la gare RER B d'Antony et à l'Orlyval, la ville est parfaitement
                  connectée. Notre service de taxi complète ces transports en commun.
                </p>

                <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">Navettes aéroport Orly</h3>
                <p>
                  L'aéroport d'Orly se trouve à seulement 10 minutes d'Antony. Nous proposons un service
                  de navette avec suivi de vol en temps réel. Plus pratique et confortable que l'Orlyval,
                  surtout avec des bagages.
                </p>

                <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">Connexion RER B</h3>
                <p>
                  La gare d'Antony est un nœud de transport important sur le RER B. Nous assurons les transferts
                  depuis et vers la gare pour vos correspondances. Pratique en cas de grève ou de perturbations.
                </p>

                <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">Parc de Sceaux</h3>
                <p>
                  Le Domaine de Sceaux est l'un des plus beaux parcs d'Île-de-France. Nous vous y conduisons
                  pour vos promenades, pique-niques ou événements (mariages, photos...).
                </p>
              </div>

              <div className="mt-8 p-6 bg-yellow-50 rounded-xl border border-yellow-200">
                <p className="text-gray-900 font-medium mb-4">
                  Réservez votre taxi à Antony
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
