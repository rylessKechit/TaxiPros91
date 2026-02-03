import { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/Header'
import Breadcrumb from '@/components/Breadcrumb'
import Footer from '@/components/Footer'
import RelatedCities from '@/components/RelatedCities'
import BookingForm from '@/components/BookingForm'
import { Phone, MapPin, Train, Plane, Clock, CheckCircle, Star, CreditCard, Shield, Users, Car, HelpCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Taxi Ballainvilliers (91160) | Reservation 24h/24 - Aeroport Orly & Gares',
  description: 'Reservez votre taxi a Ballainvilliers 91160. Service disponible 24h/24 pour vos trajets aeroport Orly, gare Massy TGV, Paris. Village residentiel proche A10. Chauffeurs professionnels, tarifs transparents. Appelez maintenant le 06 80 03 64 63 !',
  keywords: ['taxi ballainvilliers', 'taxi ballainvilliers 91160', 'taxi ballainvilliers orly', 'taxi ballainvilliers massy', 'reservation taxi ballainvilliers', 'taxi ballainvilliers aeroport', 'prix taxi ballainvilliers orly', 'taxi ballainvilliers paris', 'vtc ballainvilliers'],
  openGraph: {
    title: 'Taxi Ballainvilliers (91160) | Service 24h/24 - Orly & Massy TGV',
    description: 'Votre taxi a Ballainvilliers : aeroport Orly, gare Massy TGV, Paris. Reservation rapide, tarifs transparents. Note 4.9/5.',
    url: 'https://www.taxipro91.com/taxi-ballainvilliers',
  },
  alternates: {
    canonical: 'https://www.taxipro91.com/taxi-ballainvilliers',
  },
}

// Schema.org enrichi pour LocalBusiness + FAQ
const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'TaxiService',
  name: 'TAXI Pro 91 - Taxi Ballainvilliers',
  description: 'Service de taxi professionnel a Ballainvilliers (91160). Transferts aeroport Orly, gare Massy TGV, Paris. Disponible 24h/24 dans ce village residentiel proche A10.',
  url: 'https://www.taxipro91.com/taxi-ballainvilliers',
  telephone: '+33680036463',
  priceRange: '$$',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Ballainvilliers',
    postalCode: '91160',
    addressRegion: 'Essonne',
    addressCountry: 'FR'
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 48.6758,
    longitude: 2.2919
  },
  areaServed: {
    '@type': 'City',
    name: 'Ballainvilliers',
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
      name: 'Quel est le prix d\'un taxi Ballainvilliers vers Orly ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Le prix d\'un taxi de Ballainvilliers vers l\'aeroport d\'Orly est d\'environ 25EUR a 35EUR selon l\'heure et le trafic. Ce tarif est fixe et comprend la prise en charge. Reservez a l\'avance pour beneficier du meilleur tarif.'
      }
    },
    {
      '@type': 'Question',
      name: 'Y a-t-il une gare a Ballainvilliers ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Non, Ballainvilliers ne dispose pas de gare. La gare la plus proche est Longjumeau (RER C) a 5 minutes en taxi. Nous assurons les navettes vers cette gare ainsi que vers Massy TGV (10 min) pour vos correspondances.'
      }
    },
    {
      '@type': 'Question',
      name: 'Comment reserver un taxi a Ballainvilliers ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Pour reserver un taxi a Ballainvilliers, vous pouvez appeler le 06 80 03 64 63 disponible 24h/24, ou utiliser notre formulaire de reservation en ligne. La confirmation est immediate et vous recevez un SMS de rappel.'
      }
    },
    {
      '@type': 'Question',
      name: 'Quel delai pour avoir un taxi a Ballainvilliers ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'En moyenne, un taxi peut etre disponible a Ballainvilliers en 10 a 15 minutes. Etant un village residentiel calme, nous recommandons de reserver a l\'avance pour garantir votre prise en charge, surtout pour les trajets aeroport.'
      }
    },
    {
      '@type': 'Question',
      name: 'Desservez-vous les zones pavillonnaires de Ballainvilliers ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Oui, nous desservons tous les quartiers de Ballainvilliers : le Centre-bourg, la zone pavillonnaire, et les secteurs proches des Music\'Halles. Nos chauffeurs connaissent parfaitement les rues du village.'
      }
    },
    {
      '@type': 'Question',
      name: 'L\'acces a l\'A10 est-il rapide depuis Ballainvilliers ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Oui, Ballainvilliers beneficie d\'un acces direct a l\'autoroute A10 en quelques minutes, ce qui permet des trajets rapides vers Paris, Orly et les autres destinations. Nos chauffeurs optimisent les itineraires selon le trafic.'
      }
    },
    {
      '@type': 'Question',
      name: 'Proposez-vous le transport medical a Ballainvilliers ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Oui, nous sommes conventionnes CPAM pour le transport medical a Ballainvilliers. Nous assurons vos trajets vers les hopitaux, cliniques et centres medicaux de la region avec prise en charge de votre bon de transport.'
      }
    },
    {
      '@type': 'Question',
      name: 'Peut-on reserver un taxi pour un aller-retour depuis Ballainvilliers ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Absolument ! Nous proposons des forfaits aller-retour avantageux, notamment pour les trajets gare et aeroport. Ideal pour les habitants de ce village residentiel sans transports en commun directs.'
      }
    }
  ]
}

const destinations = [
  { name: 'Gare de Longjumeau (RER C)', distance: '5 min', price: '10-15EUR', description: 'Gare RER C la plus proche de Ballainvilliers. Connexion vers Paris Austerlitz et Versailles.' },
  { name: 'Gare Massy TGV', distance: '10 min', price: '15-22EUR', description: 'Acces TGV vers Lyon, Marseille, Bordeaux, Nantes. Connexion RER B.' },
  { name: 'Aeroport d\'Orly', distance: '15 min', price: '25-35EUR', description: 'Transfert rapide vers les terminaux Orly 1, 2, 3 et 4. Suivi de vol inclus.' },
  { name: 'Aeroport CDG', distance: '50 min', price: '75-95EUR', description: 'Liaison directe vers Roissy Charles de Gaulle, tous terminaux.' },
  { name: 'Paris Centre', distance: '30 min', price: '45-60EUR', description: 'Liaison directe vers tous les arrondissements parisiens via A10.' },
  { name: 'Longjumeau Centre', distance: '5 min', price: '10-15EUR', description: 'Acces aux commerces, services et centre-ville de Longjumeau.' },
]

const quartiers = [
  'Centre-bourg', 'Zone pavillonnaire', 'Secteur Les Music\'Halles',
  'Route de Longjumeau', 'Route de Montlhery', 'Les Closeaux'
]

const avantages = [
  { icon: Clock, title: 'Disponible 24h/24', description: 'Service de taxi a Ballainvilliers jour et nuit, week-ends et jours feries inclus.' },
  { icon: CreditCard, title: 'Paiement flexible', description: 'CB, especes, bons CPAM. Facturation entreprise sur demande.' },
  { icon: Shield, title: 'Chauffeurs professionnels', description: 'Conducteurs experimentes connaissant parfaitement ce village residentiel.' },
  { icon: Star, title: 'Note 4.9/5', description: 'Plus de 89 avis clients positifs. Satisfaction garantie.' },
]

const avisClients = [
  { nom: 'Catherine R.', note: 5, texte: 'Excellent service pour mon transfert vers Orly a 5h du matin. Chauffeur ponctuel dans notre quartier pavillonnaire. Je recommande !', date: 'Janvier 2025' },
  { nom: 'Jean-Michel P.', note: 5, texte: 'Enfin un taxi fiable pour Ballainvilliers ! Sans gare dans notre village, ce service est indispensable. Tarifs corrects.', date: 'Decembre 2024' },
  { nom: 'Isabelle M.', note: 5, texte: 'Navette reguliere vers Massy TGV pour mes deplacements pro. Chauffeur qui connait bien les petites rues du village.', date: 'Janvier 2025' },
]

const faqItems = [
  {
    question: 'Quel est le prix d\'un taxi Ballainvilliers vers Orly ?',
    answer: 'Le prix d\'un taxi de Ballainvilliers vers l\'aeroport d\'Orly est d\'environ 25EUR a 35EUR selon l\'heure (jour/nuit) et les conditions de circulation. Grace a la proximite de l\'A10, le trajet est rapide (environ 15 minutes). Ce tarif est fixe et comprend la prise en charge, l\'attente a l\'aeroport et l\'aide aux bagages.'
  },
  {
    question: 'Y a-t-il une gare a Ballainvilliers ?',
    answer: 'Non, Ballainvilliers ne dispose pas de gare ferroviaire, ce qui rend notre service de taxi particulierement utile pour les residents. La gare la plus proche est celle de Longjumeau (RER C) a seulement 5 minutes. Nous assurons egalement les transferts vers la gare Massy TGV (10 min) pour vos voyages longue distance.'
  },
  {
    question: 'Comment reserver un taxi a Ballainvilliers ?',
    answer: 'Pour reserver un taxi a Ballainvilliers, trois options s\'offrent a vous : appelez le 06 80 03 64 63 (disponible 24h/24), utilisez notre formulaire de reservation en ligne, ou envoyez un SMS. La confirmation est immediate et vous recevez un rappel avant votre course. Nous recommandons la reservation a l\'avance pour ce village residentiel.'
  },
  {
    question: 'Quel delai pour avoir un taxi a Ballainvilliers ?',
    answer: 'En reservation immediate, un taxi peut etre a votre adresse a Ballainvilliers en 10 a 15 minutes. Cependant, etant donne le caractere residentiel et calme du village, nous recommandons de reserver au moins 2 heures a l\'avance pour les trajets vers les gares ou aeroports.'
  },
  {
    question: 'Desservez-vous tous les quartiers de Ballainvilliers ?',
    answer: 'Oui, nous desservons l\'integralite de Ballainvilliers : le Centre-bourg, toute la zone pavillonnaire, le secteur proche des Music\'Halles (limite avec Longjumeau), ainsi que les routes de Longjumeau et Montlhery. Nos chauffeurs connaissent parfaitement toutes les rues du village.'
  },
  {
    question: 'L\'acces a l\'A10 facilite-t-il les trajets ?',
    answer: 'Absolument ! Ballainvilliers beneficie d\'une situation privilegiee a proximite immediate de l\'autoroute A10. Cet acces permet des trajets rapides vers Paris (30 min), Orly (15 min) et le sud de la France. Nos chauffeurs connaissent les meilleurs horaires pour eviter les bouchons.'
  },
  {
    question: 'Proposez-vous le transport medical a Ballainvilliers ?',
    answer: 'Oui, nous sommes conventionnes par la CPAM pour le transport medical. Nous assurons vos trajets vers les hopitaux, cliniques, centres de dialyse et cabinets medicaux de la region. Presentez votre bon de transport et nous nous occupons des formalites. Service particulierement apprecie dans ce village sans transports en commun.'
  },
  {
    question: 'Peut-on reserver pour un aller-retour ?',
    answer: 'Oui, nous proposons des forfaits aller-retour particulierement avantageux pour les habitants de Ballainvilliers, notamment pour les trajets vers les gares et aeroports. Le chauffeur vous attend sur place et vous ramene a votre domicile. Ideal pour ce village residentiel sans acces direct aux transports en commun.'
  }
]

export default function TaxiBallainvilliers() {
  return (
    <>
      <Header />
      <Breadcrumb items={[{ name: 'Taxi Ballainvilliers' }]} />

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
              Besoin d'un taxi a Ballainvilliers ? Appelez le{' '}
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
                  <span className="font-medium">Ballainvilliers (91160) - Essonne</span>
                </div>

                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                  Taxi a Ballainvilliers
                </h1>

                <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                  Votre service de <strong>taxi a Ballainvilliers</strong> disponible 24h/24 et 7j/7.
                  Village residentiel sans gare, nous assurons tous vos trajets vers la <strong>gare de Longjumeau (RER C)</strong>,
                  <strong> la gare Massy TGV</strong>, l'<strong>aeroport d'Orly</strong> et Paris grace a la proximite de l'A10.
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
                    <span className="text-gray-700">Reservation rapide</span>
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

        {/* Presentation de Ballainvilliers */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">
                Ballainvilliers : village residentiel au coeur de l'Essonne
              </h2>

              <div className="prose prose-lg text-gray-600 max-w-none">
                <p>
                  <strong>Ballainvilliers</strong>, charmant village d'environ 4 500 habitants situe dans le departement de l'<strong>Essonne (91)</strong>,
                  est reconnu pour son cadre de vie paisible et verdoyant. Cette commune residentielle attire les familles
                  en quete de tranquillite tout en restant proche des grandes infrastructures de transport.
                </p>

                <p>
                  Le village ne dispose pas de gare ferroviaire, ce qui rend notre service de <strong>taxi a Ballainvilliers</strong>
                  particulierement precieux pour les residents. La gare la plus proche est celle de <strong>Longjumeau (RER C)</strong>
                  a seulement 5 minutes, tandis que la <strong>gare Massy TGV</strong> est accessible en 10 minutes.
                </p>

                <p>
                  Grace a sa <strong>proximite avec l'autoroute A10</strong>, Ballainvilliers beneficie d'un acces rapide
                  vers Paris, l'aeroport d'Orly et le sud de la France. Notre service de taxi vous permet de profiter
                  de cette situation geographique privilegiee pour tous vos deplacements.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Grille tarifaire */}
        <section className="py-12 md:py-16 bg-gray-900 text-white">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center">
              Tarifs indicatifs depuis Ballainvilliers
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
              Vos destinations depuis Ballainvilliers
            </h2>
            <p className="text-gray-600 text-center mb-10 max-w-2xl mx-auto">
              Decouvrez nos principales liaisons au depart de Ballainvilliers avec des prix transparents et sans surprise.
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
              Pourquoi choisir TAXI Pro 91 a Ballainvilliers ?
            </h2>
            <p className="text-gray-600 text-center mb-10 max-w-2xl mx-auto">
              Un service de qualite reconnu par nos clients, indispensable dans ce village residentiel sans transports en commun.
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
              Avis de nos clients a Ballainvilliers
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
              Taxi dans tous les quartiers de Ballainvilliers
            </h2>
            <p className="text-gray-600 text-center mb-8 max-w-2xl mx-auto">
              Nous intervenons dans tous les secteurs de Ballainvilliers, des zones pavillonnaires au centre-bourg, pour vous prendre en charge a domicile 24h/24.
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
              Comment reserver votre taxi a Ballainvilliers ?
            </h2>
            <p className="text-gray-600 text-center mb-10 max-w-2xl mx-auto">
              Reserver un taxi a Ballainvilliers n'a jamais ete aussi simple. Trois options s'offrent a vous :
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
              Questions frequentes - Taxi Ballainvilliers
            </h2>
            <p className="text-gray-600 text-center mb-10 max-w-2xl mx-auto">
              Retrouvez les reponses aux questions les plus posees par nos clients a Ballainvilliers.
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
                Votre taxi de confiance a Ballainvilliers, village residentiel de l'Essonne
              </h2>

              <div className="prose prose-lg text-gray-600 max-w-none">
                <p>
                  <strong>TAXI Pro 91</strong> est votre partenaire de confiance pour tous vos deplacements a Ballainvilliers et dans l'Essonne.
                  Ce charmant village residentiel, niché dans un cadre verdoyant, necessite un service de taxi fiable pour palier
                  a l'absence de transports en commun directs.
                </p>

                <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Un village sans gare : le taxi devient indispensable</h3>
                <p>
                  <strong>Ballainvilliers</strong> ne dispose pas de gare ferroviaire sur son territoire. Cette particularite
                  rend notre service de taxi essentiel pour les residents qui doivent rejoindre les transports en commun.
                  La <strong>gare de Longjumeau (RER C)</strong> est situee a seulement 5 minutes en taxi, offrant des connexions
                  vers Paris Austerlitz et Versailles.
                </p>
                <p>
                  Pour les voyages longue distance en TGV, nous vous conduisons a la <strong>gare Massy TGV</strong> en 10 minutes.
                  Cette gare dessert directement Lyon, Marseille, Bordeaux, Nantes, Rennes et de nombreuses autres villes francaises.
                  Nos chauffeurs vous deposent au plus pres des quais pour votre confort.
                </p>

                <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Proximite de l'A10 : des trajets rapides vers Paris et Orly</h3>
                <p>
                  L'un des atouts majeurs de Ballainvilliers est sa <strong>proximite avec l'autoroute A10</strong>.
                  Cette situation geographique privilegiee permet des trajets rapides vers l'<strong>aeroport d'Orly</strong>
                  (15 minutes seulement) et vers <strong>Paris</strong> (30 minutes via la Porte d'Orleans).
                </p>
                <p>
                  Nos chauffeurs connaissent parfaitement les horaires de trafic et adaptent les itineraires en temps reel.
                  Ils empruntent les voies rapides aux heures creuses et les alternatives locales en cas de bouchons,
                  vous garantissant d'arriver a l'heure a votre destination.
                </p>

                <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Navettes Aeroport Orly : un service premium</h3>
                <p>
                  Notre service de navette vers l'<strong>aeroport d'Orly</strong> est particulierement apprecie des residents
                  de Ballainvilliers. Le trajet de 15 minutes par l'A10 vous permet d'arriver sereinement a votre terminal.
                  Nous proposons un suivi de vol en temps reel : en cas de retard de votre avion, nous adaptons automatiquement
                  l'heure de prise en charge.
                </p>
                <p>
                  Notre service couvre tous les terminaux : Orly 1, Orly 2, Orly 3 et Orly 4.
                  Le tarif de 25EUR a 35EUR est fixe et connu a l'avance, sans mauvaise surprise a l'arrivee.
                  Pour les departs tres matinaux (4h-6h), nous assurons une prise en charge ponctuelle dans votre quartier pavillonnaire.
                </p>

                <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Transport medical conventionne CPAM</h3>
                <p>
                  Nous sommes <strong>agrees par la CPAM</strong> pour le transport medical assis, un service particulierement
                  utile dans un village sans transports en commun comme Ballainvilliers. Si vous disposez d'une
                  prescription medicale de transport, nous assurons vos trajets vers les hopitaux, cliniques,
                  centres de dialyse et cabinets medicaux de la region.
                </p>
                <p>
                  Nos chauffeurs sont formes a l'accompagnement des personnes a mobilite reduite et font preuve
                  de patience et de bienveillance. La prise en charge administrative est simplifiee :
                  presentez simplement votre bon de transport.
                </p>

                <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Connaissance parfaite du village et de ses quartiers</h3>
                <p>
                  Nos chauffeurs connaissent parfaitement <strong>Ballainvilliers</strong> et tous ses quartiers :
                  le Centre-bourg avec ses commerces de proximite, les zones pavillonnaires paisibles, le secteur
                  des Music'Halles a la limite de Longjumeau. Ils savent naviguer dans les petites rues residentielles
                  pour venir vous chercher directement devant votre domicile.
                </p>
                <p>
                  Cette connaissance locale nous permet egalement de vous conseiller sur les meilleurs itineraires
                  selon votre destination et l'heure de depart. Que vous vous rendiez a Longjumeau, Montlhery,
                  ou vers les grandes villes de l'Essonne, nous optimisons chaque trajet.
                </p>
              </div>

              <div className="mt-10 p-6 bg-yellow-50 rounded-xl border border-yellow-200">
                <p className="text-gray-900 font-medium mb-4">
                  Reservez votre taxi a Ballainvilliers des maintenant
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

        <RelatedCities currentSlug="taxi-ballainvilliers" />
      </main>
      <Footer />
    </>
  )
}
