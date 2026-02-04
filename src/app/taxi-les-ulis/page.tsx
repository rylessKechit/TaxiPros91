import { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/Header'
import Breadcrumb from '@/components/Breadcrumb'
import Footer from '@/components/Footer'
import RelatedCities from '@/components/RelatedCities'
import BookingForm from '@/components/BookingForm'
import { Phone, MapPin, Train, Plane, Clock, CheckCircle, Star, CreditCard, Shield, Users, Car, HelpCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Taxi Les Ulis (91940) | Zone Courtaboeuf - Réservation 24h/24',
  description: 'Réservez votre taxi aux Ulis 91940. Service disponible 24h/24 pour la zone d\'activités Courtaboeuf, centres commerciaux, aéroport Orly. Chauffeurs professionnels, tarifs transparents. Appelez maintenant le 06 80 03 64 63 !',
  keywords: ['taxi les ulis', 'taxi les ulis 91940', 'taxi courtaboeuf', 'taxi zone activités courtaboeuf', 'taxi les ulis orly', 'réservation taxi les ulis', 'taxi les ulis aéroport', 'prix taxi les ulis orly', 'taxi les ulis paris'],
  openGraph: {
    title: 'Taxi Les Ulis (91940) | Service 24h/24 - Courtaboeuf & Orly',
    description: 'Votre taxi aux Ulis : zone Courtaboeuf, centres commerciaux, aéroport Orly. Réservation rapide, tarifs transparents. Note 4.9/5.',
    url: 'https://www.taxipro91.com/taxi-les-ulis',
  },
  alternates: {
    canonical: 'https://www.taxipro91.com/taxi-les-ulis',
  },
}

// Schema.org enrichi pour LocalBusiness + FAQ
const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://www.taxipro91.com/taxi-les-ulis',
  additionalType: 'https://schema.org/TaxiService',
  name: 'TAXI Pro 91 - Taxi Les Ulis',
  description: 'Service de taxi professionnel aux Ulis (91940). Transferts zone Courtaboeuf, centres commerciaux, aéroport Orly. Disponible 24h/24.',
  url: 'https://www.taxipro91.com/taxi-les-ulis',
  telephone: '+33680036463',
  priceRange: '€€',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Les Ulis',
    postalCode: '91940',
    addressRegion: 'Essonne',
    addressCountry: 'FR'
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 48.6819,
    longitude: 2.1686
  },
  areaServed: {
    '@type': 'City',
    name: 'Les Ulis',
    containedInPlace: { '@type': 'AdministrativeArea', name: 'Essonne' }
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '98',
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
      name: 'Quel est le prix d\'un taxi Les Ulis → Orly ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Le prix d\'un taxi des Ulis vers l\'aéroport d\'Orly est d\'environ 30€ à 40€ selon l\'heure et le trafic. Ce tarif est fixe et comprend la prise en charge. Réservez à l\'avance pour bénéficier du meilleur tarif.'
      }
    },
    {
      '@type': 'Question',
      name: 'Y a-t-il une gare aux Ulis ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Non, Les Ulis ne dispose pas de gare ferroviaire directe. La ville est desservie par un réseau de bus. Pour prendre le train, la gare Massy TGV est accessible en 15 minutes en taxi, offrant des connexions TGV et RER.'
      }
    },
    {
      '@type': 'Question',
      name: 'Proposez-vous des transferts pour les entreprises de Courtaboeuf ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Oui, nous sommes spécialisés dans le transport professionnel vers la zone d\'activités de Courtaboeuf. Nous proposons la facturation entreprise, des comptes professionnels et des tarifs négociés pour les trajets réguliers.'
      }
    },
    {
      '@type': 'Question',
      name: 'Comment réserver un taxi aux Ulis ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Pour réserver un taxi aux Ulis, vous pouvez appeler le 06 80 03 64 63 disponible 24h/24, ou utiliser notre formulaire de réservation en ligne. La confirmation est immédiate et vous recevez un SMS de rappel.'
      }
    },
    {
      '@type': 'Question',
      name: 'Desservez-vous le centre commercial Ulis 2 ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Oui, nous assurons les transferts vers et depuis le centre commercial Ulis 2 et tous les commerces des Ulis. Idéal pour vos courses volumineuses ou si vous préférez éviter les transports en commun.'
      }
    },
    {
      '@type': 'Question',
      name: 'Quel délai pour avoir un taxi aux Ulis ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'En moyenne, un taxi peut être disponible aux Ulis en 10 à 15 minutes. Pour les trajets vers les aéroports ou la gare Massy TGV, nous recommandons de réserver à l\'avance pour garantir votre prise en charge.'
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
      name: 'Proposez-vous le transport médical aux Ulis ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Oui, nous sommes conventionnés CPAM pour le transport médical aux Ulis. Nous assurons vos trajets vers les hôpitaux, cliniques et centres médicaux avec prise en charge de votre bon de transport.'
      }
    }
  ]
}

const destinations = [
  { name: 'Zone Courtaboeuf', distance: '5 min', price: '10-15€', description: 'Desserte directe du plus grand parc d\'activités d\'Île-de-France. Accès à toutes les entreprises.' },
  { name: 'Gare Massy TGV', distance: '15 min', price: '20-28€', description: 'Connexion TGV et RER B/C pour vos voyages en province et vers Paris.' },
  { name: 'Aéroport d\'Orly', distance: '20 min', price: '30-40€', description: 'Transfert rapide vers les terminaux Orly 1, 2, 3 et 4. Suivi de vol inclus.' },
  { name: 'Aéroport CDG', distance: '55 min', price: '80-100€', description: 'Liaison directe vers Roissy Charles de Gaulle, tous terminaux.' },
  { name: 'Paris Centre', distance: '35 min', price: '50-70€', description: 'Liaison directe vers tous les arrondissements parisiens via A10.' },
  { name: 'Centre commercial Ulis 2', distance: '3 min', price: '8-12€', description: 'Accès facilité pour vos courses et shopping au plus grand centre des Ulis.' },
]

const quartiers = [
  'Courdimanche', 'Hautes Plaines', 'Les Bergeries', 'Frileuse',
  'Le Bosquet', 'Centre commercial', 'Les Amonts', 'Les Avelines'
]

const avantages = [
  { icon: Clock, title: 'Disponible 24h/24', description: 'Service de taxi aux Ulis jour et nuit, week-ends et jours fériés inclus.' },
  { icon: CreditCard, title: 'Paiement flexible', description: 'CB, espèces, bons CPAM. Facturation entreprise sur demande.' },
  { icon: Shield, title: 'Chauffeurs professionnels', description: 'Conducteurs expérimentés, véhicules récents et entretenus.' },
  { icon: Star, title: 'Note 4.9/5', description: 'Plus de 400 avis clients positifs. Satisfaction garantie.' },
]

const avisClients = [
  { nom: 'Laurent B.', note: 5, texte: 'Service impeccable pour mes déplacements professionnels à Courtaboeuf. Chauffeur toujours à l\'heure et connaissant parfaitement la zone.', date: 'Janvier 2025' },
  { nom: 'Catherine M.', note: 5, texte: 'Taxi réservé pour l\'aéroport d\'Orly depuis Les Ulis. Ponctuel, véhicule propre et tarif conforme. Je recommande !', date: 'Décembre 2024' },
  { nom: 'Ahmed K.', note: 5, texte: 'Excellent service pour mes courses au centre commercial. Le chauffeur m\'a aidé avec mes sacs. Très pratique sans voiture !', date: 'Janvier 2025' },
]

const faqItems = [
  {
    question: 'Quel est le prix d\'un taxi Les Ulis → Orly ?',
    answer: 'Le prix d\'un taxi des Ulis vers l\'aéroport d\'Orly est d\'environ 30€ à 40€ selon l\'heure (jour/nuit) et les conditions de circulation. Ce tarif est fixe et comprend la prise en charge, l\'attente à l\'aéroport et l\'aide aux bagages. Pour un aller-retour, bénéficiez d\'un tarif préférentiel.'
  },
  {
    question: 'Y a-t-il une gare aux Ulis ?',
    answer: 'Non, Les Ulis ne dispose pas de gare ferroviaire. C\'est une ville nouvelle principalement desservie par les lignes de bus. Pour vos trajets en train, notre service de taxi vous conduit rapidement à la gare Massy TGV (15 min) qui offre des connexions TGV vers toute la France et RER B/C vers Paris.'
  },
  {
    question: 'Proposez-vous des transferts pour les entreprises de Courtaboeuf ?',
    answer: 'Absolument ! Nous sommes spécialisés dans le transport professionnel vers la zone d\'activités de Courtaboeuf, le plus grand parc technologique d\'Île-de-France. Nous proposons des comptes entreprise avec facturation mensuelle, tarifs négociés et suivi des courses. Idéal pour vos collaborateurs et visiteurs.'
  },
  {
    question: 'Comment réserver un taxi aux Ulis ?',
    answer: 'Pour réserver un taxi aux Ulis, trois options s\'offrent à vous : appelez le 06 80 03 64 63 (disponible 24h/24), utilisez notre formulaire de réservation en ligne, ou envoyez un SMS. La confirmation est immédiate et vous recevez un rappel avant votre course.'
  },
  {
    question: 'Desservez-vous le centre commercial Ulis 2 ?',
    answer: 'Oui, nous assurons les transferts vers et depuis le centre commercial Ulis 2, le plus grand centre commercial des Ulis avec ses nombreuses enseignes. Service particulièrement apprécié pour vos courses volumineuses ou par mauvais temps. Tarif à partir de 8€ depuis le centre-ville.'
  },
  {
    question: 'Quel délai pour avoir un taxi aux Ulis ?',
    answer: 'En réservation immédiate, un taxi peut être à votre adresse aux Ulis en 10 à 15 minutes en moyenne. Pour les trajets vers les aéroports ou la gare Massy TGV, nous recommandons de réserver au moins 2 heures à l\'avance pour garantir la disponibilité.'
  },
  {
    question: 'Acceptez-vous les paiements par carte bancaire ?',
    answer: 'Oui, tous nos véhicules sont équipés de terminaux de paiement. Nous acceptons les cartes Visa, Mastercard, American Express, ainsi que les espèces et les bons de transport CPAM. Facturation entreprise disponible sur demande.'
  },
  {
    question: 'Proposez-vous le transport médical aux Ulis ?',
    answer: 'Oui, nous sommes conventionnés par la CPAM (Caisse Primaire d\'Assurance Maladie) pour le transport médical. Nous assurons vos trajets vers les hôpitaux, cliniques, centres de dialyse et cabinets médicaux. Présentez votre bon de transport et nous nous occupons des formalités.'
  }
]

export default function TaxiLesUlis() {
  return (
    <>
      <Header />
      <Breadcrumb items={[{ name: 'Taxi Les Ulis' }]} />

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
              Besoin d'un taxi aux Ulis ? Appelez le{' '}
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
                  <span className="font-medium">Les Ulis (91940) - Essonne</span>
                </div>

                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                  Taxi aux Ulis
                </h1>

                <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                  Votre service de <strong>taxi aux Ulis</strong> disponible 24h/24 et 7j/7.
                  Nous assurons tous vos trajets vers la <strong>zone d'activités Courtaboeuf</strong>,
                  les <strong>centres commerciaux</strong>, l'<strong>aéroport d'Orly</strong> et la <strong>gare Massy TGV</strong>.
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

        {/* Présentation des Ulis */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">
                Les Ulis : ville nouvelle et pôle économique majeur
              </h2>

              <div className="prose prose-lg text-gray-600 max-w-none">
                <p>
                  <strong>Les Ulis</strong>, ville de plus de 25 000 habitants située dans le département de l'<strong>Essonne (91)</strong>,
                  est une ville nouvelle créée dans les années 1970. Elle s'est développée autour d'un concept innovant
                  alliant zones résidentielles, commerces et activités économiques.
                </p>

                <p>
                  La ville est mondialement connue pour la <strong>zone d'activités de Courtaboeuf</strong>, le plus grand
                  parc technologique d'Île-de-France avec plus de 1 200 entreprises et 30 000 emplois. De nombreuses
                  multinationales et startups y ont établi leur siège, faisant des Ulis un centre névralgique
                  de l'économie francilienne.
                </p>

                <p>
                  Que vous soyez résident des Ulis, professionnel de Courtaboeuf ou visiteur,
                  notre service de <strong>taxi aux Ulis</strong> vous accompagne dans tous vos trajets avec
                  ponctualité et professionnalisme, compensant l'absence de gare ferroviaire dans la ville.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Grille tarifaire */}
        <section className="py-12 md:py-16 bg-gray-900 text-white">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center">
              Tarifs indicatifs depuis Les Ulis
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
              Vos destinations depuis Les Ulis
            </h2>
            <p className="text-gray-600 text-center mb-10 max-w-2xl mx-auto">
              Découvrez nos principales liaisons au départ des Ulis avec des prix transparents et sans surprise.
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
              Pourquoi choisir TAXI Pro 91 aux Ulis ?
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
              Avis de nos clients aux Ulis
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
              Taxi dans tous les quartiers des Ulis
            </h2>
            <p className="text-gray-600 text-center mb-8 max-w-2xl mx-auto">
              Nous intervenons dans tous les quartiers des Ulis et dans toute la zone d'activités de Courtaboeuf pour vous prendre en charge ou vous déposer à l'adresse de votre choix, 24h/24.
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
              Comment réserver votre taxi aux Ulis ?
            </h2>
            <p className="text-gray-600 text-center mb-10 max-w-2xl mx-auto">
              Réserver un taxi aux Ulis n'a jamais été aussi simple. Trois options s'offrent à vous :
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
              Questions fréquentes - Taxi Les Ulis
            </h2>
            <p className="text-gray-600 text-center mb-10 max-w-2xl mx-auto">
              Retrouvez les réponses aux questions les plus posées par nos clients aux Ulis.
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
                Votre taxi de confiance aux Ulis et Courtaboeuf depuis plus de 10 ans
              </h2>

              <div className="prose prose-lg text-gray-600 max-w-none">
                <p>
                  <strong>TAXI Pro 91</strong> est votre partenaire de confiance pour tous vos déplacements aux Ulis et dans l'Essonne.
                  Ville nouvelle sans desserte ferroviaire directe, Les Ulis nécessite un service de taxi fiable et disponible
                  à toute heure pour compenser ce manque d'infrastructure.
                </p>

                <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Zone d'activités Courtaboeuf : notre expertise</h3>
                <p>
                  La <strong>zone d'activités de Courtaboeuf</strong> est le plus grand parc technologique d'Île-de-France avec
                  plus de 1 200 entreprises et 30 000 salariés. Nos chauffeurs connaissent parfaitement les différents
                  secteurs (Courtaboeuf 1 et 2, les allées et avenues) et vous conduisent efficacement à l'adresse exacte
                  de votre destination.
                </p>
                <p>
                  De nombreuses entreprises de renom y sont implantées : Oracle, Hewlett-Packard, Mercedes-Benz,
                  et des centaines de PME innovantes. Nous proposons des <strong>comptes entreprise</strong> avec
                  facturation mensuelle, suivi des courses et tarifs négociés pour les déplacements réguliers.
                </p>

                <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Centres commerciaux et shopping</h3>
                <p>
                  Les Ulis dispose d'une offre commerciale importante avec le <strong>centre commercial Ulis 2</strong>
                  et ses nombreuses enseignes. Notre service de taxi est particulièrement apprécié pour les courses
                  volumineuses ou par mauvais temps. Nous vous déposons à l'entrée et vous récupérons avec vos achats.
                </p>

                <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Connexion aux transports : une nécessité</h3>
                <p>
                  Sans gare ferroviaire, Les Ulis dépend principalement du réseau de bus et de la voiture individuelle.
                  Notre service de <strong>taxi aux Ulis</strong> constitue une alternative fiable pour rejoindre
                  la <strong>gare Massy TGV</strong> (15 min), l'<strong>aéroport d'Orly</strong> (20 min) ou Paris (35 min).
                </p>
                <p>
                  Nous proposons un service de suivi de vol et de train : en cas de retard, nous adaptons automatiquement
                  l'heure de prise en charge pour vous éviter toute attente inutile.
                </p>

                <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Transport médical conventionné CPAM</h3>
                <p>
                  Nous sommes <strong>agréés par la CPAM</strong> pour le transport médical assis. Si vous disposez d'une
                  prescription médicale de transport, nous assurons vos trajets vers les hôpitaux, cliniques,
                  centres de dialyse et cabinets médicaux de la région.
                </p>
                <p>
                  Nos chauffeurs sont formés à l'accompagnement des personnes à mobilité réduite et font preuve
                  de patience et de bienveillance. La prise en charge administrative est simplifiée :
                  présentez simplement votre bon de transport.
                </p>

                <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Transport professionnel et facturation entreprise</h3>
                <p>
                  De nombreuses entreprises de Courtaboeuf nous font confiance pour le transport de leurs collaborateurs
                  et clients. Nous proposons des comptes entreprise avec facturation mensuelle, suivi des courses
                  et tarifs négociés. Idéal pour l'accueil de visiteurs internationaux arrivant par avion.
                </p>
              </div>

              <div className="mt-10 p-6 bg-yellow-50 rounded-xl border border-yellow-200">
                <p className="text-gray-900 font-medium mb-4">
                  Réservez votre taxi aux Ulis dès maintenant
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

        <RelatedCities currentSlug="taxi-les-ulis" />
      </main>
      <Footer />
    </>
  )
}
