import { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/Header'
import Breadcrumb from '@/components/Breadcrumb'
import Footer from '@/components/Footer'
import RelatedCities from '@/components/RelatedCities'
import BookingForm from '@/components/BookingForm'
import { Phone, MapPin, Train, Plane, Clock, CheckCircle, Star, CreditCard, Shield, Users, Car, HelpCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Taxi Longjumeau (91160) | Reservation 24h/24 - Hopital & Gare RER C',
  description: 'Reservez votre taxi a Longjumeau 91160. Service disponible 24h/24 pour vos trajets hopital, gare RER C, aeroport Orly. Transport medical conventionne CPAM. Appelez maintenant le 06 80 03 64 63 !',
  keywords: ['taxi longjumeau', 'taxi longjumeau 91160', 'taxi hopital longjumeau', 'taxi gare longjumeau', 'taxi longjumeau orly', 'reservation taxi longjumeau', 'taxi longjumeau aeroport', 'transport medical longjumeau', 'taxi longjumeau paris'],
  openGraph: {
    title: 'Taxi Longjumeau (91160) | Service 24h/24 - Hopital & Orly',
    description: 'Votre taxi a Longjumeau : hopital, gare RER C, aeroport Orly. Reservation rapide, tarifs transparents. Note 4.9/5.',
    url: 'https://www.taxipro91.com/taxi-longjumeau',
  },
  alternates: {
    canonical: 'https://www.taxipro91.com/taxi-longjumeau',
  },
}

// Schema.org enrichi pour LocalBusiness + FAQ
const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://www.taxipro91.com/taxi-longjumeau',
  additionalType: 'https://schema.org/TaxiService',
  name: 'TAXI Pro 91 - Taxi Longjumeau',
  description: 'Service de taxi professionnel a Longjumeau (91160). Transferts hopital, gare RER C, aeroport Orly. Transport medical conventionne CPAM. Disponible 24h/24.',
  url: 'https://www.taxipro91.com/taxi-longjumeau',
  telephone: '+33680036463',
  priceRange: '€€',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Longjumeau',
    postalCode: '91160',
    addressRegion: 'Essonne',
    addressCountry: 'FR'
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 48.6944,
    longitude: 2.2956
  },
  areaServed: {
    '@type': 'City',
    name: 'Longjumeau',
    containedInPlace: { '@type': 'AdministrativeArea', name: 'Essonne' }
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '89',
    bestRating: '5',
    worstRating: '1'
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
      name: 'Quel est le prix d\'un taxi Longjumeau vers Orly ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Le prix d\'un taxi de Longjumeau vers l\'aeroport d\'Orly est d\'environ 20 a 30 euros selon l\'heure et le trafic. Le trajet dure environ 12 minutes via l\'A6. Ce tarif est fixe et comprend la prise en charge.'
      }
    },
    {
      '@type': 'Question',
      name: 'Proposez-vous le transport medical a Longjumeau ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Oui, nous sommes conventionnes CPAM pour le transport medical a Longjumeau. Nous assurons vos trajets vers le centre hospitalier de Longjumeau, les cliniques et centres medicaux avec prise en charge de votre bon de transport.'
      }
    },
    {
      '@type': 'Question',
      name: 'Comment rejoindre la gare RER C de Longjumeau en taxi ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Nous assurons les transferts vers la gare RER C de Longjumeau en 3 a 5 minutes selon votre point de depart. Service disponible 24h/24 pour vos correspondances vers Paris ou la banlieue sud.'
      }
    },
    {
      '@type': 'Question',
      name: 'Quel est le tarif taxi Longjumeau vers l\'hopital ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Le tarif pour un taxi de Longjumeau vers le centre hospitalier est de 10 a 15 euros environ, soit 5 minutes de trajet. Pour les transports medicaux avec prescription, nous acceptons les bons CPAM.'
      }
    },
    {
      '@type': 'Question',
      name: 'Peut-on reserver un taxi a Longjumeau pour un rendez-vous medical tot le matin ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Absolument ! Notre service est disponible 24h/24, y compris tot le matin pour vos rendez-vous medicaux. Reservez la veille pour garantir votre prise en charge a l\'heure souhaitee.'
      }
    },
    {
      '@type': 'Question',
      name: 'Combien de temps pour rejoindre Paris depuis Longjumeau ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Le trajet Longjumeau-Paris centre dure environ 30 minutes via l\'autoroute A6, selon les conditions de circulation. Le tarif est de 45 a 60 euros selon la destination exacte dans Paris.'
      }
    },
    {
      '@type': 'Question',
      name: 'Acceptez-vous les bons de transport CPAM a Longjumeau ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Oui, nous sommes taxi conventionne CPAM. Nous acceptons les bons de transport pour vos trajets medicaux. Presentez simplement votre prescription et nous nous occupons des formalites administratives.'
      }
    },
    {
      '@type': 'Question',
      name: 'Comment rejoindre la gare Massy TGV depuis Longjumeau ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Le trajet Longjumeau vers la gare Massy TGV dure environ 10 minutes pour un tarif de 15 a 20 euros. Ideal pour vos correspondances TGV vers Lyon, Marseille, Bordeaux ou Nantes.'
      }
    }
  ]
}

const destinations = [
  { name: 'Aeroport d\'Orly', distance: '12 min', price: '20-30\u20AC', description: 'Transfert rapide vers les terminaux Orly 1, 2, 3 et 4 via l\'A6. Suivi de vol inclus.' },
  { name: 'Aeroport CDG', distance: '50 min', price: '75-95\u20AC', description: 'Liaison directe vers Roissy Charles de Gaulle, tous terminaux.' },
  { name: 'Paris Centre', distance: '30 min', price: '45-60\u20AC', description: 'Liaison directe vers tous les arrondissements parisiens via A6.' },
  { name: 'Centre Hospitalier', distance: '5 min', price: '10-15\u20AC', description: 'Acces direct a l\'hopital de Longjumeau. Transport medical conventionne.' },
  { name: 'Gare Massy TGV', distance: '10 min', price: '15-20\u20AC', description: 'Connexion TGV vers Lyon, Marseille, Bordeaux, Nantes et RER B.' },
  { name: 'Gare RER C Longjumeau', distance: '3 min', price: '8-12\u20AC', description: 'Desserte RER C vers Paris et banlieue sud. Ideal pour vos correspondances.' },
]

const quartiers = [
  'Centre-ville', 'Bel-Air', 'Parc de Nozay', 'Les Music\'Halles',
  'Vauguillaume', 'L\'Yvette', 'Zone industrielle'
]

const avantages = [
  { icon: Clock, title: 'Disponible 24h/24', description: 'Service de taxi a Longjumeau jour et nuit, week-ends et jours feries inclus.' },
  { icon: CreditCard, title: 'Paiement flexible', description: 'CB, especes, bons CPAM. Facturation entreprise sur demande.' },
  { icon: Shield, title: 'Chauffeurs professionnels', description: 'Conducteurs experimentes, vehicules recents et entretenus.' },
  { icon: Star, title: 'Note 4.9/5', description: 'Plus de 300 avis clients positifs. Satisfaction garantie.' },
]

const avisClients = [
  { nom: 'Catherine D.', note: 5, texte: 'Transport medical impeccable vers l\'hopital de Longjumeau. Le chauffeur etait patient et m\'a aide avec mon deambulateur. Tres professionnel.', date: 'Janvier 2025' },
  { nom: 'Jean-Marc B.', note: 5, texte: 'Navette Orly parfaite, chauffeur a l\'heure malgre l\'heure matinale (5h). Vehicule propre et confortable. Je recommande !', date: 'Decembre 2024' },
  { nom: 'Nathalie R.', note: 5, texte: 'Taxi reserve pour rejoindre la gare Massy TGV. Arrive 10 minutes avant l\'heure prevue. Tarif conforme au devis. Parfait.', date: 'Janvier 2025' },
]

const faqItems = [
  {
    question: 'Quel est le prix d\'un taxi Longjumeau vers Orly ?',
    answer: 'Le prix d\'un taxi de Longjumeau vers l\'aeroport d\'Orly est d\'environ 20 a 30 euros selon l\'heure (jour/nuit) et les conditions de circulation. Grace a l\'acces direct a l\'A6, le trajet ne dure que 12 minutes. Ce tarif est fixe et comprend la prise en charge, l\'attente a l\'aeroport et l\'aide aux bagages.'
  },
  {
    question: 'Proposez-vous le transport medical a Longjumeau ?',
    answer: 'Oui, nous sommes taxi conventionne CPAM pour le transport medical a Longjumeau. Nous assurons tous vos trajets vers le centre hospitalier de Longjumeau, les cliniques, centres de dialyse et cabinets medicaux. Presentez votre bon de transport et nous nous occupons de toutes les formalites administratives.'
  },
  {
    question: 'Comment rejoindre la gare RER C de Longjumeau en taxi ?',
    answer: 'Nous assurons les transferts vers la gare RER C de Longjumeau en 3 a 5 minutes selon votre adresse de depart, pour un tarif de 8 a 12 euros. Service disponible 24h/24 pour vos correspondances vers Paris (Austerlitz, Saint-Michel) ou la banlieue sud.'
  },
  {
    question: 'Quel est le tarif taxi Longjumeau vers l\'hopital ?',
    answer: 'Le tarif pour un taxi de Longjumeau vers le centre hospitalier est de 10 a 15 euros, soit environ 5 minutes de trajet. Pour les transports medicaux prescrits par votre medecin, nous acceptons les bons de transport CPAM avec prise en charge directe.'
  },
  {
    question: 'Peut-on reserver un taxi a Longjumeau pour un rendez-vous medical tot le matin ?',
    answer: 'Absolument ! Notre service de taxi a Longjumeau est disponible 24h/24, 7j/7, y compris tres tot le matin pour vos rendez-vous medicaux, examens a jeun ou hospitalisations. Nous vous recommandons de reserver la veille pour garantir votre prise en charge a l\'heure exacte.'
  },
  {
    question: 'Combien de temps pour rejoindre Paris depuis Longjumeau ?',
    answer: 'Le trajet Longjumeau-Paris centre dure environ 30 minutes via l\'autoroute A6, selon les conditions de circulation. Le tarif est de 45 a 60 euros selon votre destination exacte dans Paris. En heures creuses, le trajet peut etre plus rapide.'
  },
  {
    question: 'Acceptez-vous les bons de transport CPAM a Longjumeau ?',
    answer: 'Oui, nous sommes taxi conventionne par la Securite Sociale (CPAM). Nous acceptons les bons de transport pour tous vos trajets medicaux : hopital, clinique, centre de dialyse, kinesitherapeute, etc. Il vous suffit de presenter votre prescription medicale de transport.'
  },
  {
    question: 'Comment rejoindre la gare Massy TGV depuis Longjumeau ?',
    answer: 'Le trajet depuis Longjumeau vers la gare Massy TGV dure environ 10 minutes pour un tarif de 15 a 20 euros. Cette liaison est ideale pour vos correspondances TGV vers Lyon, Marseille, Bordeaux, Nantes, Rennes et de nombreuses autres destinations.'
  }
]

export default function TaxiLongjumeau() {
  return (
    <>
      <Header />
      <Breadcrumb items={[{ name: 'Taxi Longjumeau' }]} />

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
              Besoin d'un taxi a Longjumeau ? Appelez le{' '}
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
                  <span className="font-medium">Longjumeau (91160) - Essonne</span>
                </div>

                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                  Taxi a Longjumeau
                </h1>

                <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                  Votre service de <strong>taxi a Longjumeau</strong> disponible 24h/24 et 7j/7.
                  Nous assurons tous vos trajets depuis et vers le <strong>centre hospitalier de Longjumeau</strong>,
                  <strong> la gare RER C</strong>, l'<strong>aeroport d'Orly</strong> et tous les quartiers de Longjumeau.
                  <strong> Transport medical conventionne CPAM</strong>.
                </p>

                {/* Avis resume */}
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
                    <span className="text-gray-700">Transport medical CPAM</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">Acces A6 direct</span>
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

        {/* Presentation de Longjumeau */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">
                Longjumeau : ville hospitaliere au coeur de l'Essonne
              </h2>

              <div className="prose prose-lg text-gray-600 max-w-none">
                <p>
                  <strong>Longjumeau</strong>, ville de plus de 21 000 habitants situee dans le departement de l'<strong>Essonne (91)</strong>,
                  est reconnue pour son <strong>centre hospitalier</strong> qui constitue un pole medical majeur du nord de l'Essonne.
                  Strategiquement positionnee avec un acces direct a l'<strong>autoroute A6</strong>, Longjumeau offre une connexion
                  rapide vers Paris et l'aeroport d'Orly.
                </p>

                <p>
                  La ville est desservie par le <strong>RER C</strong> a la gare de Longjumeau, offrant une liaison directe
                  vers Paris Austerlitz et Saint-Michel Notre-Dame. Cette infrastructure de transport fait de Longjumeau
                  un lieu de residence privilegie pour les actifs travaillant a Paris ou sur le plateau de Saclay.
                </p>

                <p>
                  Que vous ayez besoin d'un <strong>transport medical vers l'hopital</strong>, d'une navette vers
                  l'<strong>aeroport d'Orly</strong> ou d'un taxi pour rejoindre la <strong>gare Massy TGV</strong>,
                  notre service de taxi a Longjumeau vous accompagne avec professionnalisme et ponctualite.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Grille tarifaire */}
        <section className="py-12 md:py-16 bg-gray-900 text-white">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center">
              Tarifs indicatifs depuis Longjumeau
            </h2>
            <p className="text-gray-400 text-center mb-8 max-w-2xl mx-auto">
              Prix estimes pour un trajet standard. Tarifs definitifs communiques lors de la reservation.
            </p>

            <div className="overflow-x-auto">
              <table className="w-full max-w-3xl mx-auto">
                <thead>
                  <tr className="border-b border-gray-700">
                    <th className="text-left py-4 px-4 font-bold">Destination</th>
                    <th className="text-center py-4 px-4 font-bold">Duree</th>
                    <th className="text-right py-4 px-4 font-bold">Prix estime</th>
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
              * Tarifs indicatifs pouvant varier selon l'heure (jour/nuit), le trafic et le type de vehicule choisi.
            </p>
          </div>
        </section>

        {/* Destinations detaillees */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 text-center">
              Vos destinations depuis Longjumeau
            </h2>
            <p className="text-gray-600 text-center mb-10 max-w-2xl mx-auto">
              Decouvrez nos principales liaisons au depart de Longjumeau avec des prix transparents et sans surprise.
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
              Pourquoi choisir TAXI Pro 91 a Longjumeau ?
            </h2>
            <p className="text-gray-600 text-center mb-10 max-w-2xl mx-auto">
              Un service de qualite reconnu par nos clients depuis plus de 10 ans dans l'Essonne.
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
              Avis de nos clients a Longjumeau
            </h2>
            <div className="flex items-center justify-center gap-2 mb-10">
              <div className="flex">
                {[1,2,3,4,5].map(i => <Star key={i} className="w-6 h-6 text-yellow-400 fill-yellow-400" />)}
              </div>
              <span className="font-bold text-xl text-gray-900">4.9/5</span>
              <span className="text-gray-500">base sur 89 avis</span>
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
              Taxi dans tous les quartiers de Longjumeau
            </h2>
            <p className="text-gray-600 text-center mb-8 max-w-2xl mx-auto">
              Nous intervenons dans tous les quartiers de Longjumeau pour vous prendre en charge ou vous deposer a l'adresse de votre choix, 24h/24.
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

        {/* Comment reserver */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 text-center">
              Comment reserver votre taxi a Longjumeau ?
            </h2>
            <p className="text-gray-600 text-center mb-10 max-w-2xl mx-auto">
              Reserver un taxi a Longjumeau n'a jamais ete aussi simple. Trois options s'offrent a vous :
            </p>

            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8 text-black" />
                </div>
                <h3 className="font-bold text-gray-900 text-lg mb-2">Par telephone</h3>
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
                <p className="text-gray-600 mb-4">Utilisez notre formulaire de reservation disponible 24h/24</p>
                <span className="text-yellow-600 font-medium">Confirmation immediate</span>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-black" />
                </div>
                <h3 className="font-bold text-gray-900 text-lg mb-2">A l'avance</h3>
                <p className="text-gray-600 mb-4">Reservez jusqu'a 30 jours a l'avance pour vos trajets importants</p>
                <span className="text-yellow-600 font-medium">SMS de rappel inclus</span>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-12 md:py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 text-center">
              Questions frequentes - Taxi Longjumeau
            </h2>
            <p className="text-gray-600 text-center mb-10 max-w-2xl mx-auto">
              Retrouvez les reponses aux questions les plus posees par nos clients a Longjumeau.
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
                Votre taxi de confiance a Longjumeau depuis plus de 10 ans
              </h2>

              <div className="prose prose-lg text-gray-600 max-w-none">
                <p>
                  <strong>TAXI Pro 91</strong> est votre partenaire de confiance pour tous vos deplacements a Longjumeau et dans l'Essonne.
                  Situee au carrefour de l'autoroute A6 et de la ligne RER C, Longjumeau est une ville dynamique qui necessite
                  un service de taxi fiable, particulierement pour les transports medicaux vers son hopital reconnu.
                </p>

                <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Transport medical et Centre Hospitalier de Longjumeau</h3>
                <p>
                  Le <strong>centre hospitalier de Longjumeau</strong> est un etablissement de reference dans le nord de l'Essonne,
                  proposant de nombreuses specialites medicales : urgences, maternite, chirurgie, cardiologie, et bien d'autres.
                  Chaque jour, des centaines de patients ont besoin de se rendre a l'hopital pour des consultations, examens ou hospitalisations.
                </p>
                <p>
                  Notre service de <strong>taxi conventionne CPAM</strong> repond a ce besoin essentiel. Si vous disposez d'une
                  prescription medicale de transport (bon de transport), nous assurons votre prise en charge avec une attention
                  particuliere : ponctualite, assistance a la mobilite, patience et bienveillance. Nos chauffeurs sont formes
                  a l'accompagnement des personnes agees et des patients a mobilite reduite.
                </p>

                <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Transport medical conventionne CPAM : comment ca marche ?</h3>
                <p>
                  Pour beneficier d'un <strong>transport medical rembourse par la Securite Sociale</strong>, vous devez disposer
                  d'une prescription de transport delivree par votre medecin. Cette ordonnance precise le mode de transport
                  (taxi, ambulance, VSL) et le motif medical. Avec ce document, nous nous occupons de toutes les demarches
                  administratives : vous n'avez rien a avancer.
                </p>
                <p>
                  Les transports vers le centre hospitalier de Longjumeau, les cliniques de la region, les centres de dialyse,
                  les seances de chimiotherapie ou de radiotherapie sont eligibles a la prise en charge CPAM sous prescription.
                </p>

                <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Gare RER C de Longjumeau : vos correspondances facilitees</h3>
                <p>
                  La <strong>gare de Longjumeau</strong> est desservie par le <strong>RER C</strong>, offrant une connexion directe
                  vers Paris (Austerlitz, Saint-Michel Notre-Dame, Musee d'Orsay) et la banlieue sud. Nos taxis assurent
                  vos transferts vers et depuis la gare pour faciliter vos deplacements quotidiens ou ponctuels.
                </p>
                <p>
                  Que vous partiez tot le matin ou que vous rentriez tard le soir, notre service 24h/24 vous garantit
                  une prise en charge a l'heure, meme pour le premier ou le dernier train.
                </p>

                <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Acces rapide a l'A6 : Orly en 12 minutes</h3>
                <p>
                  L'un des atouts majeurs de Longjumeau est son <strong>acces direct a l'autoroute A6</strong>, permettant
                  de rejoindre l'<strong>aeroport d'Orly en seulement 12 minutes</strong>. Cette proximite fait de notre
                  service de taxi le choix ideal pour vos transferts aeroport.
                </p>
                <p>
                  Nous proposons un service de navette aeroport avec <strong>suivi de vol en temps reel</strong>.
                  En cas de retard ou d'avancement de votre vol, nous adaptons automatiquement l'heure de prise en charge.
                  Le tarif est fixe et connu a l'avance : 20 a 30 euros pour Orly, sans surprise a l'arrivee.
                </p>

                <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Connexion vers la gare Massy TGV</h3>
                <p>
                  A seulement <strong>10 minutes de Longjumeau</strong>, la gare <strong>Massy TGV</strong> vous ouvre
                  les portes de la France entiere : Lyon (2h), Marseille (3h), Bordeaux (2h30), Nantes (2h20), Rennes (2h).
                  Notre service de taxi vous depose au plus pres des quais pour un depart serein.
                </p>
                <p>
                  Pour vos retours, votre chauffeur vous attend a la sortie de la gare avec une pancarte a votre nom.
                  Le tarif Longjumeau-Massy TGV est de 15 a 20 euros, vehicule confortable garanti.
                </p>

                <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Service professionnel et facturation entreprise</h3>
                <p>
                  De nombreuses entreprises de la zone industrielle de Longjumeau et des environs nous font confiance
                  pour le transport de leurs collaborateurs et visiteurs. Nous proposons des comptes entreprise avec
                  facturation mensuelle, suivi detaille des courses et tarifs negocies selon le volume.
                </p>
              </div>

              <div className="mt-10 p-6 bg-yellow-50 rounded-xl border border-yellow-200">
                <p className="text-gray-900 font-medium mb-4">
                  Reservez votre taxi a Longjumeau des maintenant
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
                    Reserver en ligne
                  </Link>
                </div>
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
