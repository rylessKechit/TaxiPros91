import { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/Header'
import Breadcrumb from '@/components/Breadcrumb'
import Footer from '@/components/Footer'
import RelatedCities from '@/components/RelatedCities'
import BookingForm from '@/components/BookingForm'
import { Phone, MapPin, Train, Plane, Clock, CheckCircle, Star, CreditCard, Shield, Users, Car, HelpCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Taxi Antony (92160) | Réservation 24h/24 - Orlyval, RER B & Aéroport Orly',
  description: 'Réservez votre taxi à Antony 92160. Service disponible 24h/24 pour vos trajets Orlyval, RER B Antony, aéroport Orly, Parc de Sceaux. Chauffeurs professionnels, tarifs transparents. Appelez maintenant le 06 80 03 64 63 !',
  keywords: ['taxi antony', 'taxi antony 92160', 'taxi antony orly', 'taxi antony orlyval', 'taxi antony rer b', 'taxi parc de sceaux', 'réservation taxi antony', 'taxi antony aéroport', 'prix taxi antony orly', 'taxi antony paris'],
  openGraph: {
    title: 'Taxi Antony (92160) | Service 24h/24 - Orlyval & Orly',
    description: 'Votre taxi à Antony : Orlyval, RER B, aéroport Orly, Parc de Sceaux. Réservation rapide, tarifs transparents. Note 4.9/5.',
    url: 'https://www.taxipro91.com/taxi-antony',
  },
  alternates: {
    canonical: 'https://www.taxipro91.com/taxi-antony',
  },
}

// Schema.org enrichi pour LocalBusiness + FAQ
const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://www.taxipro91.com/taxi-antony',
  additionalType: 'https://schema.org/TaxiService',
  name: 'TAXI Pro 91 - Taxi Antony',
  description: 'Service de taxi professionnel à Antony (92160). Transferts Orlyval, RER B, aéroport Orly, Parc de Sceaux. Disponible 24h/24.',
  url: 'https://www.taxipro91.com/taxi-antony',
  telephone: '+33680036463',
  priceRange: '€€',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Antony',
    postalCode: '92160',
    addressRegion: 'Hauts-de-Seine',
    addressCountry: 'FR'
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 48.7539,
    longitude: 2.2975
  },
  areaServed: {
    '@type': 'City',
    name: 'Antony',
    containedInPlace: { '@type': 'AdministrativeArea', name: 'Hauts-de-Seine' }
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '143',
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
      name: 'Quel est le prix d\'un taxi Antony → Orly ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Le prix d\'un taxi de Antony vers l\'aéroport d\'Orly est d\'environ 20€ à 30€ selon l\'heure et le trafic. Trajet direct en 10 minutes, plus rapide et confortable que l\'Orlyval avec vos bagages.'
      }
    },
    {
      '@type': 'Question',
      name: 'Le taxi est-il plus pratique que l\'Orlyval depuis Antony ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Oui, le taxi offre plusieurs avantages par rapport à l\'Orlyval : prise en charge à domicile, pas de correspondance, confort avec les bagages, disponible 24h/24 (contrairement à l\'Orlyval qui ferme la nuit), et tarif compétitif pour 2 personnes ou plus.'
      }
    },
    {
      '@type': 'Question',
      name: 'Quelles gares RER B desservez-vous à Antony ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Nous desservons les trois gares RER B d\'Antony : Antony (avec correspondance Orlyval), La Croix de Berny et Les Baconnets. Prise en charge et dépose au plus près des accès.'
      }
    },
    {
      '@type': 'Question',
      name: 'Proposez-vous des transferts vers le Parc de Sceaux ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Oui, nous assurons les transferts vers le Domaine de Sceaux pour vos promenades, événements, mariages ou séances photos. Dépose à l\'entrée de votre choix (grilles d\'honneur, Petit Château, etc.).'
      }
    },
    {
      '@type': 'Question',
      name: 'Quel délai pour avoir un taxi à Antony ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'En moyenne, un taxi peut être disponible à Antony en 10 à 15 minutes. Pour les trajets vers Orly, nous recommandons de réserver à l\'avance pour garantir votre prise en charge.'
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
      name: 'Proposez-vous le transport médical à Antony ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Oui, nous sommes conventionnés CPAM pour le transport médical à Antony. Nous assurons vos trajets vers les hôpitaux, cliniques et centres médicaux, notamment l\'hôpital privé d\'Antony.'
      }
    },
    {
      '@type': 'Question',
      name: 'Y a-t-il un supplément pour les trajets de nuit vers Orly ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Les tarifs de nuit (19h-7h) incluent un supplément d\'environ 15-20%. C\'est particulièrement avantageux car l\'Orlyval ne fonctionne pas la nuit, le taxi devient alors la seule solution directe.'
      }
    }
  ]
}

const destinations = [
  { name: 'Aéroport d\'Orly', distance: '10 min', price: '20-30€', description: 'Transfert rapide vers tous les terminaux Orly 1, 2, 3 et 4. Plus pratique que l\'Orlyval.' },
  { name: 'Aéroport CDG', distance: '45 min', price: '70-90€', description: 'Liaison directe vers Roissy Charles de Gaulle, tous terminaux.' },
  { name: 'Paris Centre', distance: '25 min', price: '40-55€', description: 'Liaison directe vers tous les arrondissements parisiens.' },
  { name: 'Gare Massy TGV', distance: '10 min', price: '15-25€', description: 'Connexion TGV vers Lyon, Marseille, Bordeaux, Nantes, Rennes.' },
  { name: 'La Défense', distance: '30 min', price: '50-65€', description: 'Accès au quartier d\'affaires pour vos rendez-vous professionnels.' },
  { name: 'Parc de Sceaux', distance: '5 min', price: '10-15€', description: 'Accès au domaine et aux jardins pour vos sorties et événements.' },
]

const quartiers = [
  'Centre-ville', 'La Fontaine', 'Les Rabats', 'Pajeaud',
  'La Croix de Berny', 'Les Baconnets', 'Le Noyer Doré'
]

const avantages = [
  { icon: Clock, title: 'Disponible 24h/24', description: 'Service de taxi à Antony jour et nuit, week-ends et jours fériés inclus.' },
  { icon: CreditCard, title: 'Paiement flexible', description: 'CB, espèces, bons CPAM. Facturation entreprise sur demande.' },
  { icon: Shield, title: 'Chauffeurs professionnels', description: 'Conducteurs expérimentés, véhicules récents et entretenus.' },
  { icon: Star, title: 'Note 4.9/5', description: 'Plus de 500 avis clients positifs. Satisfaction garantie.' },
]

const avisClients = [
  { nom: 'Laurent M.', note: 5, texte: 'Parfait pour mon vol à Orly à 6h du matin. Chauffeur ponctuel, véhicule propre. Beaucoup plus pratique que l\'Orlyval !', date: 'Janvier 2025' },
  { nom: 'Catherine D.', note: 5, texte: 'Transfert depuis la gare RER B d\'Antony impeccable. Le chauffeur m\'attendait à la sortie. Service très pro.', date: 'Décembre 2024' },
  { nom: 'Philippe R.', note: 5, texte: 'Utilisé pour aller au Parc de Sceaux pour notre mariage. Chauffeur très agréable et ponctuel. Merci !', date: 'Janvier 2025' },
]

const faqItems = [
  {
    question: 'Quel est le prix d\'un taxi Antony → Orly ?',
    answer: 'Le prix d\'un taxi de Antony vers l\'aéroport d\'Orly est d\'environ 20€ à 30€ selon l\'heure (jour/nuit) et les conditions de circulation. Trajet direct en 10 minutes, sans correspondance. C\'est souvent plus économique que l\'Orlyval pour 2 personnes ou plus, et beaucoup plus pratique avec des bagages.'
  },
  {
    question: 'Le taxi est-il plus pratique que l\'Orlyval depuis Antony ?',
    answer: 'Le taxi offre plusieurs avantages par rapport à l\'Orlyval : prise en charge directe à votre domicile (pas besoin d\'aller à la gare), pas de correspondance RER/Orlyval, confort optimal avec vos bagages, disponibilité 24h/24 (l\'Orlyval ferme la nuit), et tarif compétitif dès 2 voyageurs.'
  },
  {
    question: 'Quelles gares RER B desservez-vous à Antony ?',
    answer: 'Nous desservons les trois gares RER B situées sur le territoire d\'Antony : la gare d\'Antony (avec la correspondance Orlyval), la gare de La Croix de Berny, et la gare des Baconnets. Nos chauffeurs vous déposent ou vous récupèrent au plus près des accès.'
  },
  {
    question: 'Proposez-vous des transferts vers le Parc de Sceaux ?',
    answer: 'Absolument ! Le Domaine de Sceaux est l\'un des plus beaux parcs d\'Île-de-France. Nous assurons les transferts pour vos promenades, pique-niques, événements familiaux, mariages ou séances photos. Nous vous déposons à l\'entrée de votre choix.'
  },
  {
    question: 'Quel délai pour avoir un taxi à Antony ?',
    answer: 'En réservation immédiate, un taxi peut être à votre adresse à Antony en 10 à 15 minutes en moyenne. Pour les trajets vers Orly ou les gares, nous recommandons de réserver au moins 2 heures à l\'avance pour garantir la disponibilité.'
  },
  {
    question: 'Acceptez-vous les paiements par carte bancaire ?',
    answer: 'Oui, tous nos véhicules sont équipés de terminaux de paiement. Nous acceptons les cartes Visa, Mastercard, American Express, ainsi que les espèces et les bons de transport CPAM. Facturation entreprise disponible sur demande.'
  },
  {
    question: 'Proposez-vous le transport médical à Antony ?',
    answer: 'Oui, nous sommes conventionnés par la CPAM pour le transport médical. Nous assurons vos trajets vers les hôpitaux (notamment l\'hôpital privé d\'Antony), cliniques, centres de dialyse et cabinets médicaux. Présentez votre bon de transport.'
  },
  {
    question: 'Y a-t-il un supplément pour les trajets de nuit vers Orly ?',
    answer: 'Les tarifs de nuit (19h-7h) incluent un supplément d\'environ 15-20%. Cependant, c\'est particulièrement avantageux car l\'Orlyval ne fonctionne pas entre 23h30 et 6h : le taxi devient alors votre seule solution directe et confortable pour rejoindre Orly.'
  }
]

export default function TaxiAntony() {
  return (
    <>
      <Header />
      <Breadcrumb items={[{ name: 'Taxi Antony' }]} />

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
              Besoin d'un taxi à Antony ? Appelez le{' '}
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
                  <span className="font-medium">Antony (92160) - Hauts-de-Seine</span>
                </div>

                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                  Taxi à Antony
                </h1>

                <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                  Votre service de <strong>taxi à Antony</strong> disponible 24h/24 et 7j/7.
                  Connexion directe vers l'<strong>aéroport d'Orly</strong> en 10 minutes,
                  desserte des gares <strong>RER B Antony</strong>, <strong>La Croix de Berny</strong>,
                  <strong> Les Baconnets</strong> et du magnifique <strong>Parc de Sceaux</strong>.
                </p>

                {/* Avis résumé */}
                <div className="flex items-center gap-2 mb-6 bg-white p-3 rounded-lg border border-gray-200 w-fit">
                  <div className="flex">
                    {[1,2,3,4,5].map(i => <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />)}
                  </div>
                  <span className="font-bold text-gray-900">4.9/5</span>
                  <span className="text-gray-500">- 143 avis clients</span>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">Orly en 10 min</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">Alternative Orlyval</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">Disponible 24h/24</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">Tarifs transparents</span>
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

        {/* Présentation d'Antony */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">
                Antony : porte d'entrée vers Orly et le sud parisien
              </h2>

              <div className="prose prose-lg text-gray-600 max-w-none">
                <p>
                  <strong>Antony</strong>, ville de plus de 60 000 habitants située dans les <strong>Hauts-de-Seine (92)</strong>,
                  occupe une position stratégique aux portes de Paris. Connue pour sa connexion directe avec
                  l'<strong>aéroport d'Orly</strong> via l'Orlyval, Antony est un carrefour de transport majeur en Île-de-France.
                </p>

                <p>
                  La ville bénéficie de trois gares sur le <strong>RER B</strong> (Antony, La Croix de Berny, Les Baconnets),
                  offrant un accès direct à Paris et à l'aéroport CDG. La gare d'Antony est également le terminus de
                  l'<strong>Orlyval</strong>, la navette automatique vers l'aéroport d'Orly.
                </p>

                <p>
                  Antony est aussi réputée pour le <strong>Parc de Sceaux</strong>, l'un des plus beaux domaines
                  d'Île-de-France, attirant visiteurs, promeneurs et événements tout au long de l'année.
                  Notre service de <strong>taxi à Antony</strong> vous accompagne dans tous vos déplacements
                  avec ponctualité et professionnalisme.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Grille tarifaire */}
        <section className="py-12 md:py-16 bg-gray-900 text-white">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center">
              Tarifs indicatifs depuis Antony
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
              Vos destinations depuis Antony
            </h2>
            <p className="text-gray-600 text-center mb-10 max-w-2xl mx-auto">
              Découvrez nos principales liaisons au départ d'Antony avec des prix transparents et sans surprise.
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
              Pourquoi choisir TAXI Pro 91 à Antony ?
            </h2>
            <p className="text-gray-600 text-center mb-10 max-w-2xl mx-auto">
              Un service de qualité reconnu par nos clients depuis plus de 10 ans en Île-de-France.
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
              Avis de nos clients à Antony
            </h2>
            <div className="flex items-center justify-center gap-2 mb-10">
              <div className="flex">
                {[1,2,3,4,5].map(i => <Star key={i} className="w-6 h-6 text-yellow-400 fill-yellow-400" />)}
              </div>
              <span className="font-bold text-xl text-gray-900">4.9/5</span>
              <span className="text-gray-500">basé sur 143 avis</span>
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
              Taxi dans tous les quartiers d'Antony
            </h2>
            <p className="text-gray-600 text-center mb-8 max-w-2xl mx-auto">
              Nous intervenons dans tous les quartiers d'Antony pour vous prendre en charge ou vous déposer à l'adresse de votre choix, 24h/24.
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
              Comment réserver votre taxi à Antony ?
            </h2>
            <p className="text-gray-600 text-center mb-10 max-w-2xl mx-auto">
              Réserver un taxi à Antony n'a jamais été aussi simple. Trois options s'offrent à vous :
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
              Questions fréquentes - Taxi Antony
            </h2>
            <p className="text-gray-600 text-center mb-10 max-w-2xl mx-auto">
              Retrouvez les réponses aux questions les plus posées par nos clients à Antony.
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
                Votre taxi de confiance à Antony, porte d'Orly
              </h2>

              <div className="prose prose-lg text-gray-600 max-w-none">
                <p>
                  <strong>TAXI Pro 91</strong> est votre partenaire de confiance pour tous vos déplacements à Antony
                  et dans les Hauts-de-Seine. Située à proximité immédiate de l'aéroport d'Orly, Antony est une ville
                  stratégique qui nécessite un service de taxi fiable et disponible à toute heure.
                </p>

                <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Navettes Aéroport Orly : l'alternative idéale à l'Orlyval</h3>
                <p>
                  L'<strong>aéroport d'Orly</strong> se trouve à seulement 10 minutes d'Antony. Si l'Orlyval offre une
                  liaison rapide, notre service de taxi présente de nombreux avantages : prise en charge à domicile
                  (pas besoin de vous rendre à la gare), confort optimal avec vos bagages, disponibilité 24h/24
                  (l'Orlyval ferme entre 23h30 et 6h), et tarif compétitif dès 2 voyageurs.
                </p>
                <p>
                  Notre service couvre tous les terminaux : Orly 1, Orly 2, Orly 3 et Orly 4. Nous proposons le
                  suivi de vol en temps réel : en cas de retard de votre avion, nous adaptons automatiquement
                  l'heure de prise en charge. Le tarif est fixe et connu à l'avance.
                </p>

                <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Connexion RER B : trois gares desservies</h3>
                <p>
                  Antony bénéficie de trois gares sur la ligne <strong>RER B</strong> : la gare d'Antony
                  (correspondance Orlyval), la gare de La Croix de Berny et la gare des Baconnets.
                  Nous assurons tous les transferts depuis et vers ces gares pour vos correspondances,
                  que ce soit vers Paris, l'aéroport CDG ou le plateau de Saclay.
                </p>
                <p>
                  En cas de grève ou de perturbations sur le RER B (malheureusement fréquentes), notre service
                  de taxi devient une alternative fiable pour rejoindre votre destination sans stress.
                </p>

                <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Le Parc de Sceaux : joyau d'Île-de-France</h3>
                <p>
                  Le <strong>Domaine de Sceaux</strong> est l'un des plus beaux parcs d'Île-de-France, avec ses
                  jardins à la française dessinés par Le Nôtre, son château et son Grand Canal. Nous vous y
                  conduisons pour vos promenades dominicales, pique-niques en famille, séances photos,
                  ou événements prestigieux comme les mariages.
                </p>
                <p>
                  Nos chauffeurs connaissent parfaitement les différentes entrées du parc et vous déposent
                  au plus près de votre destination : grilles d'honneur, Petit Château, Orangerie...
                </p>

                <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Transport médical conventionné CPAM</h3>
                <p>
                  Nous sommes <strong>agréés par la CPAM</strong> pour le transport médical assis. Si vous disposez
                  d'une prescription médicale de transport, nous assurons vos trajets vers les établissements de santé :
                  hôpital privé d'Antony, cliniques, centres de dialyse, cabinets médicaux de la région.
                </p>
                <p>
                  Nos chauffeurs sont formés à l'accompagnement des personnes à mobilité réduite et font preuve
                  de patience et de bienveillance. Présentez simplement votre bon de transport.
                </p>

                <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Transport professionnel et entreprises</h3>
                <p>
                  De nombreuses entreprises implantées à Antony et dans les Hauts-de-Seine nous font confiance
                  pour le transport de leurs collaborateurs et clients. Nous proposons des comptes entreprise
                  avec facturation mensuelle, suivi des courses et tarifs négociés.
                </p>
              </div>

              <div className="mt-10 p-6 bg-yellow-50 rounded-xl border border-yellow-200">
                <p className="text-gray-900 font-medium mb-4">
                  Réservez votre taxi à Antony dès maintenant
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

        <RelatedCities currentSlug="taxi-antony" />
      </main>
      <Footer />
    </>
  )
}
