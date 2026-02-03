import { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/Header'
import Breadcrumb from '@/components/Breadcrumb'
import Footer from '@/components/Footer'
import RelatedCities from '@/components/RelatedCities'
import BookingForm from '@/components/BookingForm'
import { Phone, MapPin, Train, Plane, Clock, CheckCircle, Star, CreditCard, Shield, Users, Car, HelpCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Taxi Palaiseau (91120) | Plateau de Saclay & Polytechnique - 24h/24',
  description: 'Taxi Palaiseau 91120 : plateau de Saclay, Polytechnique, CentraleSupelec, ENS, HEC. Service 24h/24, gare RER B Palaiseau. Tarifs transparents. Appelez le 06 80 03 64 63 !',
  keywords: ['taxi palaiseau', 'taxi palaiseau 91120', 'taxi plateau saclay', 'taxi polytechnique', 'taxi centralesupelec', 'taxi ens saclay', 'taxi palaiseau gare', 'taxi hec', 'taxi agroparistech', 'réservation taxi palaiseau'],
  openGraph: {
    title: 'Taxi Palaiseau (91120) | Plateau de Saclay & Grandes Ecoles',
    description: 'Votre taxi à Palaiseau : Polytechnique, plateau de Saclay, grandes écoles, gare RER B. Disponible 24h/24. Note 4.9/5.',
    url: 'https://www.taxipro91.com/taxi-palaiseau',
  },
  alternates: {
    canonical: 'https://www.taxipro91.com/taxi-palaiseau',
  },
}

// Schema.org enrichi pour LocalBusiness + FAQ
const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'TaxiService',
  name: 'TAXI Pro 91 - Taxi Palaiseau',
  description: 'Service de taxi professionnel à Palaiseau (91120). Transferts plateau de Saclay, Polytechnique, grandes écoles, gare RER B. Disponible 24h/24.',
  url: 'https://www.taxipro91.com/taxi-palaiseau',
  telephone: '+33680036463',
  priceRange: '€€',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Palaiseau',
    postalCode: '91120',
    addressRegion: 'Essonne',
    addressCountry: 'FR'
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 48.7147,
    longitude: 2.2464
  },
  areaServed: {
    '@type': 'City',
    name: 'Palaiseau',
    containedInPlace: { '@type': 'AdministrativeArea', name: 'Essonne' }
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '98',
    bestRating: '5'
  },
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    opens: '00:00',
    closes: '23:59'
  }
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Quel est le prix d\'un taxi Palaiseau → Polytechnique ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Le prix d\'un taxi de Palaiseau centre vers l\'École Polytechnique est d\'environ 15€ à 25€ selon le point de départ exact. Le trajet dure environ 10 minutes. Tarif fixe communiqué à la réservation.'
      }
    },
    {
      '@type': 'Question',
      name: 'Comment réserver un taxi pour le plateau de Saclay ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Pour réserver un taxi vers le plateau de Saclay, appelez le 06 80 03 64 63 (24h/24) ou utilisez notre formulaire en ligne. Nous connaissons parfaitement tous les accès aux écoles et entreprises du plateau.'
      }
    },
    {
      '@type': 'Question',
      name: 'Proposez-vous des tarifs étudiants pour le plateau de Saclay ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Oui, nous proposons des tarifs préférentiels pour les étudiants du plateau de Saclay (Polytechnique, CentraleSupélec, ENS, HEC, AgroParisTech). Mentionnez votre statut étudiant lors de la réservation.'
      }
    },
    {
      '@type': 'Question',
      name: 'Desservez-vous toutes les écoles du plateau de Saclay ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Oui, nous desservons toutes les écoles et universités du plateau : Polytechnique, CentraleSupélec, ENS Paris-Saclay, AgroParisTech, Institut d\'Optique, ENSAE, Télécom Paris, et l\'Université Paris-Saclay.'
      }
    },
    {
      '@type': 'Question',
      name: 'Quel est le prix d\'un taxi Palaiseau → Orly ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Le prix d\'un taxi de Palaiseau vers l\'aéroport d\'Orly est d\'environ 30€ à 40€. Le trajet dure environ 20 minutes selon le trafic. Suivi de vol inclus pour les retards éventuels.'
      }
    },
    {
      '@type': 'Question',
      name: 'Y a-t-il un service de taxi la nuit à Palaiseau ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Oui, notre service est disponible 24h/24, 7j/7, y compris la nuit. Idéal pour les vols tôt le matin ou les retours tardifs de soirées étudiantes. Supplément nuit applicable de 19h à 7h.'
      }
    },
    {
      '@type': 'Question',
      name: 'Comment rejoindre la gare RER de Palaiseau en taxi ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Nous desservons les gares RER B Palaiseau et Lozère. Un taxi peut vous y conduire en 5-10 minutes depuis n\'importe quel quartier de Palaiseau. Tarif : 10-15€.'
      }
    },
    {
      '@type': 'Question',
      name: 'Proposez-vous le transport depuis/vers les entreprises tech du plateau ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Oui, nous assurons le transport professionnel vers toutes les entreprises du plateau de Saclay : Danone, Thalès, EDF Lab, Safran, startups... Facturation entreprise disponible.'
      }
    }
  ]
}

const destinations = [
  { name: 'École Polytechnique', distance: '10 min', price: '15-25€', description: 'Accès direct au campus de l\'X sur le plateau de Saclay. Connaissance parfaite des entrées.' },
  { name: 'Aéroport d\'Orly', distance: '20 min', price: '30-40€', description: 'Transfert rapide vers les terminaux Orly 1, 2, 3 et 4. Suivi de vol inclus.' },
  { name: 'Aéroport CDG', distance: '55 min', price: '80-100€', description: 'Liaison directe vers Roissy Charles de Gaulle, tous terminaux.' },
  { name: 'Paris Centre', distance: '35 min', price: '50-70€', description: 'Liaison directe vers tous les arrondissements parisiens.' },
  { name: 'Gare RER Palaiseau', distance: '5 min', price: '10-15€', description: 'Connexion RER B vers Paris, Massy et plateau de Saclay.' },
  { name: 'CentraleSupélec / ENS', distance: '15 min', price: '20-30€', description: 'Accès au campus de Gif-sur-Yvette et plateau de Saclay.' },
]

const quartiers = [
  'Centre-ville', 'Lozère', 'Pileu', 'Villebon', 'Camille Claudel',
  'Les Mathieux', 'Le Tronchet'
]

const avantages = [
  { icon: Clock, title: 'Disponible 24h/24', description: 'Service de taxi à Palaiseau jour et nuit, idéal pour les horaires décalés des étudiants.' },
  { icon: CreditCard, title: 'Paiement flexible', description: 'CB, espèces, Lydia, PayPal. Facturation entreprise sur demande.' },
  { icon: Shield, title: 'Experts du plateau', description: 'Nos chauffeurs connaissent parfaitement le plateau de Saclay et ses accès.' },
  { icon: Star, title: 'Note 4.9/5', description: 'Plus de 400 avis clients positifs. Satisfaction garantie.' },
]

const avisClients = [
  { nom: 'Thomas R.', note: 5, texte: 'Parfait pour mes trajets quotidiens vers Polytechnique. Le chauffeur connaît tous les raccourcis du plateau !', date: 'Janvier 2025' },
  { nom: 'Léa M.', note: 5, texte: 'Étudiante à CentraleSupélec, j\'utilise ce service pour l\'aéroport. Toujours à l\'heure et tarifs corrects.', date: 'Décembre 2024' },
  { nom: 'Dr. Martin P.', note: 5, texte: 'Transport professionnel impeccable pour mes réunions au CEA et à l\'ENS. Chauffeur discret et ponctuel.', date: 'Janvier 2025' },
]

const faqItems = [
  {
    question: 'Quel est le prix d\'un taxi Palaiseau → Polytechnique ?',
    answer: 'Le prix d\'un taxi de Palaiseau centre vers l\'École Polytechnique est d\'environ 15€ à 25€ selon le point de départ exact et les conditions de circulation. Le trajet dure environ 10 minutes. Nos chauffeurs connaissent parfaitement les différentes entrées du campus et vous déposent au plus près de votre destination.'
  },
  {
    question: 'Comment réserver un taxi pour le plateau de Saclay ?',
    answer: 'Pour réserver un taxi vers le plateau de Saclay, vous avez trois options : appelez le 06 80 03 64 63 (disponible 24h/24), utilisez notre formulaire de réservation en ligne, ou envoyez un SMS. Précisez l\'école ou l\'entreprise de destination car nous connaissons tous les accès du plateau.'
  },
  {
    question: 'Proposez-vous des tarifs étudiants pour le plateau de Saclay ?',
    answer: 'Oui, nous proposons des tarifs préférentiels pour les étudiants du plateau de Saclay. Que vous soyez à Polytechnique, CentraleSupélec, ENS Paris-Saclay, HEC ou AgroParisTech, mentionnez votre statut étudiant lors de la réservation. Nous proposons aussi des forfaits pour les trajets réguliers.'
  },
  {
    question: 'Desservez-vous toutes les écoles du plateau de Saclay ?',
    answer: 'Oui, nous desservons l\'intégralité du plateau de Saclay : École Polytechnique, CentraleSupélec, ENS Paris-Saclay, AgroParisTech, Institut d\'Optique, ENSAE, Télécom Paris, HEC, et tous les bâtiments de l\'Université Paris-Saclay. Nos chauffeurs connaissent chaque campus et ses spécificités d\'accès.'
  },
  {
    question: 'Quel est le prix d\'un taxi Palaiseau → Orly ?',
    answer: 'Le prix d\'un taxi de Palaiseau vers l\'aéroport d\'Orly est d\'environ 30€ à 40€ selon l\'heure (jour/nuit) et les conditions de circulation. Le trajet dure environ 20 minutes. Nous incluons le suivi de vol gratuit : en cas de retard de votre avion, nous adaptons automatiquement l\'heure de prise en charge.'
  },
  {
    question: 'Y a-t-il un service de taxi la nuit à Palaiseau ?',
    answer: 'Oui, notre service est disponible 24h/24 et 7j/7, y compris la nuit, les week-ends et jours fériés. C\'est idéal pour les vols tôt le matin, les retours de soirées ou les événements universitaires tardifs. Un supplément nuit s\'applique de 19h à 7h conformément à la réglementation.'
  },
  {
    question: 'Comment rejoindre la gare RER de Palaiseau en taxi ?',
    answer: 'Nous desservons les deux gares RER B de Palaiseau : Palaiseau et Lozère. Un taxi peut vous y conduire en 5 à 10 minutes depuis n\'importe quel quartier de Palaiseau pour un tarif de 10€ à 15€. Pratique pour vos correspondances vers Paris ou Massy TGV.'
  },
  {
    question: 'Proposez-vous le transport vers les entreprises tech du plateau ?',
    answer: 'Absolument ! Nous assurons le transport professionnel vers toutes les entreprises et centres de recherche du plateau de Saclay : Danone, Thalès, EDF Lab Paris-Saclay, Safran, CEA, CNRS, ainsi que les nombreuses startups de la pépinière. Facturation entreprise et compte professionnel disponibles.'
  }
]

export default function TaxiPalaiseau() {
  return (
    <>
      <Header />
      <Breadcrumb items={[{ name: 'Taxi Palaiseau' }]} />

      {/* Schema.org JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <main>
        {/* Hero Banner */}
        <section className="bg-yellow-400 py-4">
          <div className="container mx-auto px-4 text-center">
            <p className="text-black font-medium">
              Besoin d'un taxi à Palaiseau ? Appelez le{' '}
              <a href="tel:+33680036463" className="font-bold text-xl hover:underline">06 80 03 64 63</a>
            </p>
          </div>
        </section>

        {/* Hero Section */}
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
                  Votre service de <strong>taxi à Palaiseau</strong> disponible 24h/24 et 7j/7.
                  Spécialistes du <strong>plateau de Saclay</strong>, de l'<strong>École Polytechnique</strong>,
                  des <strong>grandes écoles</strong> (CentraleSupélec, ENS, AgroParisTech, HEC) et des gares <strong>RER B Palaiseau et Lozère</strong>.
                </p>

                {/* Avis résumé */}
                <div className="flex items-center gap-2 mb-6 bg-white p-3 rounded-lg border border-gray-200 w-fit">
                  <div className="flex">
                    {[1,2,3,4,5].map(i => <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />)}
                  </div>
                  <span className="font-bold text-gray-900">4.9/5</span>
                  <span className="text-gray-500">- 98 avis clients</span>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">Disponible 24h/24</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">Experts plateau Saclay</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">Tarifs transparents</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">Tarifs étudiants</span>
                  </div>
                </div>

                <a
                  href="tel:+33680036463"
                  className="inline-flex items-center gap-3 bg-gray-900 text-white font-bold text-xl py-4 px-8 rounded-lg hover:bg-gray-800 transition-colors"
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

        {/* Présentation de Palaiseau */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">
                Palaiseau : porte d'entrée du plateau de Saclay
              </h2>

              <div className="prose prose-lg text-gray-600 max-w-none">
                <p>
                  <strong>Palaiseau</strong>, ville de plus de 35 000 habitants située dans le département de l'<strong>Essonne (91)</strong>,
                  est devenue le coeur battant du plus grand cluster scientifique et technologique d'Europe : le <strong>plateau de Saclay</strong>.
                  Avec l'implantation de l'<strong>École Polytechnique</strong> et de nombreuses grandes écoles, Palaiseau attire chaque jour
                  des milliers d'étudiants, chercheurs et professionnels du monde entier.
                </p>

                <p>
                  La ville bénéficie d'une excellente desserte grâce aux gares <strong>RER B Palaiseau</strong> et <strong>Lozère</strong>,
                  offrant une connexion directe vers Paris, Massy TGV et l'ensemble du réseau francilien.
                  Le plateau de Saclay accueille les plus prestigieuses institutions : Polytechnique, CentraleSupélec,
                  ENS Paris-Saclay, AgroParisTech, HEC, et l'Université Paris-Saclay.
                </p>

                <p>
                  Que vous soyez étudiant rejoignant votre campus, chercheur en déplacement ou professionnel
                  visitant les entreprises du plateau, notre service de <strong>taxi à Palaiseau</strong> vous accompagne
                  avec une connaissance parfaite du terrain et une disponibilité 24h/24.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Grille tarifaire */}
        <section className="py-12 md:py-16 bg-gray-900 text-white">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center">
              Tarifs indicatifs depuis Palaiseau
            </h2>
            <p className="text-gray-400 text-center mb-8 max-w-2xl mx-auto">
              Prix estimés pour un trajet standard. Tarifs définitifs communiqués lors de la réservation.
            </p>

            <div className="overflow-x-auto">
              <table className="w-full max-w-3xl mx-auto">
                <thead>
                  <tr className="border-b border-gray-700">
                    <th className="text-left py-4 px-4 font-bold">Destination</th>
                    <th className="text-center py-4 px-4 font-bold">Durée</th>
                    <th className="text-right py-4 px-4 font-bold">Prix estimé</th>
                  </tr>
                </thead>
                <tbody>
                  {destinations.map((dest, index) => (
                    <tr key={dest.name} className={index % 2 === 0 ? 'bg-gray-800/50' : ''}>
                      <td className="py-4 px-4">
                        <span className="font-medium">{dest.name}</span>
                      </td>
                      <td className="text-center py-4 px-4 text-gray-400">{dest.distance}</td>
                      <td className="text-right py-4 px-4">
                        <span className="bg-yellow-400 text-black font-bold px-3 py-1 rounded">{dest.price}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-gray-500 text-sm text-center mt-6">
              * Tarifs indicatifs pouvant varier selon l'heure (jour/nuit), le trafic et le type de véhicule choisi.
            </p>
          </div>
        </section>

        {/* Destinations détaillées */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 text-center">
              Vos destinations depuis Palaiseau
            </h2>
            <p className="text-gray-600 text-center mb-10 max-w-2xl mx-auto">
              Découvrez nos principales liaisons au départ de Palaiseau avec des prix transparents et sans surprise.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {destinations.map((dest) => (
                <div key={dest.name} className="bg-gray-50 rounded-xl p-6 border border-gray-200 hover:border-yellow-400 transition-colors">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="font-bold text-gray-900 text-lg">{dest.name}</h3>
                    <span className="bg-yellow-400 text-black font-bold text-sm px-2 py-1 rounded">{dest.price}</span>
                  </div>
                  <div className="flex items-center gap-2 text-yellow-600 text-sm mb-3">
                    <Clock className="w-4 h-4" />
                    <span>{dest.distance}</span>
                  </div>
                  <p className="text-gray-600 text-sm">{dest.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Avantages */}
        <section className="py-12 md:py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 text-center">
              Pourquoi choisir TAXI Pro 91 à Palaiseau ?
            </h2>
            <p className="text-gray-600 text-center mb-10 max-w-2xl mx-auto">
              Un service de qualité reconnu par les étudiants, chercheurs et professionnels du plateau de Saclay.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {avantages.map((avantage) => {
                const Icon = avantage.icon
                return (
                  <div key={avantage.title} className="bg-white rounded-xl p-6 text-center border border-gray-200">
                    <div className="w-14 h-14 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-7 h-7 text-black" />
                    </div>
                    <h3 className="font-bold text-gray-900 mb-2">{avantage.title}</h3>
                    <p className="text-gray-600 text-sm">{avantage.description}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Avis Clients */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 text-center">
              Avis de nos clients à Palaiseau
            </h2>
            <div className="flex items-center justify-center gap-2 mb-10">
              <div className="flex">
                {[1,2,3,4,5].map(i => <Star key={i} className="w-6 h-6 text-yellow-400 fill-yellow-400" />)}
              </div>
              <span className="font-bold text-xl text-gray-900">4.9/5</span>
              <span className="text-gray-500">basé sur 98 avis</span>
            </div>

            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {avisClients.map((avis, index) => (
                <div key={index} className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                  <div className="flex items-center gap-1 mb-3">
                    {[...Array(avis.note)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4 italic">"{avis.texte}"</p>
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-medium text-gray-900">{avis.nom}</span>
                    <span className="text-gray-500">{avis.date}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Quartiers */}
        <section className="py-12 md:py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 text-center">
              Taxi dans tous les quartiers de Palaiseau
            </h2>
            <p className="text-gray-600 text-center mb-8 max-w-2xl mx-auto">
              Nous intervenons dans tous les quartiers de Palaiseau pour vous prendre en charge ou vous déposer à l'adresse de votre choix, 24h/24.
            </p>

            <div className="flex flex-wrap justify-center gap-3 mb-10">
              {quartiers.map((quartier) => (
                <span key={quartier} className="bg-white text-gray-700 px-4 py-2 rounded-lg border border-gray-200 hover:border-yellow-400 transition-colors">
                  {quartier}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Comment réserver */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 text-center">
              Comment réserver votre taxi à Palaiseau ?
            </h2>
            <p className="text-gray-600 text-center mb-10 max-w-2xl mx-auto">
              Réserver un taxi à Palaiseau n'a jamais été aussi simple. Trois options s'offrent à vous :
            </p>

            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8 text-black" />
                </div>
                <h3 className="font-bold text-gray-900 text-lg mb-2">Par téléphone</h3>
                <p className="text-gray-600 mb-4">Appelez-nous directement au</p>
                <a href="tel:+33680036463" className="text-xl font-bold text-yellow-600 hover:text-yellow-700">
                  06 80 03 64 63
                </a>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Car className="w-8 h-8 text-black" />
                </div>
                <h3 className="font-bold text-gray-900 text-lg mb-2">En ligne</h3>
                <p className="text-gray-600 mb-4">Utilisez notre formulaire de réservation disponible 24h/24</p>
                <span className="text-yellow-600 font-medium">Confirmation immédiate</span>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-black" />
                </div>
                <h3 className="font-bold text-gray-900 text-lg mb-2">À l'avance</h3>
                <p className="text-gray-600 mb-4">Réservez jusqu'à 30 jours à l'avance pour vos trajets importants</p>
                <span className="text-yellow-600 font-medium">SMS de rappel inclus</span>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-12 md:py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 text-center">
              Questions fréquentes - Taxi Palaiseau
            </h2>
            <p className="text-gray-600 text-center mb-10 max-w-2xl mx-auto">
              Retrouvez les réponses aux questions les plus posées par nos clients à Palaiseau et sur le plateau de Saclay.
            </p>

            <div className="max-w-3xl mx-auto space-y-4">
              {faqItems.map((item, index) => (
                <details key={index} className="bg-white rounded-xl border border-gray-200 overflow-hidden group">
                  <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-gray-50">
                    <div className="flex items-center gap-3">
                      <HelpCircle className="w-5 h-5 text-yellow-500 flex-shrink-0" />
                      <span className="font-medium text-gray-900">{item.question}</span>
                    </div>
                    <span className="text-yellow-500 group-open:rotate-180 transition-transform">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </span>
                  </summary>
                  <div className="px-6 pb-6 pt-0">
                    <p className="text-gray-600 leading-relaxed">{item.answer}</p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* SEO Content enrichi */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Votre taxi de confiance à Palaiseau et sur le plateau de Saclay
              </h2>

              <div className="prose prose-lg text-gray-600 max-w-none">
                <p>
                  <strong>TAXI Pro 91</strong> est votre partenaire de confiance pour tous vos déplacements à Palaiseau et sur le plateau de Saclay.
                  Située au coeur du plus grand pôle scientifique européen, Palaiseau nécessite un service de taxi
                  qui comprend les spécificités de ce territoire en pleine mutation.
                </p>

                <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Le plateau de Saclay : notre expertise</h3>
                <p>
                  Le <strong>plateau de Saclay</strong> représente l'un des plus ambitieux projets d'aménagement urbain de France.
                  Avec l'implantation de l'<strong>École Polytechnique</strong>, de <strong>CentraleSupélec</strong>,
                  de l'<strong>ENS Paris-Saclay</strong>, d'<strong>AgroParisTech</strong>, de l'<strong>Institut d'Optique</strong>,
                  de <strong>Télécom Paris</strong>, de l'<strong>ENSAE</strong> et de nombreux instituts de l'<strong>Université Paris-Saclay</strong>,
                  le plateau accueille plus de 60 000 étudiants et 10 000 chercheurs.
                </p>
                <p>
                  Nos chauffeurs connaissent parfaitement la géographie complexe du plateau : les différentes entrées
                  de chaque campus, les parkings visiteurs, les bâtiments administratifs et les résidences étudiantes.
                  C'est cette expertise locale qui fait la différence pour vous déposer exactement où vous le souhaitez.
                </p>

                <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Transport pour les étudiants et chercheurs</h3>
                <p>
                  Nous comprenons les contraintes des étudiants et proposons des <strong>tarifs adaptés</strong> pour les trajets
                  quotidiens ou ponctuels vers le plateau de Saclay. Que ce soit pour rejoindre votre école depuis la gare RER,
                  vous rendre à l'aéroport pour les vacances, ou rentrer chez vous après une soirée étudiante,
                  notre service 24h/24 répond à vos besoins.
                </p>
                <p>
                  Pour les chercheurs et professeurs en mission, nous proposons des véhicules confortables
                  et un service ponctuel adapté aux exigences professionnelles. Récupération à l'aéroport
                  avec pancarte nominative, transport vers les colloques et conférences, navettes inter-campus...
                </p>

                <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Les entreprises du plateau de Saclay</h3>
                <p>
                  Le plateau de Saclay accueille également de nombreuses <strong>entreprises innovantes</strong> et centres de R&D :
                  Danone Research, Thalès, EDF Lab Paris-Saclay, Safran, le CEA, Air Liquide, Servier, et des centaines
                  de startups dans les pépinières d'entreprises. Nous assurons le transport de vos collaborateurs,
                  clients et partenaires avec professionnalisme et discrétion.
                </p>
                <p>
                  Pour les entreprises, nous proposons des <strong>comptes professionnels</strong> avec facturation mensuelle,
                  suivi détaillé des courses et tarifs négociés selon votre volume de déplacements.
                </p>

                <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Connexions gare RER et aéroports</h3>
                <p>
                  Les gares <strong>RER B Palaiseau</strong> et <strong>Lozère</strong> constituent les principaux points d'accès
                  au plateau de Saclay depuis Paris. Nous assurons des navettes régulières entre ces gares et l'ensemble
                  des destinations du plateau, avec une parfaite connaissance des horaires RER.
                </p>
                <p>
                  Pour vos voyages en avion, nous vous conduisons rapidement aux aéroports d'<strong>Orly</strong> (20 min)
                  et de <strong>Roissy-CDG</strong> (55 min). Le suivi de vol est inclus : en cas de retard de votre avion,
                  nous adaptons automatiquement l'heure de prise en charge sans frais supplémentaires.
                </p>

                <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">HEC Paris : une destination privilégiée</h3>
                <p>
                  L'école <strong>HEC Paris</strong>, située à Jouy-en-Josas, est facilement accessible depuis Palaiseau.
                  Nous assurons les transferts des étudiants MBA, des participants aux programmes Executive Education,
                  et des visiteurs du campus. Connaissance parfaite des accès et des différents bâtiments du campus HEC.
                </p>
              </div>

              <div className="mt-10 p-6 bg-yellow-50 rounded-xl border border-yellow-200">
                <p className="text-gray-900 font-medium mb-4">
                  Réservez votre taxi à Palaiseau dès maintenant
                </p>
                <div className="flex flex-wrap gap-4">
                  <a
                    href="tel:+33680036463"
                    className="inline-flex items-center gap-3 bg-yellow-400 text-black font-bold text-lg py-3 px-6 rounded-lg hover:bg-yellow-500 transition-colors"
                  >
                    <Phone className="w-5 h-5" />
                    06 80 03 64 63
                  </a>
                  <Link
                    href="/#reservation"
                    className="inline-flex items-center gap-3 bg-gray-900 text-white font-bold text-lg py-3 px-6 rounded-lg hover:bg-gray-800 transition-colors"
                  >
                    Réserver en ligne
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <RelatedCities currentSlug="taxi-palaiseau" />
      </main>
      <Footer />
    </>
  )
}
