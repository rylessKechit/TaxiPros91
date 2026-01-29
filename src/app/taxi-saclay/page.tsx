import { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/Header'
import Breadcrumb from '@/components/Breadcrumb'
import Footer from '@/components/Footer'
import RelatedCities from '@/components/RelatedCities'
import BookingForm from '@/components/BookingForm'
import { Phone, MapPin, Train, Plane, Clock, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Taxi Saclay (91400) | Plateau de Saclay - Réservation 24h/24',
  description: 'Réservez votre taxi à Saclay 91400 et plateau de Saclay. Service 24h/24 pour étudiants, chercheurs et professionnels. CEA, Université Paris-Saclay, grandes écoles. Appelez maintenant !',
  keywords: ['taxi saclay', 'taxi saclay 91400', 'taxi plateau de saclay', 'taxi université paris-saclay', 'taxi cea saclay', 'taxi polytechnique saclay'],
  openGraph: {
    title: 'Taxi Saclay (91400) | Plateau de Saclay - Service 24h/24',
    description: 'Votre taxi à Saclay et sur le plateau : CEA, universités, grandes écoles. Réservation rapide, tarifs transparents.',
    url: 'https://taxipros91.fr/taxi-saclay',
  },
  alternates: {
    canonical: 'https://taxipros91.fr/taxi-saclay',
  },
}

const destinations = [
  { name: 'CEA Saclay', distance: '5 min', description: 'Centre de recherche nucléaire et énergies alternatives' },
  { name: 'Université Paris-Saclay', distance: '5 min', description: 'Campus universitaire et centres de recherche' },
  { name: 'École Polytechnique', distance: '8 min', description: 'Grande école d\'ingénieurs sur le plateau' },
  { name: 'Gare Massy TGV', distance: '15 min', description: 'Connexion TGV pour vos voyages en province' },
  { name: 'Aéroport d\'Orly', distance: '20 min', description: 'Transfert vers tous les terminaux d\'Orly' },
  { name: 'Paris Centre', distance: '35 min', description: 'Liaison directe vers tous les arrondissements parisiens' },
]

const lieux = [
  'CEA Saclay', 'Université Paris-Saclay', 'École Polytechnique', 'IHES',
  'Synchrotron SOLEIL', 'NeuroSpin', 'Campus urbain', 'Village de Saclay'
]

export default function TaxiSaclay() {
  return (
    <>
      <Header />
      <Breadcrumb items={[{ name: 'Taxi Saclay' }]} />
      <main>
        {/* Hero */}
        <section className="bg-yellow-400 py-4">
          <div className="container mx-auto px-4 text-center">
            <p className="text-black font-medium">
              Besoin d'un taxi à Saclay ? Appelez le{' '}
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
                  <span className="font-medium">Saclay (91400) - Essonne</span>
                </div>

                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                  Taxi à Saclay
                </h1>

                <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                  Votre service de <strong>taxi à Saclay</strong> et sur le <strong>plateau de Saclay</strong>, disponible 24h/24 et 7j/7.
                  Nous desservons le <strong>CEA</strong>, l'<strong>Université Paris-Saclay</strong>, les grandes écoles, les aéroports et les gares.
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
              Principales destinations depuis Saclay
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

        {/* Lieux */}
        <section className="py-12 md:py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 text-center">
              Taxi sur tout le plateau de Saclay
            </h2>
            <p className="text-gray-600 text-center mb-8 max-w-2xl mx-auto">
              Nous intervenons sur tout le plateau de Saclay et desservons l'ensemble des établissements et centres de recherche.
            </p>

            <div className="flex flex-wrap justify-center gap-3 mb-10">
              {lieux.map((lieu) => (
                <span key={lieu} className="bg-white text-gray-700 px-4 py-2 rounded-lg border border-gray-200">
                  {lieu}
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
                Votre taxi de confiance à Saclay
              </h2>

              <div className="prose prose-lg text-gray-600">
                <p>
                  <strong>TAXI Pro 91</strong> est votre partenaire de confiance pour tous vos déplacements à Saclay et sur le plateau de Saclay.
                  Pôle scientifique et technologique de renommée mondiale, le plateau de Saclay accueille des milliers de chercheurs,
                  étudiants et professionnels chaque jour.
                </p>

                <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">Plateau de Saclay et universités</h3>
                <p>
                  Le plateau de Saclay regroupe l'Université Paris-Saclay, l'École Polytechnique, le CEA, le CNRS et de nombreux
                  centres de recherche. Nos chauffeurs connaissent parfaitement le secteur et vous conduisent à l'adresse exacte
                  de votre établissement.
                </p>

                <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">Transferts aéroport et gare</h3>
                <p>
                  Depuis Saclay, rejoignez l'aéroport d'Orly en 20 minutes et la gare Massy TGV en 15 minutes.
                  Idéal pour les chercheurs et professionnels en déplacement. Suivi de vol et de train inclus.
                </p>

                <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">Transport médical conventionné</h3>
                <p>
                  Nous sommes agréés par la CPAM pour le transport médical. Pour vos rendez-vous médicaux depuis
                  Saclay, nous vous accompagnons avec professionnalisme et bienveillance.
                </p>
              </div>

              <div className="mt-8 p-6 bg-yellow-50 rounded-xl border border-yellow-200">
                <p className="text-gray-900 font-medium mb-4">
                  Réservez votre taxi à Saclay dès maintenant
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
      <RelatedCities currentSlug="taxi-saclay" />
      </main>
      <Footer />
    </>
  )
}
