import { Metadata } from 'next'
import Header from '@/components/Header'
import Breadcrumb from '@/components/Breadcrumb'
import Footer from '@/components/Footer'
import RelatedCities from '@/components/RelatedCities'
import BookingForm from '@/components/BookingForm'
import { Phone, MapPin, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Taxi Longjumeau (91160) | Gare, Hôpital, Aéroport - 24h/24',
  description: 'Taxi à Longjumeau 91160. Service 24h/24 pour gare de Longjumeau, centre hospitalier, aéroport Orly. Chauffeurs professionnels, tarifs transparents. Réservez !',
  keywords: ['taxi longjumeau', 'taxi longjumeau 91160', 'taxi gare longjumeau', 'taxi hopital longjumeau', 'réservation taxi longjumeau', 'taxi longjumeau orly'],
  openGraph: {
    title: 'Taxi Longjumeau (91160) | Service 24h/24',
    description: 'Votre taxi à Longjumeau : gare, hôpital, aéroport. Disponible 24h/24.',
    url: 'https://taxipro91.com/taxi-longjumeau',
  },
  alternates: {
    canonical: 'https://taxipro91.com/taxi-longjumeau',
  },
}

const destinations = [
  { name: 'Gare de Longjumeau', distance: '3 min', description: 'Accès RER C vers Paris et banlieue sud' },
  { name: 'Centre hospitalier', distance: '5 min', description: 'Hôpital de Longjumeau et cliniques' },
  { name: 'Aéroport d\'Orly', distance: '12 min', description: 'Transfert rapide via A6' },
  { name: 'Gare Massy TGV', distance: '10 min', description: 'Connexion TGV et RER B' },
  { name: 'Zone commerciale', distance: '5 min', description: 'Accès aux centres commerciaux' },
  { name: 'Paris Centre', distance: '30 min', description: 'Via A6 ou RER' },
]

const quartiers = [
  'Centre-ville', 'Bel-Air', 'Parc de Nozay', 'Les Music\'Halles',
  'Vauguillaume', 'L\'Yvette', 'Zone industrielle'
]

export default function TaxiLongjumeau() {
  return (
    <>
      <Header />
      <Breadcrumb items={[{ name: 'Taxi Longjumeau' }]} />
      <main>
        {/* Hero */}
        <section className="bg-yellow-400 py-4">
          <div className="container mx-auto px-4 text-center">
            <p className="text-black font-medium">
              Taxi Longjumeau disponible 24h/24 :{' '}
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
                  <span className="font-medium">Longjumeau (91160) - Essonne</span>
                </div>

                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                  Taxi à Longjumeau
                </h1>

                <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                  Service de <strong>taxi à Longjumeau</strong> disponible jour et nuit.
                  Nous assurons vos transferts vers la <strong>gare de Longjumeau</strong>,
                  le <strong>centre hospitalier</strong>, l'<strong>aéroport d'Orly</strong> et toutes vos destinations.
                </p>

                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">Service 24h/24</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">Transport médical</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">Accès A6 rapide</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">Tarifs préfectoraux</span>
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
              Destinations depuis Longjumeau
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
              Taxi dans tous les quartiers de Longjumeau
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
                Votre taxi de proximité à Longjumeau
              </h2>

              <div className="prose prose-lg text-gray-600">
                <p>
                  <strong>Longjumeau</strong> bénéficie d'une situation géographique privilégiée avec un accès direct
                  à l'autoroute A6 et une gare RER C. Notre service de taxi à Longjumeau vous permet de profiter
                  de cette connexion pour tous vos déplacements.
                </p>

                <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">Transport médical à Longjumeau</h3>
                <p>
                  Le centre hospitalier de Longjumeau est un établissement important de l'Essonne.
                  Nous assurons le transport des patients pour leurs rendez-vous médicaux, examens et hospitalisations.
                  Taxi conventionné CPAM disponible.
                </p>

                <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">Gare de Longjumeau</h3>
                <p>
                  La gare de Longjumeau est desservie par le RER C. Nous vous déposons ou venons vous chercher
                  à la gare pour vos trajets quotidiens vers Paris ou la banlieue sud.
                </p>

                <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">Accès rapide à Orly</h3>
                <p>
                  Grâce à l'A6, nous rejoignons l'aéroport d'Orly en seulement 12 minutes depuis Longjumeau.
                  Service de navette aéroport disponible 24h/24, 7j/7.
                </p>
              </div>

              <div className="mt-8 p-6 bg-yellow-50 rounded-xl border border-yellow-200">
                <p className="text-gray-900 font-medium mb-4">
                  Réservez votre taxi à Longjumeau
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
      <RelatedCities currentSlug="taxi-longjumeau" />
      </main>
      <Footer />
    </>
  )
}
