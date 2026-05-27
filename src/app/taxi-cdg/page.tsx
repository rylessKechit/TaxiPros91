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
  title: 'Taxi Aéroport CDG Roissy depuis l\'Essonne | Réservation 24h/24',
  description: `Taxi pour l'aéroport Roissy CDG depuis Massy, Palaiseau, Antony, Les Ulis, Saclay. Tarifs fixes, suivi de vol, 24h/24. Réservez au ${SITE.phone.display}.`,
  openGraph: {
    title: 'Taxi Aéroport CDG depuis l\'Essonne | TAXI Pro 91',
    description: 'Transfert taxi vers les terminaux T1, T2 et T3 de Roissy CDG depuis toute l\'Essonne. Tarifs fixes, suivi de vol, 24h/24.',
    url: `${SITE.url}/taxi-cdg`,
  },
  alternates: {
    canonical: `${SITE.url}/taxi-cdg`,
  },
}

const tarifs = [
  { ville: 'Massy', distance: '50 km', duree: '50 min', prix: '80-100€' },
  { ville: 'Palaiseau', distance: '52 km', duree: '55 min', prix: '85-105€' },
  { ville: 'Antony', distance: '45 km', duree: '45 min', prix: '75-95€' },
  { ville: 'Longjumeau', distance: '53 km', duree: '55 min', prix: '85-105€' },
  { ville: 'Les Ulis', distance: '58 km', duree: '60 min', prix: '95-115€' },
  { ville: 'Saclay', distance: '57 km', duree: '60 min', prix: '95-115€' },
  { ville: 'Ballainvilliers', distance: '52 km', duree: '55 min', prix: '85-105€' },
  { ville: 'Verrières-le-Buisson', distance: '48 km', duree: '50 min', prix: '80-100€' },
]

const terminaux = [
  {
    nom: 'Terminal 1 (T1)',
    description: 'Terminal historique en forme de couronne, accueille principalement les compagnies Star Alliance et certaines low-cost long-courrier. Dépose-minute au niveau Départs.',
  },
  {
    nom: 'Terminal 2 (T2A-T2G)',
    description: 'Le plus grand ensemble, composé de 7 sous-terminaux (T2A, T2B, T2C, T2D, T2E, T2F, T2G). Hub Air France et SkyTeam. Précisez la lettre du sous-terminal.',
  },
  {
    nom: 'Terminal 3 (T3)',
    description: 'Terminal compact dédié aux vols charters et compagnies low-cost (notamment easyJet). Accès rapide et formalités simplifiées.',
  },
  {
    nom: 'Gare TGV CDG (T2)',
    description: 'Gare ferroviaire intégrée au Terminal 2. Idéale pour les correspondances train + avion. Dépose directe possible côté Roissypole.',
  },
]

const avantages = [
  {
    icon: Clock,
    title: 'Service 24h/24',
    description: 'Vols intercontinentaux tôt le matin ou tard le soir, nous assurons toutes vos prises en charge, 7j/7.',
  },
  {
    icon: Shield,
    title: 'Chauffeurs expérimentés',
    description: 'Connaissance fine des axes A6, A86, A1, A3 et A104. Anticipation des points de congestion habituels.',
  },
  {
    icon: Star,
    title: 'Note 4.9/5',
    description: `Plus de ${SITE.rating.count} avis clients positifs. Ponctualité, confort du véhicule et professionnalisme reconnus.`,
  },
  {
    icon: CreditCard,
    title: 'Paiement flexible',
    description: 'CB, espèces, facture entreprise. Tarif fixe annoncé à la réservation, péages inclus.',
  },
]

const faqItems = [
  {
    q: 'Combien coûte un taxi pour Roissy CDG depuis l\'Essonne ?',
    a: 'Le prix d\'un taxi vers l\'aéroport Roissy CDG depuis l\'Essonne varie entre 75€ et 115€ selon votre commune de départ. Comptez environ 80-100€ depuis Massy, 75-95€ depuis Antony, et 95-115€ depuis Les Ulis ou Saclay. Le tarif fixe est annoncé et confirmé à la réservation, péages inclus.',
  },
  {
    q: 'Combien de temps de trajet vers CDG depuis l\'Essonne ?',
    a: 'Le trajet dure entre 45 et 60 minutes en conditions normales depuis l\'Essonne. Comptez 45 min depuis Antony, 50 min depuis Massy, 55-60 min depuis Les Ulis ou Saclay. Aux heures de pointe (notamment sur l\'A86 ou l\'A104), prévoir 20 à 40 minutes supplémentaires. Nous recommandons un départ anticipé pour les vols matinaux.',
  },
  {
    q: 'Quels moyens de paiement acceptez-vous ?',
    a: 'Tous nos véhicules sont équipés d\'un terminal CB. Nous acceptons les cartes bancaires (Visa, Mastercard, American Express), les espèces, et la facturation entreprise sur demande. Le paiement s\'effectue à la fin de la course.',
  },
  {
    q: 'Proposez-vous des forfaits aller-retour pour CDG ?',
    a: 'Oui, nous proposons des forfaits aller-retour avantageux particulièrement adaptés aux voyages d\'affaires courts. Le chauffeur peut vous récupérer à votre retour avec suivi du vol intégré. Communiquez vos dates et numéros de vol à la réservation.',
  },
  {
    q: 'Que se passe-t-il si mon vol est retardé à CDG ?',
    a: 'Nous suivons en temps réel votre vol grâce aux données aéroportuaires. En cas de retard, l\'heure de prise en charge est automatiquement ajustée sans frais supplémentaires. Le chauffeur sera présent à l\'heure réelle d\'arrivée, vous n\'avez rien à faire de votre côté.',
  },
  {
    q: 'Pouvez-vous transporter des bagages volumineux ?',
    a: 'Oui, les bagages standards sont inclus sans supplément. Pour un voyage long-courrier en famille ou en groupe avec plusieurs grosses valises, nous recommandons notre service Van Mercedes Classe V (jusqu\'à 7 passagers) qui dispose d\'un coffre dimensionné pour les voyages internationaux.',
  },
  {
    q: 'Avez-vous des sièges auto pour enfants ?',
    a: 'Oui, nous fournissons sur demande des sièges auto adaptés (siège bébé, siège enfant, rehausseur). Merci de préciser l\'âge et le poids de chaque enfant à la réservation afin que le chauffeur prépare l\'équipement avant la prise en charge.',
  },
  {
    q: 'Comment annuler ou modifier ma réservation CDG ?',
    a: `Vous pouvez annuler ou modifier votre réservation gratuitement jusqu'à 2 heures avant l'heure prévue, en appelant le ${SITE.phone.display}. Pour les trajets longue distance comme CDG, nous demandons un délai raisonnable. En cas d'annulation tardive, des frais peuvent s'appliquer.`,
  },
  {
    q: 'À quel terminal me déposerez-vous ?',
    a: 'Précisez le terminal (T1, T2A à T2G, T3) ou simplement votre numéro de vol à la réservation. Nous identifions automatiquement le bon terminal via les données de la compagnie. Le chauffeur vous dépose au plus près du comptoir d\'enregistrement.',
  },
  {
    q: 'Récupérez-vous les passagers en zone Arrivées CDG ?',
    a: 'Oui, le chauffeur vous attend en sortie de douane / tapis bagages du terminal indiqué, avec une pancarte à votre nom sur demande. Pour les vols internationaux longs avec contrôles passeports, nous prévoyons une marge d\'attente sans surcoût.',
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

export default function TaxiCDG() {
  return (
    <>
      <Header />
      <Breadcrumb items={[{ name: 'Taxi aéroport CDG' }]} />

      <ServiceSchema
        name="Taxi aéroport Roissy CDG depuis l'Essonne"
        description="Service de taxi 24h/24 vers tous les terminaux de l'aéroport Paris-Charles de Gaulle (T1, T2A-G, T3) au départ des communes de l'Essonne et du sud des Hauts-de-Seine. Suivi de vol, tarifs fixes péages inclus."
        url={`${SITE.url}/taxi-cdg`}
        areaServed={['Massy', 'Palaiseau', 'Antony', 'Longjumeau', 'Les Ulis', 'Saclay', 'Ballainvilliers', 'Verrières-le-Buisson']}
      />
      <FAQSchema faqs={faqItems} />

      <main>
        {/* Hero Banner */}
        <section className="bg-yellow-400 py-4">
          <div className="container mx-auto px-4 text-center">
            <p className="text-black font-medium">
              Besoin d&apos;un taxi pour Roissy CDG ? Appelez le{' '}
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
                  <span className="font-medium">Aéroport Paris-Charles de Gaulle</span>
                </div>

                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                  Taxi aéroport CDG Roissy depuis l&apos;Essonne
                </h1>

                <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                  Votre <strong>taxi pour l&apos;aéroport Roissy Charles de Gaulle</strong> au
                  départ de Massy, Palaiseau, Antony, Les Ulis, Saclay et toute l&apos;Essonne.
                  Service <strong>24h/24</strong>, suivi de vol en temps réel, tarif fixe péages
                  inclus.
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
                    <span className="text-gray-700">Péages inclus</span>
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
              Pourquoi choisir TAXI Pro 91 pour aller à CDG
            </h2>
            <p className="text-gray-600 text-center mb-10 max-w-2xl mx-auto">
              Le transfert vers Roissy CDG demande une expertise du trafic francilien. Nos
              chauffeurs assurent quotidiennement la liaison Essonne-CDG avec ponctualité et
              fiabilité.
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
              Tarifs depuis l&apos;Essonne vers CDG
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
              * Tarifs indicatifs pouvant varier selon l&apos;heure, les conditions de circulation,
              le type de véhicule et le nombre de passagers.
            </p>
          </div>
        </section>

        {/* Terminaux */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 text-center">
              Tous les terminaux CDG desservis
            </h2>
            <p className="text-gray-600 text-center mb-10 max-w-2xl mx-auto">
              L&apos;aéroport Paris-Charles de Gaulle est l&apos;un des plus grands hubs européens
              avec 3 terminaux principaux. Nos chauffeurs connaissent la configuration interne et
              vous déposent au plus près de votre compagnie.
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
                  <strong>Important :</strong> le Terminal 2 de CDG est divisé en 7 sous-terminaux
                  (2A, 2B, 2C, 2D, 2E, 2F, 2G) parfois distants de plusieurs centaines de mètres.
                  Vérifiez la lettre exacte sur votre billet ou communiquez votre numéro de vol
                  pour une dépose au plus juste.
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
                  Pour vos <strong>arrivées à Roissy CDG</strong>, particulièrement pour les{' '}
                  <strong>vols long-courriers</strong> souvent soumis à des aléas, le suivi de vol
                  est essentiel. Dès la communication de votre numéro de vol et date, notre système
                  se connecte aux données aéroportuaires officielles.
                </p>
                <p>
                  Si votre vol arrive avec une heure d&apos;avance ou trois heures de retard, le
                  chauffeur en est notifié et adapte automatiquement sa présence. Vous ne payez{' '}
                  <strong>aucun frais d&apos;attente lié à un retard avion</strong>.
                </p>
                <p>
                  Compte tenu de la taille de CDG, nous prévoyons systématiquement une{' '}
                  <strong>marge d&apos;attente</strong> pour les formalités de douane et de
                  récupération des bagages, qui peuvent prendre 30 à 60 minutes selon le terminal
                  et l&apos;heure d&apos;arrivée. Sur demande, le chauffeur vous attend avec une
                  pancarte à votre nom à la sortie de la zone bagages.
                </p>
              </div>

              <div className="grid sm:grid-cols-3 gap-4 mt-8">
                <div className="bg-white rounded-xl p-5 border border-gray-200 text-center">
                  <div className="text-2xl font-bold text-yellow-600 mb-1">0€</div>
                  <p className="text-gray-600 text-sm">de frais en cas de retard avion</p>
                </div>
                <div className="bg-white rounded-xl p-5 border border-gray-200 text-center">
                  <div className="text-2xl font-bold text-yellow-600 mb-1">45 min</div>
                  <p className="text-gray-600 text-sm">de marge incluse pour les douanes</p>
                </div>
                <div className="bg-white rounded-xl p-5 border border-gray-200 text-center">
                  <div className="text-2xl font-bold text-yellow-600 mb-1">24/7</div>
                  <p className="text-gray-600 text-sm">surveillance des vols internationaux</p>
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
                  <strong>forfaits taxi Paris-CDG à 56€ et 65€</strong>. Précisons :
                  ces forfaits réglementés s&apos;appliquent <strong>uniquement</strong> aux taxis
                  parisiens (carte professionnelle délivrée par la préfecture de police de Paris)
                  effectuant un trajet entre <strong>Paris intra-muros</strong> et l&apos;aéroport
                  Roissy CDG.
                </p>
                <p>
                  Les taxis de l&apos;Essonne (carte professionnelle préfecture 91) ne sont pas
                  autorisés à appliquer ce forfait. La réglementation impose en principe une{' '}
                  <strong>tarification au compteur</strong> pour les courses au départ ou à
                  destination du département 91, avec péages en supplément.
                </p>
                <p>
                  <strong>Notre engagement chez TAXI Pro 91 :</strong> plutôt que de laisser
                  tourner le compteur sur 50 km, nous proposons nos propres{' '}
                  <strong>tarifs fixes négociés péages inclus</strong>, annoncés et confirmés à la
                  réservation. Vous savez exactement combien vous allez payer avant le départ. Sur
                  un trajet long comme Essonne-CDG, cette transparence représente une vraie
                  sécurité budgétaire.
                </p>
              </div>

              <div className="mt-8 grid md:grid-cols-2 gap-4">
                <div className="bg-gray-50 border border-gray-200 rounded-xl p-5">
                  <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <Info className="w-5 h-5 text-yellow-600" />
                    Forfait taxi parisien
                  </h3>
                  <p className="text-gray-600 text-sm">
                    56€ Paris-CDG rive droite, 65€ Paris-CDG rive gauche. Réservé aux taxis
                    parisiens, trajet limité à Paris intra-muros. Non applicable depuis
                    l&apos;Essonne.
                  </p>
                </div>
                <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-5">
                  <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                    Tarif fixe TAXI Pro 91
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Prix annoncé et garanti à la réservation, péages inclus. Tout départ depuis
                    l&apos;Essonne ou Antony. Aucune surprise à l&apos;arrivée.
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
                Itinéraires et axes utilisés vers CDG
              </h2>

              <div className="prose prose-lg text-gray-600 max-w-none">
                <p>
                  L&apos;aéroport Paris-Charles de Gaulle est situé à environ 25 km au nord-est de
                  Paris, dans le Val-d&apos;Oise et la Seine-et-Marne. Depuis l&apos;Essonne, le
                  trajet traverse une grande partie de l&apos;Île-de-France et demande une
                  anticipation du trafic.
                </p>
                <p>
                  Depuis <strong>Massy, Palaiseau, Antony, Verrières-le-Buisson</strong>, nos
                  chauffeurs empruntent généralement l&apos;<strong>A86</strong> puis l&apos;
                  <strong>A1</strong> via le contournement nord de Paris. Itinéraire alternatif par
                  l&apos;<strong>A6 + A86 + A3 + A104</strong> selon la circulation en temps réel.
                </p>
                <p>
                  Depuis <strong>Les Ulis, Saclay et le plateau de Saclay</strong>, la{' '}
                  <strong>N118</strong> puis l&apos;<strong>A86</strong> jusqu&apos;à la{' '}
                  <strong>A1</strong> constituent l&apos;itinéraire le plus rapide hors heures de
                  pointe. L&apos;<strong>A104 (Francilienne)</strong> permet de contourner par
                  l&apos;est en cas de congestion sur l&apos;A86.
                </p>
                <p>
                  Les points sensibles à anticiper : <strong>A86 secteur Vélizy / Versailles</strong>{' '}
                  le matin, <strong>A1 zone Pleyel</strong> en fin d&apos;après-midi, et{' '}
                  <strong>jonction A1 / A104</strong>. Pour les vols matinaux (avant 9h), nos
                  chauffeurs prévoient un départ anticipé. Pour les vols tardifs (après 18h), nous
                  recommandons de partir 3 heures avant l&apos;enregistrement.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Comment réserver */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 text-center">
              Comment réserver votre taxi pour CDG
            </h2>
            <p className="text-gray-600 text-center mb-10 max-w-2xl mx-auto">
              Trois moyens simples pour réserver votre transfert vers Roissy Charles de Gaulle.
            </p>

            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8 text-black" />
                </div>
                <h3 className="font-bold text-gray-900 text-lg mb-2">Par téléphone</h3>
                <p className="text-gray-600 mb-4">
                  Réservation immédiate ou planifiée, 24h/24 et 7j/7.
                </p>
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
                  Formulaire de réservation rapide avec estimation tarifaire et confirmation email.
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
                  Réservez jusqu&apos;à 30 jours à l&apos;avance. Recommandé pour les vols
                  long-courriers et les départs en soirée.
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
              Questions fréquentes : Taxi CDG depuis l&apos;Essonne
            </h2>
            <p className="text-gray-600 text-center mb-10 max-w-2xl mx-auto">
              Les réponses aux questions les plus posées par nos clients pour leurs transferts vers
              Roissy CDG.
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
              Consultez les pages dédiées de votre commune pour tous nos services et tarifs locaux.
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
                Prêt à réserver votre taxi pour CDG ?
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

        <RelatedCities currentSlug="taxi-cdg" />
      </main>
      <Footer />
    </>
  )
}
