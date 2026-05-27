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
  Clock,
  CheckCircle,
  Star,
  CreditCard,
  Shield,
  Users,
  Car,
  HelpCircle,
  GraduationCap,
  Building2,
  Calendar,
  MapPin,
  Info,
  Plane,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Taxi École Polytechnique (X) Palaiseau | 24h/24 Plateau de Saclay',
  description: `Taxi École Polytechnique 24h/24 à Palaiseau (91128). Élèves, enseignants, doctorants, événements (Bal de l'X, JX). Orly, CDG, gare Massy TGV. Tarifs fixes au ${SITE.phone.display}.`,
  openGraph: {
    title: 'Taxi École Polytechnique (X) : Plateau de Saclay 24h/24',
    description: 'Service de taxi dédié à l\'École Polytechnique et au campus du Plateau de Saclay. Tarifs fixes, suivi de vol, événements et soutenances.',
    url: `${SITE.url}/taxi-ecole-polytechnique`,
  },
  alternates: {
    canonical: `${SITE.url}/taxi-ecole-polytechnique`,
  },
}

const trajets = [
  { destination: 'Aéroport d\'Orly', duree: '20 min', distance: '15 km', prix: '25-35€' },
  { destination: 'Aéroport CDG (Roissy)', duree: '55 min', distance: '55 km', prix: '75-95€' },
  { destination: 'Gare Massy TGV', duree: '12 min', distance: '7 km', prix: '15-25€' },
  { destination: 'Paris Centre', duree: '35 min', distance: '25 km', prix: '50-65€' },
  { destination: 'Gare de Lyon', duree: '40 min', distance: '28 km', prix: '55-70€' },
  { destination: 'Gare Montparnasse', duree: '35 min', distance: '24 km', prix: '50-65€' },
  { destination: 'La Défense', duree: '40 min', distance: '30 km', prix: '55-75€' },
  { destination: 'Versailles', duree: '25 min', distance: '18 km', prix: '40-55€' },
]

const publics = [
  {
    icon: GraduationCap,
    title: 'Élèves polytechniciens',
    description: 'Transferts vers vos stages, week-ends de césure, retours en famille, voyages d\'études. Tarifs étudiants sur trajets récurrents.',
  },
  {
    icon: Users,
    title: 'Enseignants et professeurs',
    description: 'Déplacements vers congrès, jurys, conférences en Île-de-France. Facturation possible via l\'École ou en note de frais.',
  },
  {
    icon: GraduationCap,
    title: 'Doctorants et post-doc',
    description: 'Missions de recherche, colloques internationaux, transferts aéroport. Justificatifs conformes pour vos financements de thèse.',
  },
  {
    icon: Users,
    title: 'Chercheurs invités',
    description: 'Accueil VIP à Orly, CDG ou Massy TGV avec pancarte personnalisée. Anglais professionnel sur demande. Véhicule Premium possible.',
  },
  {
    icon: Star,
    title: 'Anciens élèves (AX)',
    description: 'Pour vos retours sur le plateau : promotions, gala, rencontres alumni, événements du Bal de l\'X et activités de la communauté.',
  },
]

const evenements = [
  {
    icon: Calendar,
    title: 'Journées de l\'X (JX)',
    description: 'Forum carrière annuel rassemblant entreprises et élèves. Pic de transferts vers et depuis Orly, CDG et Paris. Réservation à l\'avance recommandée.',
  },
  {
    icon: Star,
    title: 'Bal de l\'X',
    description: 'L\'événement mythique de l\'École. Transferts en tenue de soirée, retours tardifs, mise à disposition de Mercedes Classe E pour groupes.',
  },
  {
    icon: GraduationCap,
    title: 'Soutenances de thèse',
    description: 'Accueil du jury, transport des membres extérieurs, retour à l\'aéroport ou à la gare le jour même. Coordination simple.',
  },
  {
    icon: Building2,
    title: 'Séminaires et conférences',
    description: 'Pour les colloques internationaux organisés par l\'X et ses laboratoires : flotte coordonnée plusieurs jours, navette intervenants-hôtels.',
  },
]

const ecolesSaclay = [
  { name: 'CentraleSupélec', desc: 'Sur le plateau, à 5 minutes de l\'X' },
  { name: 'ENS Paris-Saclay', desc: 'Ancien Cachan, désormais sur le plateau' },
  { name: 'HEC Paris', desc: 'Campus Jouy-en-Josas, à 15 min' },
  { name: 'AgroParisTech', desc: 'Campus Palaiseau' },
  { name: 'Telecom Paris', desc: 'Sur le plateau, voisin de l\'X' },
  { name: 'ENSAE', desc: 'Statistique et économie, plateau de Saclay' },
  { name: 'ENSTA', desc: 'École nationale supérieure de techniques avancées' },
  { name: 'Université Paris-Saclay', desc: 'Faculté des Sciences, Orsay et Bures' },
]

const faqItems = [
  {
    q: 'Quel est le prix d\'un taxi entre l\'École Polytechnique et l\'aéroport d\'Orly ?',
    a: 'Le tarif d\'un taxi entre l\'École Polytechnique (Palaiseau 91128) et l\'aéroport d\'Orly est compris entre 25€ et 35€ pour environ 20 minutes de trajet via la RN118 ou la RD444. Le tarif définitif est communiqué à la réservation et fixé à l\'avance, sans surprise à l\'arrivée. Pour un aller-retour, un tarif préférentiel est appliqué.',
  },
  {
    q: 'Quels moyens de paiement acceptez-vous pour les élèves et le personnel de l\'X ?',
    a: 'Nous acceptons tous les moyens de paiement : carte bancaire (Visa, Mastercard, American Express), espèces, virement pour les comptes étudiants ou enseignants, et facturation entreprise pour les missions de l\'École. Les justificatifs sont conformes pour vos notes de frais ou financements de thèse.',
  },
  {
    q: 'Pouvez-vous me prendre directement sur le campus de l\'École Polytechnique ?',
    a: 'Oui, notre chauffeur vient vous chercher à l\'adresse précise de votre choix sur le campus : entrée principale du Grand Hall, BU, laboratoires, résidences élèves (Bâtiments 41 à 86), parking visiteurs, ou tout autre point convenu. Communiquez le numéro de bâtiment et l\'entrée à la réservation pour une prise en charge fluide.',
  },
  {
    q: 'Existe-t-il une navette régulière entre l\'École et la gare RER Lozère ou Massy ?',
    a: 'Nous ne proposons pas de ligne de navette publique, mais nous assurons des transferts ponctuels ou réguliers vers la gare RER B de Lozère, Palaiseau ou Massy-Palaiseau, ainsi que vers la gare Massy TGV. Pour un usage récurrent (étudiants, doctorants), nous proposons un forfait abonnement à tarif réduit.',
  },
  {
    q: 'Comment réserver un taxi pour un événement à l\'X (Bal, JX, soutenance) ?',
    a: 'Pour les événements de l\'École Polytechnique, nous recommandons une réservation au moins 7 jours à l\'avance, particulièrement pour le Bal de l\'X et les Journées Polytechniciennes. Vous pouvez réserver un véhicule unique ou plusieurs véhicules coordonnés. Pour les soutenances, indiquez les heures d\'arrivée et de départ du jury, nous coordonnons les transferts.',
  },
  {
    q: 'Le service est-il disponible le week-end et les jours fériés ?',
    a: 'Oui, notre service de taxi est disponible 24h/24, 7j/7, week-ends et jours fériés inclus. Les tarifs de nuit (19h-7h) et dimanche/férié sont légèrement majorés conformément à la réglementation des taxis, mais restent annoncés à la réservation. Aucune mauvaise surprise.',
  },
  {
    q: 'Que faire en cas d\'urgence ou de course de dernière minute depuis l\'X ?',
    a: 'Pour une course immédiate depuis le campus, appelez directement le ' + SITE.phone.display + '. Notre temps de prise en charge moyen est de 10 à 20 minutes en journée. Pour les nuits et événements spéciaux, nous renforçons notre présence sur le plateau pour répondre rapidement aux demandes urgentes (situations personnelles, urgences familiales, déplacements imprévus).',
  },
]

export default function TaxiPolytechnique() {
  return (
    <>
      <Header />
      <Breadcrumb items={[{ name: 'Taxi École Polytechnique' }]} />

      <ServiceSchema
        name="Taxi École Polytechnique (X) : Palaiseau"
        description="Service de taxi 24h/24 dédié à l'École Polytechnique et au campus du Plateau de Saclay. Transferts aéroport Orly, CDG, gare Massy TGV, Paris. Tarifs fixes, événements, soutenances."
        url={`${SITE.url}/taxi-ecole-polytechnique`}
        areaServed={['Palaiseau', 'Saclay', 'Orsay', 'Gif-sur-Yvette', 'Massy', 'Les Ulis']}
      />
      <FAQSchema faqs={faqItems} />

      <main>
        {/* Hero Banner */}
        <section className="bg-yellow-400 py-4">
          <div className="container mx-auto px-4 text-center">
            <p className="text-black font-medium">
              Taxi pour Polytechnique ? Appelez le{' '}
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
                  <GraduationCap className="w-5 h-5" />
                  <span className="font-medium">École Polytechnique : Palaiseau 91128</span>
                </div>

                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                  Taxi École Polytechnique (X) : Palaiseau, Plateau de Saclay 24h/24
                </h1>

                <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                  Service de <strong>taxi 24h/24 dédié à l&apos;X</strong> et au{' '}
                  <strong>Plateau de Saclay</strong>. Transferts aéroport Orly et CDG, gare Massy
                  TGV, Paris, événements (Bal de l&apos;X, JX), soutenances de thèse. Tarifs annoncés à
                  la réservation.
                </p>

                <div className="flex flex-wrap items-center gap-3 mb-6">
                  <div className="flex items-center gap-2 bg-white px-3 py-2 rounded-lg border border-gray-200">
                    <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                    <span className="font-bold text-gray-900 text-sm">4.9/5</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white px-3 py-2 rounded-lg border border-gray-200 text-sm text-gray-700">
                    <Clock className="w-4 h-4 text-yellow-500" />
                    24h/24
                  </div>
                  <div className="flex items-center gap-2 bg-white px-3 py-2 rounded-lg border border-gray-200 text-sm text-gray-700">
                    <GraduationCap className="w-4 h-4 text-yellow-500" />
                    Tous publics X
                  </div>
                  <div className="flex items-center gap-2 bg-white px-3 py-2 rounded-lg border border-gray-200 text-sm text-gray-700">
                    <CreditCard className="w-4 h-4 text-yellow-500" />
                    CB &amp; facturation
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">Tarifs fixes</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">Suivi de vol</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">Accueil pancarte</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">Événements X</span>
                  </div>
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

        {/* L'École Polytechnique */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">
                L&apos;École Polytechnique sur le plateau de Saclay
              </h2>

              <div className="prose prose-lg text-gray-600 max-w-none">
                <p>
                  L&apos;<strong>École Polytechnique</strong>, surnommée &quot;l&apos;X&quot;, est l&apos;une des plus
                  prestigieuses grandes écoles d&apos;ingénieurs françaises. Implantée depuis 1976 sur le{' '}
                  <strong>plateau de Saclay</strong>, son campus se trouve <strong>Route de Saclay,
                  91128 Palaiseau Cedex</strong>, au cœur du premier pôle d&apos;innovation européen.
                </p>
                <p>
                  Le campus de 160 hectares accueille plus de <strong>3 500 étudiants</strong>
                  (élèves polytechniciens, masters, doctorants), <strong>500 enseignants-chercheurs</strong>
                  et de nombreux personnels administratifs. La proximité d&apos;institutions
                  prestigieuses : CentraleSupélec, ENS Paris-Saclay, AgroParisTech, Telecom Paris,
                  ENSAE, fait du plateau un écosystème unique.
                </p>
                <p>
                  L&apos;accès au campus se fait par la <strong>RN118</strong> (sortie 9 « Polytechnique
                  / Saclay »), la <strong>RD36</strong> ou la <strong>RN444</strong> selon votre
                  point de départ. Les transports en commun (RER B Lozère ou Massy-Palaiseau + bus
                  91-06 ou 91-10) restent moins flexibles qu&apos;un taxi pour les horaires décalés, les
                  bagages ou les groupes.
                </p>
                <p>
                  Nos chauffeurs <strong>connaissent parfaitement le plateau de Saclay</strong> :
                  numéros de bâtiment, parkings visiteurs, entrées sécurisées, sites annexes
                  (DGA, ONERA). Vous indiquez le bâtiment et nous gérons l&apos;accès.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Trajets fréquents */}
        <section className="py-12 md:py-16 bg-gray-900 text-white">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center">
              Vos trajets fréquents depuis Polytechnique
            </h2>
            <p className="text-gray-400 text-center mb-8 max-w-2xl mx-auto">
              Tarifs indicatifs au départ de l&apos;École Polytechnique (Palaiseau 91128). Prix
              définitif communiqué à la réservation, péages éventuels précisés.
            </p>

            <div className="overflow-x-auto">
              <table className="w-full max-w-3xl mx-auto">
                <thead>
                  <tr className="border-b border-gray-700">
                    <th className="text-left py-4 px-4 font-bold">Destination</th>
                    <th className="text-center py-4 px-4 font-bold">Distance</th>
                    <th className="text-center py-4 px-4 font-bold">Durée</th>
                    <th className="text-right py-4 px-4 font-bold">Prix estimé</th>
                  </tr>
                </thead>
                <tbody>
                  {trajets.map((t, i) => (
                    <tr key={t.destination} className={i % 2 === 0 ? 'bg-gray-800/50' : ''}>
                      <td className="py-4 px-4 font-medium">{t.destination}</td>
                      <td className="text-center py-4 px-4 text-gray-400">{t.distance}</td>
                      <td className="text-center py-4 px-4 text-gray-400">{t.duree}</td>
                      <td className="text-right py-4 px-4">
                        <span className="bg-yellow-400 text-black font-bold px-3 py-1 rounded">
                          {t.prix}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-gray-500 text-sm text-center mt-6">
              * Tarifs indicatifs pour une berline 1 à 4 passagers. Van Mercedes Classe V
              disponible jusqu&apos;à 7 passagers avec léger supplément.
            </p>
          </div>
        </section>

        {/* Service dédié */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 text-center">
              Service dédié élèves, enseignants et chercheurs
            </h2>
            <p className="text-gray-600 text-center mb-10 max-w-2xl mx-auto">
              Tous les publics de l&apos;X et de la communauté polytechnicienne profitent d&apos;un service
              adapté à leurs contraintes spécifiques.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {publics.map((p) => {
                const Icon = p.icon
                return (
                  <div key={p.title} className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                    <div className="w-12 h-12 bg-yellow-400 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-black" />
                    </div>
                    <h3 className="font-bold text-gray-900 text-lg mb-2">{p.title}</h3>
                    <p className="text-gray-600 text-sm">{p.description}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Événements à l'X */}
        <section className="py-12 md:py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 text-center">
              Événements à l&apos;X : nous coordonnons vos transferts
            </h2>
            <p className="text-gray-600 text-center mb-10 max-w-2xl mx-auto">
              Du Bal de l&apos;X aux soutenances de thèse, en passant par les JX et les colloques
              internationaux, nous mobilisons les bons véhicules au bon moment.
            </p>

            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {evenements.map((e) => {
                const Icon = e.icon
                return (
                  <div
                    key={e.title}
                    className="bg-white rounded-xl p-6 border border-gray-200 hover:border-yellow-400 transition-colors"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-yellow-400 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 text-black" />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 text-lg mb-2">{e.title}</h3>
                        <p className="text-gray-600 text-sm">{e.description}</p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Comment réserver */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 text-center">
              Comment réserver pour Polytechnique
            </h2>
            <p className="text-gray-600 text-center mb-10 max-w-2xl mx-auto">
              Trois canaux simples pour réserver depuis ou vers le campus.
            </p>

            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8 text-black" />
                </div>
                <h3 className="font-bold text-gray-900 text-lg mb-2">Par téléphone</h3>
                <p className="text-gray-600 mb-4">Réservation immédiate ou planifiée, 24h/24.</p>
                <a
                  href={SITE.phone.tel}
                  className="text-xl font-bold text-yellow-600 hover:text-yellow-700"
                >
                  {SITE.phone.display}
                </a>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Car className="w-8 h-8 text-black" />
                </div>
                <h3 className="font-bold text-gray-900 text-lg mb-2">En ligne</h3>
                <p className="text-gray-600 mb-4">
                  Formulaire de réservation avec estimation tarifaire instantanée.
                </p>
                <Link href="#reservation" className="text-yellow-600 font-medium hover:text-yellow-700">
                  Accéder au formulaire
                </Link>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-black" />
                </div>
                <h3 className="font-bold text-gray-900 text-lg mb-2">À l&apos;avance</h3>
                <p className="text-gray-600 mb-4">
                  Pour les événements (Bal, JX, soutenances) : 7 jours avant minimum.
                </p>
                <span className="text-yellow-600 font-medium">SMS de rappel inclus</span>
              </div>
            </div>
          </div>
        </section>

        {/* Mise à disposition */}
        <section className="py-12 md:py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">
                Mise à disposition longue durée pour vos événements
              </h2>

              <div className="prose prose-lg text-gray-600 max-w-none">
                <p>
                  Pour vos <strong>colloques internationaux, séminaires de laboratoire ou
                  événements grand public</strong> organisés à l&apos;École Polytechnique, nous proposons
                  des forfaits <strong>mise à disposition</strong> à la demi-journée, à la journée
                  ou sur plusieurs jours consécutifs.
                </p>
                <p>
                  Le principe : un chauffeur dédié, un véhicule dédié, à votre disposition pendant
                  la durée convenue. Idéal pour les <strong>transferts entre l&apos;X, l&apos;hôtel et la
                  gare</strong> de vos intervenants étrangers, ou pour les rotations vers les sites
                  voisins (CEA Saclay, ENS Paris-Saclay, CentraleSupélec).
                </p>
                <p>
                  Les <strong>tarifs forfaitaires</strong> sont calculés sur la base d&apos;un nombre
                  d&apos;heures (4h, 8h, 12h) avec kilométrage inclus dans un rayon de 50 km. Au-delà,
                  un tarif kilométrique négocié s&apos;applique. Plusieurs véhicules peuvent être
                  mobilisés simultanément (jusqu&apos;à 5 simultanément sur le plateau).
                </p>
              </div>

              <div className="mt-8 grid sm:grid-cols-3 gap-4">
                <div className="bg-white rounded-xl p-5 border border-gray-200 text-center">
                  <div className="text-2xl font-bold text-yellow-600 mb-1">4h / 8h / 12h</div>
                  <p className="text-gray-600 text-sm">forfaits horaires</p>
                </div>
                <div className="bg-white rounded-xl p-5 border border-gray-200 text-center">
                  <div className="text-2xl font-bold text-yellow-600 mb-1">5+</div>
                  <p className="text-gray-600 text-sm">véhicules simultanés possibles</p>
                </div>
                <div className="bg-white rounded-xl p-5 border border-gray-200 text-center">
                  <div className="text-2xl font-bold text-yellow-600 mb-1">50 km</div>
                  <p className="text-gray-600 text-sm">de rayon inclus</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Toutes les écoles du plateau */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 text-center">
              Toutes les écoles du plateau de Saclay desservies
            </h2>
            <p className="text-gray-600 text-center mb-10 max-w-2xl mx-auto">
              Au-delà de l&apos;École Polytechnique, nous desservons l&apos;ensemble du cluster Paris-Saclay :
              grandes écoles, université et centres de recherche.
            </p>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
              {ecolesSaclay.map((e) => (
                <div
                  key={e.name}
                  className="bg-gray-50 rounded-xl p-5 border border-gray-200 hover:border-yellow-400 transition-colors"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <GraduationCap className="w-5 h-5 text-yellow-500" />
                    <h3 className="font-bold text-gray-900 text-sm">{e.name}</h3>
                  </div>
                  <p className="text-gray-500 text-xs">{e.desc}</p>
                </div>
              ))}
            </div>

            <div className="mt-10 text-center">
              <Link
                href="/taxi-paris-saclay"
                className="inline-flex items-center gap-3 bg-gray-900 text-white font-bold text-lg py-3 px-6 rounded-lg hover:bg-gray-800 transition-colors"
              >
                Voir notre page dédiée Taxi Paris-Saclay
              </Link>
            </div>

            <div className="mt-8 max-w-3xl mx-auto bg-yellow-50 border border-yellow-200 rounded-xl p-6">
              <div className="flex items-start gap-3">
                <Info className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                <p className="text-gray-700 text-sm">
                  <strong>Bon à savoir :</strong> nos chauffeurs connaissent les codes d&apos;accès,
                  les parkings visiteurs et les entrées sécurisées de tous les établissements du
                  plateau. Précisez simplement l&apos;école et le bâtiment à la réservation.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-12 md:py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 text-center">
              Questions fréquentes : Taxi École Polytechnique
            </h2>
            <p className="text-gray-600 text-center mb-10 max-w-2xl mx-auto">
              Les réponses aux questions des élèves, enseignants, chercheurs et visiteurs de l&apos;X.
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
                Réservez votre taxi pour l&apos;École Polytechnique
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

        <RelatedCities currentSlug="taxi-ecole-polytechnique" />
      </main>
      <Footer />
    </>
  )
}
