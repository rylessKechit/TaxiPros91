import { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/Header'
import Breadcrumb from '@/components/Breadcrumb'
import Footer from '@/components/Footer'
import RelatedCities from '@/components/RelatedCities'
import BookingForm from '@/components/BookingForm'
import { FAQSchema, ServiceSchema } from '@/components/seo/Schemas'
import { SITE } from '@/lib/site'
import {
  Phone,
  Plane,
  Clock,
  CheckCircle,
  Star,
  CreditCard,
  Shield,
  Car,
  HelpCircle,
  MapPin,
  Info,
  ArrowRight,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Taxi aéroport Essonne : Orly, CDG 24h/24',
  description: `Taxi aéroport depuis l'Essonne : Orly, CDG, Le Bourget, Beauvais. Tarifs fixes, suivi de vol, 24h/24. ${SITE.phone.display}.`,
  openGraph: {
    title: 'Taxi aéroport Essonne : Orly, CDG 24h/24',
    description: 'Transferts vers les 4 aéroports parisiens depuis l\'Essonne. Tarifs fixes, suivi de vol en temps réel, 24h/24.',
    url: `${SITE.url}/taxi-aeroport`,
  },
  alternates: {
    canonical: `${SITE.url}/taxi-aeroport`,
  },
}

const aeroports = [
  {
    code: 'ORY',
    name: 'Aéroport d\'Orly',
    distance: '~20 km',
    duree: '20-30 min',
    description: 'Le plus proche de l\'Essonne. 4 terminaux (Orly 1, 2, 3, 4).',
    prixIndicatif: '25-50€',
    link: '/taxi-orly',
    color: 'bg-yellow-50 border-yellow-200',
  },
  {
    code: 'CDG',
    name: 'Aéroport CDG (Roissy)',
    distance: '~55 km',
    duree: '50-75 min',
    description: 'Premier aéroport français, vols internationaux. Terminaux 1, 2 (A-G), 3.',
    prixIndicatif: '70-110€',
    link: '/taxi-cdg',
    color: 'bg-blue-50 border-blue-200',
  },
  {
    code: 'LBG',
    name: 'Aéroport du Bourget',
    distance: '~50 km',
    duree: '50-65 min',
    description: 'Aviation d\'affaires, jets privés, salon du Bourget.',
    prixIndicatif: '90-120€',
    link: '#bourget',
    color: 'bg-gray-50 border-gray-200',
  },
  {
    code: 'BVA',
    name: 'Aéroport de Beauvais (BVA)',
    distance: '~110 km',
    duree: '90-120 min',
    description: 'Low-cost (Ryanair, Wizz Air). Compter 3 h avant le vol.',
    prixIndicatif: '130-180€',
    link: '#beauvais',
    color: 'bg-orange-50 border-orange-200',
  },
]

const usps = [
  {
    icon: Clock,
    title: 'Service 24h/24',
    description: 'Vols matinaux à 6 h, retours tardifs à 1 h du matin, week-ends inclus. Nous sommes toujours disponibles.',
  },
  {
    icon: Plane,
    title: 'Suivi de vol inclus',
    description: 'Connexion temps réel aux données aéroportuaires : l\'heure de prise en charge s\'ajuste automatiquement en cas de retard.',
  },
  {
    icon: Shield,
    title: 'Tarifs fixes annoncés',
    description: 'Le prix exact est communiqué à la réservation. Pas de compteur qui tourne, pas de mauvaise surprise à l\'arrivée.',
  },
  {
    icon: Star,
    title: 'Chauffeurs experts',
    description: `Service de qualité reconnu. Connaissance fine des axes A6, A10, A86, A1, RN118 et RN20.`,
  },
]

const tarifsRecap = [
  { ville: 'Massy', orly: '25-35€', cdg: '70-90€', bourget: '85-110€', beauvais: '125-160€' },
  { ville: 'Palaiseau', orly: '30-40€', cdg: '75-95€', bourget: '90-115€', beauvais: '130-170€' },
  { ville: 'Antony', orly: '20-30€', cdg: '65-85€', bourget: '80-105€', beauvais: '120-155€' },
  { ville: 'Longjumeau', orly: '25-35€', cdg: '75-95€', bourget: '90-115€', beauvais: '130-170€' },
  { ville: 'Les Ulis', orly: '35-50€', cdg: '85-105€', bourget: '100-125€', beauvais: '140-180€' },
  { ville: 'Saclay', orly: '42-52€', cdg: '85-110€', bourget: '95-125€', beauvais: '140-180€' },
  { ville: 'Évry-Courcouronnes', orly: '35-50€', cdg: '85-105€', bourget: '100-125€', beauvais: '145-185€' },
  { ville: 'Orsay', orly: '35-50€', cdg: '85-110€', bourget: '95-125€', beauvais: '140-180€' },
]

const villesDepart = [
  { name: 'Massy', slug: 'taxi-massy', cp: '91300' },
  { name: 'Palaiseau', slug: 'taxi-palaiseau', cp: '91120' },
  { name: 'Antony', slug: 'taxi-antony', cp: '92160' },
  { name: 'Longjumeau', slug: 'taxi-longjumeau', cp: '91160' },
  { name: 'Les Ulis', slug: 'taxi-les-ulis', cp: '91940' },
  { name: 'Saclay', slug: 'taxi-saclay', cp: '91400' },
  { name: 'Ballainvilliers', slug: 'taxi-ballainvilliers', cp: '91160' },
  { name: 'Verrières-le-Buisson', slug: 'taxi-verrieres-le-buisson', cp: '91370' },
]

const faqItems = [
  {
    q: 'Quel est le tarif d\'un taxi pour l\'aéroport depuis l\'Essonne ?',
    a: 'Le tarif dépend de l\'aéroport et de votre ville de départ. Pour Orly : 20-50€ selon la commune. Pour CDG : 65-110€. Pour Le Bourget : 80-125€. Pour Beauvais : 120-185€. Tous nos tarifs sont annoncés à la réservation et fixés, sans surprise à l\'arrivée. Aller-retour à tarif préférentiel disponible.',
  },
  {
    q: 'Quel délai prévoir entre votre prise en charge et l\'heure du vol ?',
    a: 'Recommandations standards : pour Orly et CDG, prévoyez 2 h avant un vol national (court-courrier Europe) et 3 h avant un vol intercontinental. Pour Le Bourget (aviation d\'affaires), 1 h suffit généralement. Pour Beauvais (low-cost, longue distance), prévoyez impérativement 3 h avant le décollage en raison du temps de trajet (90-120 minutes).',
  },
  {
    q: 'Que se passe-t-il si mon vol est retardé à l\'arrivée ?',
    a: 'Nous suivons en temps réel le statut de votre vol grâce aux données aéroportuaires. Si votre vol est retardé d\'1 h ou de 3 h, l\'heure de prise en charge est automatiquement ajustée. Aucun frais d\'attente supplémentaire ne vous est facturé pour les retards de la compagnie aérienne. Le chauffeur vous attend à l\'heure réelle d\'arrivée.',
  },
  {
    q: 'Récupérez-vous les passagers en zone Arrivées de tous les aéroports ?',
    a: 'Oui, votre chauffeur vous attend à la sortie des Arrivées du terminal indiqué, avec une pancarte à votre nom sur demande. Pour Orly, CDG et Le Bourget, la prise en charge se fait dans les zones officielles taxi/dépose-minute. Pour Beauvais, le chauffeur attend à la sortie unique de l\'aérogare.',
  },
  {
    q: 'Avez-vous des véhicules pour un grand groupe ou beaucoup de bagages ?',
    a: 'Oui, notre Van Mercedes Classe V permet de transporter jusqu\'à 7 passagers avec leurs bagages, ou 5 passagers avec un grand espace pour bagages volumineux (skis, packaging professionnel, valises XL). Précisez à la réservation pour bénéficier du véhicule adapté sans supplément majeur.',
  },
  {
    q: 'Quelle différence entre un forfait taxi parisien et votre tarif fixe ?',
    a: 'Les forfaits taxi parisiens (36€/45€ Paris-Orly, 56€/65€ Paris-CDG) sont réservés aux taxis G7, Alpha et autres titulaires de la carte professionnelle parisienne, pour des trajets Paris intra-muros uniquement. En Essonne, les taxis 91 doivent en principe rouler au compteur, mais TAXI Pro 91 propose ses propres tarifs fixes annoncés à la réservation pour vous offrir la même transparence.',
  },
  {
    q: 'Peut-on payer par carte bancaire dans votre taxi ?',
    a: 'Oui, tous nos véhicules sont équipés d\'un terminal de paiement. Nous acceptons Visa, Mastercard, American Express, ainsi que les espèces. Pour les entreprises, facturation mensuelle disponible sur un compte dédié (voir notre page Taxi entreprise).',
  },
  {
    q: 'Faut-il réserver à l\'avance pour un transfert aéroport ?',
    a: 'Nous recommandons fortement la réservation à l\'avance, idéalement 24 à 48 h avant pour vos vols matinaux (départ avant 7 h) ou tardifs (retour après 22 h). En période de vacances scolaires et de pics d\'affluence, réservez 5 à 7 jours avant. Pour les courses immédiates, comptez 15-30 minutes de délai de prise en charge selon la zone.',
  },
]

export default function TaxiAeroport() {
  return (
    <>
      <Header />
      <Breadcrumb items={[{ name: 'Taxi aéroport' }]} />

      <ServiceSchema
        name="Taxi aéroport depuis l'Essonne : Orly, CDG, Le Bourget, Beauvais"
        description="Service de taxi 24h/24 vers les 4 aéroports parisiens (Orly, Paris-CDG, Le Bourget, Beauvais) depuis toutes les communes de l'Essonne. Tarifs fixes, suivi de vol, accueil pancarte."
        url={`${SITE.url}/taxi-aeroport`}
        areaServed={['Massy', 'Palaiseau', 'Antony', 'Longjumeau', 'Les Ulis', 'Saclay', 'Évry-Courcouronnes', 'Orsay']}
      />
      <FAQSchema faqs={faqItems} />

      <main>
        {/* Hero Banner */}
        <section className="bg-yellow-400 py-4">
          <div className="container mx-auto px-4 text-center">
            <p className="text-black font-medium">
              Taxi pour l&apos;aéroport ? Appelez le{' '}
              <a href={SITE.phone.tel} className="font-bold text-xl hover:underline">
                {SITE.phone.display}
              </a>
            </p>
          </div>
        </section>

        {/* Hero Section */}
        <section className="bg-gray-50 py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div>
                <div className="flex items-center gap-2 text-yellow-600 mb-4">
                  <Plane className="w-5 h-5" />
                  <span className="font-medium">4 aéroports parisiens desservis</span>
                </div>

                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                  Taxi aéroport depuis l&apos;Essonne : Orly, CDG, Le Bourget, Beauvais
                </h1>

                <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                  Votre <strong>taxi pour tous les aéroports parisiens</strong> au départ de
                  l&apos;Essonne. Orly, Roissy CDG, Le Bourget, Beauvais : tarifs fixes annoncés à la
                  réservation, <strong>suivi de vol en temps réel</strong>, service 24h/24.
                </p>

                <div className="grid grid-cols-2 gap-3 mb-6">
                  {aeroports.map((a) => (
                    <a
                      key={a.code}
                      href={a.link}
                      className={`${a.color} border rounded-lg p-3 hover:shadow-md transition-shadow`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-bold text-gray-900 text-sm">{a.code}</span>
                        <Plane className="w-4 h-4 text-yellow-600" />
                      </div>
                      <p className="text-xs text-gray-600">{a.name.replace('Aéroport ', '').replace('d\'', '').replace('de ', '')}</p>
                      <p className="text-xs font-bold text-yellow-600 mt-1">{a.prixIndicatif}</p>
                    </a>
                  ))}
                </div>

                <div className="flex flex-wrap gap-3">
                  <a
                    href={SITE.phone.tel}
                    className="inline-flex items-center gap-3 bg-gray-900 text-white font-bold text-lg py-3 px-6 rounded-lg hover:bg-gray-800 transition-colors"
                  >
                    <Phone className="w-5 h-5" />
                    {SITE.phone.display}
                  </a>
                  <a
                    href="#reservation"
                    className="inline-flex items-center gap-3 bg-yellow-400 text-black font-bold text-lg py-3 px-6 rounded-lg hover:bg-yellow-500 transition-colors"
                  >
                    Réserver en ligne
                  </a>
                </div>
              </div>

              <div id="reservation">
                <BookingForm compact />
              </div>
            </div>
          </div>
        </section>

        {/* Pourquoi un taxi */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 text-center">
              Pourquoi un taxi pour l&apos;aéroport depuis l&apos;Essonne
            </h2>
            <p className="text-gray-600 text-center mb-10 max-w-2xl mx-auto">
              Le taxi reste la solution la plus pratique pour rejoindre les aéroports parisiens
              depuis l&apos;Essonne : porte-à-porte, bagages, horaires libres, suivi de vol.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {usps.map((u) => {
                const Icon = u.icon
                return (
                  <div
                    key={u.title}
                    className="bg-gray-50 rounded-xl p-6 text-center border border-gray-200"
                  >
                    <div className="w-14 h-14 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-7 h-7 text-black" />
                    </div>
                    <h3 className="font-bold text-gray-900 mb-2">{u.title}</h3>
                    <p className="text-gray-600 text-sm">{u.description}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Tarifs récapitulatif */}
        <section className="py-12 md:py-16 bg-gray-900 text-white">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center">
              Tarifs vers les 4 aéroports parisiens
            </h2>
            <p className="text-gray-400 text-center mb-8 max-w-2xl mx-auto">
              Tarifs indicatifs depuis les principales communes de l&apos;Essonne vers chaque aéroport
              parisien. Prix annoncé à la réservation.
            </p>

            <div className="overflow-x-auto">
              <table className="w-full max-w-5xl mx-auto text-sm">
                <thead>
                  <tr className="border-b border-gray-700">
                    <th className="text-left py-4 px-3 font-bold">Ville de départ</th>
                    <th className="text-center py-4 px-3 font-bold">Orly</th>
                    <th className="text-center py-4 px-3 font-bold">CDG</th>
                    <th className="text-center py-4 px-3 font-bold">Le Bourget</th>
                    <th className="text-center py-4 px-3 font-bold">Beauvais</th>
                  </tr>
                </thead>
                <tbody>
                  {tarifsRecap.map((t, i) => (
                    <tr key={t.ville} className={i % 2 === 0 ? 'bg-gray-800/50' : ''}>
                      <td className="py-3 px-3 font-medium">{t.ville}</td>
                      <td className="text-center py-3 px-3 text-yellow-400 font-bold">{t.orly}</td>
                      <td className="text-center py-3 px-3 text-yellow-400 font-bold">{t.cdg}</td>
                      <td className="text-center py-3 px-3 text-yellow-400 font-bold">{t.bourget}</td>
                      <td className="text-center py-3 px-3 text-yellow-400 font-bold">{t.beauvais}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-gray-500 text-sm text-center mt-6">
              * Tarifs indicatifs en berline. Van Mercedes Classe V (7 passagers) disponible avec
              léger supplément. Tarifs nuit (19h-7h) et dimanche/férié majorés.
            </p>
          </div>
        </section>

        {/* Orly */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Aéroport d&apos;Orly (ORY)
              </h2>

              <div className="prose prose-lg text-gray-600 max-w-none">
                <p>
                  L&apos;<strong>aéroport Paris-Orly</strong> est le plus proche aéroport pour les
                  habitants de l&apos;Essonne. Situé à seulement 14 km au sud de Paris, il est accessible
                  en 15 à 30 minutes depuis la plupart des communes du département via l&apos;A6, l&apos;A10
                  ou l&apos;A106.
                </p>
                <p>
                  Depuis sa modernisation, Orly est organisé autour de <strong>4 terminaux</strong>{' '}
                  (Orly 1, 2, 3, 4) reliés entre eux. Nos chauffeurs vous déposent au plus près des
                  comptoirs d&apos;enregistrement de votre compagnie. Le service inclut le{' '}
                  <strong>suivi de vol en temps réel</strong> pour les arrivées.
                </p>
                <p>
                  Prix indicatif : entre <strong>25€ et 50€</strong> selon votre commune de départ
                  (Massy, Antony, Les Ulis, Saclay).
                </p>
              </div>

              <div className="mt-8 text-center">
                <Link
                  href="/taxi-orly"
                  className="inline-flex items-center gap-3 bg-yellow-400 text-black font-bold text-lg py-3 px-6 rounded-lg hover:bg-yellow-500 transition-colors"
                >
                  Voir la page dédiée Taxi Orly
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* CDG */}
        <section className="py-12 md:py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Aéroport CDG (Roissy Charles-de-Gaulle)
              </h2>

              <div className="prose prose-lg text-gray-600 max-w-none">
                <p>
                  L&apos;<strong>aéroport Paris-CDG</strong> (Roissy Charles-de-Gaulle) est le premier
                  aéroport français et le 2e d&apos;Europe. Situé à 25 km au nord-est de Paris, il
                  accueille plus de 70 millions de passagers par an et la quasi-totalité des vols
                  intercontinentaux au départ de Paris.
                </p>
                <p>
                  Depuis l&apos;Essonne, comptez 50 à 75 minutes de trajet par l&apos;A86 puis l&apos;A1 ou la
                  Francilienne (N104). Le tarif est compris entre <strong>65€ et 110€</strong>{' '}
                  selon votre ville de départ. Tous les terminaux sont desservis : <strong>T1, T2A,
                  T2B, T2C, T2D, T2E, T2F, T2G, T3</strong>.
                </p>
                <p>
                  Pour les arrivées CDG, le <strong>suivi de vol</strong> est particulièrement utile
                  car les délais de récupération des bagages peuvent varier de 20 à 60 minutes.
                </p>
              </div>

              <div className="mt-8 text-center">
                <Link
                  href="/taxi-cdg"
                  className="inline-flex items-center gap-3 bg-yellow-400 text-black font-bold text-lg py-3 px-6 rounded-lg hover:bg-yellow-500 transition-colors"
                >
                  Voir la page dédiée Taxi CDG
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Le Bourget */}
        <section id="bourget" className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Aéroport du Bourget (LBG)
              </h2>

              <div className="prose prose-lg text-gray-600 max-w-none">
                <p>
                  L&apos;<strong>aéroport Paris-Le Bourget</strong> est le premier aéroport européen
                  dédié à l&apos;<strong>aviation d&apos;affaires</strong> et aux <strong>jets privés</strong>.
                  Il accueille également tous les deux ans le célèbre <strong>Salon International
                  de l&apos;Aéronautique et de l&apos;Espace (SIAE)</strong>.
                </p>
                <p>
                  Distance depuis l&apos;Essonne : environ <strong>50 km</strong>, durée de trajet
                  estimée à <strong>50-65 minutes</strong> par l&apos;A86 ou l&apos;A1. Prix indicatif :{' '}
                  <strong>90-120€</strong> selon votre commune de départ.
                </p>
                <p>
                  Pour vos transferts vers les <strong>FBO (Fixed Base Operators)</strong> du
                  Bourget : Signature Flight Support, Universal Aviation, Dassault Falcon Service,
                  Jetex, précisez à la réservation l&apos;opérateur destination pour une dépose
                  optimale côté piste. Service VIP en Mercedes Classe E ou Classe V disponible.
                </p>
              </div>

              <div className="mt-8 text-center">
                <a
                  href={SITE.phone.tel}
                  className="inline-flex items-center gap-3 bg-gray-900 text-white font-bold text-lg py-3 px-6 rounded-lg hover:bg-gray-800 transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  Réserver pour Le Bourget : {SITE.phone.display}
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Beauvais */}
        <section id="beauvais" className="py-12 md:py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Aéroport de Beauvais (BVA)
              </h2>

              <div className="prose prose-lg text-gray-600 max-w-none">
                <p>
                  L&apos;<strong>aéroport de Beauvais-Tillé</strong> est principalement utilisé par les
                  compagnies <strong>low-cost</strong> européennes : <strong>Ryanair</strong>,
                  <strong> Wizz Air</strong>, Volotea. Bien que présenté commercialement comme
                  &quot;Beauvais-Paris&quot;, il est situé à <strong>environ 110 km au nord-ouest</strong>{' '}
                  de la capitale.
                </p>
                <p>
                  Distance depuis l&apos;Essonne : environ <strong>110 km</strong>, durée de trajet de{' '}
                  <strong>90 à 120 minutes</strong> selon le trafic via l&apos;A86, l&apos;A15 et l&apos;A16.
                  Prix indicatif : <strong>130-180€</strong> en berline classique, plus en Van.
                </p>
                <div className="bg-orange-50 border-l-4 border-orange-400 p-4 my-6 rounded">
                  <div className="flex items-start gap-3">
                    <Info className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-800 text-sm font-medium m-0">
                      <strong>Important :</strong> prévoyez impérativement 3 h avant le décollage,
                      soit environ 4 h 30 entre la prise en charge et l&apos;heure du vol pour absorber
                      le trajet (1 h 30 à 2 h) et l&apos;enregistrement (1 h à 1 h 30 pour les
                      compagnies low-cost).
                    </p>
                  </div>
                </div>
                <p>
                  Pour vos voyages réguliers vers Beauvais (vacances, week-ends en Europe), nous
                  proposons un <strong>forfait aller-retour</strong> avantageux. Le chauffeur vous
                  récupère à votre retour avec suivi de vol intégré, idéal car les transports en
                  commun depuis Beauvais sont limités (navette spéciale uniquement, gare SNCF
                  éloignée).
                </p>
              </div>

              <div className="mt-8 text-center">
                <a
                  href={SITE.phone.tel}
                  className="inline-flex items-center gap-3 bg-gray-900 text-white font-bold text-lg py-3 px-6 rounded-lg hover:bg-gray-800 transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  Réserver pour Beauvais : {SITE.phone.display}
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Suivi de vol inclus */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">
                Suivi de vol inclus pour toutes vos arrivées
              </h2>

              <div className="prose prose-lg text-gray-600 max-w-none">
                <p>
                  Quand vous nous communiquez votre <strong>numéro de vol</strong> à la réservation,
                  notre système se connecte aux données aéroportuaires officielles et adapte
                  automatiquement l&apos;heure de prise en charge si votre vol est en avance ou en
                  retard.
                </p>
                <p>
                  Concrètement, si votre vol atterrit avec 45 minutes d&apos;avance ou 2 heures de
                  retard, votre chauffeur ajuste son arrivée sans intervention de votre part.
                  <strong> Aucun frais d&apos;attente supplémentaire</strong> n&apos;est facturé pour les
                  retards imputables à la compagnie aérienne. Vous bénéficiez également de{' '}
                  <strong>15 minutes d&apos;attente offertes</strong> après l&apos;heure réelle d&apos;atterrissage
                  pour vous laisser le temps de récupérer vos bagages.
                </p>
                <p>
                  Sur demande, votre chauffeur peut tenir une <strong>pancarte à votre nom</strong>{' '}
                  dans la zone Arrivées, particulièrement appréciée par les voyageurs internationaux,
                  les délégations professionnelles et les chercheurs invités sur le plateau de
                  Saclay.
                </p>
              </div>

              <div className="grid sm:grid-cols-3 gap-4 mt-8">
                <div className="bg-gray-50 rounded-xl p-5 border border-gray-200 text-center">
                  <div className="text-2xl font-bold text-yellow-600 mb-1">0€</div>
                  <p className="text-gray-600 text-sm">de frais en cas de retard avion</p>
                </div>
                <div className="bg-gray-50 rounded-xl p-5 border border-gray-200 text-center">
                  <div className="text-2xl font-bold text-yellow-600 mb-1">15 min</div>
                  <p className="text-gray-600 text-sm">d&apos;attente offertes incluses</p>
                </div>
                <div className="bg-gray-50 rounded-xl p-5 border border-gray-200 text-center">
                  <div className="text-2xl font-bold text-yellow-600 mb-1">24/7</div>
                  <p className="text-gray-600 text-sm">surveillance des vols</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Forfaits vs compteur */}
        <section className="py-12 md:py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">
                Tarifs forfaits vs compteur : ce qu&apos;il faut savoir
              </h2>

              <div className="prose prose-lg text-gray-600 max-w-none">
                <p>
                  Vous avez peut-être entendu parler des <strong>forfaits réglementés taxi Paris
                  -Orly et Paris-CDG</strong>. Précisons leur cadre exact pour éviter toute confusion.
                </p>
                <p>
                  <strong>Forfaits Paris :</strong> 36€ Paris-Orly rive gauche, 45€ Paris-Orly rive
                  droite, 56€ Paris-CDG rive gauche, 65€ Paris-CDG rive droite. Ces forfaits sont
                  réservés <strong>exclusivement aux taxis parisiens</strong> (G7, Alpha,
                  indépendants titulaires de la carte professionnelle préfecture de police de Paris)
                  et concernent uniquement les trajets entre <strong>Paris intra-muros</strong> et
                  ces aéroports.
                </p>
                <p>
                  <strong>Taxis Essonne (91) :</strong> les chauffeurs disposent d&apos;une autorisation
                  préfectorale différente (préfecture 91) et doivent en principe rouler au compteur
                  pour leurs courses au départ ou à destination de l&apos;Essonne.
                </p>
                <p>
                  <strong>Notre engagement TAXI Pro 91 :</strong> plutôt que de vous laisser dans
                  l&apos;incertitude du compteur, nous proposons des <strong>tarifs fixes négociés</strong>{' '}
                  annoncés et confirmés au moment de la réservation. Vous connaissez le prix exact
                  avant le départ, péages éventuels inclus.
                </p>
              </div>

              <div className="mt-8 grid md:grid-cols-2 gap-4">
                <div className="bg-white border border-gray-200 rounded-xl p-5">
                  <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <Info className="w-5 h-5 text-yellow-600" />
                    Forfait taxi parisien
                  </h3>
                  <p className="text-gray-600 text-sm">
                    36€/45€ Paris-Orly • 56€/65€ Paris-CDG. Réservé aux taxis parisiens, départ
                    Paris intra-muros uniquement.
                  </p>
                </div>
                <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-5">
                  <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                    Tarif fixe TAXI Pro 91
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Prix annoncé et garanti à la réservation pour tout départ depuis l&apos;Essonne.
                    Pas de compteur qui tourne, pas de mauvaise surprise.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Villes de départ */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 text-center">
              Vos villes de départ
            </h2>
            <p className="text-gray-600 text-center mb-10 max-w-2xl mx-auto">
              Découvrez nos pages dédiées par commune pour des informations spécifiques à votre ville.
            </p>

            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
              {villesDepart.map((v) => (
                <Link
                  key={v.slug}
                  href={`/${v.slug}`}
                  className="bg-gray-50 rounded-xl p-5 border border-gray-200 hover:border-yellow-400 hover:bg-yellow-50 transition-colors group"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <MapPin className="w-5 h-5 text-yellow-500" />
                    <span className="font-bold text-gray-900 group-hover:text-yellow-600">
                      Taxi {v.name}
                    </span>
                  </div>
                  <p className="text-gray-500 text-sm">{v.cp}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-12 md:py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 text-center">
              Questions fréquentes : Taxi aéroport
            </h2>
            <p className="text-gray-600 text-center mb-10 max-w-2xl mx-auto">
              Les réponses aux questions les plus posées pour vos transferts vers les aéroports.
            </p>

            <div className="max-w-3xl mx-auto space-y-4">
              {faqItems.map((item, index) => (
                <details
                  key={index}
                  className="bg-white rounded-xl border border-gray-200 overflow-hidden group"
                >
                  <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-gray-50">
                    <div className="flex items-center gap-3">
                      <HelpCircle className="w-5 h-5 text-yellow-500 flex-shrink-0" />
                      <span className="font-medium text-gray-900">{item.q}</span>
                    </div>
                    <span className="text-yellow-500 group-open:rotate-180 transition-transform">
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </span>
                  </summary>
                  <div className="px-6 pb-6 pt-0">
                    <p className="text-gray-600 leading-relaxed">{item.a}</p>
                  </div>
                </details>
              ))}
            </div>

            <div className="mt-12 max-w-3xl mx-auto p-6 bg-yellow-50 rounded-xl border border-yellow-200 text-center">
              <p className="text-gray-900 font-medium mb-4 text-lg">
                Prêt à réserver votre taxi aéroport ?
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href={SITE.phone.tel}
                  className="inline-flex items-center gap-3 bg-yellow-400 text-black font-bold text-lg py-3 px-6 rounded-lg hover:bg-yellow-500 transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  {SITE.phone.display}
                </a>
                <Link
                  href="#reservation"
                  className="inline-flex items-center gap-3 bg-gray-900 text-white font-bold text-lg py-3 px-6 rounded-lg hover:bg-gray-800 transition-colors"
                >
                  Réserver en ligne
                </Link>
              </div>
            </div>
          </div>
        </section>

        <RelatedCities currentSlug="taxi-aeroport" />
      </main>
      <Footer />
    </>
  )
}
