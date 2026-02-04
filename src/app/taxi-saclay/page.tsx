import { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/Header'
import Breadcrumb from '@/components/Breadcrumb'
import Footer from '@/components/Footer'
import RelatedCities from '@/components/RelatedCities'
import BookingForm from '@/components/BookingForm'
import { Phone, MapPin, Train, Plane, Clock, CheckCircle, Star, CreditCard, Shield, Users, Car, HelpCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Taxi Saclay (91400) | Plateau de Saclay, CEA, Universités - Réservation 24h/24',
  description: 'Réservez votre taxi à Saclay 91400. Service disponible 24h/24 pour le plateau de Saclay, CEA, Université Paris-Saclay, Polytechnique. Chauffeurs professionnels, tarifs transparents. Appelez maintenant le 06 80 03 64 63 !',
  keywords: ['taxi saclay', 'taxi saclay 91400', 'taxi plateau de saclay', 'taxi université paris-saclay', 'taxi cea saclay', 'taxi polytechnique saclay', 'réservation taxi saclay', 'taxi saclay orly', 'prix taxi saclay paris'],
  openGraph: {
    title: 'Taxi Saclay (91400) | Service 24h/24 - Plateau de Saclay & CEA',
    description: 'Votre taxi à Saclay : CEA, universités, Polytechnique, entreprises tech. Réservation rapide, tarifs transparents. Note 4.9/5.',
    url: 'https://www.taxipro91.com/taxi-saclay',
  },
  alternates: {
    canonical: 'https://www.taxipro91.com/taxi-saclay',
  },
}

// Schema.org enrichi pour LocalBusiness + FAQ
const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://www.taxipro91.com/taxi-saclay',
  additionalType: 'https://schema.org/TaxiService',
  name: 'TAXI Pro 91 - Taxi Saclay',
  description: 'Service de taxi professionnel à Saclay (91400). Transferts plateau de Saclay, CEA, universités, aéroports. Disponible 24h/24.',
  url: 'https://www.taxipro91.com/taxi-saclay',
  telephone: '+33680036463',
  priceRange: '€€',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Saclay',
    postalCode: '91400',
    addressRegion: 'Essonne',
    addressCountry: 'FR'
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 48.7316,
    longitude: 2.1686
  },
  areaServed: {
    '@type': 'City',
    name: 'Saclay',
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
      name: 'Quel est le prix d\'un taxi Saclay → Orly ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Le prix d\'un taxi de Saclay vers l\'aéroport d\'Orly est d\'environ 35€ à 45€ selon l\'heure et le trafic. Ce tarif est fixe et comprend la prise en charge. Comptez environ 25 minutes de trajet.'
      }
    },
    {
      '@type': 'Question',
      name: 'Comment se rendre au CEA Saclay sans voiture ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Le CEA Saclay n\'est pas directement desservi par le métro ou le RER. Les navettes sont limitées et peu fréquentes. Le taxi reste la solution la plus pratique et rapide pour accéder au CEA depuis les gares ou aéroports.'
      }
    },
    {
      '@type': 'Question',
      name: 'Proposez-vous des transferts pour l\'Université Paris-Saclay ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Oui, nous assurons tous les transferts vers l\'Université Paris-Saclay, ses différents campus (Orsay, Gif-sur-Yvette, plateau), les résidences étudiantes et les laboratoires de recherche. Service disponible 24h/24.'
      }
    },
    {
      '@type': 'Question',
      name: 'Y a-t-il des transports en commun sur le plateau de Saclay ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Les transports en commun sur le plateau de Saclay sont limités à quelques lignes de bus. En attendant l\'arrivée de la ligne 18 du métro, le taxi reste le moyen le plus efficace pour se déplacer, surtout le soir et le week-end.'
      }
    },
    {
      '@type': 'Question',
      name: 'Pouvez-vous récupérer des chercheurs ou visiteurs à l\'aéroport pour le CEA ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Absolument ! Nous assurons régulièrement les transferts aéroport (Orly et CDG) pour les chercheurs, visiteurs et professionnels se rendant au CEA, à l\'Université Paris-Saclay ou dans les entreprises du plateau.'
      }
    },
    {
      '@type': 'Question',
      name: 'Quel délai pour avoir un taxi à Saclay ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'En moyenne, un taxi peut être disponible à Saclay en 15 à 20 minutes. Le plateau étant moins desservi que les villes voisines, nous recommandons de réserver à l\'avance pour garantir votre prise en charge.'
      }
    },
    {
      '@type': 'Question',
      name: 'Acceptez-vous les paiements par carte bancaire ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Oui, tous nos taxis acceptent le paiement par carte bancaire (Visa, Mastercard), en espèces, et les bons de transport CPAM. Facturation entreprise disponible pour les sociétés du plateau.'
      }
    },
    {
      '@type': 'Question',
      name: 'Proposez-vous des forfaits pour les entreprises tech de Saclay ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Oui, nous proposons des comptes entreprise avec facturation mensuelle et tarifs négociés pour les sociétés du plateau de Saclay. Idéal pour les déplacements réguliers de vos collaborateurs et visiteurs.'
      }
    }
  ]
}

const destinations = [
  { name: 'Aéroport d\'Orly', distance: '25 min', price: '35-45€', description: 'Transfert rapide vers les terminaux Orly 1, 2, 3 et 4. Suivi de vol inclus.' },
  { name: 'Aéroport CDG', distance: '55 min', price: '80-100€', description: 'Liaison directe vers Roissy Charles de Gaulle, tous terminaux.' },
  { name: 'Paris Centre', distance: '40 min', price: '55-75€', description: 'Liaison directe vers tous les arrondissements parisiens.' },
  { name: 'Gare Massy TGV', distance: '15 min', price: '20-30€', description: 'Connexion TGV pour vos voyages en province. RER B et C.' },
  { name: 'École Polytechnique', distance: '5 min', price: '10-15€', description: 'Grande école d\'ingénieurs sur le plateau de Saclay.' },
  { name: 'CEA Saclay', distance: '5 min', price: '10-15€', description: 'Centre de recherche nucléaire et énergies alternatives.' },
]

const quartiers = [
  'Bourg de Saclay', 'Christ de Saclay', 'Val d\'Albian', 'Plateau de Saclay',
  'Campus Polytechnique', 'Campus HEC', 'Zone du Moulon', 'Corbeville'
]

const avantages = [
  { icon: Clock, title: 'Disponible 24h/24', description: 'Service de taxi à Saclay jour et nuit, week-ends et jours fériés inclus.' },
  { icon: CreditCard, title: 'Paiement flexible', description: 'CB, espèces, facturation entreprise. Comptes professionnels disponibles.' },
  { icon: Shield, title: 'Chauffeurs professionnels', description: 'Conducteurs connaissant parfaitement le plateau de Saclay.' },
  { icon: Star, title: 'Note 4.9/5', description: 'Plus de 500 avis clients positifs. Satisfaction garantie.' },
]

const avisClients = [
  { nom: 'Dr. Laurent M.', note: 5, texte: 'Chercheur au CEA, j\'utilise ce taxi régulièrement pour mes trajets vers Orly. Toujours ponctuel, chauffeur agréable. Indispensable sur le plateau !', date: 'Janvier 2025' },
  { nom: 'Émilie T.', note: 5, texte: 'Étudiante à Polytechnique, j\'ai réservé pour un retour de week-end. Le chauffeur connaissait parfaitement le campus. Très pratique !', date: 'Décembre 2024' },
  { nom: 'Marco B.', note: 5, texte: 'En visite professionnelle au CEA depuis l\'Italie. Transfert CDG impeccable, chauffeur à l\'heure malgré le retard de mon vol. Merci !', date: 'Janvier 2025' },
]

const faqItems = [
  {
    question: 'Quel est le prix d\'un taxi Saclay → Orly ?',
    answer: 'Le prix d\'un taxi de Saclay vers l\'aéroport d\'Orly est d\'environ 35€ à 45€ selon l\'heure (jour/nuit) et les conditions de circulation. Ce tarif est fixe et comprend la prise en charge, l\'attente à l\'aéroport et l\'aide aux bagages. Comptez environ 25 minutes de trajet via l\'A10.'
  },
  {
    question: 'Comment se rendre au CEA Saclay sans voiture ?',
    answer: 'Le CEA Saclay n\'est pas directement desservi par le métro ou le RER. Les navettes depuis les gares sont limitées et peu fréquentes, surtout en dehors des heures de pointe. Le taxi reste la solution la plus pratique et rapide pour accéder au CEA depuis les gares (Massy TGV, Orsay) ou les aéroports.'
  },
  {
    question: 'Proposez-vous des transferts pour l\'Université Paris-Saclay ?',
    answer: 'Oui, nous assurons tous les transferts vers l\'Université Paris-Saclay et ses différents campus : plateau de Saclay, Orsay, Gif-sur-Yvette. Nous desservons également les résidences étudiantes, les laboratoires de recherche et les différentes facultés. Service disponible 24h/24.'
  },
  {
    question: 'Y a-t-il des transports en commun sur le plateau de Saclay ?',
    answer: 'Les transports en commun sur le plateau de Saclay sont actuellement limités à quelques lignes de bus (91.06, 91.10). En attendant l\'arrivée de la ligne 18 du métro automatique (Grand Paris Express), le taxi reste le moyen le plus efficace pour se déplacer, particulièrement le soir, le week-end et les jours fériés.'
  },
  {
    question: 'Pouvez-vous récupérer des chercheurs ou visiteurs à l\'aéroport ?',
    answer: 'Absolument ! Nous assurons régulièrement les transferts aéroport (Orly et CDG) pour les chercheurs, visiteurs internationaux et professionnels se rendant au CEA, à l\'Université Paris-Saclay ou dans les entreprises tech du plateau. Accueil avec pancarte nominative sur demande.'
  },
  {
    question: 'Quel délai pour avoir un taxi à Saclay ?',
    answer: 'En réservation immédiate, un taxi peut être à votre adresse à Saclay en 15 à 20 minutes en moyenne. Le plateau étant moins desservi que les villes voisines, nous recommandons fortement de réserver au moins 2 heures à l\'avance, surtout pour les trajets vers les gares ou aéroports.'
  },
  {
    question: 'Acceptez-vous les paiements par carte bancaire ?',
    answer: 'Oui, tous nos véhicules sont équipés de terminaux de paiement. Nous acceptons les cartes Visa, Mastercard, American Express, ainsi que les espèces et les bons de transport CPAM. Facturation entreprise disponible pour les sociétés et laboratoires du plateau.'
  },
  {
    question: 'Proposez-vous des forfaits pour les entreprises tech de Saclay ?',
    answer: 'Oui, nous proposons des comptes entreprise avec facturation mensuelle et tarifs négociés pour les sociétés du plateau de Saclay. Idéal pour les déplacements réguliers de vos collaborateurs, les transferts de visiteurs et les trajets vers les aéroports. Contactez-nous pour un devis personnalisé.'
  }
]

export default function TaxiSaclay() {
  return (
    <>
      <Header />
      <Breadcrumb items={[{ name: 'Taxi Saclay' }]} />

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
              Besoin d'un taxi à Saclay ? Appelez le{' '}
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
                  <span className="font-medium">Saclay (91400) - Essonne</span>
                </div>

                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                  Taxi à Saclay
                </h1>

                <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                  Votre service de <strong>taxi à Saclay</strong> disponible 24h/24 et 7j/7.
                  Nous desservons le <strong>plateau de Saclay</strong>, le <strong>CEA</strong>,
                  l'<strong>Université Paris-Saclay</strong>, <strong>Polytechnique</strong> et toutes les entreprises tech du secteur.
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

        {/* Présentation de Saclay */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">
                Saclay : pôle scientifique et technologique mondial
              </h2>

              <div className="prose prose-lg text-gray-600 max-w-none">
                <p>
                  <strong>Saclay</strong>, commune de l'<strong>Essonne (91)</strong>, est au coeur du plus grand cluster
                  scientifique et technologique d'Europe. Le <strong>plateau de Saclay</strong> rassemble des institutions
                  de renommée mondiale : le <strong>CEA</strong>, l'<strong>Université Paris-Saclay</strong>,
                  l'<strong>École Polytechnique</strong>, <strong>HEC</strong>, <strong>CentraleSupélec</strong> et de
                  nombreuses entreprises innovantes.
                </p>

                <p>
                  Avec plus de 65 000 étudiants et 15 000 chercheurs, le plateau de Saclay est devenu un écosystème
                  unique en Europe. Cependant, <strong>l'absence de gare directe</strong> et la faible desserte en
                  transports en commun rendent le taxi indispensable pour les déplacements quotidiens, les transferts
                  aéroport et les trajets professionnels.
                </p>

                <p>
                  Que vous soyez chercheur au CEA, étudiant à Polytechnique, entrepreneur dans une startup tech
                  ou visiteur professionnel, notre service de <strong>taxi à Saclay</strong> vous accompagne
                  avec ponctualité et professionnalisme, 24h/24 et 7j/7.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Grille tarifaire */}
        <section className="py-12 md:py-16 bg-gray-900 text-white">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center">
              Tarifs indicatifs depuis Saclay
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
              Vos destinations depuis Saclay
            </h2>
            <p className="text-gray-600 text-center mb-10 max-w-2xl mx-auto">
              Découvrez nos principales liaisons au départ de Saclay avec des prix transparents et sans surprise.
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
              Pourquoi choisir TAXI Pro 91 à Saclay ?
            </h2>
            <p className="text-gray-600 text-center mb-10 max-w-2xl mx-auto">
              Un service de qualité adapté aux besoins du plateau de Saclay : chercheurs, étudiants, entreprises.
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
              Avis de nos clients à Saclay
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
              Taxi dans tous les quartiers de Saclay
            </h2>
            <p className="text-gray-600 text-center mb-8 max-w-2xl mx-auto">
              Nous intervenons dans tous les quartiers de Saclay et sur l'ensemble du plateau pour vous prendre en charge ou vous déposer à l'adresse de votre choix, 24h/24.
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
              Comment réserver votre taxi à Saclay ?
            </h2>
            <p className="text-gray-600 text-center mb-10 max-w-2xl mx-auto">
              Réserver un taxi à Saclay n'a jamais été aussi simple. Trois options s'offrent à vous :
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
              Questions fréquentes - Taxi Saclay
            </h2>
            <p className="text-gray-600 text-center mb-10 max-w-2xl mx-auto">
              Retrouvez les réponses aux questions les plus posées par nos clients à Saclay et sur le plateau.
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
                Votre taxi de confiance sur le plateau de Saclay
              </h2>

              <div className="prose prose-lg text-gray-600 max-w-none">
                <p>
                  <strong>TAXI Pro 91</strong> est votre partenaire de confiance pour tous vos déplacements à Saclay
                  et sur le plateau de Saclay. Premier pôle scientifique et technologique d'Europe, le plateau de
                  Saclay nécessite un service de taxi fiable et disponible à toute heure, compte tenu du manque
                  de transports en commun dans ce secteur.
                </p>

                <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Le défi des transports sur le plateau de Saclay</h3>
                <p>
                  Contrairement aux villes voisines comme Massy ou Orsay, <strong>Saclay ne dispose pas de gare</strong>.
                  Les transports en commun se limitent à quelques lignes de bus peu fréquentes, rendant les déplacements
                  compliqués, particulièrement le soir et le week-end. C'est pourquoi notre service de taxi est devenu
                  indispensable pour les milliers de personnes travaillant ou étudiant sur le plateau.
                </p>
                <p>
                  En attendant l'arrivée de la <strong>ligne 18 du métro automatique</strong> (Grand Paris Express),
                  prévue pour les prochaines années, le taxi reste la solution la plus pratique et fiable pour
                  vos déplacements quotidiens.
                </p>

                <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Transferts vers le CEA et les centres de recherche</h3>
                <p>
                  Le <strong>CEA Saclay</strong> (Commissariat à l'Énergie Atomique) est l'un des plus grands centres
                  de recherche d'Europe. Nous assurons quotidiennement les transferts des chercheurs, ingénieurs et
                  visiteurs depuis les gares (Massy TGV, Orsay) et les aéroports (Orly, CDG).
                </p>
                <p>
                  Nos chauffeurs connaissent parfaitement les différentes entrées du CEA et les procédures de sécurité.
                  Ils vous déposent directement devant le bâtiment de votre choix, optimisant votre temps de déplacement.
                </p>

                <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Service pour l'Université Paris-Saclay et les grandes écoles</h3>
                <p>
                  L'<strong>Université Paris-Saclay</strong>, classée parmi les meilleures universités mondiales,
                  accueille plus de 65 000 étudiants et chercheurs. Nous desservons l'ensemble des campus :
                  <strong>Polytechnique</strong>, <strong>HEC</strong>, <strong>CentraleSupélec</strong>,
                  <strong>ENS Paris-Saclay</strong>, <strong>AgroParisTech</strong> et tous les laboratoires de recherche.
                </p>
                <p>
                  Que vous soyez étudiant rentrant d'un week-end, chercheur participant à un colloque international
                  ou professeur invité, nous vous accompagnons 24h/24 avec des tarifs adaptés.
                </p>

                <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Transport pour les entreprises tech et startups</h3>
                <p>
                  Le plateau de Saclay accueille un écosystème unique de <strong>startups</strong>, <strong>entreprises tech</strong>
                  et <strong>incubateurs</strong>. Nous proposons des comptes entreprise avec facturation mensuelle
                  et tarifs négociés pour les sociétés du plateau.
                </p>
                <p>
                  Transferts de collaborateurs, accueil de clients internationaux, trajets vers les aéroports...
                  Nous assurons tous vos déplacements professionnels avec ponctualité et discrétion.
                  De nombreuses entreprises du plateau nous font confiance pour le transport de leurs équipes.
                </p>

                <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Transport médical conventionné CPAM</h3>
                <p>
                  Nous sommes <strong>agréés par la CPAM</strong> pour le transport médical assis. Si vous disposez d'une
                  prescription médicale de transport, nous assurons vos trajets vers les hôpitaux, cliniques et
                  centres médicaux de la région depuis Saclay.
                </p>
                <p>
                  Nos chauffeurs sont formés à l'accompagnement des personnes à mobilité réduite et font preuve
                  de patience et de bienveillance. La prise en charge administrative est simplifiée :
                  présentez simplement votre bon de transport.
                </p>
              </div>

              <div className="mt-10 p-6 bg-yellow-50 rounded-xl border border-yellow-200">
                <p className="text-gray-900 font-medium mb-4">
                  Réservez votre taxi à Saclay dès maintenant
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

        <RelatedCities currentSlug="taxi-saclay" />
      </main>
      <Footer />
    </>
  )
}
