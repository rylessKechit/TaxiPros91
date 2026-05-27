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
  Train,
  Clock,
  CheckCircle,
  MapPin,
  Luggage,
  Moon,
  Sunrise,
  Repeat,
  HelpCircle,
  Info,
  Navigation,
} from 'lucide-react'

const PAGE_URL = `${SITE.url}/taxi-gare-massy-tgv`

export const metadata: Metadata = {
  title: 'Taxi gare Massy TGV : réservation 24h/24 & tarif fixe',
  description: `Taxi gare Massy TGV disponible 24h/24. Tarifs fixes depuis toute l'Essonne, prise en charge bagages, attente comprise en cas de retard. ${SITE.phone.display}.`,
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Taxi gare Massy TGV : réservation 24h/24 et tarif fixe',
    description:
      'Service de taxi pour la gare Massy TGV : tarifs fixes, suivi du TGV, départs matinaux et nuits assurés. Essonne et Hauts-de-Seine.',
    url: PAGE_URL,
  },
}

const tarifs = [
  { ville: 'Massy', duree: '5 min', prix: '10 à 15 €' },
  { ville: 'Palaiseau', duree: '10 min', prix: '15 à 22 €' },
  { ville: 'Antony', duree: '15 min', prix: '20 à 28 €' },
  { ville: 'Verrières-le-Buisson', duree: '12 min', prix: '18 à 25 €' },
  { ville: 'Longjumeau', duree: '15 min', prix: '22 à 30 €' },
  { ville: 'Les Ulis', duree: '15 min', prix: '22 à 30 €' },
  { ville: 'Saclay', duree: '15 min', prix: '22 à 30 €' },
  { ville: 'Ballainvilliers', duree: '15 min', prix: '22 à 32 €' },
]

const faqs = [
  {
    q: "Quel est le prix d'un taxi pour la gare Massy TGV ?",
    a: 'Depuis Massy : 10 à 15 €. Depuis Palaiseau : 15 à 22 €. Depuis Antony : 20 à 28 €. Depuis Longjumeau, Les Ulis ou Saclay : 22 à 30 €. Les tarifs sont fixes et annoncés avant la course. Un supplément de 5 € s\'applique en nuit ou dimanche, et de 10 € pour un véhicule Van.',
  },
  {
    q: "Combien de temps avant mon TGV dois-je prévoir d'arriver ?",
    a: "Nous recommandons d'arriver à la gare Massy TGV 30 à 45 minutes avant le départ de votre train : 30 minutes si vous voyagez léger et connaissez la gare, 45 minutes si vous avez des bagages, voyagez avec des enfants ou n'avez jamais pris le TGV ici. Aux heures de pointe et le vendredi soir, ajoutez 15 minutes de marge.",
  },
  {
    q: "Puis-je transporter beaucoup de bagages ?",
    a: "Oui. Nos berlines acceptent 2 à 3 grandes valises sans supplément. Pour les groupes, les valises volumineuses, les vélos ou les voyages en famille, nous mettons à disposition un véhicule de type Van pouvant accueillir jusqu'à 7 passagers et leurs bagages (supplément Van : 10 €).",
  },
  {
    q: "Combien de passagers peuvent monter dans un taxi pour la gare Massy TGV ?",
    a: "Une berline classique accueille 4 passagers maximum avec bagages standards. Pour 5 à 7 passagers, nous engageons un véhicule de type Van Mercedes Classe V. Précisez le nombre de passagers et de bagages lors de la réservation pour que nous envoyions le véhicule adapté.",
  },
  {
    q: "Quels moyens de paiement acceptez-vous ?",
    a: "Tous nos véhicules sont équipés d'un terminal de paiement. Nous acceptons les espèces, les cartes bancaires (Visa, Mastercard) et la facturation pour les comptes entreprise. Aucun frais supplémentaire en cas de paiement par CB.",
  },
  {
    q: "Le chauffeur m'attend-il à mon arrivée à la gare ?",
    a: "Oui. Pour les réservations à l'arrivée, le chauffeur vous attend à la sortie du quai avec une pancarte à votre nom (option « accueil quai ») ou sur le parvis devant la gare. Précisez votre numéro de TGV à la réservation : nous suivons l'arrivée en temps réel via le système SNCF.",
  },
  {
    q: "Que se passe-t-il si mon TGV est retardé ?",
    a: "Aucun souci. Nous suivons en temps réel l'horaire d'arrivée de votre TGV grâce au numéro de train fourni à la réservation. Le chauffeur ajuste automatiquement l'heure de prise en charge : vous n'avez rien à faire ni à nous prévenir. Aucun supplément n'est facturé pour ce temps d'attente.",
  },
  {
    q: "Pouvez-vous me déposer directement sur le parvis de la gare Massy TGV ?",
    a: "Oui, nous vous déposons sur la zone dépose-minute située devant le bâtiment voyageurs, au plus près de l'entrée principale et des escalators menant aux quais. En cas de forte affluence, nous pouvons utiliser l'accès secondaire ou le parvis Atlantis selon la fluidité du moment.",
  },
]

export default function TaxiGareMassyTGV() {
  return (
    <>
      <Header />
      <Breadcrumb items={[{ name: 'Taxi gare Massy TGV' }]} />

      <ServiceSchema
        name="Taxi gare Massy TGV"
        description="Service de taxi 24h/24 pour la gare Massy TGV. Tarifs fixes depuis toute l'Essonne, suivi du TGV en temps réel, attente en cas de retard incluse."
        url={PAGE_URL}
        areaServed={['Massy', 'Palaiseau', 'Antony', 'Longjumeau', 'Les Ulis', 'Saclay', 'Verrières-le-Buisson', 'Ballainvilliers']}
      />
      <FAQSchema faqs={faqs} />

      <main>
        {/* Bandeau */}
        <section className="bg-yellow-400 py-3">
          <div className="container mx-auto px-4 text-center">
            <p className="text-black font-medium text-sm md:text-base">
              <Train className="w-4 h-4 inline-block mr-1 -mt-0.5" />
              Tarif fixe pour la gare Massy TGV. Appelez le{' '}
              <a href={SITE.phone.tel} className="font-bold hover:underline">
                {SITE.phone.display}
              </a>
            </p>
          </div>
        </section>

        {/* Hero */}
        <section className="bg-gray-50 py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-10 items-start">
              <div>
                <div className="inline-flex items-center gap-2 bg-white border border-gray-200 text-yellow-700 px-3 py-1.5 rounded-full text-sm font-medium mb-4">
                  <Train className="w-4 h-4" />
                  Gare Massy TGV (91300)
                </div>

                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                  Taxi gare Massy TGV : réservation 24h/24 et tarif fixe
                </h1>

                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Service de <strong>taxi pour la gare Massy TGV</strong> disponible 24h/24, 7j/7.
                  <strong> Tarifs fixes</strong> depuis toutes les villes de l&apos;Essonne, prise en charge des bagages,
                  <strong> suivi temps réel du TGV</strong>&nbsp;: nous attendons même si votre train a du retard,
                  sans aucun supplément.
                </p>

                <div className="grid grid-cols-2 gap-3 mb-8">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm">Tarif fixe annoncé à l&apos;avance</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm">Suivi TGV temps réel</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm">Départs 5h-7h garantis</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm">Bagages inclus</span>
                  </div>
                </div>

                <a
                  href={SITE.phone.tel}
                  className="inline-flex items-center gap-3 bg-gray-900 text-white font-bold text-xl py-4 px-8 rounded-lg hover:bg-gray-800 transition-colors"
                >
                  <Phone className="w-6 h-6" />
                  {SITE.phone.display}
                </a>
              </div>

              <div>
                <BookingForm />
              </div>
            </div>
          </div>
        </section>

        {/* Pourquoi un taxi pour Massy TGV */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Pourquoi un taxi pour la gare Massy TGV&nbsp;?
              </h2>
              <div className="prose prose-lg text-gray-600 max-w-none space-y-4">
                <p>
                  La <strong>gare Massy TGV</strong> est l&apos;une des principales gares à grande vitesse d&apos;Île-de-France.
                  Elle permet de rejoindre directement la province <strong>sans passer par Paris</strong>&nbsp;:
                  Lyon (2h), Marseille (3h), Bordeaux (2h30), Nantes (2h20), Rennes (2h), Strasbourg, Lille, Toulouse
                  et de nombreuses autres destinations sont accessibles en TGV inOui, Ouigo ou TGV intersecteurs.
                </p>
                <p>
                  Cette particularité fait de Massy TGV une gare très prisée par les Franciliens du sud-ouest&nbsp;:
                  elle évite la traversée de Paris (qui peut coûter 1h en transports en commun) et permet des
                  <strong> départs matinaux dès 5h45</strong>. C&apos;est aussi une gare souvent utilisée en
                  <strong> retour tardif</strong>, avec des TGV arrivant après minuit, quand les RER ne circulent plus.
                </p>
                <p>
                  Dans tous ces cas, un <strong>taxi pour la gare Massy TGV</strong> est la solution la plus simple, la plus rapide
                  et souvent la plus économique&nbsp;:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong>Pas de problème de bagages</strong>&nbsp;: chargement direct, aide du chauffeur, pas d&apos;escaliers
                    ni de changements à gérer.
                  </li>
                  <li>
                    <strong>Pas de stress horaire</strong>&nbsp;: porte-à-porte, tarif fixe, suivi du TGV en cas de retard.
                  </li>
                  <li>
                    <strong>Plus économique à plusieurs</strong>&nbsp;: dès 2 passagers, le taxi devient compétitif face au
                    cumul des billets RER + Transilien + accès gare.
                  </li>
                  <li>
                    <strong>Solution unique aux heures creuses</strong>&nbsp;: avant 5h30 ou après 0h30, le RER et les bus
                    ne circulent plus.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Tarifs */}
        <section className="py-12 md:py-16 bg-gray-900 text-white">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center">
              Tarifs depuis les villes d&apos;Essonne vers la gare Massy TGV
            </h2>
            <p className="text-gray-400 text-center mb-8 max-w-2xl mx-auto">
              Tarifs indicatifs en jour ouvré. Supplément de 5 € en nuit ou dimanche, 10 € pour un véhicule Van.
            </p>

            <div className="overflow-x-auto">
              <table className="w-full max-w-3xl mx-auto">
                <thead>
                  <tr className="border-b border-gray-700">
                    <th className="text-left py-4 px-4 font-bold">Ville de départ</th>
                    <th className="text-center py-4 px-4 font-bold">Durée</th>
                    <th className="text-right py-4 px-4 font-bold">Prix estimé</th>
                  </tr>
                </thead>
                <tbody>
                  {tarifs.map((t, index) => (
                    <tr key={t.ville} className={index % 2 === 0 ? 'bg-gray-800/50' : ''}>
                      <td className="py-4 px-4 font-medium">{t.ville}</td>
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
              Tarif fixe communiqué avant la course. Voir{' '}
              <Link href="/tarifs" className="text-yellow-400 hover:underline">
                la grille complète sur la page tarifs
              </Link>
              .
            </p>
          </div>
        </section>

        {/* Accès et points de dépose */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <Navigation className="w-7 h-7 text-yellow-500" />
                Accès et points de dépose à la gare Massy TGV
              </h2>
              <div className="prose prose-lg text-gray-600 max-w-none space-y-4">
                <p>
                  La gare Massy TGV est située au croisement de la <strong>A10</strong>, de la <strong>N20</strong> et
                  de la <strong>RD188</strong>, avec un accès direct depuis l&apos;A10 et la Francilienne (N104).
                  Nos chauffeurs connaissent parfaitement les meilleurs itinéraires selon l&apos;horaire et le trafic.
                </p>
                <p>
                  Plusieurs points de dépose-reprise sont possibles&nbsp;:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong>Parvis principal (côté ville)</strong>&nbsp;: dépose-minute située devant l&apos;entrée du
                    bâtiment voyageurs, au plus près des escalators menant aux quais.
                  </li>
                  <li>
                    <strong>Parvis Atlantis (côté A10)</strong>&nbsp;: accès secondaire, souvent plus fluide aux heures
                    de pointe.
                  </li>
                  <li>
                    <strong>Parking minute couvert</strong>&nbsp;: utile en cas de pluie ou pour une prise en charge
                    confortable avec bagages volumineux.
                  </li>
                </ul>
                <p>
                  Précisez vos préférences au moment de la réservation&nbsp;: nous adaptons le point de dépose selon
                  l&apos;heure, le trafic et votre confort.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Différence Massy TGV / Massy-Palaiseau */}
        <section className="py-12 md:py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <Info className="w-7 h-7 text-yellow-500" />
                Différence entre Massy TGV et Massy-Palaiseau
              </h2>
              <div className="prose prose-lg text-gray-600 max-w-none space-y-4">
                <p>
                  Massy compte <strong>deux gares distinctes</strong>, situées à environ 500 mètres l&apos;une de l&apos;autre.
                  La confusion est très fréquente, voici comment ne pas se tromper&nbsp;:
                </p>
                <div className="grid md:grid-cols-2 gap-4 not-prose my-6">
                  <div className="bg-white border border-gray-200 rounded-xl p-5">
                    <h3 className="font-bold text-gray-900 text-lg mb-2 flex items-center gap-2">
                      <Train className="w-5 h-5 text-yellow-500" />
                      Gare Massy TGV
                    </h3>
                    <p className="text-sm text-gray-600 mb-2">
                      Gare grande vitesse uniquement. Dessert directement la province&nbsp;:
                      Lyon, Marseille, Bordeaux, Nantes, Rennes, Lille, Strasbourg, etc.
                    </p>
                    <p className="text-xs text-yellow-700 font-medium">
                      TGV inOui, Ouigo, TGV intersecteurs
                    </p>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-xl p-5">
                    <h3 className="font-bold text-gray-900 text-lg mb-2 flex items-center gap-2">
                      <Train className="w-5 h-5 text-yellow-500" />
                      Gare Massy-Palaiseau
                    </h3>
                    <p className="text-sm text-gray-600 mb-2">
                      Gare RER B (vers Paris, Roissy CDG) et RER C (vers Versailles, Paris).
                      Située à 500 m à pied de Massy TGV.
                    </p>
                    <p className="text-xs text-yellow-700 font-medium">RER B, RER C, Transilien</p>
                  </div>
                </div>
                <p>
                  Lors de votre réservation, <strong>précisez bien laquelle des deux gares</strong> vous souhaitez.
                  En cas de doute, nous demandons systématiquement votre <strong>numéro de TGV ou numéro de billet</strong>&nbsp;:
                  cela nous permet de confirmer la bonne gare et de suivre votre train en temps réel.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Anticipation */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <Clock className="w-7 h-7 text-yellow-500" />
                Quelle anticipation prévoir avant votre TGV
              </h2>
              <div className="prose prose-lg text-gray-600 max-w-none space-y-4">
                <p>
                  La SNCF recommande d&apos;arriver en gare au moins <strong>20 minutes avant le départ</strong> du TGV
                  pour avoir le temps de localiser le quai et de monter à bord. Côté taxi, nous conseillons une
                  marge supplémentaire selon votre situation&nbsp;:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong>30 minutes</strong> avant le départ si vous voyagez léger et connaissez bien la gare.
                  </li>
                  <li>
                    <strong>45 minutes</strong> si vous avez plusieurs bagages, voyagez avec enfants ou personnes âgées,
                    ou si vous n&apos;avez jamais pris le TGV à Massy.
                  </li>
                  <li>
                    <strong>+15 minutes supplémentaires</strong> le vendredi soir, le dimanche soir ou en période de
                    vacances scolaires, où la circulation autour de la gare peut être dense.
                  </li>
                </ul>
                <p>
                  À la réservation, nous calculons l&apos;heure de prise en charge en tenant compte de votre adresse de départ,
                  des conditions de trafic prévues et de la marge de sécurité avant votre TGV. Vous n&apos;avez rien à calculer&nbsp;:
                  nous vous indiquons l&apos;heure exacte à laquelle le chauffeur se présentera chez vous.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Nuit et départs matinaux */}
        <section className="py-12 md:py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <Sunrise className="w-10 h-10 text-yellow-500 mb-3" />
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Départs matinaux 5h à 7h</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Les premiers TGV au départ de Massy partent dès 5h45 (Lyon, Marseille, Bordeaux).
                    Avant 5h30, ni le RER ni les bus ne circulent. Notre service garantit votre
                    <strong> prise en charge à votre domicile</strong>, quelle que soit l&apos;heure du départ,
                    avec confirmation SMS la veille au soir.
                  </p>
                </div>
                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <Moon className="w-10 h-10 text-yellow-500 mb-3" />
                  <h3 className="text-xl font-bold text-gray-900 mb-3">TGV de nuit et retours tardifs</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Vous arrivez à Massy TGV après 0h30&nbsp;? Plus aucun RER ne circule.
                    Réservez votre taxi à l&apos;avance&nbsp;: nous serons présents à votre arrivée
                    quelle que soit l&apos;heure, <strong>même en cas de retard du train</strong>,
                    sans aucun supplément.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Aller-retour */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <Repeat className="w-7 h-7 text-yellow-500" />
                Aller-retour depuis votre TGV
              </h2>
              <div className="prose prose-lg text-gray-600 max-w-none space-y-4">
                <p>
                  Vous partez en déplacement professionnel ou en week-end et souhaitez retrouver un chauffeur à votre
                  retour&nbsp;? Réservez l&apos;<strong>aller-retour en une seule fois</strong>&nbsp;: tarif préférentiel,
                  même chauffeur si possible, et suivi automatique du TGV de retour.
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong>Le chauffeur vous attend</strong> à l&apos;arrivée, sur le parvis ou à la sortie du quai
                    selon votre préférence.
                  </li>
                  <li>
                    <strong>Si votre TGV est retardé</strong>, nous adaptons automatiquement l&apos;heure de prise en
                    charge, aucune action de votre part.
                  </li>
                  <li>
                    <strong>Tarif fixe garanti</strong> à l&apos;aller comme au retour, communiqué au moment de la réservation.
                  </li>
                </ul>
                <p>
                  La fonction aller-retour est particulièrement appréciée par les <strong>voyageurs d&apos;affaires</strong>
                  qui font Paris-Lyon ou Massy-Bordeaux dans la journée, et par les <strong>familles</strong> qui
                  rentrent de vacances avec bagages.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Comment réserver */}
        <section className="py-12 md:py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 text-center">
              Comment réserver votre taxi pour Massy TGV
            </h2>
            <p className="text-gray-600 text-center mb-10 max-w-2xl mx-auto">
              Trois façons simples de réserver votre course. Confirmation immédiate, SMS de rappel inclus.
            </p>

            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="text-center bg-white rounded-xl p-6 border border-gray-200">
                <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8 text-black" />
                </div>
                <h3 className="font-bold text-gray-900 text-lg mb-2">Par téléphone</h3>
                <p className="text-gray-600 mb-3 text-sm">Confirmation immédiate, 24h/24</p>
                <a href={SITE.phone.tel} className="text-lg font-bold text-yellow-600 hover:text-yellow-700 block">
                  {SITE.phone.display}
                </a>
              </div>

              <div className="text-center bg-white rounded-xl p-6 border border-gray-200">
                <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Luggage className="w-8 h-8 text-black" />
                </div>
                <h3 className="font-bold text-gray-900 text-lg mb-2">En ligne</h3>
                <p className="text-gray-600 mb-3 text-sm">
                  Pré-réservation via le formulaire en haut de page
                </p>
                <span className="text-yellow-600 font-medium text-sm">Réponse rapide</span>
              </div>

              <div className="text-center bg-white rounded-xl p-6 border border-gray-200">
                <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-black" />
                </div>
                <h3 className="font-bold text-gray-900 text-lg mb-2">À l&apos;avance</h3>
                <p className="text-gray-600 mb-3 text-sm">
                  Jusqu&apos;à 30 jours en avance, idéal pour TGV matinaux
                </p>
                <span className="text-yellow-600 font-medium text-sm">SMS de rappel</span>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 text-center">
              Questions fréquentes : Taxi gare Massy TGV
            </h2>
            <p className="text-gray-600 text-center mb-10 max-w-2xl mx-auto">
              Les réponses aux questions les plus posées par nos voyageurs.
            </p>

            <div className="max-w-3xl mx-auto space-y-3">
              {faqs.map((item, index) => (
                <details
                  key={index}
                  className="bg-gray-50 rounded-xl border border-gray-200 overflow-hidden group"
                >
                  <summary className="flex items-center justify-between p-5 cursor-pointer hover:bg-gray-100">
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
                  <div className="px-5 pb-5 pt-0 pl-12 text-gray-600 leading-relaxed">{item.a}</div>
                </details>
              ))}
            </div>

            <div className="text-center mt-10">
              <a
                href={SITE.phone.tel}
                className="inline-flex items-center gap-3 bg-yellow-400 text-black font-bold text-lg py-3 px-6 rounded-lg hover:bg-yellow-500 transition-colors"
              >
                <Phone className="w-5 h-5" />
                Réserver maintenant : {SITE.phone.display}
              </a>
              <p className="text-sm text-gray-500 mt-3 flex items-center justify-center gap-1">
                <MapPin className="w-4 h-4" />
                Service taxi disponible dans toute l&apos;Essonne
              </p>
            </div>
          </div>
        </section>

        <RelatedCities currentSlug="taxi-gare-massy-tgv" />
      </main>
      <Footer />
    </>
  )
}
