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
  HelpCircle,
  MapPin,
  Info,
  ArrowRight,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Taxi aéroport Orly : tarifs fixes 24h/24',
  description: `Réservez votre taxi aéroport Orly en 1 appel : ${SITE.phone.display}. Tarifs fixes dès 25€, suivi de vol inclus, tous terminaux (Orly 1, 2, 3, 4), 24h/24.`,
  openGraph: {
    title: 'Taxi aéroport Orly : tarifs fixes 24h/24',
    description:
      "Taxi pour l'aéroport d'Orly depuis l'Essonne. Tarifs fixes annoncés à la réservation, suivi de vol en temps réel, 4 terminaux desservis.",
    url: `${SITE.url}/taxi-aeroport-orly`,
  },
  alternates: {
    canonical: `${SITE.url}/taxi-aeroport-orly`,
  },
}

const tarifs = [
  { ville: 'Massy', distance: '18 km', duree: '20 min', prix: '30-40€' },
  { ville: 'Palaiseau', distance: '17 km', duree: '20 min', prix: '30-40€' },
  { ville: 'Antony', distance: '12 km', duree: '15 min', prix: '25-35€' },
  { ville: 'Longjumeau', distance: '14 km', duree: '18 min', prix: '28-38€' },
  { ville: 'Les Ulis', distance: '22 km', duree: '25 min', prix: '40-50€' },
  { ville: 'Saclay', distance: '24 km', duree: '27 min', prix: '42-52€' },
  { ville: 'Ballainvilliers', distance: '15 km', duree: '20 min', prix: '30-40€' },
  { ville: 'Verrières-le-Buisson', distance: '14 km', duree: '18 min', prix: '28-38€' },
]

const terminaux = [
  {
    nom: 'Orly 1',
    usage: 'Low-cost et charters',
    zone: 'Dépose-minute niveau 0, voie montante',
    compagnies: 'easyJet, Ryanair (liaisons domestiques), charters',
  },
  {
    nom: 'Orly 2',
    usage: 'Compagnies européennes régulières',
    zone: 'Niveau 0, jonction Orly 1–2',
    compagnies: 'Air France courts-courriers, Iberia, Lufthansa',
  },
  {
    nom: 'Orly 3',
    usage: 'Vols intérieurs et low-cost',
    zone: 'Accès direct depuis A106, dépose rapide',
    compagnies: 'Air France Hop, Transavia vols domestiques',
  },
  {
    nom: 'Orly 4',
    usage: 'Vols internationaux long-courriers',
    zone: 'Ancienne Orly Ouest, voie montante niveau Départs',
    compagnies: 'Air France international, Corsair, Air Caraïbes',
  },
]

const avantages = [
  {
    icon: Shield,
    title: 'Tarif fixe garanti',
    description:
      'Le montant est annoncé et confirmé avant le départ. Pas de compteur, pas de variable selon le trafic, vous savez ce que vous payez.',
  },
  {
    icon: Plane,
    title: 'Suivi de vol intégré',
    description:
      'Communiquez votre numéro de vol à la réservation. Notre système ajuste automatiquement l’heure de prise en charge si le vol est retardé ou avancé.',
  },
  {
    icon: Clock,
    title: 'Disponible 24h/24',
    description:
      'Vols à 5h du matin ou retours à minuit : nous couvrons l’intégralité des créneaux horaires, week-ends et jours fériés inclus.',
  },
  {
    icon: Star,
    title: 'Avis clients vérifiés',
    description: `Service de qualité reconnu. Ponctualité aux transferts aéroport notée comme critère n° 1 dans nos retours.`,
  },
]

const faqItems = [
  {
    q: "Comment réserver un taxi pour l'aéroport d'Orly à l'avance ?",
    a: `Appelez le ${SITE.phone.display} ou remplissez le formulaire en ligne sur cette page. Indiquez votre adresse de départ, le terminal Orly (1, 2, 3 ou 4), votre numéro de vol et l'heure limite d'enregistrement. Pour les vols matinaux avant 7h, réservez au moins 48 h à l'avance. Une confirmation par SMS est envoyée dès la validation. Pour les entreprises, la facturation mensuelle sur compte dédié est disponible.`,
  },
  {
    q: "Où mon chauffeur m'attend-il quand j'arrive à Orly ?",
    a: "Le chauffeur se positionne à la sortie de la zone Arrivées du terminal indiqué à la réservation, juste après la récupération des bagages. Il tient une pancarte à votre nom sur demande. Grâce au suivi de vol en temps réel, il adapte son heure de présence à l'heure réelle d'atterrissage, sans frais supplémentaires en cas de retard compagnie. Vous disposez de 15 minutes offertes après l'heure réelle d'arrivée.",
  },
  {
    q: "Quelles sont les zones de dépose-minute à l'aéroport d'Orly ?",
    a: "Chaque terminal d'Orly dispose d'une zone de dépose officielle au niveau Départs. Pour Orly 1 et 2, la dépose s'effectue côté voie montante niveau 0. Pour Orly 3, l'accès se fait directement depuis la bretelle A106, c'est la dépose la plus rapide. Pour Orly 4 (ex-Orly Ouest), la zone se trouve côté voie montante, niveau Départs haut. Nos chauffeurs connaissent la configuration post-rénovation et vous déposent au plus près de votre comptoir d'enregistrement.",
  },
  {
    q: "Vaut-il mieux prendre un taxi ou l'Orlyval depuis Orly ?",
    a: "L'Orlyval relie Orly à la station Antony (RER B) en 8 minutes pour environ 13€. C'est pertinent si vous partez avec un seul bagage cabine vers Paris ou une ville desservie par le RER B. Le taxi TAXI Pro 91 est plus adapté si vous avez plusieurs valises, si votre destination finale est en Essonne (Massy, Palaiseau, Les Ulis, Saclay), si vous arrivez entre 23h30 et 6h (Orlyval ne fonctionne pas sur cette plage), ou si vous voyagez à 2 ou 3, le coût se répartit alors avantageusement.",
  },
  {
    q: "Les tarifs changent-ils pour un taxi vers Orly la nuit ou le week-end ?",
    a: "Oui, une majoration s'applique pour les courses de nuit (19h–7h) et les dimanches et jours fériés, conformément à la réglementation tarifaire des taxis. Cette majoration est intégrée dans le tarif fixe communiqué à la réservation : vous connaissez le montant exact avant le départ, sans découvrir de supplément à la fin de la course. Exemple : un trajet Massy → Orly de nuit est facturé environ 35–45€ tout compris.",
  },
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

export default function TaxiAeroportOrly() {
  return (
    <>
      <Header />
      <Breadcrumb
        items={[
          { name: 'Taxi aéroport', href: '/taxi-aeroport' },
          { name: 'Taxi aéroport Orly' },
        ]}
      />

      <ServiceSchema
        name="Taxi aéroport Orly depuis l'Essonne : tous terminaux"
        description="Service de taxi 24h/24 vers les 4 terminaux de l'aéroport Paris-Orly (Orly 1, 2, 3, 4) depuis toutes les communes de l'Essonne. Tarifs fixes annoncés à la réservation, suivi de vol en temps réel, prise en charge en zone Arrivées."
        url={`${SITE.url}/taxi-aeroport-orly`}
        areaServed={['Massy', 'Palaiseau', 'Antony', 'Longjumeau', 'Les Ulis', 'Saclay', 'Ballainvilliers', 'Verrières-le-Buisson']}
      />
      <FAQSchema faqs={faqItems} />

      <main>
        {/* Hero Banner */}
        <section className="bg-yellow-400 py-4">
          <div className="container mx-auto px-4 text-center">
            <p className="text-black font-medium">
              Taxi pour l&apos;aéroport d&apos;Orly ? Appelez le{' '}
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
                  <span className="font-medium">Aéroport Paris-Orly : Orly 1, 2, 3, 4</span>
                </div>

                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                  Votre taxi pour l&apos;aéroport d&apos;Orly : TAXI Pro 91
                </h1>

                <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                  Transferts vers les <strong>4 terminaux de l&apos;aéroport d&apos;Orly</strong> depuis
                  toute l&apos;Essonne. Tarif fixe annoncé dès la réservation,{' '}
                  <strong>suivi de vol en temps réel</strong>, service disponible{' '}
                  <strong>24h/24 et 7j/7</strong>.
                </p>

                {/* Bandeau confiance */}
                <div className="flex flex-wrap items-center gap-3 mb-6">
                  <div className="flex items-center gap-2 bg-white px-3 py-2 rounded-lg border border-gray-200">
                    <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                    <span className="font-bold text-gray-900 text-sm">Avis vérifiés</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white px-3 py-2 rounded-lg border border-gray-200 text-sm text-gray-700">
                    <Clock className="w-4 h-4 text-yellow-500" />
                    24h/24
                  </div>
                  <div className="flex items-center gap-2 bg-white px-3 py-2 rounded-lg border border-gray-200 text-sm text-gray-700">
                    <CreditCard className="w-4 h-4 text-yellow-500" />
                    CB acceptée
                  </div>
                  <div className="flex items-center gap-2 bg-white px-3 py-2 rounded-lg border border-gray-200 text-sm text-gray-700">
                    <Shield className="w-4 h-4 text-yellow-500" />
                    Tarif fixe garanti
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">Suivi de vol inclus</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">Tarifs fixes</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">Orly 1, 2, 3, 4</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">Bagages inclus</span>
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

        {/* Orly en pratique */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                L&apos;aéroport d&apos;Orly depuis l&apos;Essonne : proximité et praticité
              </h2>

              <div className="prose prose-lg text-gray-600 max-w-none">
                <p>
                  L&apos;<strong>aéroport Paris-Orly</strong> est le deuxième aéroport français avec
                  plus de 30 millions de passagers par an. Situé à 14 km au sud de Paris dans le
                  Val-de-Marne, il est le plus accessible depuis l&apos;Essonne : en conditions normales,
                  Massy est à <strong>20 minutes</strong>, Antony à <strong>15 minutes</strong> et
                  Les Ulis à <strong>25 minutes</strong> via l&apos;A10 puis l&apos;A6.
                </p>
                <p>
                  Depuis la rénovation achevée en 2024, l&apos;aéroport fonctionne avec{' '}
                  <strong>4 terminaux renumérotés</strong> (Orly 1, 2, 3, 4) reliés par un couloir
                  central. Connaître votre terminal avant de partir vous permet de choisir la zone de
                  dépose la plus proche de votre comptoir d&apos;enregistrement et d&apos;économiser
                  plusieurs minutes de marche.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Quand partir */}
        <section className="py-12 md:py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                À quelle heure partir pour attraper votre vol à Orly ?
              </h2>

              <p className="text-gray-600 mb-6">
                La distance domicile-aéroport n&apos;est qu&apos;une partie du calcul. Il faut aussi
                intégrer les formalités d&apos;enregistrement et de contrôle, qui varient selon le
                type de vol.
              </p>

              <div className="grid md:grid-cols-3 gap-4 mb-8">
                <div className="bg-white border border-gray-200 rounded-xl p-5">
                  <div className="w-10 h-10 bg-yellow-400 rounded-lg flex items-center justify-center mb-3">
                    <Plane className="w-5 h-5 text-black" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">Vols domestiques</h3>
                  <p className="text-gray-600 text-sm">
                    Prévoyez <strong>1h30 à 2h</strong> avant le décollage. Files de contrôle
                    généralement courtes à Orly 1 et 3.
                  </p>
                </div>
                <div className="bg-white border border-gray-200 rounded-xl p-5">
                  <div className="w-10 h-10 bg-yellow-400 rounded-lg flex items-center justify-center mb-3">
                    <Plane className="w-5 h-5 text-black" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">Vols européens</h3>
                  <p className="text-gray-600 text-sm">
                    Comptez <strong>2h avant</strong>. Les contrôles de sûreté aux terminaux 2 et 4
                    peuvent dépasser 30 min aux heures de pointe (7h–10h, 16h–19h).
                  </p>
                </div>
                <div className="bg-white border border-gray-200 rounded-xl p-5">
                  <div className="w-10 h-10 bg-yellow-400 rounded-lg flex items-center justify-center mb-3">
                    <Plane className="w-5 h-5 text-black" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">Vols internationaux</h3>
                  <p className="text-gray-600 text-sm">
                    Prévoyez <strong>3h avant</strong> (Orly 4 : Air France, Corsair, Air
                    Caraïbes). L&apos;enregistrement ferme 50 min avant le décollage.
                  </p>
                </div>
              </div>

              <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-5">
                <div className="flex items-start gap-3">
                  <Info className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                  <p className="text-gray-700 text-sm">
                    <strong>Notre conseil :</strong> indiquez votre numéro de vol à la réservation.
                    Nous calculons automatiquement l&apos;heure de prise en charge optimale depuis votre
                    adresse en intégrant la durée de trajet et une marge de sécurité.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Avantages */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 text-center">
              Pourquoi réserver votre taxi aéroport Orly avec TAXI Pro 91
            </h2>
            <p className="text-gray-600 text-center mb-10 max-w-2xl mx-auto">
              Un transfert aéroport sans stress commence par un chauffeur fiable et un tarif clair.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {avantages.map((a) => {
                const Icon = a.icon
                return (
                  <div
                    key={a.title}
                    className="bg-gray-50 rounded-xl p-6 text-center border border-gray-200"
                  >
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

        {/* Tarifs */}
        <section className="py-12 md:py-16 bg-gray-900 text-white">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center">
              Tarifs taxi aéroport Orly depuis l&apos;Essonne
            </h2>
            <p className="text-gray-400 text-center mb-8 max-w-2xl mx-auto">
              Tarifs indicatifs au départ des principales communes de l&apos;Essonne. Prix définitif
              communiqué à la réservation, péages inclus.
            </p>

            <div className="overflow-x-auto">
              <table className="w-full max-w-3xl mx-auto">
                <thead>
                  <tr className="border-b border-gray-700">
                    <th className="text-left py-4 px-4 font-bold">Ville de départ</th>
                    <th className="text-center py-4 px-4 font-bold">Distance</th>
                    <th className="text-center py-4 px-4 font-bold">Durée</th>
                    <th className="text-right py-4 px-4 font-bold">Prix estimé</th>
                  </tr>
                </thead>
                <tbody>
                  {tarifs.map((t, i) => (
                    <tr key={t.ville} className={i % 2 === 0 ? 'bg-gray-800/50' : ''}>
                      <td className="py-4 px-4 font-medium">{t.ville}</td>
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
              * Tarifs indicatifs en berline. Van Mercedes Classe V (7 passagers) disponible avec
              léger supplément. Tarifs nuit (19h–7h) et dimanche/férié majorés, inclus dans le
              tarif fixe annoncé à la réservation.
            </p>
          </div>
        </section>

        {/* Terminaux */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 text-center">
              Les 4 terminaux de l&apos;aéroport d&apos;Orly
            </h2>
            <p className="text-gray-600 text-center mb-10 max-w-2xl mx-auto">
              Précisez votre terminal à la réservation ou indiquez simplement votre numéro de vol,
              nous identifions automatiquement le terminal correspondant.
            </p>

            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {terminaux.map((t) => (
                <div
                  key={t.nom}
                  className="bg-gray-50 rounded-xl p-6 border border-gray-200 hover:border-yellow-400 transition-colors"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-yellow-400 rounded-lg flex items-center justify-center">
                      <Plane className="w-5 h-5 text-black" />
                    </div>
                    <h3 className="font-bold text-gray-900 text-lg">{t.nom}</h3>
                  </div>
                  <p className="text-sm font-medium text-gray-700 mb-1">{t.usage}</p>
                  <p className="text-sm text-gray-600 mb-2">
                    <span className="font-medium">Zone de dépose :</span> {t.zone}
                  </p>
                  <p className="text-xs text-gray-500">{t.compagnies}</p>
                </div>
              ))}
            </div>

            <div className="mt-10 max-w-3xl mx-auto bg-yellow-50 border border-yellow-200 rounded-xl p-6">
              <div className="flex items-start gap-3">
                <Info className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                <p className="text-gray-700 text-sm">
                  <strong>Retour depuis Orly :</strong> pour les arrivées, votre chauffeur attend en
                  sortie de la zone Arrivées du terminal indiqué, tapis bagages passés. 15 minutes
                  d&apos;attente offertes après l&apos;heure réelle d&apos;atterrissage. Pancarte à
                  votre nom sur demande.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Suivi de vol */}
        <section className="py-12 md:py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">
                Arrivée à Orly : suivi de vol et prise en charge
              </h2>

              <div className="prose prose-lg text-gray-600 max-w-none">
                <p>
                  Pour vos <strong>arrivées à l&apos;aéroport d&apos;Orly</strong>, notre système se
                  connecte aux données officielles de l&apos;aéroport dès la communication de votre
                  numéro de vol. Si votre avion atterrit avec 40 minutes d&apos;avance ou 2 heures de
                  retard, le chauffeur en est notifié en temps réel et adapte son heure d&apos;arrivée.
                </p>
                <p>
                  Comptez entre <strong>20 et 40 minutes</strong> entre l&apos;atterrissage et la sortie
                  bagages à Orly, selon le terminal et la densité du vol. Cette marge est
                  automatiquement intégrée dans le calcul de l&apos;heure de prise en charge. Aucun frais
                  d&apos;attente supplémentaire n&apos;est facturé pour les retards imputables à la
                  compagnie aérienne.
                </p>
              </div>

              <div className="grid sm:grid-cols-3 gap-4 mt-8">
                <div className="bg-white rounded-xl p-5 border border-gray-200 text-center">
                  <div className="text-2xl font-bold text-yellow-600 mb-1">0€</div>
                  <p className="text-gray-600 text-sm">de frais en cas de retard avion</p>
                </div>
                <div className="bg-white rounded-xl p-5 border border-gray-200 text-center">
                  <div className="text-2xl font-bold text-yellow-600 mb-1">15 min</div>
                  <p className="text-gray-600 text-sm">d&apos;attente offertes après atterrissage</p>
                </div>
                <div className="bg-white rounded-xl p-5 border border-gray-200 text-center">
                  <div className="text-2xl font-bold text-yellow-600 mb-1">24/7</div>
                  <p className="text-gray-600 text-sm">surveillance des vols en temps réel</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Lien vers page taxi-orly */}
        <section className="py-10 bg-white">
          <div className="container mx-auto px-4 text-center">
            <p className="text-gray-600 mb-4">
              Vous cherchez des informations spécifiques sur nos trajets Essonne → Orly ?
            </p>
            <Link
              href="/taxi-orly"
              className="inline-flex items-center gap-3 bg-yellow-400 text-black font-bold text-lg py-3 px-6 rounded-lg hover:bg-yellow-500 transition-colors"
            >
              Voir la page Taxi Orly depuis l&apos;Essonne
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-12 md:py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 text-center">
              Questions fréquentes : Taxi aéroport Orly
            </h2>
            <p className="text-gray-600 text-center mb-10 max-w-2xl mx-auto">
              Réservation, zones de dépose, tarifs nuit, suivi de vol : les réponses aux questions
              les plus posées.
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
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
          </div>
        </section>

        {/* Villes de départ */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 text-center">
              Votre taxi aéroport Orly depuis votre commune
            </h2>
            <p className="text-gray-600 text-center mb-10 max-w-2xl mx-auto">
              Consultez la page dédiée à votre ville pour retrouver les tarifs exacts et les
              itinéraires habituellement empruntés.
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

            <div className="mt-12 max-w-3xl mx-auto p-6 bg-yellow-50 rounded-xl border border-yellow-200 text-center">
              <p className="text-gray-900 font-medium mb-4 text-lg">
                Prêt à réserver votre taxi pour l&apos;aéroport d&apos;Orly ?
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

        <RelatedCities currentSlug="taxi-aeroport-orly" />
      </main>
      <Footer />
    </>
  )
}
