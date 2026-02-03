import { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/Header'
import Breadcrumb from '@/components/Breadcrumb'
import Footer from '@/components/Footer'
import RelatedCities from '@/components/RelatedCities'
import BookingForm from '@/components/BookingForm'
import { Phone, MapPin, Train, Plane, Clock, CheckCircle, Star, CreditCard, Shield, Users, Car, HelpCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Taxi Massy (91300) | Réservation 24h/24 - Gare TGV & Aéroport Orly',
  description: 'Réservez votre taxi à Massy 91300. Service disponible 24h/24 pour vos trajets gare Massy TGV, RER B, aéroport Orly. Chauffeurs professionnels, tarifs transparents. Appelez maintenant le 06 80 03 64 63 !',
  keywords: ['taxi massy', 'taxi massy 91300', 'taxi gare massy tgv', 'taxi massy palaiseau', 'taxi massy orly', 'réservation taxi massy', 'taxi massy aéroport', 'prix taxi massy orly', 'taxi massy paris'],
  openGraph: {
    title: 'Taxi Massy (91300) | Service 24h/24 - Gare TGV & Orly',
    description: 'Votre taxi à Massy : gare TGV, RER B, aéroport Orly. Réservation rapide, tarifs transparents. Note 4.9/5.',
    url: 'https://www.taxipro91.com/taxi-massy',
  },
  alternates: {
    canonical: 'https://www.taxipro91.com/taxi-massy',
  },
}

// Schema.org enrichi pour LocalBusiness + FAQ
const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'TaxiService',
  name: 'TAXI Pro 91 - Taxi Massy',
  description: 'Service de taxi professionnel à Massy (91300). Transferts gare TGV, RER, aéroport Orly. Disponible 24h/24.',
  url: 'https://www.taxipro91.com/taxi-massy',
  telephone: '+33680036463',
  priceRange: '€€',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Massy',
    postalCode: '91300',
    addressRegion: 'Essonne',
    addressCountry: 'FR'
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 48.7253,
    longitude: 2.2714
  },
  areaServed: {
    '@type': 'City',
    name: 'Massy',
    containedInPlace: { '@type': 'AdministrativeArea', name: 'Essonne' }
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '127',
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
      name: 'Quel est le prix d\'un taxi Massy → Orly ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Le prix d\'un taxi de Massy vers l\'aéroport d\'Orly est d\'environ 25€ à 35€ selon l\'heure et le trafic. Ce tarif est fixe et comprend la prise en charge. Réservez à l\'avance pour bénéficier du meilleur tarif.'
      }
    },
    {
      '@type': 'Question',
      name: 'Comment réserver un taxi à Massy ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Pour réserver un taxi à Massy, vous pouvez appeler le 06 80 03 64 63 disponible 24h/24, ou utiliser notre formulaire de réservation en ligne. La confirmation est immédiate et vous recevez un SMS de rappel.'
      }
    },
    {
      '@type': 'Question',
      name: 'Proposez-vous le transport médical à Massy ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Oui, nous sommes conventionnés CPAM pour le transport médical à Massy. Nous assurons vos trajets vers les hôpitaux, cliniques et centres médicaux avec prise en charge de votre bon de transport.'
      }
    },
    {
      '@type': 'Question',
      name: 'Quel délai pour avoir un taxi à Massy ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'En moyenne, un taxi peut être disponible à Massy en 10 à 15 minutes. Pour les trajets vers les gares ou aéroports, nous recommandons de réserver à l\'avance pour garantir votre prise en charge.'
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
      name: 'Peut-on réserver un taxi pour un aller-retour Massy ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Absolument ! Nous proposons des forfaits aller-retour avantageux, notamment pour les trajets gare et aéroport. Précisez votre besoin lors de la réservation pour obtenir le meilleur tarif.'
      }
    },
    {
      '@type': 'Question',
      name: 'Vos taxis sont-ils équipés pour les personnes à mobilité réduite ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Nous disposons de véhicules adaptés aux personnes à mobilité réduite (PMR). Merci de le préciser lors de votre réservation afin que nous puissions vous envoyer le véhicule approprié.'
      }
    },
    {
      '@type': 'Question',
      name: 'Y a-t-il un supplément pour les bagages ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Non, les bagages standards sont inclus dans le tarif. Pour les bagages volumineux ou nombreux, nous vous recommandons notre service Van qui offre plus d\'espace sans supplément.'
      }
    }
  ]
}

const destinations = [
  { name: 'Gare Massy TGV', distance: '5 min', price: '10-15€', description: 'Desserte directe de la gare TGV pour vos voyages en province. Accès rapide aux quais.' },
  { name: 'Gare Massy-Palaiseau RER', distance: '3 min', price: '8-12€', description: 'Connexion RER B vers Paris et le plateau de Saclay. Idéal pour les correspondances.' },
  { name: 'Aéroport d\'Orly', distance: '15 min', price: '25-35€', description: 'Transfert rapide vers les terminaux Orly 1, 2, 3 et 4. Suivi de vol inclus.' },
  { name: 'Aéroport CDG', distance: '50 min', price: '70-90€', description: 'Liaison directe vers Roissy Charles de Gaulle, tous terminaux.' },
  { name: 'Paris Centre', distance: '30 min', price: '45-60€', description: 'Liaison directe vers tous les arrondissements parisiens.' },
  { name: 'La Défense', distance: '35 min', price: '50-65€', description: 'Accès au quartier d\'affaires pour vos rendez-vous professionnels.' },
]

const quartiers = [
  'Massy-Villaine', 'Massy-Verrières', 'Massy-Opéra', 'Atlantis',
  'Grand Ouest', 'Le Pileu', 'Villaine', 'La Bonde', 'Les Champarts'
]

const avantages = [
  { icon: Clock, title: 'Disponible 24h/24', description: 'Service de taxi à Massy jour et nuit, week-ends et jours fériés inclus.' },
  { icon: CreditCard, title: 'Paiement flexible', description: 'CB, espèces, bons CPAM. Facturation entreprise sur demande.' },
  { icon: Shield, title: 'Chauffeurs professionnels', description: 'Conducteurs expérimentés, véhicules récents et entretenus.' },
  { icon: Star, title: 'Note 4.9/5', description: 'Plus de 500 avis clients positifs. Satisfaction garantie.' },
]

const avisClients = [
  { nom: 'Marie L.', note: 5, texte: 'Excellent service pour mon transfert Massy-Orly. Chauffeur ponctuel et véhicule très propre. Je recommande !', date: 'Janvier 2025' },
  { nom: 'Pierre D.', note: 5, texte: 'Taxi réservé pour la gare TGV, arrivé 5 minutes avant l\'heure. Prix conforme à l\'estimation. Parfait.', date: 'Décembre 2024' },
  { nom: 'Sophie M.', note: 5, texte: 'Transport médical impeccable. Le chauffeur m\'a aidée avec mes béquilles. Très professionnel.', date: 'Janvier 2025' },
]

const faqItems = [
  {
    question: 'Quel est le prix d\'un taxi Massy → Orly ?',
    answer: 'Le prix d\'un taxi de Massy vers l\'aéroport d\'Orly est d\'environ 25€ à 35€ selon l\'heure (jour/nuit) et les conditions de circulation. Ce tarif est fixe et comprend la prise en charge, l\'attente à l\'aéroport et l\'aide aux bagages. Pour un aller-retour, bénéficiez d\'un tarif préférentiel.'
  },
  {
    question: 'Comment réserver un taxi à Massy ?',
    answer: 'Pour réserver un taxi à Massy, trois options s\'offrent à vous : appelez le 06 80 03 64 63 (disponible 24h/24), utilisez notre formulaire de réservation en ligne, ou envoyez un SMS. La confirmation est immédiate et vous recevez un rappel avant votre course.'
  },
  {
    question: 'Proposez-vous le transport médical à Massy ?',
    answer: 'Oui, nous sommes conventionnés par la CPAM (Caisse Primaire d\'Assurance Maladie) pour le transport médical. Nous assurons vos trajets vers les hôpitaux, cliniques, centres de dialyse et cabinets médicaux. Présentez votre bon de transport et nous nous occupons des formalités.'
  },
  {
    question: 'Quel délai pour avoir un taxi à Massy ?',
    answer: 'En réservation immédiate, un taxi peut être à votre adresse à Massy en 10 à 15 minutes en moyenne. Pour les trajets vers les gares ou aéroports, nous recommandons de réserver au moins 2 heures à l\'avance pour garantir la disponibilité.'
  },
  {
    question: 'Acceptez-vous les paiements par carte bancaire ?',
    answer: 'Oui, tous nos véhicules sont équipés de terminaux de paiement. Nous acceptons les cartes Visa, Mastercard, American Express, ainsi que les espèces et les bons de transport CPAM. Facturation entreprise disponible sur demande.'
  },
  {
    question: 'Peut-on réserver un taxi pour un aller-retour ?',
    answer: 'Absolument ! Nous proposons des forfaits aller-retour particulièrement avantageux pour les trajets gare et aéroport. Le chauffeur vous attend sur place et vous ramène à votre point de départ. Précisez votre besoin lors de la réservation.'
  },
  {
    question: 'Vos taxis sont-ils équipés pour les personnes à mobilité réduite ?',
    answer: 'Nous disposons de véhicules adaptés aux personnes à mobilité réduite (PMR) et aux fauteuils roulants. Merci de le préciser lors de votre réservation afin que nous puissions vous envoyer le véhicule approprié.'
  },
  {
    question: 'Y a-t-il un supplément pour les bagages ?',
    answer: 'Non, les bagages standards (valises, sacs) sont inclus dans le tarif sans supplément. Pour les bagages volumineux, encombrants ou très nombreux, nous recommandons notre service Van qui offre un grand espace de chargement.'
  }
]

export default function TaxiMassy() {
  return (
    <>
      <Header />
      <Breadcrumb items={[{ name: 'Taxi Massy' }]} />

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
              Besoin d'un taxi à Massy ? Appelez le{' '}
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
                  <span className="font-medium">Massy (91300) - Essonne</span>
                </div>

                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                  Taxi à Massy
                </h1>

                <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                  Votre service de <strong>taxi à Massy</strong> disponible 24h/24 et 7j/7.
                  Nous assurons tous vos trajets depuis et vers <strong>la gare Massy TGV</strong>,
                  <strong> la gare Massy-Palaiseau RER B</strong>, l'<strong>aéroport d'Orly</strong> et tous les quartiers de Massy.
                </p>

                {/* Avis résumé */}
                <div className="flex items-center gap-2 mb-6 bg-white p-3 rounded-lg border border-gray-200 w-fit">
                  <div className="flex">
                    {[1,2,3,4,5].map(i => <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />)}
                  </div>
                  <span className="font-bold text-gray-900">4.9/5</span>
                  <span className="text-gray-500">- 127 avis clients</span>
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

        {/* Présentation de Massy */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">
                Massy : carrefour stratégique de l'Essonne
              </h2>

              <div className="prose prose-lg text-gray-600 max-w-none">
                <p>
                  <strong>Massy</strong>, ville de plus de 50 000 habitants située dans le département de l'<strong>Essonne (91)</strong>,
                  est devenue un véritable hub de transport en Île-de-France. Grâce à sa position stratégique et ses
                  infrastructures de transport exceptionnelles, Massy attire chaque jour des milliers de voyageurs
                  et professionnels.
                </p>

                <p>
                  La ville est notamment connue pour sa <strong>gare TGV</strong> qui la relie directement à Lyon,
                  Marseille, Bordeaux, Nantes, Rennes et de nombreuses autres villes françaises. Cette gare est
                  également connectée au <strong>RER B et RER C</strong>, offrant un accès direct à Paris et aux
                  aéroports d'Orly et de Roissy-CDG.
                </p>

                <p>
                  Que vous soyez résident de Massy, voyageur en transit ou professionnel en déplacement,
                  notre service de <strong>taxi à Massy</strong> vous accompagne dans tous vos trajets avec
                  ponctualité et professionnalisme.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Grille tarifaire */}
        <section className="py-12 md:py-16 bg-gray-900 text-white">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center">
              Tarifs indicatifs depuis Massy
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
              Vos destinations depuis Massy
            </h2>
            <p className="text-gray-600 text-center mb-10 max-w-2xl mx-auto">
              Découvrez nos principales liaisons au départ de Massy avec des prix transparents et sans surprise.
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
              Pourquoi choisir TAXI Pro 91 à Massy ?
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
              Avis de nos clients à Massy
            </h2>
            <div className="flex items-center justify-center gap-2 mb-10">
              <div className="flex">
                {[1,2,3,4,5].map(i => <Star key={i} className="w-6 h-6 text-yellow-400 fill-yellow-400" />)}
              </div>
              <span className="font-bold text-xl text-gray-900">4.9/5</span>
              <span className="text-gray-500">basé sur 127 avis</span>
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
              Taxi dans tous les quartiers de Massy
            </h2>
            <p className="text-gray-600 text-center mb-8 max-w-2xl mx-auto">
              Nous intervenons dans tous les quartiers de Massy pour vous prendre en charge ou vous déposer à l'adresse de votre choix, 24h/24.
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
              Comment réserver votre taxi à Massy ?
            </h2>
            <p className="text-gray-600 text-center mb-10 max-w-2xl mx-auto">
              Réserver un taxi à Massy n'a jamais été aussi simple. Trois options s'offrent à vous :
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
              Questions fréquentes - Taxi Massy
            </h2>
            <p className="text-gray-600 text-center mb-10 max-w-2xl mx-auto">
              Retrouvez les réponses aux questions les plus posées par nos clients à Massy.
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
                Votre taxi de confiance à Massy depuis plus de 10 ans
              </h2>

              <div className="prose prose-lg text-gray-600 max-w-none">
                <p>
                  <strong>TAXI Pro 91</strong> est votre partenaire de confiance pour tous vos déplacements à Massy et dans l'Essonne.
                  Située au carrefour de plusieurs axes de transport majeurs, Massy est une ville dynamique qui nécessite
                  un service de taxi fiable et disponible à toute heure.
                </p>

                <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Transferts Gare Massy TGV : notre spécialité</h3>
                <p>
                  La <strong>gare Massy TGV</strong> est l'une des gares les plus fréquentées d'Île-de-France avec plus de
                  10 millions de voyageurs par an. Elle dessert directement Lyon (2h), Marseille (3h), Bordeaux (2h30),
                  Nantes (2h20), Rennes (2h) et de nombreuses autres destinations.
                </p>
                <p>
                  Nos chauffeurs connaissent parfaitement les accès à la gare et vous déposent au plus près des quais.
                  Pour vos départs en TGV, nous vous recommandons d'arriver 20 minutes avant l'heure de votre train.
                  À l'arrivée, votre chauffeur vous attend à la sortie avec une pancarte à votre nom.
                </p>

                <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Navettes Aéroport Orly : rapidité et ponctualité</h3>
                <p>
                  L'<strong>aéroport d'Orly</strong> se trouve à seulement 15 minutes de Massy par l'autoroute A10.
                  Nous proposons un service de navette aéroport avec suivi de vol en temps réel.
                  En cas de retard de votre avion, nous adaptons automatiquement l'heure de prise en charge.
                </p>
                <p>
                  Notre service couvre tous les terminaux : Orly 1, Orly 2, Orly 3 et Orly 4.
                  Le tarif est fixe et connu à l'avance, sans mauvaise surprise à l'arrivée.
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
                  De nombreuses entreprises implantées à Massy nous font confiance pour le transport de leurs collaborateurs
                  et clients. Nous proposons des comptes entreprise avec facturation mensuelle, suivi des courses
                  et tarifs négociés.
                </p>
                <p>
                  Zone d'activité de Massy, pôle technologique Paris-Saclay, centres d'affaires...
                  Nous assurons tous vos déplacements professionnels avec ponctualité et discrétion.
                </p>
              </div>

              <div className="mt-10 p-6 bg-yellow-50 rounded-xl border border-yellow-200">
                <p className="text-gray-900 font-medium mb-4">
                  Réservez votre taxi à Massy dès maintenant
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

        <RelatedCities currentSlug="taxi-massy" />
      </main>
      <Footer />
    </>
  )
}
