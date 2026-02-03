import { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/Header'
import Breadcrumb from '@/components/Breadcrumb'
import Footer from '@/components/Footer'
import RelatedCities from '@/components/RelatedCities'
import BookingForm from '@/components/BookingForm'
import { Phone, MapPin, Train, Plane, Clock, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Taxi Verrières-le-Buisson (91370) | Réservation 24h/24',
  description: 'Réservez votre taxi à Verrières-le-Buisson 91370. Service disponible 24h/24 pour vos trajets gare, aéroport Orly, Paris. Chauffeurs professionnels, tarifs transparents. Appelez maintenant !',
  keywords: ['taxi verrières-le-buisson', 'taxi verrières-le-buisson 91370', 'taxi verrières buisson', 'réservation taxi verrières', 'taxi verrières orly'],
  openGraph: {
    title: 'Taxi Verrières-le-Buisson (91370) | Service 24h/24',
    description: 'Votre taxi à Verrières-le-Buisson : gare, aéroport Orly, Paris. Réservation rapide, tarifs transparents.',
    url: 'https://www.taxipro91.com/taxi-verrieres-le-buisson',
  },
  alternates: {
    canonical: 'https://www.taxipro91.com/taxi-verrieres-le-buisson',
  },
}

const destinations = [
  { name: 'Gare RER B Antony', distance: '8 min', description: 'Connexion RER B vers Paris et Orlyval vers l\'aéroport' },
  { name: 'Gare Massy TGV', distance: '10 min', description: 'Accès rapide à la gare TGV pour vos voyages en province' },
  { name: 'Aéroport d\'Orly', distance: '15 min', description: 'Transfert direct vers tous les terminaux d\'Orly' },
  { name: 'Paris Centre', distance: '30 min', description: 'Liaison directe vers tous les arrondissements parisiens' },
  { name: 'Antony', distance: '5 min', description: 'Accès rapide au centre-ville et au Parc de Sceaux' },
  { name: 'Massy', distance: '10 min', description: 'Centre commercial, gare TGV et RER' },
]

const quartiers = [
  'Centre-ville', 'La Gâtine', 'Les Antes', 'Le Petit Verrières',
  'La Nouzotte', 'Les Gâtines', 'Forêt de Verrières', 'Amblainvilliers'
]

export default function TaxiVerrieres() {
  return (
    <>
      <Header />
      <Breadcrumb items={[{ name: 'Taxi Verrières-le-Buisson' }]} />
      <main>
        {/* Hero */}
        <section className="bg-yellow-400 py-4">
          <div className="container mx-auto px-4 text-center">
            <p className="text-black font-medium">
              Besoin d'un taxi à Verrières-le-Buisson ? Appelez le{' '}
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
                  <span className="font-medium">Verrières-le-Buisson (91370) - Essonne</span>
                </div>

                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                  Taxi à Verrières-le-Buisson
                </h1>

                <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                  Votre service de <strong>taxi à Verrières-le-Buisson</strong> disponible 24h/24 et 7j/7.
                  Nous assurons tous vos trajets depuis et vers <strong>Antony</strong>,
                  <strong> Massy</strong>, l'<strong>aéroport d'Orly</strong> et Paris.
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
              Principales destinations depuis Verrières-le-Buisson
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
              Taxi dans tous les quartiers de Verrières-le-Buisson
            </h2>
            <p className="text-gray-600 text-center mb-8 max-w-2xl mx-auto">
              Nous intervenons dans tous les quartiers de Verrières-le-Buisson pour vous prendre en charge ou vous déposer à l'adresse de votre choix.
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
                Votre taxi de confiance à Verrières-le-Buisson
              </h2>

              <div className="prose prose-lg text-gray-600">
                <p>
                  <strong>TAXI Pro 91</strong> est votre partenaire de confiance pour tous vos déplacements à Verrières-le-Buisson et dans l'Essonne.
                  Commune résidentielle prisée entre Antony et Massy, Verrières-le-Buisson bénéficie d'un cadre de vie agréable
                  avec sa célèbre forêt et sa proximité avec les grands axes de transport.
                </p>

                <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">Connexions transport</h3>
                <p>
                  Verrières-le-Buisson est idéalement située à proximité du RER B (gare d'Antony) et de la gare Massy TGV.
                  Nos chauffeurs vous conduisent rapidement vers ces pôles de transport pour rejoindre Paris ou prendre votre TGV.
                </p>

                <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">Navettes aéroport Orly</h3>
                <p>
                  L'aéroport d'Orly est accessible en 15 minutes depuis Verrières-le-Buisson. Nous proposons un service de navette
                  aéroport fiable avec suivi de vol pour adapter l'heure de prise en charge.
                </p>

                <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">Transport médical conventionné</h3>
                <p>
                  Nous sommes agréés par la CPAM pour le transport médical. Pour vos rendez-vous médicaux depuis
                  Verrières-le-Buisson, nous vous accompagnons avec professionnalisme et bienveillance.
                </p>
              </div>

              <div className="mt-8 p-6 bg-yellow-50 rounded-xl border border-yellow-200">
                <p className="text-gray-900 font-medium mb-4">
                  Réservez votre taxi à Verrières-le-Buisson dès maintenant
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
      <RelatedCities currentSlug="taxi-verrieres-le-buisson" />
      </main>
      <Footer />
    </>
  )
}
