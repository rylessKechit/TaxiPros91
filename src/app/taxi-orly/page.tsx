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
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Taxi Aéroport Orly depuis l\'Essonne | Réservation 24h/24',
  description: `Taxi pour l'aéroport d'Orly depuis Massy, Palaiseau, Antony, Les Ulis, Saclay. Tarifs fixes, suivi de vol, 24h/24. Réservez au ${SITE.phone.display}.`,
  openGraph: {
    title: 'Taxi Aéroport Orly depuis l\'Essonne | TAXI Pro 91',
    description: 'Transfert taxi vers Orly 1, 2, 3, 4 depuis toute l\'Essonne. Tarifs fixes, suivi de vol en temps réel, service 24h/24.',
    url: `${SITE.url}/taxi-orly`,
  },
  alternates: {
    canonical: `${SITE.url}/taxi-orly`,
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
    description: 'Anciennement Orly Sud. Accueille principalement les vols low-cost et certaines compagnies internationales. Dépose-minute au niveau 0.',
  },
  {
    nom: 'Orly 2',
    description: 'Connecté à Orly 1 par la jonction centrale. Compagnies européennes et régulières. Accès direct aux comptoirs d\'enregistrement.',
  },
  {
    nom: 'Orly 3',
    description: 'Terminal dédié principalement aux vols intérieurs et compagnies low-cost. Accès rapide depuis l\'A106.',
  },
  {
    nom: 'Orly 4',
    description: 'Anciennement Orly Ouest. Accueille les vols Air France domestiques et certaines liaisons internationales. Dépose au niveau Départs.',
  },
]

const avantages = [
  {
    icon: Clock,
    title: 'Service 24h/24',
    description: 'Vols tôt le matin ou tard le soir, nous sommes disponibles toute l\'année, week-ends et jours fériés inclus.',
  },
  {
    icon: Shield,
    title: 'Chauffeurs professionnels',
    description: 'Conducteurs titulaires de la carte professionnelle, expérimentés sur les axes A10, A6, A86 et RN20.',
  },
  {
    icon: Star,
    title: 'Note 4.9/5',
    description: `Plus de ${SITE.rating.count} avis clients. Ponctualité, propreté du véhicule et amabilité du chauffeur reconnues.`,
  },
  {
    icon: CreditCard,
    title: 'Paiement flexible',
    description: 'CB, espèces, facture entreprise. Tarif annoncé à la réservation, pas de surprise à l\'arrivée.',
  },
]

const faqItems = [
  {
    q: 'Combien coûte un taxi pour Orly depuis l\'Essonne ?',
    a: 'Le prix d\'un taxi vers l\'aéroport d\'Orly depuis l\'Essonne varie entre 25€ et 50€ selon votre commune de départ. Comptez environ 30-40€ depuis Massy ou Palaiseau, 25-35€ depuis Antony, et 40-50€ depuis Les Ulis ou Saclay. Le tarif définitif est communiqué et fixé lors de la réservation, hors péages éventuels.',
  },
  {
    q: 'Combien de temps de trajet vers Orly depuis l\'Essonne ?',
    a: 'Le temps de trajet varie entre 15 et 30 minutes en conditions normales selon votre commune. Comptez 15 min depuis Antony, 20 min depuis Massy ou Palaiseau, 25-27 min depuis Les Ulis ou Saclay. Aux heures de pointe (7h-9h, 17h-19h), prévoyez 10 à 20 minutes supplémentaires sur l\'A10 ou l\'A86.',
  },
  {
    q: 'Quels moyens de paiement acceptez-vous ?',
    a: 'Tous nos véhicules sont équipés d\'un terminal de paiement. Nous acceptons les cartes bancaires (Visa, Mastercard, American Express), les espèces, et la facturation entreprise sur demande. Le paiement s\'effectue à la fin de la course après confirmation du tarif.',
  },
  {
    q: 'Proposez-vous des forfaits aller-retour pour Orly ?',
    a: 'Oui, nous proposons des forfaits aller-retour avantageux pour les voyageurs réguliers ou les courts séjours. Le chauffeur peut vous récupérer à votre retour avec suivi du vol intégré. Indiquez vos dates lors de la réservation pour obtenir le meilleur tarif combiné.',
  },
  {
    q: 'Que se passe-t-il si mon vol est retardé ?',
    a: 'Nous suivons en temps réel le statut de votre vol grâce aux données aéroportuaires. En cas de retard, l\'heure de prise en charge est automatiquement ajustée sans frais supplémentaires. Vous n\'avez rien à faire, le chauffeur sera présent à l\'heure réelle d\'arrivée.',
  },
  {
    q: 'Pouvez-vous transporter des bagages volumineux ?',
    a: 'Oui, les bagages standards (valises et sacs cabine) sont inclus sans supplément dans tous nos véhicules. Pour les bagages volumineux, encombrants, ou pour un groupe de 5 à 7 passagers, nous recommandons notre service Van Mercedes Classe V qui offre un grand coffre.',
  },
  {
    q: 'Avez-vous des sièges auto pour enfants ?',
    a: 'Oui, nous fournissons sur demande des sièges auto adaptés (rehausseur, siège bébé, siège enfant). Merci de préciser l\'âge et le poids de l\'enfant lors de la réservation afin que le chauffeur prépare l\'équipement approprié avant votre prise en charge.',
  },
  {
    q: 'Comment annuler ou modifier ma réservation ?',
    a: `Vous pouvez annuler ou modifier votre réservation gratuitement jusqu'à 2 heures avant l'heure prévue, en appelant le ${SITE.phone.display}. Pour une annulation tardive ou un no-show, des frais de course minimum peuvent s'appliquer. Nous restons flexibles pour les imprévus aéroportuaires.`,
  },
  {
    q: 'Récupérez-vous les passagers en zone Arrivées ?',
    a: 'Oui, le chauffeur vous attend à la sortie des Arrivées du terminal indiqué (Orly 1, 2, 3 ou 4), avec une pancarte à votre nom si vous le souhaitez. La prise en charge dans les zones officielles évite tout supplément parking et garantit un départ rapide.',
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

export default function TaxiOrly() {
  return (
    <>
      <Header />
      <Breadcrumb items={[{ name: 'Taxi aéroport Orly' }]} />

      <ServiceSchema
        name="Taxi aéroport Orly depuis l'Essonne"
        description="Service de taxi 24h/24 vers tous les terminaux de l'aéroport Paris-Orly (Orly 1, 2, 3, 4) au départ des communes de l'Essonne et du sud des Hauts-de-Seine. Suivi de vol en temps réel, tarifs fixes annoncés à la réservation."
        url={`${SITE.url}/taxi-orly`}
        areaServed={['Massy', 'Palaiseau', 'Antony', 'Longjumeau', 'Les Ulis', 'Saclay', 'Ballainvilliers', 'Verrières-le-Buisson']}
      />
      <FAQSchema faqs={faqItems} />

      <main>
        {/* Hero Banner */}
        <section className="bg-yellow-400 py-4">
          <div className="container mx-auto px-4 text-center">
            <p className="text-black font-medium">
              Besoin d&apos;un taxi pour Orly ? Appelez le{' '}
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
                  <span className="font-medium">Aéroport Paris-Orly - Tous terminaux</span>
                </div>

                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                  Taxi aéroport Orly depuis l&apos;Essonne
                </h1>

                <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                  Votre <strong>taxi pour l&apos;aéroport d&apos;Orly</strong> au départ de Massy,
                  Palaiseau, Antony, Les Ulis, Saclay et toute l&apos;Essonne. Service{' '}
                  <strong>24h/24</strong>, suivi de vol en temps réel et tarifs annoncés à la réservation.
                </p>

                {/* Bandeau confiance */}
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
                    <CreditCard className="w-4 h-4 text-yellow-500" />
                    CB acceptée
                  </div>
                  <div className="flex items-center gap-2 bg-white px-3 py-2 rounded-lg border border-gray-200 text-sm text-gray-700">
                    <Shield className="w-4 h-4 text-yellow-500" />
                    Conventionné CPAM
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
                    <span className="text-gray-700">Tous terminaux</span>
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

        {/* Avantages */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 text-center">
              Pourquoi choisir TAXI Pro 91 pour aller à Orly
            </h2>
            <p className="text-gray-600 text-center mb-10 max-w-2xl mx-auto">
              Spécialiste des transferts aéroport depuis l&apos;Essonne, nous combinons ponctualité,
              transparence tarifaire et connaissance fine des axes routiers du sud de l&apos;Île-de-France.
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
              Tarifs depuis l&apos;Essonne vers Orly
            </h2>
            <p className="text-gray-400 text-center mb-8 max-w-2xl mx-auto">
              Tarifs indicatifs au départ des principales communes de l&apos;Essonne. Prix définitif
              communiqué à la réservation, sans surprise à l&apos;arrivée.
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
              * Tarifs indicatifs pouvant varier selon l&apos;heure (jour/nuit), les conditions de
              circulation, le type de véhicule et le nombre de passagers.
            </p>
          </div>
        </section>

        {/* Terminaux */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 text-center">
              Tous les terminaux d&apos;Orly desservis
            </h2>
            <p className="text-gray-600 text-center mb-10 max-w-2xl mx-auto">
              Depuis sa modernisation, l&apos;aéroport Paris-Orly est organisé autour de 4 terminaux
              reliés entre eux. Nos chauffeurs vous déposent au plus près des comptoirs d&apos;enregistrement
              de votre compagnie.
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
                  <p className="text-gray-600 text-sm">{t.description}</p>
                </div>
              ))}
            </div>

            <div className="mt-10 max-w-3xl mx-auto bg-yellow-50 border border-yellow-200 rounded-xl p-6">
              <div className="flex items-start gap-3">
                <Info className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                <p className="text-gray-700 text-sm">
                  <strong>Bon à savoir :</strong> précisez le terminal de votre vol à la réservation
                  ou indiquez simplement votre numéro de vol nous identifions automatiquement le
                  terminal correspondant grâce aux données de la compagnie.
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
                Suivi de vol en temps réel
              </h2>

              <div className="prose prose-lg text-gray-600 max-w-none">
                <p>
                  Pour vos <strong>arrivées à Orly</strong>, nous activons un suivi en temps réel de
                  votre vol dès la réservation. Lorsque vous nous communiquez le numéro de vol et la
                  date, notre système se connecte aux données aéroportuaires pour ajuster
                  automatiquement l&apos;heure de prise en charge.
                </p>
                <p>
                  Concrètement, si votre vol arrive avec 45 minutes d&apos;avance ou 1h30 de retard,
                  le chauffeur en est notifié et adapte son arrivée. Vous ne payez{' '}
                  <strong>aucun frais d&apos;attente supplémentaire</strong> pour les retards liés à
                  la compagnie aérienne.
                </p>
                <p>
                  À votre descente d&apos;avion, votre chauffeur vous attend dans la zone Arrivées du
                  terminal, en sortie de tapis bagages. Sur demande, il peut tenir une pancarte à
                  votre nom pour une identification rapide, particulièrement appréciée par les
                  voyageurs internationaux.
                </p>
              </div>

              <div className="grid sm:grid-cols-3 gap-4 mt-8">
                <div className="bg-white rounded-xl p-5 border border-gray-200 text-center">
                  <div className="text-2xl font-bold text-yellow-600 mb-1">0€</div>
                  <p className="text-gray-600 text-sm">de frais en cas de retard avion</p>
                </div>
                <div className="bg-white rounded-xl p-5 border border-gray-200 text-center">
                  <div className="text-2xl font-bold text-yellow-600 mb-1">15 min</div>
                  <p className="text-gray-600 text-sm">d&apos;attente offertes incluses</p>
                </div>
                <div className="bg-white rounded-xl p-5 border border-gray-200 text-center">
                  <div className="text-2xl font-bold text-yellow-600 mb-1">24/7</div>
                  <p className="text-gray-600 text-sm">surveillance des vols</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Forfaits vs compteur */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">
                Forfaits vs compteur : ce qu&apos;il faut savoir
              </h2>

              <div className="prose prose-lg text-gray-600 max-w-none">
                <p>
                  Une question fréquente concerne les{' '}
                  <strong>forfaits taxi Paris-Orly à 36€ et 45€</strong>. Soyons clairs :
                  ces forfaits réglementés s&apos;appliquent <strong>uniquement</strong> aux taxis
                  parisiens (titulaires de la carte professionnelle délivrée par la préfecture de
                  police de Paris) effectuant un trajet entre <strong>Paris intra-muros</strong> et
                  l&apos;aéroport d&apos;Orly.
                </p>
                <p>
                  Les taxis de l&apos;Essonne (carte professionnelle préfecture 91) ne peuvent pas
                  appliquer ce forfait. La réglementation impose en principe une{' '}
                  <strong>tarification au compteur</strong> pour les courses au départ ou à
                  destination du département 91.
                </p>
                <p>
                  <strong>Notre engagement chez TAXI Pro 91 :</strong> plutôt que de vous laisser
                  dans l&apos;incertitude du compteur, nous proposons nos propres{' '}
                  <strong>tarifs fixes négociés</strong> annoncés et confirmés au moment de la
                  réservation. Vous connaissez le prix exact avant le départ, péages éventuels
                  inclus, sans variation à l&apos;arrivée sauf modification du trajet en cours de
                  route demandée par le client.
                </p>
              </div>

              <div className="mt-8 grid md:grid-cols-2 gap-4">
                <div className="bg-gray-50 border border-gray-200 rounded-xl p-5">
                  <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <Info className="w-5 h-5 text-yellow-600" />
                    Forfait taxi parisien
                  </h3>
                  <p className="text-gray-600 text-sm">
                    36€ Paris-Orly rive gauche, 45€ Paris-Orly rive droite. Réservé aux taxis G7,
                    Alpha et indépendants parisiens. Trajet limité à Paris intra-muros.
                  </p>
                </div>
                <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-5">
                  <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                    Tarif fixe TAXI Pro 91
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Prix annoncé et garanti à la réservation pour tout départ depuis l&apos;Essonne
                    ou Antony. Pas de compteur qui tourne, pas de mauvaise surprise.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Axes routiers */}
        <section className="py-12 md:py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">
                Itinéraires et axes utilisés vers Orly
              </h2>

              <div className="prose prose-lg text-gray-600 max-w-none">
                <p>
                  L&apos;aéroport Paris-Orly est situé à seulement 14 km au sud de Paris, dans le
                  Val-de-Marne. Sa proximité avec l&apos;Essonne en fait un atout majeur pour les
                  habitants du département. Nos chauffeurs empruntent quotidiennement les principaux
                  axes routiers de la région.
                </p>
                <p>
                  Depuis <strong>Massy, Palaiseau, Antony, Verrières-le-Buisson et Longjumeau</strong>,
                  l&apos;<strong>autoroute A10</strong> puis l&apos;<strong>A6</strong> et la
                  bretelle <strong>A106</strong> constituent l&apos;itinéraire le plus direct.
                  Compter 15 à 20 minutes hors heures de pointe.
                </p>
                <p>
                  Depuis <strong>Les Ulis et Saclay</strong>, nous privilégions souvent la{' '}
                  <strong>N118</strong> puis l&apos;<strong>A86</strong> ou la <strong>RN20</strong>{' '}
                  selon la circulation en temps réel. Nos chauffeurs utilisent les outils GPS
                  professionnels pour adapter l&apos;itinéraire et éviter les ralentissements.
                </p>
                <p>
                  En cas de fort trafic sur l&apos;A10 ou l&apos;A6 (notamment les vendredis soirs
                  et veilles de départs en vacances), des itinéraires alternatifs par la D920 ou la
                  D444 permettent de garantir votre arrivée à temps pour l&apos;enregistrement.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Comment réserver */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 text-center">
              Comment réserver votre taxi pour Orly
            </h2>
            <p className="text-gray-600 text-center mb-10 max-w-2xl mx-auto">
              Trois moyens simples pour réserver votre transfert vers l&apos;aéroport Paris-Orly.
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
                  Formulaire en quelques clics avec estimation tarifaire instantanée et
                  confirmation par email.
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
                  Réservez jusqu&apos;à 30 jours à l&apos;avance pour sécuriser votre vol matinal
                  ou tardif.
                </p>
                <span className="text-yellow-600 font-medium">SMS de rappel inclus</span>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-12 md:py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 text-center">
              Questions fréquentes Taxi Orly depuis l&apos;Essonne
            </h2>
            <p className="text-gray-600 text-center mb-10 max-w-2xl mx-auto">
              Les réponses aux questions les plus posées par nos clients pour leurs transferts vers
              Orly.
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
          </div>
        </section>

        {/* Villes de départ */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 text-center">
              Vos villes de départ desservies
            </h2>
            <p className="text-gray-600 text-center mb-10 max-w-2xl mx-auto">
              Consultez les pages dédiées de votre commune pour découvrir tous nos services locaux
              et les tarifs spécifiques.
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
                Prêt à réserver votre taxi pour Orly ?
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

        <RelatedCities currentSlug="taxi-orly" />
      </main>
      <Footer />
    </>
  )
}
