import { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/Header'
import Breadcrumb from '@/components/Breadcrumb'
import Footer from '@/components/Footer'
import RelatedCities from '@/components/RelatedCities'
import BookingForm from '@/components/BookingForm'
import { ServiceSchema, FAQSchema } from '@/components/seo/Schemas'
import { SITE } from '@/lib/site'
import {
  Phone,
  MapPin,
  Train,
  Plane,
  Clock,
  CheckCircle,
  Star,
  CreditCard,
  Shield,
  Users,
  Car,
  HelpCircle,
} from 'lucide-react'

const CITY = 'Évry-Courcouronnes'
const CP = '91000'
const URL = `${SITE.url}/taxi-evry-courcouronnes`

export const metadata: Metadata = {
  title: `Taxi Évry-Courcouronnes (${CP}) : Orly 24h/24`,
  description: `Taxi à Évry-Courcouronnes 24h/24. Transferts Orly, CDG, gare RER D, Génopole, hôpital. Réservation au ${SITE.phone.display}. Tarifs fixes, paiement CB et CPAM.`,
  openGraph: {
    title: `Taxi Évry-Courcouronnes (${CP}) : Orly 24h/24`,
    description: `Votre taxi à Évry-Courcouronnes : aéroports Orly et CDG, gare RER D, Génopole, hôpital Sud Francilien.`,
    url: URL,
  },
  alternates: {
    canonical: URL,
  },
}

const destinations = [
  { name: "Aéroport d'Orly", distance: '25 min', price: '45-60€', description: "Transfert direct vers les terminaux Orly 1, 2, 3 et 4 via la N7. Suivi de vol inclus.", href: '/taxi-orly' },
  { name: 'Aéroport CDG', distance: '55 min', price: '85-110€', description: "Liaison vers Roissy Charles de Gaulle, tous terminaux, via la Francilienne et l'A1.", href: '/taxi-cdg' },
  { name: 'Paris Centre', distance: '40 min', price: '60-80€', description: 'Liaison directe vers tous les arrondissements parisiens par l\'A6.' },
  { name: 'Gare Massy TGV', distance: '30 min', price: '50-65€', description: 'Accès à la gare TGV pour vos voyages en province. Quais déposés.', href: '/taxi-gare-massy-tgv' },
  { name: 'La Défense', distance: '50 min', price: '75-95€', description: "Accès au quartier d'affaires pour vos rendez-vous professionnels." },
  { name: 'Disneyland Paris', distance: '45 min', price: '70-90€', description: "Trajet direct vers les parcs Disney par la Francilienne." },
  { name: 'Versailles', distance: '50 min', price: '75-95€', description: 'Liaison vers le château et la ville de Versailles.' },
  { name: 'Gare de Lyon', distance: '40 min', price: '60-80€', description: 'Dépose directe à la gare de Lyon pour vos départs en TGV ou Intercités.' },
]

const quartiers = [
  'Pyramides',
  'Aguado',
  'Champtier-du-Coq',
  'Bois-Sauvage',
  'Bras-de-Fer',
  'Centre-Ville',
  'Courcouronnes Centre',
  'Canal',
  'Mousseau',
  'Parc aux Lièvres',
]

const avantages = [
  { icon: Clock, title: 'Disponible 24h/24', description: 'Service de taxi à Évry-Courcouronnes jour et nuit, week-ends et jours fériés inclus.' },
  { icon: Shield, title: 'Chauffeurs professionnels', description: 'Conducteurs expérimentés, véhicules récents, propres et entretenus.' },
  { icon: CreditCard, title: 'Paiement flexible', description: 'CB, espèces, bons CPAM. Facturation entreprise sur demande.' },
  { icon: Star, title: 'Avis clients vérifiés', description: 'Service de qualité reconnu en Essonne. Satisfaction garantie.' },
]

const avisClients = [
  { nom: 'Karim B.', note: 5, texte: 'Pris en charge à Évry tôt le matin pour aller à Orly, chauffeur ponctuel et très courtois. Tarif respecté. Je recommande !', date: 'Février 2025' },
  { nom: 'Isabelle T.', note: 5, texte: 'Transport médical depuis Courcouronnes vers l\'hôpital Sud Francilien, prise en charge CPAM nickel. Chauffeur très patient.', date: 'Janvier 2025' },
  { nom: 'Mehdi A.', note: 5, texte: 'Aller-retour Évry, gare Massy TGV pour un déplacement pro. Véhicule premium, conduite calme. Parfait.', date: 'Décembre 2024' },
  { nom: 'Sandrine R.', note: 5, texte: 'Réservation la veille pour un vol tôt à CDG, le chauffeur était devant chez moi 10 min avant. Service top.', date: 'Mars 2025' },
]

const faqs = [
  {
    q: `Quel est le prix d'un taxi Évry-Courcouronnes → Orly ?`,
    a: `Le prix d'un taxi de Évry-Courcouronnes vers l'aéroport d'Orly est d'environ 45€ à 60€ selon l'heure (jour/nuit) et le trafic sur la N7. Ce tarif est fixe et comprend la prise en charge, l'attente et l'aide aux bagages. Pour un aller-retour, bénéficiez d'un tarif préférentiel.`,
  },
  {
    q: `Comment réserver un taxi à Évry-Courcouronnes ?`,
    a: `Pour réserver un taxi à Évry-Courcouronnes, trois options : appelez le ${SITE.phone.display} disponible 24h/24, utilisez notre formulaire de réservation en ligne, ou envoyez vos coordonnées par SMS. La confirmation est immédiate et un SMS de rappel vous est envoyé avant la course.`,
  },
  {
    q: `Proposez-vous le transport médical conventionné à Évry-Courcouronnes ?`,
    a: `Oui, nous sommes conventionnés CPAM pour le transport médical assis. Nous assurons vos trajets vers l'hôpital Sud Francilien de Corbeil-Essonnes, les centres de dialyse, cliniques et cabinets médicaux. Présentez simplement votre bon de transport.`,
  },
  {
    q: `Quel délai pour avoir un taxi à Évry-Courcouronnes ?`,
    a: `En réservation immédiate, un taxi peut être à votre adresse à Évry-Courcouronnes en 10 à 20 minutes selon le quartier et l'heure. Pour les trajets vers les aéroports ou gares, nous recommandons de réserver au moins 2 heures à l'avance.`,
  },
  {
    q: `Acceptez-vous les paiements par carte bancaire ?`,
    a: `Oui, tous nos véhicules sont équipés de terminaux de paiement. Nous acceptons les cartes Visa, Mastercard, American Express, les espèces et les bons de transport CPAM. Facturation entreprise disponible.`,
  },
  {
    q: `Desservez-vous la gare d'Évry-Courcouronnes Centre (RER D) ?`,
    a: `Bien sûr. Nous assurons les transferts depuis et vers la gare RER D d'Évry-Courcouronnes Centre, ainsi que les gares voisines de Bras-de-Fer, Évry-Val-de-Seine et Le Bras-de-Fer. Les chauffeurs vous attendent à la sortie avec une pancarte à votre nom.`,
  },
  {
    q: `Effectuez-vous des courses vers le Génopole ou l'Université d'Évry ?`,
    a: `Oui, nous transportons quotidiennement des collaborateurs, chercheurs et étudiants vers le Génopole, l'Université d'Évry-Val-d'Essonne et les sièges sociaux implantés sur le campus. Comptes entreprise et facturation mensuelle disponibles.`,
  },
  {
    q: `Vos taxis sont-ils équipés pour les personnes à mobilité réduite ?`,
    a: `Nous disposons de véhicules adaptés aux personnes à mobilité réduite (PMR). Merci de le préciser lors de votre réservation afin que nous puissions vous envoyer le véhicule approprié.`,
  },
]

export default function TaxiEvryCourcouronnes() {
  return (
    <>
      <Header />
      <Breadcrumb items={[{ name: `Taxi ${CITY}` }]} />

      <ServiceSchema
        name={`Taxi ${CITY}`}
        description={`Service de taxi professionnel à ${CITY} (${CP}), 24h/24. Transferts Orly, CDG, gare Massy TGV, gare RER D, Génopole, transport médical CPAM.`}
        url={URL}
        areaServed={[CITY, 'Essonne']}
      />
      <FAQSchema faqs={faqs} />

      <main>
        {/* Bandeau confiance */}
        <section className="bg-yellow-400 py-3">
          <div className="container mx-auto px-4 text-center text-black text-sm md:text-base font-medium">
            24h/24 • CB acceptée • Conventionné CPAM • Appelez le{' '}
            <a href={SITE.phone.tel} className="font-bold hover:underline">{SITE.phone.display}</a>
          </div>
        </section>

        {/* Hero Section */}
        <section className="bg-gray-50 py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div>
                <div className="flex items-center gap-2 text-yellow-600 mb-4">
                  <MapPin className="w-5 h-5" />
                  <span className="font-medium">{CITY} ({CP}), Essonne</span>
                </div>

                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                  Taxi à {CITY} ({CP}) : Réservation 24h/24
                </h1>

                <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                  Votre service de <strong>taxi à {CITY}</strong>, préfecture de l&apos;Essonne, disponible 24h/24 et 7j/7.
                  Transferts vers <strong>les aéroports d&apos;Orly et de Roissy-CDG</strong>, la <strong>gare RER D</strong>,
                  le <strong>Génopole</strong>, l&apos;Université et tous les quartiers d&apos;Évry et Courcouronnes.
                </p>

                <div className="flex items-center gap-2 mb-6 bg-white p-3 rounded-lg border border-gray-200 w-fit">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <span className="font-bold text-gray-900">Avis vérifiés</span>
                  <span className="text-gray-500"> — Avis clients vérifiés</span>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-green-500" /> <span className="text-gray-700">Disponible 24h/24</span></div>
                  <div className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-green-500" /> <span className="text-gray-700">Tarifs transparents</span></div>
                  <div className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-green-500" /> <span className="text-gray-700">CB & CPAM acceptés</span></div>
                  <div className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-green-500" /> <span className="text-gray-700">Chauffeurs pro</span></div>
                </div>

                <div className="flex flex-wrap gap-3">
                  <a href={SITE.phone.tel} className="inline-flex items-center gap-3 bg-gray-900 text-white font-bold text-lg py-3 px-6 rounded-lg hover:bg-gray-800 transition-colors">
                    <Phone className="w-5 h-5" />
                    {SITE.phone.display}
                  </a>
                  <a href="#reserver" className="inline-flex items-center gap-3 bg-yellow-400 text-black font-bold text-lg py-3 px-6 rounded-lg hover:bg-yellow-500 transition-colors">
                    Réserver en ligne
                  </a>
                </div>
              </div>

              <div id="reserver">
                <BookingForm compact />
              </div>
            </div>
          </div>
        </section>

        {/* Présentation */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                {CITY} : présentation et zones desservies
              </h2>
              <div className="prose prose-lg text-gray-600 max-w-none">
                <p>
                  <strong>{CITY}</strong>, préfecture du département de l&apos;Essonne, regroupe environ <strong>70 000 habitants</strong> depuis
                  la fusion d&apos;Évry et de Courcouronnes en 2019. La commune est un pôle majeur du sud francilien,
                  célèbre pour sa <strong>cathédrale moderne de la Résurrection</strong>, son <strong>Université d&apos;Évry-Val-d&apos;Essonne</strong> et
                  le <strong>Génopole</strong>, premier biocluster français rassemblant laboratoires, entreprises de biotechnologie et plateformes
                  de recherche.
                </p>
                <p>
                  Côté transports, {CITY} est traversée par l&apos;<strong>autoroute A6</strong> et la <strong>N7</strong>,
                  reliant rapidement Paris, Orly et la province. La <strong>gare d&apos;Évry-Courcouronnes Centre</strong> sur
                  le <strong>RER D</strong> dessert directement la gare de Lyon et Châtelet Les Halles.
                  Notre service de taxi couvre l&apos;ensemble des quartiers (Pyramides, Aguado, Champtier-du-Coq, Bois-Sauvage,
                  Bras-de-Fer) et les communes voisines de Corbeil-Essonnes, Lisses, Bondoufle et Ris-Orangis.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Tarifs */}
        <section className="py-12 md:py-16 bg-gray-900 text-white">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center">
              Tarifs indicatifs depuis {CITY}
            </h2>
            <p className="text-gray-400 text-center mb-8 max-w-2xl mx-auto">
              Prix estimés pour un trajet standard. Tarif définitif confirmé lors de la réservation.{' '}
              <Link href="/tarifs" className="text-yellow-400 underline">Voir tous nos tarifs</Link>.
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
                        {dest.href ? (
                          <Link href={dest.href} className="font-medium hover:text-yellow-400 underline">{dest.name}</Link>
                        ) : (
                          <span className="font-medium">{dest.name}</span>
                        )}
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
              * Tarifs indicatifs pouvant varier selon l&apos;heure (jour/nuit), le trafic et le type de véhicule choisi.
            </p>
          </div>
        </section>

        {/* Pourquoi nous choisir */}
        <section className="py-12 md:py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 text-center">
              Pourquoi choisir TAXI Pro 91 à {CITY}
            </h2>
            <p className="text-gray-600 text-center mb-10 max-w-2xl mx-auto">
              Un service de qualité reconnu par nos clients en Essonne depuis plus de 10 ans.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {avantages.map((a) => {
                const Icon = a.icon
                return (
                  <div key={a.title} className="bg-white rounded-xl p-6 text-center border border-gray-200">
                    <div className="w-14 h-14 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-7 h-7 text-black" />
                    </div>
                    <h3 className="font-bold text-gray-900 mb-2">{a.title}</h3>
                    <p className="text-gray-600 text-sm">{a.description}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Avis */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 text-center">
              Avis clients à {CITY}
            </h2>
            <div className="flex items-center justify-center gap-2 mb-10">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="w-6 h-6 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <span className="font-bold text-xl text-gray-900">Avis vérifiés</span>
              <span className="text-gray-500"> — Avis clients vérifiés</span>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {avisClients.map((avis, index) => (
                <div key={index} className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                  <div className="flex items-center gap-1 mb-3">
                    {[...Array(avis.note)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4 italic">&laquo; {avis.texte} &raquo;</p>
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
              Quartiers de {CITY} desservis
            </h2>
            <p className="text-gray-600 text-center mb-8 max-w-2xl mx-auto">
              Nous intervenons dans tous les quartiers d&apos;{CITY} pour vous prendre en charge ou vous déposer à l&apos;adresse de votre choix, 24h/24.
            </p>

            <div className="flex flex-wrap justify-center gap-3 mb-10">
              {quartiers.map((q) => (
                <span key={q} className="bg-white text-gray-700 px-4 py-2 rounded-lg border border-gray-200 hover:border-yellow-400 transition-colors">
                  {q}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Comment réserver */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 text-center">
              Comment réserver votre taxi à {CITY}
            </h2>
            <p className="text-gray-600 text-center mb-10 max-w-2xl mx-auto">
              Trois options simples pour réserver votre taxi à {CITY} :
            </p>

            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8 text-black" />
                </div>
                <h3 className="font-bold text-gray-900 text-lg mb-2">Par téléphone</h3>
                <p className="text-gray-600 mb-4">Appelez-nous directement, 24h/24 et 7j/7</p>
                <a href={SITE.phone.tel} className="text-xl font-bold text-yellow-600 hover:text-yellow-700">
                  {SITE.phone.display}
                </a>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Car className="w-8 h-8 text-black" />
                </div>
                <h3 className="font-bold text-gray-900 text-lg mb-2">En ligne</h3>
                <p className="text-gray-600 mb-4">Utilisez notre formulaire de réservation en 4 étapes</p>
                <span className="text-yellow-600 font-medium">Confirmation immédiate</span>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-black" />
                </div>
                <h3 className="font-bold text-gray-900 text-lg mb-2">À l&apos;avance</h3>
                <p className="text-gray-600 mb-4">Réservez jusqu&apos;à 30 jours à l&apos;avance pour vos trajets importants</p>
                <span className="text-yellow-600 font-medium">SMS de rappel inclus</span>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-12 md:py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 text-center">
              Questions fréquentes : Taxi {CITY}
            </h2>
            <p className="text-gray-600 text-center mb-10 max-w-2xl mx-auto">
              Retrouvez les réponses aux questions les plus posées par nos clients à {CITY}.
            </p>

            <div className="max-w-3xl mx-auto space-y-4">
              {faqs.map((item, index) => (
                <details key={index} className="bg-white rounded-xl border border-gray-200 overflow-hidden group">
                  <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-gray-50">
                    <div className="flex items-center gap-3">
                      <HelpCircle className="w-5 h-5 text-yellow-500 flex-shrink-0" />
                      <span className="font-medium text-gray-900">{item.q}</span>
                    </div>
                    <span className="text-yellow-500 group-open:rotate-180 transition-transform">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </span>
                  </summary>
                  <div className="px-6 pb-6 pt-0">
                    <p className="text-gray-600 leading-relaxed">{item.a}</p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Services détaillés */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Nos services à {CITY}
              </h2>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <Plane className="w-6 h-6 text-yellow-500" />
                    <h3 className="text-xl font-bold text-gray-900">Transferts aéroport</h3>
                  </div>
                  <p className="text-gray-600">
                    Liaison directe vers <Link href="/taxi-orly" className="text-yellow-600 underline">l&apos;aéroport d&apos;Orly</Link> en
                    25 minutes par la N7 et vers <Link href="/taxi-cdg" className="text-yellow-600 underline">l&apos;aéroport de Roissy-CDG</Link>{' '}
                    en 55 minutes par la Francilienne. Suivi de vol en temps réel, prise en charge des bagages, tarifs fixes connus à l&apos;avance.
                  </p>
                </div>

                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <Train className="w-6 h-6 text-yellow-500" />
                    <h3 className="text-xl font-bold text-gray-900">Transferts gare</h3>
                  </div>
                  <p className="text-gray-600">
                    Desserte de la gare RER D d&apos;Évry-Courcouronnes Centre, des gares de Bras-de-Fer et Évry-Val-de-Seine,
                    et de la <Link href="/taxi-gare-massy-tgv" className="text-yellow-600 underline">gare Massy TGV</Link> pour
                    vos voyages grandes lignes vers Lyon, Marseille, Bordeaux ou Nantes.
                  </p>
                </div>

                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <Shield className="w-6 h-6 text-yellow-500" />
                    <h3 className="text-xl font-bold text-gray-900">Transport médical CPAM</h3>
                  </div>
                  <p className="text-gray-600">
                    <Link href="/taxi-conventionne-cpam-91" className="text-yellow-600 underline">Taxi conventionné CPAM</Link> pour
                    vos trajets vers l&apos;hôpital Sud Francilien de Corbeil-Essonnes, les centres de dialyse et cabinets médicaux.
                    Prise en charge administrative simplifiée sur présentation du bon de transport.
                  </p>
                </div>

                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <Users className="w-6 h-6 text-yellow-500" />
                    <h3 className="text-xl font-bold text-gray-900">Service B2B & entreprise</h3>
                  </div>
                  <p className="text-gray-600">
                    Comptes entreprise avec facturation mensuelle pour les sociétés du Génopole, de l&apos;Université d&apos;Évry et
                    des zones d&apos;activité. Tarifs négociés, suivi des courses et reporting détaillé.
                  </p>
                </div>
              </div>

              <div className="mt-10 p-6 bg-yellow-50 rounded-xl border border-yellow-200">
                <p className="text-gray-900 font-medium mb-4">
                  Réservez votre taxi à {CITY} dès maintenant
                </p>
                <div className="flex flex-wrap gap-4">
                  <a href={SITE.phone.tel} className="inline-flex items-center gap-3 bg-yellow-400 text-black font-bold text-lg py-3 px-6 rounded-lg hover:bg-yellow-500 transition-colors">
                    <Phone className="w-5 h-5" />
                    {SITE.phone.display}
                  </a>
                  <Link href="#reserver" className="inline-flex items-center gap-3 bg-gray-900 text-white font-bold text-lg py-3 px-6 rounded-lg hover:bg-gray-800 transition-colors">
                    Réserver en ligne
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <RelatedCities currentSlug="taxi-evry-courcouronnes" />
      </main>
      <Footer />
    </>
  )
}
