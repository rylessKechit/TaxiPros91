import { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import RelatedCities from '@/components/RelatedCities'
import BookingForm from '@/components/BookingForm'
import { Phone, MapPin, Train, Plane, Clock, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Taxi Les Ulis (91940) | Zone de Courtabœuf - Réservation 24h/24',
  description: 'Réservez votre taxi aux Ulis 91940 et zone industrielle de Courtabœuf. Service 24h/24 pour entreprises et particuliers. Transferts aéroport, gare. Appelez maintenant !',
  keywords: ['taxi les ulis', 'taxi les ulis 91940', 'taxi courtaboeuf', 'taxi zone industrielle courtaboeuf', 'réservation taxi les ulis', 'taxi ulis entreprise'],
  openGraph: {
    title: 'Taxi Les Ulis (91940) | Zone de Courtabœuf - Service 24h/24',
    description: 'Votre taxi aux Ulis et zone de Courtabœuf : entreprises, aéroport, gare. Réservation rapide, tarifs transparents.',
    url: 'https://taxipros91.fr/taxi-les-ulis',
  },
  alternates: {
    canonical: 'https://taxipros91.fr/taxi-les-ulis',
  },
}

const destinations = [
  { name: 'Zone de Courtabœuf', distance: '5 min', description: 'Desserte de toute la zone industrielle et ses entreprises' },
  { name: 'Centre commercial Ulis 2', distance: '3 min', description: 'Accès facilité pour vos courses et shopping' },
  { name: 'Gare Massy TGV', distance: '15 min', description: 'Connexion TGV pour vos voyages en province' },
  { name: 'Aéroport d\'Orly', distance: '20 min', description: 'Transfert vers tous les terminaux d\'Orly' },
  { name: 'Plateau de Saclay', distance: '10 min', description: 'Universités, grandes écoles et centres de recherche' },
  { name: 'Paris Centre', distance: '35 min', description: 'Liaison directe vers tous les arrondissements parisiens' },
]

const quartiers = [
  'Centre commercial', 'Courtabœuf 1', 'Courtabœuf 2', 'Les Amonts',
  'Les Avelines', 'Les Bergères', 'Courdimanche', 'Le Bosquet'
]

export default function TaxiLesUlis() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="bg-yellow-400 py-4">
          <div className="container mx-auto px-4 text-center">
            <p className="text-black font-medium">
              Besoin d'un taxi aux Ulis ou à Courtabœuf ? Appelez le{' '}
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
                  <span className="font-medium">Les Ulis (91940) - Essonne</span>
                </div>

                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                  Taxi aux Ulis & Courtabœuf
                </h1>

                <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                  Votre service de <strong>taxi aux Ulis</strong> et dans la <strong>zone industrielle de Courtabœuf</strong>, disponible 24h/24 et 7j/7.
                  Nous desservons les entreprises, le centre commercial Ulis 2, les aéroports et les gares.
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
                    <span className="text-gray-700">Facturation entreprise</span>
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
              Principales destinations depuis Les Ulis
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
              Taxi dans tous les quartiers des Ulis et Courtabœuf
            </h2>
            <p className="text-gray-600 text-center mb-8 max-w-2xl mx-auto">
              Nous intervenons dans tous les quartiers des Ulis et dans toute la zone industrielle de Courtabœuf.
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
                Votre taxi de confiance aux Ulis et Courtabœuf
              </h2>

              <div className="prose prose-lg text-gray-600">
                <p>
                  <strong>TAXI Pro 91</strong> est votre partenaire de confiance pour tous vos déplacements aux Ulis et dans la zone industrielle de Courtabœuf.
                  Avec plus de 1 200 entreprises implantées sur le parc d'activités de Courtabœuf, le besoin en transport professionnel est constant.
                </p>

                <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">Zone industrielle de Courtabœuf</h3>
                <p>
                  La zone de Courtabœuf est le plus grand parc d'activités d'Île-de-France. Nos chauffeurs connaissent parfaitement
                  le secteur et vous conduisent rapidement à l'adresse de votre entreprise. Nous proposons également la facturation
                  entreprise pour simplifier vos déplacements professionnels.
                </p>

                <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">Transferts aéroport et gare</h3>
                <p>
                  Depuis Les Ulis, rejoignez l'aéroport d'Orly en 20 minutes et la gare Massy TGV en 15 minutes.
                  Nous assurons des transferts fiables avec suivi de vol et de train.
                </p>

                <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">Transport médical conventionné</h3>
                <p>
                  Nous sommes agréés par la CPAM pour le transport médical. Pour vos rendez-vous médicaux depuis
                  Les Ulis, nous vous accompagnons avec professionnalisme et bienveillance.
                </p>
              </div>

              <div className="mt-8 p-6 bg-yellow-50 rounded-xl border border-yellow-200">
                <p className="text-gray-900 font-medium mb-4">
                  Réservez votre taxi aux Ulis dès maintenant
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
      <RelatedCities currentSlug="taxi-les-ulis" />
      </main>
      <Footer />
    </>
  )
}
