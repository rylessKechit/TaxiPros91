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
  MapPin,
  Info,
  Briefcase,
  FlaskConical,
  Zap,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Taxi Paris-Saclay | Grandes écoles, CEA, R&D Plateau 24h/24',
  description: `Taxi Paris-Saclay 24h/24 : Polytechnique, CentraleSupélec, HEC, CEA, Synchrotron SOLEIL, EDF Lab, Thales R&T. Tarifs fixes, comptes entreprise. ${SITE.phone.display}.`,
  openGraph: {
    title: 'Taxi Paris-Saclay Grandes écoles & R&D du Plateau',
    description: 'Service de taxi dédié au cluster Paris-Saclay : grandes écoles, CEA, Synchrotron SOLEIL, EDF Lab, Thales, Servier, Danone Nutricia.',
    url: `${SITE.url}/taxi-paris-saclay`,
  },
  alternates: {
    canonical: `${SITE.url}/taxi-paris-saclay`,
  },
}

const ecoles = [
  {
    name: 'École Polytechnique',
    desc: 'L\'X, fleuron des grandes écoles d\'ingénieurs. Page dédiée disponible.',
    link: '/taxi-ecole-polytechnique',
  },
  {
    name: 'CentraleSupélec',
    desc: 'École d\'ingénieurs généraliste issue de la fusion Centrale Paris / Supélec.',
  },
  {
    name: 'HEC Paris',
    desc: 'Campus de Jouy-en-Josas, business school internationale (15 min du plateau).',
  },
  {
    name: 'ENS Paris-Saclay',
    desc: 'Ancienne ENS Cachan, désormais sur le plateau. Sciences fondamentales et appliquées.',
  },
  {
    name: 'AgroParisTech',
    desc: 'Sciences du vivant, agronomie, environnement. Campus Palaiseau depuis 2022.',
  },
  {
    name: 'Telecom Paris / ENSAE / ENSTA',
    desc: 'Trois écoles d\'ingénieurs voisines sur le plateau, partenaires de l\'IP Paris.',
  },
  {
    name: 'Université Paris-Saclay',
    desc: '14e université mondiale selon Shanghai 2024. Plusieurs campus dans la zone.',
  },
  {
    name: 'Faculté des Sciences d\'Orsay',
    desc: 'Campus historique de l\'Université Paris-Saclay, à Orsay et Bures-sur-Yvette.',
  },
]

const entreprises = [
  {
    icon: FlaskConical,
    name: 'CEA Saclay',
    desc: 'Centre d\'Études Atomiques, premier centre de recherche nucléaire civile français. Plus de 6 000 collaborateurs.',
  },
  {
    icon: Zap,
    name: 'Synchrotron SOLEIL',
    desc: 'Centre de recherche au rayonnement synchrotron à Saint-Aubin. Accueille des chercheurs du monde entier.',
  },
  {
    icon: Building2,
    name: 'EDF Lab Paris-Saclay',
    desc: 'Centre de R&D du groupe EDF, 1 500 chercheurs et ingénieurs sur l\'innovation énergétique.',
  },
  {
    icon: Briefcase,
    name: 'Thales Research & Technology',
    desc: 'Centre de R&D corporate de Thales sur le plateau, défense, aérospatial, identité numérique.',
  },
  {
    icon: FlaskConical,
    name: 'Servier (R&D)',
    desc: 'Centre de recherche pharmaceutique des Laboratoires Servier sur le campus de l\'Institut.',
  },
  {
    icon: FlaskConical,
    name: 'Danone Nutricia',
    desc: 'Centre de R&D nutrition spécialisée, recherche sur la nutrition infantile et médicale.',
  },
  {
    icon: Zap,
    name: 'Air Liquide',
    desc: 'Centre de R&D Innovation Campus à Jouy-en-Josas, gaz industriels et santé.',
  },
  {
    icon: Briefcase,
    name: 'Renault Technocentre',
    desc: 'À Guyancourt, à proximité du plateau. Plus de 12 000 ingénieurs et concepteurs.',
  },
  {
    icon: Briefcase,
    name: 'Mercedes-Benz France',
    desc: 'Siège français à Chilly-Mazarin, à 20 minutes du plateau de Saclay.',
  },
  {
    icon: Building2,
    name: 'Oracle, HP, Naval Group',
    desc: 'Sièges français ou centres R&D sur le plateau, partenaires majeurs de l\'écosystème.',
  },
]

const tarifsDestinations = [
  { destination: 'Aéroport d\'Orly', distance: '17 km', duree: '22 min', prix: '28-38€' },
  { destination: 'Aéroport CDG', distance: '55 km', duree: '55 min', prix: '78-98€' },
  { destination: 'Gare Massy TGV', distance: '8 km', duree: '12 min', prix: '15-25€' },
  { destination: 'Paris Centre', distance: '25 km', duree: '35 min', prix: '50-65€' },
  { destination: 'La Défense', distance: '30 km', duree: '40 min', prix: '55-75€' },
  { destination: 'Versailles', distance: '15 km', duree: '25 min', prix: '35-50€' },
  { destination: 'Gare de Lyon', distance: '28 km', duree: '40 min', prix: '55-70€' },
  { destination: 'Disneyland Paris', distance: '60 km', duree: '60 min', prix: '95-130€' },
]

const faqItems = [
  {
    q: 'Quels sont les principaux lieux desservis par TAXI Pro 91 sur le plateau de Saclay ?',
    a: 'Nous desservons l\'ensemble du cluster Paris-Saclay : École Polytechnique, CentraleSupélec, ENS Paris-Saclay, AgroParisTech, Telecom Paris, ENSAE, ENSTA, Université Paris-Saclay, HEC Jouy-en-Josas, ainsi que les centres de R&D CEA Saclay, Synchrotron SOLEIL, EDF Lab, Thales R&T, Servier, Danone Nutricia, Air Liquide, Naval Group. Nos chauffeurs connaissent les codes d\'accès et parkings visiteurs de chaque site.',
  },
  {
    q: 'Combien coûte un taxi entre le plateau de Saclay et l\'aéroport d\'Orly ?',
    a: 'Le tarif d\'un taxi entre le plateau de Saclay et l\'aéroport d\'Orly est de 28€ à 38€ selon votre point exact de départ (Polytechnique, CEA, CentraleSupélec, ENS Paris-Saclay) et l\'horaire. Le trajet dure environ 20 à 25 minutes par la RN118 puis l\'A10 et l\'A106. Tarif fixe annoncé à la réservation.',
  },
  {
    q: 'Acceptez-vous les comptes entreprise pour les sociétés du plateau ?',
    a: 'Oui, nous travaillons avec de nombreuses entreprises et centres de recherche du plateau de Saclay : facturation mensuelle, paiement à 30 jours, justificatifs conformes TVA, dashboard de suivi. Voir notre page dédiée Taxi entreprise pour en savoir plus, ou contactez-nous au ' + SITE.phone.display + '.',
  },
  {
    q: 'Comment accéder au plateau de Saclay en taxi ?',
    a: 'Le plateau est accessible principalement par la RN118 (Paris-Orléans), avec les sorties Polytechnique-Saclay et CEA Saclay. La RD36 et la RN444 permettent également d\'y accéder depuis l\'ouest. Nos chauffeurs utilisent le GPS en temps réel pour adapter l\'itinéraire selon le trafic, notamment aux heures de pointe sur la N118.',
  },
  {
    q: 'Avez-vous des chauffeurs anglophones pour les chercheurs invités ?',
    a: 'Oui, sur demande à la réservation, nous mobilisons des chauffeurs parlant un anglais professionnel pour l\'accueil de vos chercheurs invités, intervenants de colloque ou délégations étrangères. Service particulièrement apprécié au CEA, au Synchrotron SOLEIL et lors des colloques internationaux des grandes écoles.',
  },
  {
    q: 'Proposez-vous un service pour les soirées étudiantes et événements du plateau ?',
    a: 'Oui, nous assurons les retours de soirée (galas, BDE, journées étudiantes) en sécurité. Disponibles 24h/24, y compris les nuits de week-end. Pour les groupes, le Van Mercedes Classe V (jusqu\'à 7 passagers) permet de partager un retour vers Paris ou les résidences étudiantes du plateau et de la vallée.',
  },
  {
    q: 'Combien de temps pour avoir un taxi sur le plateau de Saclay ?',
    a: 'En conditions normales, un taxi peut être présent sur le plateau (École Polytechnique, CEA, CentraleSupélec) en 10 à 20 minutes. Pour les heures de pointe ou les périodes de forte affluence (rentrées, colloques), nous recommandons de réserver à l\'avance pour garantir une prise en charge à l\'heure.',
  },
]

export default function TaxiParisSaclay() {
  return (
    <>
      <Header />
      <Breadcrumb items={[{ name: 'Taxi Paris-Saclay' }]} />

      <ServiceSchema
        name="Taxi Paris-Saclay"
        description="Service de taxi 24h/24 dédié au cluster Paris-Saclay : grandes écoles (Polytechnique, CentraleSupélec, HEC, ENS Paris-Saclay), centres de R&D (CEA, Synchrotron SOLEIL, EDF Lab, Thales, Servier). Tarifs fixes, comptes entreprise."
        url={`${SITE.url}/taxi-paris-saclay`}
        areaServed={['Palaiseau', 'Saclay', 'Orsay', 'Gif-sur-Yvette', 'Les Ulis', 'Massy']}
      />
      <FAQSchema faqs={faqItems} />

      <main>
        {/* Hero Banner */}
        <section className="bg-yellow-400 py-4">
          <div className="container mx-auto px-4 text-center">
            <p className="text-black font-medium">
              Taxi pour le plateau de Saclay ? Appelez le{' '}
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
                  <FlaskConical className="w-5 h-5" />
                  <span className="font-medium">Cluster Paris-Saclay Essonne</span>
                </div>

                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                  Taxi Paris-Saclay Toutes les grandes écoles &amp; entreprises du Plateau
                </h1>

                <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                  Service de <strong>taxi dédié au cluster Paris-Saclay</strong> :
                  Polytechnique, CentraleSupélec, HEC, ENS, AgroParisTech, ainsi que tous les
                  centres de R&amp;D (<strong>CEA Saclay, Synchrotron SOLEIL, EDF Lab, Thales R&amp;T,
                  Servier</strong>). Tarifs fixes, comptes entreprise, 24h/24.
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
                    <Building2 className="w-4 h-4 text-yellow-500" />
                    Compte pro
                  </div>
                  <div className="flex items-center gap-2 bg-white px-3 py-2 rounded-lg border border-gray-200 text-sm text-gray-700">
                    <CreditCard className="w-4 h-4 text-yellow-500" />
                    Facturation
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">Toutes les écoles</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">Tous les labos R&amp;D</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">Chauffeurs anglophones</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">Accueil pancarte</span>
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

        {/* Le cluster Paris-Saclay */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">
                Le cluster Paris-Saclay : 1er pôle d&apos;innovation européen
              </h2>

              <div className="prose prose-lg text-gray-600 max-w-none">
                <p>
                  Le <strong>cluster Paris-Saclay</strong> est aujourd&apos;hui le premier pôle
                  d&apos;innovation et de recherche en Europe. Concentré principalement sur le{' '}
                  <strong>plateau de Saclay</strong> au sud-ouest de Paris (Essonne et Yvelines), il
                  rassemble <strong>65 000 étudiants</strong>,{' '}
                  <strong>14 000 chercheurs</strong> et représente environ{' '}
                  <strong>13 % de la R&amp;D française</strong>.
                </p>
                <p>
                  Le cluster réunit des établissements emblématiques : <strong>École
                  Polytechnique</strong>, <strong>CentraleSupélec</strong>, <strong>ENS Paris-Saclay</strong>,
                  <strong> HEC Paris</strong>, <strong>AgroParisTech</strong>, <strong>Telecom Paris</strong>,
                  <strong> ENSAE</strong>, <strong>ENSTA</strong> et l&apos;<strong>Université Paris-Saclay</strong>
                  (14e rang mondial au classement de Shanghai en 2024).
                </p>
                <p>
                  Côté entreprises et recherche, le plateau accueille le <strong>CEA</strong>
                  (Commissariat à l&apos;Énergie Atomique), le <strong>Synchrotron SOLEIL</strong>,{' '}
                  <strong>EDF Lab</strong>, <strong>Thales Research &amp; Technology</strong>,
                  <strong> Servier</strong>, <strong>Danone Nutricia</strong>, <strong>Air Liquide</strong>,
                  <strong> Naval Group</strong>, ainsi que les sièges français d&apos;<strong>Oracle</strong>{' '}
                  et de <strong>HP</strong>. À proximité immédiate : <strong>Renault Technocentre</strong>
                  (Guyancourt) et <strong>Mercedes-Benz France</strong> (Chilly-Mazarin).
                </p>
                <p>
                  Dans cet écosystème dense, TAXI Pro 91 est le partenaire de mobilité de référence.
                  Nos chauffeurs connaissent <strong>les entrées sécurisées, les codes d&apos;accès,
                  les parkings visiteurs</strong> de chaque site. Vous communiquez le nom du
                  bâtiment ou du laboratoire, nous gérons l&apos;accès.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Grandes écoles */}
        <section className="py-12 md:py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 text-center">
              Grandes écoles desservies
            </h2>
            <p className="text-gray-600 text-center mb-10 max-w-2xl mx-auto">
              Toutes les grandes écoles du plateau et leurs annexes sont desservies 24h/24 par nos
              chauffeurs habitués au campus.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
              {ecoles.map((e) => (
                <div
                  key={e.name}
                  className="bg-white rounded-xl p-5 border border-gray-200 hover:border-yellow-400 transition-colors"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <GraduationCap className="w-5 h-5 text-yellow-500 flex-shrink-0" />
                    <h3 className="font-bold text-gray-900 text-sm">{e.name}</h3>
                  </div>
                  <p className="text-gray-500 text-xs mb-3">{e.desc}</p>
                  {e.link && (
                    <Link
                      href={e.link}
                      className="text-yellow-600 text-xs font-medium hover:text-yellow-700"
                    >
                      Voir la page dédiée →
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Entreprises et R&D */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 text-center">
              Entreprises et centres de R&amp;D desservis
            </h2>
            <p className="text-gray-600 text-center mb-10 max-w-2xl mx-auto">
              Les principaux centres de recherche, sièges sociaux et entreprises innovantes du
              plateau et de sa périphérie immédiate.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
              {entreprises.map((e) => {
                const Icon = e.icon
                return (
                  <div
                    key={e.name}
                    className="bg-gray-50 rounded-xl p-5 border border-gray-200 hover:border-yellow-400 transition-colors"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <Icon className="w-5 h-5 text-yellow-500 flex-shrink-0" />
                      <h3 className="font-bold text-gray-900 text-sm">{e.name}</h3>
                    </div>
                    <p className="text-gray-500 text-xs">{e.desc}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Tarifs */}
        <section className="py-12 md:py-16 bg-gray-900 text-white">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center">
              Tarifs depuis le Plateau de Saclay
            </h2>
            <p className="text-gray-400 text-center mb-8 max-w-2xl mx-auto">
              Tarifs indicatifs au départ du plateau (École Polytechnique, CEA, CentraleSupélec, ENS
              Paris-Saclay). Prix annoncé à la réservation.
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
                  {tarifsDestinations.map((t, i) => (
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
              * Tarifs indicatifs au compteur avec confirmation à la réservation. Van 7 places
              disponible avec léger supplément.
            </p>
          </div>
        </section>

        {/* Service B2B */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">
                Service B2B pour les entreprises de Saclay
              </h2>

              <div className="prose prose-lg text-gray-600 max-w-none">
                <p>
                  Les <strong>entreprises et centres de recherche du plateau</strong> bénéficient
                  d&apos;un service B2B complet : compte entreprise dédié, facturation mensuelle, paiement
                  à 30 jours, justificatifs conformes TVA, dashboard de suivi, mise à disposition de
                  véhicules pour vos séminaires et accueil de délégations.
                </p>
                <p>
                  De nombreuses startups et scale-up du <strong>Paris-Saclay Campus</strong> et de
                  l&apos;<strong>Incubateur 21 X</strong> nous font confiance pour leurs déplacements
                  flexibles : pas d&apos;engagement de volume, facturation à l&apos;usage, idéal pour les
                  jeunes structures en forte croissance.
                </p>
                <p>
                  Côté grands comptes (<strong>CEA, EDF, Thales, Servier, Danone</strong>), nous
                  proposons des conventions cadre négociées, des chauffeurs anglophones pour vos
                  visiteurs internationaux, et une priorité de prise en charge garantie sur le
                  plateau.
                </p>
              </div>

              <div className="mt-8 text-center">
                <Link
                  href="/taxi-entreprise"
                  className="inline-flex items-center gap-3 bg-gray-900 text-white font-bold text-lg py-3 px-6 rounded-lg hover:bg-gray-800 transition-colors"
                >
                  <Briefcase className="w-5 h-5" />
                  Découvrir notre offre Taxi entreprise
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Accès au plateau */}
        <section className="py-12 md:py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">
                Accès au Plateau de Saclay
              </h2>

              <div className="prose prose-lg text-gray-600 max-w-none">
                <p>
                  Le plateau de Saclay est accessible par plusieurs axes majeurs. La{' '}
                  <strong>RN118</strong> (Paris-Orléans) est l&apos;épine dorsale du plateau, avec les
                  sorties <em>Polytechnique-Saclay</em>, <em>CEA Saclay</em>,{' '}
                  <em>Le Christ de Saclay</em>. Les <strong>RD36</strong> et <strong>RN444</strong>{' '}
                  permettent d&apos;y accéder par l&apos;ouest, depuis Versailles ou Saint-Quentin-en-Yvelines.
                </p>
                <p>
                  Les <strong>transports en commun</strong> évoluent rapidement : la ligne de bus en
                  site propre <strong>TCSP Massy-Saint-Quentin</strong> relie déjà la gare Massy
                  TGV aux principaux pôles du plateau. Les futures gares de la <strong>ligne 18 du
                  Grand Paris Express</strong> (mise en service progressive 2026-2030) desserviront
                  Polytechnique, CEA-Saint-Aubin et Orsay-Gif.
                </p>
                <p>
                  En attendant la pleine montée en charge du métro, le <strong>taxi reste le moyen
                  le plus flexible</strong> pour rejoindre le plateau depuis Paris, les aéroports
                  ou la gare TGV de Massy. Nos chauffeurs adaptent l&apos;itinéraire au trafic en temps
                  réel pour éviter les ralentissements habituels de la N118 aux heures de pointe.
                </p>
                <p>
                  Pour vos transferts depuis l&apos;aéroport, des navettes type{' '}
                  <strong>Le Bus Direct</strong> ou <strong>OrlyBus</strong> existent mais imposent
                  des correspondances. Un taxi vous emmène <strong>directement à votre laboratoire,
                  amphithéâtre ou bureau</strong>, sans transfert ni attente.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 text-center">
              Questions fréquentes Taxi Paris-Saclay
            </h2>
            <p className="text-gray-600 text-center mb-10 max-w-2xl mx-auto">
              Les réponses aux questions des étudiants, chercheurs, salariés et visiteurs du
              plateau.
            </p>

            <div className="max-w-3xl mx-auto space-y-4">
              {faqItems.map((item, index) => (
                <details
                  key={index}
                  className="bg-gray-50 rounded-xl border border-gray-200 overflow-hidden group"
                >
                  <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-white">
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
                Votre taxi pour le plateau de Saclay
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

        <RelatedCities currentSlug="taxi-paris-saclay" />
      </main>
      <Footer />
    </>
  )
}
