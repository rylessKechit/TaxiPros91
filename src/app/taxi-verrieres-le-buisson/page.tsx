import { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/Header'
import Breadcrumb from '@/components/Breadcrumb'
import Footer from '@/components/Footer'
import RelatedCities from '@/components/RelatedCities'
import BookingForm from '@/components/BookingForm'
import { Phone, MapPin, Train, Plane, Clock, CheckCircle, Star, CreditCard, Shield, Users, Car, HelpCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Taxi Verrières-le-Buisson (91370) | Réservation 24h/24 - Antony & Massy',
  description: 'Réservez votre taxi à Verrières-le-Buisson 91370. Service disponible 24h/24 pour vos trajets vers Antony RER B, Massy TGV, aéroport Orly. Chauffeurs professionnels, tarifs transparents. Appelez maintenant le 06 80 03 64 63 !',
  keywords: ['taxi verrières-le-buisson', 'taxi verrières-le-buisson 91370', 'taxi verrières buisson', 'taxi verrières antony', 'taxi verrières massy', 'réservation taxi verrières', 'taxi verrières orly', 'prix taxi verrières orly', 'taxi verrières paris'],
  openGraph: {
    title: 'Taxi Verrières-le-Buisson (91370) | Service 24h/24 - Antony & Massy',
    description: 'Votre taxi à Verrières-le-Buisson : Antony RER B, Massy TGV, aéroport Orly. Réservation rapide, tarifs transparents. Note 4.9/5.',
    url: 'https://www.taxipro91.com/taxi-verrieres-le-buisson',
  },
  alternates: {
    canonical: 'https://www.taxipro91.com/taxi-verrieres-le-buisson',
  },
}

// Schema.org enrichi pour LocalBusiness + FAQ
const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'TaxiService',
  name: 'TAXI Pro 91 - Taxi Verrières-le-Buisson',
  description: 'Service de taxi professionnel à Verrières-le-Buisson (91370). Transferts Antony RER B, Massy TGV, aéroport Orly. Disponible 24h/24.',
  url: 'https://www.taxipro91.com/taxi-verrieres-le-buisson',
  telephone: '+33680036463',
  priceRange: '€€',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Verrières-le-Buisson',
    postalCode: '91370',
    addressRegion: 'Essonne',
    addressCountry: 'FR'
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 48.7469,
    longitude: 2.2678
  },
  areaServed: {
    '@type': 'City',
    name: 'Verrières-le-Buisson',
    containedInPlace: { '@type': 'AdministrativeArea', name: 'Essonne' }
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '89',
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
      name: 'Quel est le prix d\'un taxi Verrières-le-Buisson → Orly ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Le prix d\'un taxi de Verrières-le-Buisson vers l\'aéroport d\'Orly est d\'environ 25€ à 35€ selon l\'heure et le trafic. Ce tarif est fixe et comprend la prise en charge. Réservez à l\'avance pour bénéficier du meilleur tarif.'
      }
    },
    {
      '@type': 'Question',
      name: 'Y a-t-il une gare à Verrières-le-Buisson ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Non, Verrières-le-Buisson ne dispose pas de gare. Les habitants utilisent principalement la gare RER B d\'Antony (5 min en taxi) ou la gare Massy TGV (8 min en taxi). Notre service de taxi assure la liaison vers ces deux gares 24h/24.'
      }
    },
    {
      '@type': 'Question',
      name: 'Comment réserver un taxi à Verrières-le-Buisson ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Pour réserver un taxi à Verrières-le-Buisson, vous pouvez appeler le 06 80 03 64 63 disponible 24h/24, ou utiliser notre formulaire de réservation en ligne. La confirmation est immédiate et vous recevez un SMS de rappel.'
      }
    },
    {
      '@type': 'Question',
      name: 'Quel délai pour avoir un taxi à Verrières-le-Buisson ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'En moyenne, un taxi peut être disponible à Verrières-le-Buisson en 10 à 15 minutes. Pour les trajets vers les gares ou aéroports, nous recommandons de réserver à l\'avance pour garantir votre prise en charge.'
      }
    },
    {
      '@type': 'Question',
      name: 'Proposez-vous le transport médical à Verrières-le-Buisson ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Oui, nous sommes conventionnés CPAM pour le transport médical à Verrières-le-Buisson. Nous assurons vos trajets vers les hôpitaux, cliniques et centres médicaux avec prise en charge de votre bon de transport.'
      }
    },
    {
      '@type': 'Question',
      name: 'Quel est le prix d\'un taxi pour rejoindre Antony depuis Verrières ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Le trajet en taxi de Verrières-le-Buisson vers Antony (centre-ville ou gare RER B) coûte entre 10€ et 15€ pour environ 5 minutes de trajet. Ce tarif inclut la prise en charge et l\'attente si nécessaire.'
      }
    },
    {
      '@type': 'Question',
      name: 'Acceptez-vous les paiements par carte bancaire ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Oui, tous nos taxis acceptent le paiement par carte bancaire (Visa, Mastercard), en espèces, et les bons de transport CPAM. Le paiement s\'effectue à la fin de la course.'
      }
    },
    {
      '@type': 'Question',
      name: 'Desservez-vous tous les quartiers de Verrières-le-Buisson ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Oui, nous intervenons dans tous les quartiers de Verrières-le-Buisson : Centre-bourg, Amblainvilliers, Les Antes, limite Igny, et tous les secteurs résidentiels. Prise en charge à votre domicile 24h/24.'
      }
    }
  ]
}

const destinations = [
  { name: 'Gare RER B Antony', distance: '5 min', price: '10-15€', description: 'Connexion RER B vers Paris et Orlyval vers l\'aéroport. Accès rapide au centre d\'Antony.' },
  { name: 'Gare Massy TGV', distance: '8 min', price: '12-18€', description: 'Desserte directe de la gare TGV pour vos voyages en province et RER B/C.' },
  { name: 'Aéroport d\'Orly', distance: '15 min', price: '25-35€', description: 'Transfert rapide vers les terminaux Orly 1, 2, 3 et 4. Suivi de vol inclus.' },
  { name: 'Aéroport CDG', distance: '45 min', price: '70-90€', description: 'Liaison directe vers Roissy Charles de Gaulle, tous terminaux.' },
  { name: 'Paris Centre', distance: '25 min', price: '40-55€', description: 'Liaison directe vers tous les arrondissements parisiens.' },
  { name: 'Plateau de Saclay', distance: '15 min', price: '20-30€', description: 'Accès aux universités, grandes écoles et centres de recherche.' },
]

const quartiers = [
  'Centre-bourg', 'Amblainvilliers', 'Les Antes', 'Limite Igny',
  'La Gâtine', 'Les Gâtines', 'Forêt de Verrières', 'Le Petit Verrières'
]

const avantages = [
  { icon: Clock, title: 'Disponible 24h/24', description: 'Service de taxi à Verrières-le-Buisson jour et nuit, week-ends et jours fériés inclus.' },
  { icon: CreditCard, title: 'Paiement flexible', description: 'CB, espèces, bons CPAM. Facturation entreprise sur demande.' },
  { icon: Shield, title: 'Chauffeurs professionnels', description: 'Conducteurs expérimentés, véhicules récents et entretenus.' },
  { icon: Star, title: 'Note 4.9/5', description: 'Plus de 89 avis clients positifs. Satisfaction garantie.' },
]

const avisClients = [
  { nom: 'Catherine B.', note: 5, texte: 'Excellent service pour mes trajets réguliers vers Antony RER. Chauffeur toujours ponctuel et agréable. Je recommande vivement !', date: 'Janvier 2025' },
  { nom: 'Jean-Pierre M.', note: 5, texte: 'Taxi réservé pour Orly à 5h du matin, le chauffeur était là 5 minutes avant. Prix conforme, véhicule impeccable.', date: 'Décembre 2024' },
  { nom: 'Isabelle L.', note: 5, texte: 'Parfait pour rejoindre Massy TGV avec mes valises. Le chauffeur connaît parfaitement le quartier et les raccourcis.', date: 'Janvier 2025' },
]

const faqItems = [
  {
    question: 'Quel est le prix d\'un taxi Verrières-le-Buisson → Orly ?',
    answer: 'Le prix d\'un taxi de Verrières-le-Buisson vers l\'aéroport d\'Orly est d\'environ 25€ à 35€ selon l\'heure (jour/nuit) et les conditions de circulation. Ce tarif est fixe et comprend la prise en charge, l\'attente à l\'aéroport et l\'aide aux bagages. Pour un aller-retour, bénéficiez d\'un tarif préférentiel.'
  },
  {
    question: 'Y a-t-il une gare à Verrières-le-Buisson ?',
    answer: 'Non, Verrières-le-Buisson ne dispose pas de gare ferroviaire. C\'est une ville résidentielle qui dépend des gares voisines. Les deux options principales sont la gare RER B d\'Antony (5 min en taxi, connexion vers Paris et Orlyval) et la gare Massy TGV (8 min en taxi, TGV + RER B/C). Notre service de taxi assure ces liaisons 24h/24.'
  },
  {
    question: 'Comment réserver un taxi à Verrières-le-Buisson ?',
    answer: 'Pour réserver un taxi à Verrières-le-Buisson, trois options s\'offrent à vous : appelez le 06 80 03 64 63 (disponible 24h/24), utilisez notre formulaire de réservation en ligne, ou envoyez un SMS. La confirmation est immédiate et vous recevez un rappel avant votre course.'
  },
  {
    question: 'Quel délai pour avoir un taxi à Verrières-le-Buisson ?',
    answer: 'En réservation immédiate, un taxi peut être à votre adresse à Verrières-le-Buisson en 10 à 15 minutes en moyenne. Pour les trajets vers les gares ou aéroports, nous recommandons de réserver au moins 2 heures à l\'avance pour garantir la disponibilité.'
  },
  {
    question: 'Proposez-vous le transport médical à Verrières-le-Buisson ?',
    answer: 'Oui, nous sommes conventionnés par la CPAM (Caisse Primaire d\'Assurance Maladie) pour le transport médical. Nous assurons vos trajets vers les hôpitaux, cliniques, centres de dialyse et cabinets médicaux de la région. Présentez votre bon de transport et nous nous occupons des formalités.'
  },
  {
    question: 'Quel est le prix d\'un taxi pour rejoindre Antony depuis Verrières ?',
    answer: 'Le trajet en taxi de Verrières-le-Buisson vers Antony (centre-ville ou gare RER B) coûte entre 10€ et 15€ pour environ 5 minutes de trajet. Ce tarif inclut la prise en charge et l\'aide aux bagages. Idéal pour rejoindre le RER B ou l\'Orlyval.'
  },
  {
    question: 'Acceptez-vous les paiements par carte bancaire ?',
    answer: 'Oui, tous nos véhicules sont équipés de terminaux de paiement. Nous acceptons les cartes Visa, Mastercard, American Express, ainsi que les espèces et les bons de transport CPAM. Facturation entreprise disponible sur demande.'
  },
  {
    question: 'Desservez-vous tous les quartiers de Verrières-le-Buisson ?',
    answer: 'Absolument ! Nous intervenons dans tous les quartiers de Verrières-le-Buisson : Centre-bourg, Amblainvilliers, Les Antes, limite Igny, La Gâtine, et tous les secteurs résidentiels. Prise en charge directe à votre domicile, 24h/24 et 7j/7.'
  }
]

export default function TaxiVerrieres() {
  return (
    <>
      <Header />
      <Breadcrumb items={[{ name: 'Taxi Verrières-le-Buisson' }]} />

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
              Besoin d'un taxi à Verrières-le-Buisson ? Appelez le{' '}
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
                  <span className="font-medium">Verrières-le-Buisson (91370) - Essonne</span>
                </div>

                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                  Taxi à Verrières-le-Buisson
                </h1>

                <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                  Votre service de <strong>taxi à Verrières-le-Buisson</strong> disponible 24h/24 et 7j/7.
                  Nous assurons tous vos trajets vers <strong>la gare RER B d'Antony</strong>,
                  <strong> la gare Massy TGV</strong>, l'<strong>aéroport d'Orly</strong> et Paris depuis cette ville résidentielle prisée.
                </p>

                {/* Avis résumé */}
                <div className="flex items-center gap-2 mb-6 bg-white p-3 rounded-lg border border-gray-200 w-fit">
                  <div className="flex">
                    {[1,2,3,4,5].map(i => <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />)}
                  </div>
                  <span className="font-bold text-gray-900">4.9/5</span>
                  <span className="text-gray-500">- 89 avis clients</span>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">Disponible 24h/24</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">Réservation rapide</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">Tarifs transparents</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">Chauffeurs pro</span>
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

        {/* Présentation de Verrières-le-Buisson */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">
                Verrières-le-Buisson : un écrin de verdure aux portes de Paris
              </h2>

              <div className="prose prose-lg text-gray-600 max-w-none">
                <p>
                  <strong>Verrières-le-Buisson</strong>, commune résidentielle de près de 16 000 habitants située dans le département de l'<strong>Essonne (91)</strong>,
                  est réputée pour son cadre de vie exceptionnel. Nichée entre Antony et Massy, cette ville chic et verdoyante
                  attire les familles et les cadres à la recherche de tranquillité tout en restant proche de Paris.
                </p>

                <p>
                  La commune est célèbre pour sa <strong>forêt de Verrières</strong>, véritable poumon vert de plus de 500 hectares,
                  et son patrimoine architectural de qualité. Si Verrières-le-Buisson ne possède pas de gare, elle bénéficie
                  d'une position stratégique entre la <strong>gare RER B d'Antony</strong> (5 minutes) et la <strong>gare Massy TGV</strong> (8 minutes).
                </p>

                <p>
                  Que vous soyez résident de Verrières-le-Buisson devant rejoindre une gare ou un aéroport,
                  ou visiteur découvrant cette belle commune, notre service de <strong>taxi à Verrières-le-Buisson</strong> vous accompagne
                  dans tous vos déplacements avec ponctualité et professionnalisme.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Grille tarifaire */}
        <section className="py-12 md:py-16 bg-gray-900 text-white">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center">
              Tarifs indicatifs depuis Verrières-le-Buisson
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
              Vos destinations depuis Verrières-le-Buisson
            </h2>
            <p className="text-gray-600 text-center mb-10 max-w-2xl mx-auto">
              Découvrez nos principales liaisons au départ de Verrières-le-Buisson avec des prix transparents et sans surprise.
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
              Pourquoi choisir TAXI Pro 91 à Verrières-le-Buisson ?
            </h2>
            <p className="text-gray-600 text-center mb-10 max-w-2xl mx-auto">
              Un service de qualité reconnu par nos clients depuis plus de 10 ans dans l'Essonne.
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
              Avis de nos clients à Verrières-le-Buisson
            </h2>
            <div className="flex items-center justify-center gap-2 mb-10">
              <div className="flex">
                {[1,2,3,4,5].map(i => <Star key={i} className="w-6 h-6 text-yellow-400 fill-yellow-400" />)}
              </div>
              <span className="font-bold text-xl text-gray-900">4.9/5</span>
              <span className="text-gray-500">basé sur 89 avis</span>
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
              Taxi dans tous les quartiers de Verrières-le-Buisson
            </h2>
            <p className="text-gray-600 text-center mb-8 max-w-2xl mx-auto">
              Nous intervenons dans tous les quartiers de Verrières-le-Buisson pour vous prendre en charge ou vous déposer à l'adresse de votre choix, 24h/24.
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
              Comment réserver votre taxi à Verrières-le-Buisson ?
            </h2>
            <p className="text-gray-600 text-center mb-10 max-w-2xl mx-auto">
              Réserver un taxi à Verrières-le-Buisson n'a jamais été aussi simple. Trois options s'offrent à vous :
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
              Questions fréquentes - Taxi Verrières-le-Buisson
            </h2>
            <p className="text-gray-600 text-center mb-10 max-w-2xl mx-auto">
              Retrouvez les réponses aux questions les plus posées par nos clients à Verrières-le-Buisson.
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
                Votre taxi de confiance à Verrières-le-Buisson depuis plus de 10 ans
              </h2>

              <div className="prose prose-lg text-gray-600 max-w-none">
                <p>
                  <strong>TAXI Pro 91</strong> est votre partenaire de confiance pour tous vos déplacements à Verrières-le-Buisson et dans l'Essonne.
                  Ville résidentielle haut de gamme, Verrières-le-Buisson mérite un service de taxi à la hauteur de son standing :
                  ponctuel, discret et professionnel.
                </p>

                <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Une ville sans gare, mais parfaitement connectée</h3>
                <p>
                  Si <strong>Verrières-le-Buisson</strong> ne possède pas de gare, c'est précisément ce qui fait le charme de cette commune
                  préservée du bruit et de l'agitation. Mais ses habitants ont besoin d'un moyen fiable pour rejoindre les transports en commun.
                  C'est là que notre service de taxi intervient.
                </p>
                <p>
                  La <strong>gare RER B d'Antony</strong> est à seulement 5 minutes en taxi. De là, vous accédez à Paris en 20 minutes
                  et à l'Orlyval pour rejoindre l'aéroport d'Orly. La <strong>gare Massy TGV</strong>, à 8 minutes, vous ouvre les portes
                  de la France entière : Lyon, Marseille, Bordeaux, Nantes, Rennes sont accessibles en quelques heures.
                </p>

                <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Navettes Aéroport Orly : rapidité et ponctualité</h3>
                <p>
                  L'<strong>aéroport d'Orly</strong> se trouve à 15 minutes de Verrières-le-Buisson. Nous proposons un service
                  de navette aéroport avec suivi de vol en temps réel. En cas de retard de votre avion, nous adaptons
                  automatiquement l'heure de prise en charge. Notre service couvre tous les terminaux : Orly 1, 2, 3 et 4.
                </p>
                <p>
                  Pour <strong>Roissy-Charles de Gaulle</strong>, comptez environ 45 minutes de trajet. Le tarif forfaitaire
                  vous est communiqué à l'avance, sans surprise à l'arrivée.
                </p>

                <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Un cadre de vie préservé, un service adapté</h3>
                <p>
                  Verrières-le-Buisson est connue pour sa <strong>forêt</strong> de plus de 500 hectares, ses belles demeures
                  et son atmosphère paisible. Nos chauffeurs connaissent parfaitement chaque rue, chaque impasse de cette commune.
                  Que vous habitiez au <strong>Centre-bourg</strong>, à <strong>Amblainvilliers</strong>, aux <strong>Antes</strong>
                  ou à la limite d'Igny, nous venons vous chercher à votre porte.
                </p>

                <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Transport médical conventionné CPAM</h3>
                <p>
                  Nous sommes <strong>agréés par la CPAM</strong> pour le transport médical assis. Si vous disposez d'une
                  prescription médicale de transport, nous assurons vos trajets vers les hôpitaux, cliniques,
                  centres de dialyse et cabinets médicaux de la région. L'hôpital d'Antony, la clinique de Massy
                  et les établissements parisiens sont facilement accessibles.
                </p>

                <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Proximité avec Antony et Massy</h3>
                <p>
                  Verrières-le-Buisson jouit d'une position privilégiée entre <strong>Antony</strong> (5 min) et <strong>Massy</strong> (8 min).
                  Ces deux villes offrent de nombreux services : commerces, restaurants, cinémas, administrations.
                  Notre service de taxi vous permet de profiter de ces commodités sans les contraintes du stationnement.
                </p>
              </div>

              <div className="mt-10 p-6 bg-yellow-50 rounded-xl border border-yellow-200">
                <p className="text-gray-900 font-medium mb-4">
                  Réservez votre taxi à Verrières-le-Buisson dès maintenant
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

        <RelatedCities currentSlug="taxi-verrieres-le-buisson" />
      </main>
      <Footer />
    </>
  )
}
