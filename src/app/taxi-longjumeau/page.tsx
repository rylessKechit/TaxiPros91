import { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/Header'
import Breadcrumb from '@/components/Breadcrumb'
import Footer from '@/components/Footer'
import RelatedCities from '@/components/RelatedCities'
import BookingForm from '@/components/BookingForm'
import { ServiceSchema, FAQSchema } from '@/components/seo/Schemas'
import { Phone, MapPin, Train, Plane, Clock, CheckCircle, Star, CreditCard, Shield, Users, Car, HelpCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Taxi Longjumeau (91160) : RER C, Orly 24h/24',
  description: 'Taxi à Longjumeau 24h/24 : RER C, aéroport Orly, gare Massy TGV. Chauffeurs pro, tarifs transparents. Réservez au 01 80 85 91 91.',
  openGraph: {
    title: 'Taxi Longjumeau (91160) : RER C, Orly 24h/24',
    description: 'Votre taxi à Longjumeau : gare RER C, aéroport Orly, gare Massy TGV. Réservation rapide, tarifs transparents.',
    url: 'https://www.taxipro91.com/taxi-longjumeau',
  },
  alternates: {
    canonical: 'https://www.taxipro91.com/taxi-longjumeau',
  },
}

const faqs = [
  { q: 'Quel est le prix d\'un taxi Longjumeau vers Orly ?', a: 'Le prix d\'un taxi de Longjumeau vers l\'aéroport d\'Orly est d\'environ 20 à 30 euros selon l\'heure et le trafic. Le trajet dure environ 12 minutes via l\'A6. Ce tarif est fixe et comprend la prise en charge.' },
  { q: 'Comment rejoindre la gare RER C de Longjumeau en taxi ?', a: 'Nous assurons les transferts vers la gare RER C de Longjumeau en 3 à 5 minutes selon votre point de départ. Service disponible 24h/24 pour vos correspondances vers Paris ou la banlieue sud.' },
  { q: 'Combien de temps pour rejoindre Paris depuis Longjumeau ?', a: 'Le trajet Longjumeau-Paris centre dure environ 30 minutes via l\'autoroute A6, selon les conditions de circulation. Le tarif est de 45 à 60 euros selon la destination exacte dans Paris.' },
  { q: 'Comment rejoindre la gare Massy TGV depuis Longjumeau ?', a: 'Le trajet Longjumeau vers la gare Massy TGV dure environ 10 minutes pour un tarif de 15 à 20 euros. Idéal pour vos correspondances TGV vers Lyon, Marseille, Bordeaux ou Nantes.' },
]

const destinations = [
  { name: 'Aéroport d\'Orly', distance: '12 min', price: '20-30\u20AC', description: 'Transfert rapide vers les terminaux Orly 1, 2, 3 et 4 via l\'A6. Suivi de vol inclus.' },
  { name: 'Aéroport CDG', distance: '50 min', price: '75-95\u20AC', description: 'Liaison directe vers Roissy Charles de Gaulle, tous terminaux.' },
  { name: 'Paris Centre', distance: '30 min', price: '45-60\u20AC', description: 'Liaison directe vers tous les arrondissements parisiens via A6.' },
  { name: 'Gare Massy TGV', distance: '10 min', price: '15-20\u20AC', description: 'Connexion TGV vers Lyon, Marseille, Bordeaux, Nantes et RER B.' },
  { name: 'Gare RER C Longjumeau', distance: '3 min', price: '8-12\u20AC', description: 'Desserte RER C vers Paris et banlieue sud. Idéal pour vos correspondances.' },
]

const quartiers = [
  'Centre-ville', 'Bel-Air', 'Parc de Nozay', 'Les Music\'Halles',
  'Vauguillaume', 'L\'Yvette', 'Zone industrielle'
]

const avantages = [
  { icon: Clock, title: 'Disponible 24h/24', description: 'Service de taxi à Longjumeau jour et nuit, week-ends et jours fériés inclus.' },
  { icon: CreditCard, title: 'Paiement flexible', description: 'CB, espèces. Facturation entreprise sur demande.' },
  { icon: Shield, title: 'Chauffeurs professionnels', description: 'Conducteurs expérimentés, véhicules récents et entretenus.' },
  { icon: Star, title: 'Avis clients vérifiés', description: 'Service de qualité reconnu en Essonne. Satisfaction garantie.' },
]

const avisClients = [
  { nom: 'Jean-Marc B.', note: 5, texte: 'Navette Orly parfaite, chauffeur à l\'heure malgré l\'heure matinale (5h). Véhicule propre et confortable. Je recommande !', date: 'Décembre 2024' },
  { nom: 'Nathalie R.', note: 5, texte: 'Taxi réservé pour rejoindre la gare Massy TGV. Arrivé 10 minutes avant l\'heure prévue. Tarif conforme au devis. Parfait.', date: 'Janvier 2025' },
]

const faqItems = [
  {
    question: 'Quel est le prix d\'un taxi Longjumeau vers Orly ?',
    answer: 'Le prix d\'un taxi de Longjumeau vers l\'aéroport d\'Orly est d\'environ 20 à 30 euros selon l\'heure (jour/nuit) et les conditions de circulation. Grâce à l\'accès direct à l\'A6, le trajet ne dure que 12 minutes. Ce tarif est fixe et comprend la prise en charge, l\'attente à l\'aéroport et l\'aide aux bagages.'
  },
  {
    question: 'Comment rejoindre la gare RER C de Longjumeau en taxi ?',
    answer: 'Nous assurons les transferts vers la gare RER C de Longjumeau en 3 à 5 minutes selon votre adresse de départ, pour un tarif de 8 à 12 euros. Service disponible 24h/24 pour vos correspondances vers Paris (Austerlitz, Saint-Michel) ou la banlieue sud.'
  },
  {
    question: 'Combien de temps pour rejoindre Paris depuis Longjumeau ?',
    answer: 'Le trajet Longjumeau-Paris centre dure environ 30 minutes via l\'autoroute A6, selon les conditions de circulation. Le tarif est de 45 à 60 euros selon votre destination exacte dans Paris. En heures creuses, le trajet peut être plus rapide.'
  },
  {
    question: 'Comment rejoindre la gare Massy TGV depuis Longjumeau ?',
    answer: 'Le trajet depuis Longjumeau vers la gare Massy TGV dure environ 10 minutes pour un tarif de 15 à 20 euros. Cette liaison est idéale pour vos correspondances TGV vers Lyon, Marseille, Bordeaux, Nantes, Rennes et de nombreuses autres destinations.'
  }
]

export default function TaxiLongjumeau() {
  return (
    <>
      <Header />
      <Breadcrumb items={[{ name: 'Taxi Longjumeau' }]} />

      {/* Schema.org JSON-LD */}
      <ServiceSchema
        name="Taxi à Longjumeau"
        description="Service de taxi professionnel à Longjumeau (91160). Réservation 24h/24, transferts aéroport, gare."
        url="https://www.taxipro91.com/taxi-longjumeau"
        areaServed={['Longjumeau']}
      />
      <FAQSchema faqs={faqs} />

      <main>
        {/* Hero Banner */}
        <section className="bg-yellow-400 py-4">
          <div className="container mx-auto px-4 text-center">
            <p className="text-black font-medium">
              Besoin d'un taxi à Longjumeau ? Appelez le{' '}
              <a href="tel:+33180859191" className="font-bold text-xl hover:underline">01 80 85 91 91</a>
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
                  Taxi à Longjumeau
                </h1>

                <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                  Votre service de <strong>taxi à Longjumeau</strong> disponible 24h/24 et 7j/7.
                  Nous assurons tous vos trajets depuis et vers <strong>la gare RER C</strong>,
                  l'<strong>aéroport d'Orly</strong> et tous les quartiers de Longjumeau.
                </p>

                {/* Avis résumé */}
                <div className="flex items-center gap-2 mb-6 bg-white p-3 rounded-lg border border-gray-200 w-fit">
                  <div className="flex">
                    {[1,2,3,4,5].map(i => <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />)}
                  </div>
                  <span className="font-bold text-gray-900">Avis vérifiés</span>
                  <span className="text-gray-500">— Avis clients vérifiés</span>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">Disponible 24h/24</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">CB acceptée</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">Accès A6 direct</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">Chauffeurs pro</span>
                  </div>
                </div>

                <a
                  href="tel:+33180859191"
                  className="inline-flex items-center gap-3 bg-gray-900 text-white font-bold text-xl py-4 px-8 rounded-lg hover:bg-gray-800 transition-colors"
                >
                  <Phone className="w-6 h-6" />
                  01 80 85 91 91
                </a>
              </div>

              <div>
                <BookingForm />
              </div>
            </div>
          </div>
        </section>

        {/* Présentation de Longjumeau */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">
                Longjumeau : au cœur de l'Essonne
              </h2>

              <div className="prose prose-lg text-gray-600 max-w-none">
                <p>
                  <strong>Longjumeau</strong>, ville de plus de 21 000 habitants située dans le département de l'<strong>Essonne (91)</strong>,
                  est stratégiquement positionnée. Son accès direct à l'<strong>autoroute A6</strong> offre une connexion
                  rapide vers Paris et l'aéroport d'Orly.
                </p>

                <p>
                  La ville est desservie par le <strong>RER C</strong> à la gare de Longjumeau, offrant une liaison directe
                  vers Paris Austerlitz et Saint-Michel Notre-Dame. Cette infrastructure de transport fait de Longjumeau
                  un lieu de résidence privilégié pour les actifs travaillant à Paris ou sur le plateau de Saclay.
                </p>

                <p>
                  Que vous ayez besoin d'une navette vers
                  l'<strong>aéroport d'Orly</strong> ou d'un taxi pour rejoindre la <strong>gare Massy TGV</strong>,
                  notre service de taxi à Longjumeau vous accompagne avec professionnalisme et ponctualité.
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
              Vos destinations depuis Longjumeau
            </h2>
            <p className="text-gray-600 text-center mb-10 max-w-2xl mx-auto">
              Découvrez nos principales liaisons au départ de Longjumeau avec des prix transparents et sans surprise.
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
              Pourquoi choisir TAXI Pro 91 à Longjumeau ?
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
              Avis de nos clients à Longjumeau
            </h2>
            <div className="flex items-center justify-center gap-2 mb-10">
              <div className="flex">
                {[1,2,3,4,5].map(i => <Star key={i} className="w-6 h-6 text-yellow-400 fill-yellow-400" />)}
              </div>
              <span className="font-bold text-xl text-gray-900">Avis vérifiés</span>
              <span className="text-gray-500">Avis clients vérifiés</span>
            </div>

            <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
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
              Nous intervenons dans tous les quartiers de Longjumeau pour vous prendre en charge ou vous déposer à l'adresse de votre choix, 24h/24.
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
              Comment réserver votre taxi à Longjumeau ?
            </h2>
            <p className="text-gray-600 text-center mb-10 max-w-2xl mx-auto">
              Réserver un taxi à Longjumeau n'a jamais été aussi simple. Trois options s'offrent à vous :
            </p>

            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8 text-black" />
                </div>
                <h3 className="font-bold text-gray-900 text-lg mb-2">Par téléphone</h3>
                <p className="text-gray-600 mb-4">Appelez-nous directement au</p>
                <a href="tel:+33180859191" className="text-xl font-bold text-yellow-600 hover:text-yellow-700">
                  01 80 85 91 91
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
              Questions fréquentes - Taxi Longjumeau
            </h2>
            <p className="text-gray-600 text-center mb-10 max-w-2xl mx-auto">
              Retrouvez les réponses aux questions les plus posées par nos clients à Longjumeau.
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
                Votre taxi de confiance à Longjumeau depuis plus de 10 ans
              </h2>

              <div className="prose prose-lg text-gray-600 max-w-none">
                <p>
                  <strong>TAXI Pro 91</strong> est votre partenaire de confiance pour tous vos déplacements à Longjumeau et dans l'Essonne.
                  Située au carrefour de l'autoroute A6 et de la ligne RER C, Longjumeau est une ville dynamique qui nécessite
                  un service de taxi fiable.
                </p>

                <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Gare RER C de Longjumeau : vos correspondances facilitées</h3>
                <p>
                  La <strong>gare de Longjumeau</strong> est desservie par le <strong>RER C</strong>, offrant une connexion directe
                  vers Paris (Austerlitz, Saint-Michel Notre-Dame, Musée d'Orsay) et la banlieue sud. Nos taxis assurent
                  vos transferts vers et depuis la gare pour faciliter vos déplacements quotidiens ou ponctuels.
                </p>
                <p>
                  Que vous partiez tôt le matin ou que vous rentriez tard le soir, notre service 24h/24 vous garantit
                  une prise en charge à l'heure, même pour le premier ou le dernier train.
                </p>

                <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Accès rapide à l'A6 : Orly en 12 minutes</h3>
                <p>
                  L'un des atouts majeurs de Longjumeau est son <strong>accès direct à l'autoroute A6</strong>, permettant
                  de rejoindre l'<strong>aéroport d'Orly en seulement 12 minutes</strong>. Cette proximité fait de notre
                  service de taxi le choix idéal pour vos transferts aéroport.
                </p>
                <p>
                  Nous proposons un service de navette aéroport avec <strong>suivi de vol en temps réel</strong>.
                  En cas de retard ou d'avancement de votre vol, nous adaptons automatiquement l'heure de prise en charge.
                  Le tarif est fixe et connu à l'avance : 20 à 30 euros pour Orly, sans surprise à l'arrivée.
                </p>

                <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Connexion vers la gare Massy TGV</h3>
                <p>
                  À seulement <strong>10 minutes de Longjumeau</strong>, la gare <strong>Massy TGV</strong> vous ouvre
                  les portes de la France entière : Lyon (2h), Marseille (3h), Bordeaux (2h30), Nantes (2h20), Rennes (2h).
                  Notre service de taxi vous dépose au plus près des quais pour un départ serein.
                </p>
                <p>
                  Pour vos retours, votre chauffeur vous attend à la sortie de la gare avec une pancarte à votre nom.
                  Le tarif Longjumeau-Massy TGV est de 15 à 20 euros, véhicule confortable garanti.
                </p>

                <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Service professionnel et facturation entreprise</h3>
                <p>
                  De nombreuses entreprises de la zone industrielle de Longjumeau et des environs nous font confiance
                  pour le transport de leurs collaborateurs et visiteurs. Nous proposons des comptes entreprise avec
                  facturation mensuelle, suivi détaillé des courses et tarifs négociés selon le volume.
                </p>
              </div>

              <div className="mt-10 p-6 bg-yellow-50 rounded-xl border border-yellow-200">
                <p className="text-gray-900 font-medium mb-4">
                  Réservez votre taxi à Longjumeau dès maintenant
                </p>
                <div className="flex flex-wrap gap-4">
                  <a
                    href="tel:+33180859191"
                    className="inline-flex items-center gap-3 bg-yellow-400 text-black font-bold text-lg py-3 px-6 rounded-lg hover:bg-yellow-500 transition-colors"
                  >
                    <Phone className="w-5 h-5" />
                    01 80 85 91 91
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

        <RelatedCities currentSlug="taxi-longjumeau" />
      </main>
      <Footer />
    </>
  )
}
