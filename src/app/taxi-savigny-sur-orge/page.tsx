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

const CITY = 'Savigny-sur-Orge'
const CP = '91600'
const URL = `${SITE.url}/taxi-savigny-sur-orge`

export const metadata: Metadata = {
  title: `Taxi Savigny-sur-Orge (${CP}) Réservation 24h/24`,
  description: `Taxi à Savigny-sur-Orge 24h/24. Transferts Orly (à 15 min), CDG, gare RER C, lycée Corot. Réservation au ${SITE.phone.display}. Tarifs fixes, CB et CPAM acceptés.`,
  openGraph: {
    title: `Taxi Savigny-sur-Orge (${CP}) Service 24h/24`,
    description: `Votre taxi à Savigny-sur-Orge : aéroport d'Orly à 15 min, RER C, gare de Massy TGV. Note 4.9/5.`,
    url: URL,
  },
  alternates: {
    canonical: URL,
  },
}

const destinations = [
  { name: "Aéroport d'Orly", distance: '15 min', price: '25-40€', description: "Transfert direct vers Orly via la N7 et l'A6. Idéal pour les vols matinaux.", href: '/taxi-orly' },
  { name: 'Aéroport CDG', distance: '50 min', price: '75-95€', description: "Liaison vers Roissy Charles de Gaulle, tous terminaux.", href: '/taxi-cdg' },
  { name: 'Paris Centre', distance: '30 min', price: '45-65€', description: 'Liaison directe vers Paris par l\'A6 ou la N7.' },
  { name: 'Gare Massy TGV', distance: '20 min', price: '30-45€', description: 'Accès rapide à la gare TGV pour vos voyages en province.', href: '/taxi-gare-massy-tgv' },
  { name: 'La Défense', distance: '40 min', price: '60-80€', description: "Accès au quartier d'affaires pour vos rendez-vous." },
  { name: 'Disneyland Paris', distance: '50 min', price: '75-95€', description: "Trajet direct vers les parcs Disney." },
  { name: 'Versailles', distance: '35 min', price: '55-75€', description: 'Liaison vers le château et la ville de Versailles.' },
  { name: 'Gare de Lyon', distance: '30 min', price: '45-65€', description: 'Dépose à la gare de Lyon pour vos départs en TGV.' },
]

const quartiers = [
  'Centre-Ville',
  'Champagne',
  'Grand-Vaux',
  'Gare',
  'Plateau',
  'Petit-Vaux',
  'Prés-Saint-Martin',
  'Davout',
]

const avantages = [
  { icon: Clock, title: 'Disponible 24h/24', description: 'Service de taxi à Savigny-sur-Orge jour et nuit, week-ends et jours fériés inclus.' },
  { icon: Shield, title: 'Chauffeurs professionnels', description: 'Conducteurs expérimentés, véhicules récents, propres et entretenus.' },
  { icon: CreditCard, title: 'Paiement flexible', description: 'CB, espèces, bons CPAM. Facturation entreprise sur demande.' },
  { icon: Star, title: 'Note 4.9/5', description: 'Plus de 500 avis clients positifs en Essonne. Satisfaction garantie.' },
]

const avisClients = [
  { nom: 'Hélène M.', note: 5, texte: 'Transfert Savigny → Orly à 5h du matin, chauffeur ponctuel et sympa. Trajet de 15 minutes seulement, prix correct.', date: 'Février 2025' },
  { nom: 'Jérôme K.', note: 5, texte: 'Réservé un van pour 6 personnes vers Disneyland, super service et grande propreté du véhicule.', date: 'Mars 2025' },
  { nom: 'Patricia D.', note: 5, texte: 'Transport régulier conventionné CPAM pour mes soins, équipe à l\'écoute et toujours à l\'heure depuis Grand-Vaux.', date: 'Janvier 2025' },
  { nom: 'Yannick L.', note: 5, texte: 'Course depuis la gare RER C de Savigny vers Paris en soirée, paiement CB sans souci. Top.', date: 'Décembre 2024' },
]

const faqs = [
  {
    q: `Quel est le prix d'un taxi Savigny-sur-Orge → Orly ?`,
    a: `Le prix d'un taxi de Savigny-sur-Orge vers l'aéroport d'Orly est d'environ 25€ à 40€ selon l'heure et le trafic. L'aéroport est à seulement 15 minutes, ce qui en fait l'un des trajets les plus rapides depuis Savigny. Tarif fixe et aller-retour à prix préférentiel.`,
  },
  {
    q: `Comment réserver un taxi à Savigny-sur-Orge ?`,
    a: `Pour réserver un taxi à Savigny-sur-Orge, appelez le ${SITE.phone.display} disponible 24h/24, utilisez notre formulaire de réservation en ligne, ou envoyez vos coordonnées par SMS. Confirmation immédiate et SMS de rappel.`,
  },
  {
    q: `Proposez-vous le transport médical à Savigny-sur-Orge ?`,
    a: `Oui, nous sommes conventionnés CPAM pour le transport médical assis. Nous assurons les trajets vers les hôpitaux d'Athis-Mons, Juvisy, Longjumeau et Paris, ainsi que les centres de dialyse et cabinets médicaux. Bon de transport accepté.`,
  },
  {
    q: `Quel délai pour avoir un taxi à Savigny-sur-Orge ?`,
    a: `En réservation immédiate, un taxi peut être à votre adresse à Savigny-sur-Orge en 10 à 15 minutes selon le quartier. Pour les trajets vers les aéroports ou les gares, nous recommandons de réserver au moins 2 heures à l'avance.`,
  },
  {
    q: `Acceptez-vous les paiements par carte bancaire ?`,
    a: `Oui, tous nos véhicules disposent d'un terminal de paiement. Cartes Visa, Mastercard, American Express, espèces et bons CPAM acceptés. Facturation entreprise possible sur demande.`,
  },
  {
    q: `Desservez-vous la gare RER C de Savigny-sur-Orge ?`,
    a: `Bien sûr. Nous assurons les transferts depuis et vers la gare RER C de Savigny-sur-Orge, ainsi que les gares voisines d'Athis-Mons, Juvisy et Épinay-sur-Orge. Les chauffeurs vous attendent à la sortie.`,
  },
  {
    q: `Effectuez-vous des courses depuis le lycée Jean-Baptiste-Corot ?`,
    a: `Oui, nous transportons régulièrement les lycéens et les visiteurs depuis et vers le lycée Jean-Baptiste-Corot, l'un des plus grands lycées d'Île-de-France. Service ponctuel ou récurrent disponible.`,
  },
  {
    q: `Vos taxis sont-ils équipés pour les personnes à mobilité réduite ?`,
    a: `Nous disposons de véhicules adaptés aux personnes à mobilité réduite (PMR). Précisez votre besoin lors de la réservation pour bénéficier du véhicule approprié.`,
  },
]

export default function TaxiSavignySurOrge() {
  return (
    <>
      <Header />
      <Breadcrumb items={[{ name: `Taxi ${CITY}` }]} />

      <ServiceSchema
        name={`Taxi ${CITY}`}
        description={`Service de taxi professionnel à ${CITY} (${CP}), 24h/24. Transferts Orly à 15 min, CDG, gare RER C, lycée Corot, transport médical CPAM.`}
        url={URL}
        areaServed={[CITY, 'Essonne']}
      />
      <FAQSchema faqs={faqs} />

      <main>
        <section className="bg-yellow-400 py-3">
          <div className="container mx-auto px-4 text-center text-black text-sm md:text-base font-medium">
            4.9/5 <span className="text-yellow-700">★</span> • 24h/24 • CB acceptée • Conventionné CPAM • Appelez le{' '}
            <a href={SITE.phone.tel} className="font-bold hover:underline">{SITE.phone.display}</a>
          </div>
        </section>

        <section className="bg-gray-50 py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div>
                <div className="flex items-center gap-2 text-yellow-600 mb-4">
                  <MapPin className="w-5 h-5" />
                  <span className="font-medium">{CITY} ({CP}) Essonne</span>
                </div>

                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                  Taxi à {CITY} ({CP}) Réservation 24h/24
                </h1>

                <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                  Votre service de <strong>taxi à {CITY}</strong> disponible 24h/24 et 7j/7.
                  Située à seulement <strong>15 minutes de l&apos;aéroport d&apos;Orly</strong>, la commune est idéalement desservie
                  par le <strong>RER C</strong>, l&apos;<strong>A6</strong> et la <strong>N7</strong>. Nous assurons tous vos trajets
                  depuis chaque quartier de Savigny.
                </p>

                <div className="flex items-center gap-2 mb-6 bg-white p-3 rounded-lg border border-gray-200 w-fit">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <span className="font-bold text-gray-900">4.9/5</span>
                  <span className="text-gray-500">— plus de 500 avis</span>
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

        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                {CITY} : présentation et zones desservies
              </h2>
              <div className="prose prose-lg text-gray-600 max-w-none">
                <p>
                  <strong>{CITY}</strong>, située dans le département de l&apos;Essonne, compte environ <strong>38 000 habitants</strong>{' '}
                  et fait partie de la communauté d&apos;agglomération Grand-Orly Seine Bièvre. La ville est traversée
                  par l&apos;<strong>Yvette</strong> et l&apos;<strong>Orge</strong>, et elle abrite l&apos;un des plus grands lycées d&apos;Île-de-France :
                  le <strong>lycée Jean-Baptiste-Corot</strong>.
                </p>
                <p>
                  Sa position géographique fait de Savigny-sur-Orge une commune particulièrement bien connectée :
                  proche de l&apos;<strong>aéroport d&apos;Orly</strong> (15 minutes), à proximité d&apos;<strong>Athis-Mons</strong>,
                  desservie par la <strong>gare RER C</strong> qui relie Paris en moins de 30 minutes, et bordée par
                  l&apos;<strong>autoroute A6</strong> et la <strong>N7</strong>. Notre service couvre tous les quartiers :
                  Centre-Ville, Champagne, Grand-Vaux, Gare, Plateau et Petit-Vaux, ainsi que les communes voisines
                  d&apos;Athis-Mons, Juvisy-sur-Orge, Épinay-sur-Orge et Morsang-sur-Orge.
                </p>
              </div>
            </div>
          </div>
        </section>

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
              <span className="font-bold text-xl text-gray-900">4.9/5</span>
              <span className="text-gray-500">— plus de 500 avis clients</span>
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

        <section className="py-12 md:py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 text-center">
              Quartiers de {CITY} desservis
            </h2>
            <p className="text-gray-600 text-center mb-8 max-w-2xl mx-auto">
              Nous intervenons dans tous les quartiers de {CITY} pour vous prendre en charge ou vous déposer à l&apos;adresse de votre choix, 24h/24.
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

        <section className="py-12 md:py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 text-center">
              Questions fréquentes Taxi {CITY}
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
                    Liaison ultra-rapide vers <Link href="/taxi-orly" className="text-yellow-600 underline">l&apos;aéroport d&apos;Orly</Link>{' '}
                    en seulement 15 minutes, et vers <Link href="/taxi-cdg" className="text-yellow-600 underline">Roissy-CDG</Link>{' '}
                    en 50 minutes. Suivi de vol en temps réel, prise en charge des bagages.
                  </p>
                </div>

                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <Train className="w-6 h-6 text-yellow-500" />
                    <h3 className="text-xl font-bold text-gray-900">Transferts gare</h3>
                  </div>
                  <p className="text-gray-600">
                    Desserte de la gare RER C de Savigny-sur-Orge, des gares de Juvisy, Athis-Mons et de
                    la <Link href="/taxi-gare-massy-tgv" className="text-yellow-600 underline">gare Massy TGV</Link>{' '}
                    pour vos voyages grandes lignes.
                  </p>
                </div>

                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <Shield className="w-6 h-6 text-yellow-500" />
                    <h3 className="text-xl font-bold text-gray-900">Transport médical CPAM</h3>
                  </div>
                  <p className="text-gray-600">
                    <Link href="/taxi-conventionne-cpam-91" className="text-yellow-600 underline">Taxi conventionné CPAM</Link> pour
                    vos trajets vers les hôpitaux d&apos;Athis-Mons, Juvisy, Longjumeau et Paris.
                    Prise en charge administrative simplifiée sur bon de transport.
                  </p>
                </div>

                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <Users className="w-6 h-6 text-yellow-500" />
                    <h3 className="text-xl font-bold text-gray-900">Service B2B & entreprise</h3>
                  </div>
                  <p className="text-gray-600">
                    Comptes entreprise avec facturation mensuelle pour les sociétés locales et les déplacements professionnels
                    vers Paris, La Défense ou la gare TGV. Tarifs négociés, suivi des courses.
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

        <RelatedCities currentSlug="taxi-savigny-sur-orge" />
      </main>
      <Footer />
    </>
  )
}
