import { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/Header'
import Breadcrumb from '@/components/Breadcrumb'
import Footer from '@/components/Footer'
import BookingForm from '@/components/BookingForm'
import { FAQSchema, ServiceSchema } from '@/components/seo/Schemas'
import { SITE } from '@/lib/site'
import { popularRoutes } from '@/lib/routes'
import { Phone, Clock, CheckCircle, Star, CreditCard, Shield, HelpCircle, MapPin, Car, Briefcase, Route as RouteIcon, Sparkles, Hotel } from 'lucide-react'

const ROUTE = popularRoutes.find(r => r.slug === 'taxi-essonne-disneyland')!
const FROM = ROUTE.from
const TO = ROUTE.to
const PRICE_MIN = ROUTE.priceMin
const PRICE_MAX = ROUTE.priceMax
const DURATION = ROUTE.durationMin
const URL = `${SITE.url}/taxi-essonne-disneyland`

export const metadata: Metadata = {
  title: `Taxi ${FROM} → Disneyland : tarif dès ${PRICE_MIN}€`,
  description: `Taxi depuis l'${FROM} vers Disneyland Paris : tarif fixe dès ${PRICE_MIN}€, trajet en ${DURATION} min via A6, A86 et A4. Dépose Parcs, hôtels Disney ou gare TGV Chessy. Réservation 24h/24 au ${SITE.phone.display}.`,
  openGraph: {
    title: `Taxi ${FROM} → Disneyland : tarif dès ${PRICE_MIN}€`,
    description: `Transfert direct depuis l'Essonne vers Disneyland Paris (Marne-la-Vallée). Tarif fixe, dépose aux Parcs et hôtels Disney, service 24h/24.`,
    url: URL,
  },
  alternates: { canonical: URL },
}

const faqs = [
  {
    q: `Quel est le prix d'un taxi de l'${FROM} → ${TO} ?`,
    a: `Le prix d'un taxi depuis l'${FROM} vers Disneyland Paris est compris entre ${PRICE_MIN}€ et ${PRICE_MAX}€ selon votre ville de départ en Essonne (Massy, Palaiseau, Évry, Corbeil, etc.), l'heure du trajet (tarif jour ou nuit/dimanche/fériés) et la circulation sur la francilienne. Ce tarif fixe est communiqué à la réservation et inclut la prise en charge, l'attente et l'aide aux bagages.`,
  },
  {
    q: `Combien de temps dure le trajet ${FROM} Disneyland en taxi ?`,
    a: `Le trajet entre l'${FROM} et Disneyland Paris dure en moyenne ${DURATION} minutes en taxi via l'A6, l'A86 puis l'A4 vers Marne-la-Vallée. Aux heures de pointe (vendredi soir, samedi matin), comptez 75 à 90 minutes. Le trajet le plus fluide se fait tôt le matin (40-50 min) ou tard le soir.`,
  },
  {
    q: `Comment réserver un taxi de l'${FROM} vers ${TO} ?`,
    a: `Trois options : appelez le ${SITE.phone.display} disponible 24h/24, utilisez le formulaire de réservation en ligne (confirmation immédiate), ou réservez à l'avance. Pour un départ matinal vers Disneyland (ouverture des Parcs à 9h30), nous recommandons fortement de réserver la veille (J-1) afin de garantir votre chauffeur et un tarif optimal.`,
  },
  {
    q: 'Le chauffeur peut-il déposer directement aux hôtels Disney ?',
    a: `Oui, nous déposons directement à votre hôtel Disney (Disneyland Hotel, Hotel New York – The Art of Marvel, Newport Bay Club, Sequoia Lodge, Hotel Cheyenne, Hotel Santa Fe, Davy Crockett Ranch) ou à n'importe quel hôtel partenaire des environs (Magic Circus, Vienna House Dream Castle, etc.). Précisez le nom de l'hôtel à la réservation.`,
  },
  {
    q: 'Pouvez-vous déposer à la gare TGV Marne-la-Vallée Chessy ?',
    a: `Bien sûr. Si vous prenez un TGV ou un Eurostar depuis la gare Marne-la-Vallée Chessy, nous vous déposons directement au parvis. C'est aussi le point de dépose idéal pour rejoindre le Disney Village ou les Parcs à pied (5 min).`,
  },
  {
    q: 'Quels moyens de paiement acceptez-vous ?',
    a: `Tous nos taxis acceptent la carte bancaire (Visa, Mastercard, American Express), les espèces et la facturation entreprise sur demande. Pour les CE et comités d'entreprise organisant des sorties Disney, nous proposons une facturation centralisée.`,
  },
  {
    q: `Proposez-vous l'aller-retour ${FROM} ↔ Disneyland dans la journée ?`,
    a: `Oui, c'est l'une de nos demandes les plus fréquentes. Forfait aller-retour à tarif préférentiel : le chauffeur vous dépose le matin aux Parcs et vient vous récupérer en fin de journée à l'heure de votre choix. Idéal pour une sortie en famille sans contrainte de transport en commun.`,
  },
  {
    q: 'Combien de personnes peuvent monter à bord ?',
    a: `Nos berlines accueillent jusqu'à 4 passagers. Pour les familles ou groupes (5 à 7 personnes), nous proposons un Van Mercedes Classe V avec un léger supplément. Particulièrement pratique pour une sortie Disney avec 2 adultes et 3 enfants + poussette.`,
  },
  {
    q: 'Conseil pour arriver avant l\'ouverture des Parcs ?',
    a: `Pour profiter pleinement de votre journée à Disneyland, nous recommandons un départ depuis l'Essonne entre 7h30 et 8h. Réservez la veille (J-1) pour garantir l'horaire. Nos chauffeurs connaissent les meilleurs accès et dépose-minute pour entrer dans les Parcs dès 9h30.`,
  },
]

const pointsDepose = [
  { icon: Sparkles, name: 'Disneyland Park', desc: 'Dépose au plus près de l\'entrée principale via le parking Hôtel Disneyland.' },
  { icon: Sparkles, name: 'Walt Disney Studios', desc: 'Accès direct par l\'esplanade Disney Village pour rejoindre rapidement le second parc.' },
  { icon: Hotel, name: 'Hôtels Disney', desc: 'Dépose aux 7 hôtels Disney (Disneyland Hotel, Newport Bay, Hotel New York, Sequoia, Cheyenne, Santa Fe, Davy Crockett Ranch).' },
  { icon: MapPin, name: 'Gare TGV Marne-la-Vallée Chessy', desc: 'Dépose au parvis pour les correspondances TGV/Eurostar/RER A.' },
]

const usp = [
  { icon: Clock, title: 'Disponible 24h/24', desc: `Départ ultra-matinal pour l'ouverture des Parcs, retour tardif après le spectacle Disney Illuminations : nous sommes là à toute heure.` },
  { icon: Sparkles, title: 'Dépose dans le parc', desc: 'Connaissance fine du site Disneyland : nous vous déposons au point le plus pratique pour votre programme.' },
  { icon: CreditCard, title: 'Tarif fixe sans surprise', desc: `Prix communiqué à la réservation, entre ${PRICE_MIN}€ et ${PRICE_MAX}€. Pas de compteur qui tourne dans les bouchons du vendredi soir.` },
  { icon: Shield, title: 'Confort famille', desc: 'Sièges enfants disponibles sur demande, Van pour les grandes familles, aide aux bagages et poussettes systématique.' },
]

const avis = [
  { nom: 'Famille Renault (Massy)', note: 5, texte: `Sortie Disney pour les 8 ans de notre fils. Réservé un Van Mercedes pour 5 personnes + poussette, le chauffeur était à l'heure à 7h30, on a passé les portes de Disneyland Park à 9h35 pile. Au retour, après le spectacle de 22h, il nous attendait au parvis. Service sans faute.`, date: 'Mars 2025' },
  { nom: 'Sophie L. (Évry)', note: 5, texte: `Avec mes deux enfants, le RER A depuis Évry c'est l'enfer un samedi. J'ai testé TAXI Pro 91 : 70 minutes porte à porte, déposée devant le Disneyland Hotel, parfait. Je ne reprendrai plus jamais les transports en commun pour Disney.`, date: 'Février 2025' },
  { nom: 'Damien T. (Palaiseau)', note: 5, texte: `Anniversaire de ma femme avec une nuit à l'Hôtel New York Marvel. Trajet aller-retour réservé, chauffeur sympa et impeccable, prix très correct comparé à un VTC pour la même course. À refaire.`, date: 'Janvier 2025' },
  { nom: 'Karim B. (Corbeil-Essonnes)', note: 5, texte: `Aller-retour Corbeil-Disneyland pour la journée. Tarif annoncé respecté, chauffeur ponctuel matin et soir, on a profité à fond sans stress de transport. Merci pour cette belle journée familiale.`, date: 'Avril 2025' },
]

const autresTrajets = popularRoutes.filter(r => r.from === 'Essonne' && r.slug !== 'taxi-essonne-disneyland')

export default function TaxiEssonneDisneyland() {
  return (
    <>
      <Header />
      <Breadcrumb items={[{ name: `Taxi ${FROM} → ${TO}` }]} />

      <ServiceSchema
        name={`Taxi ${FROM} ${TO}`}
        description={`Service de taxi depuis l'${FROM} (91) vers Disneyland Paris (Marne-la-Vallée). Tarif fixe dès ${PRICE_MIN}€, trajet en ${DURATION} minutes via A6, A86 et A4, disponible 24h/24.`}
        url={URL}
        areaServed={[FROM]}
      />
      <FAQSchema faqs={faqs} />

      <main>
        {/* Hero */}
        <section className="bg-gray-50 py-10 md:py-14">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-10 items-start">
              <div>
                <div className="flex items-center gap-2 text-yellow-600 mb-3">
                  <RouteIcon className="w-5 h-5" />
                  <span className="font-medium">{FROM} (91) → {TO}</span>
                </div>

                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-5">
                  Taxi {FROM} → {TO} : Tarif &amp; Réservation 24h/24
                </h1>

                <div className="flex flex-wrap gap-3 mb-6">
                  <span className="bg-yellow-400 text-black font-bold px-4 py-2 rounded-lg text-sm">
                    Dès {PRICE_MIN}€
                  </span>
                  <span className="bg-gray-900 text-white font-bold px-4 py-2 rounded-lg text-sm flex items-center gap-2">
                    <Clock className="w-4 h-4" /> {DURATION} min
                  </span>
                  <span className="bg-white border border-gray-200 text-gray-900 font-medium px-4 py-2 rounded-lg text-sm flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-yellow-500" /> Dépose Parcs &amp; Hôtels
                  </span>
                </div>

                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Votre <strong>taxi {FROM} Disneyland</strong> au tarif fixe, sans mauvaise surprise.
                  Trajet en <strong>{DURATION} minutes</strong> via l'A6, l'A86 puis l'A4 vers Marne-la-Vallée. Prise en charge à votre adresse
                  partout en Essonne et dépose directe à Disneyland Park, aux Walt Disney Studios, dans votre hôtel Disney ou à la gare TGV Chessy.
                </p>

                <div className="grid grid-cols-2 gap-3 mb-6">
                  <div className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" /><span className="text-gray-700 text-sm">Tarif fixe garanti</span></div>
                  <div className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" /><span className="text-gray-700 text-sm">Dépose aux Parcs</span></div>
                  <div className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" /><span className="text-gray-700 text-sm">Aller-retour possible</span></div>
                  <div className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" /><span className="text-gray-700 text-sm">Van familles disponible</span></div>
                </div>

                <div className="flex flex-wrap gap-3">
                  <a href={SITE.phone.tel} className="inline-flex items-center gap-3 bg-gray-900 text-white font-bold text-lg py-3 px-6 rounded-lg hover:bg-gray-800 transition-colors">
                    <Phone className="w-5 h-5" />
                    {SITE.phone.display}
                  </a>
                  <a href="#reservation" className="inline-flex items-center gap-3 bg-yellow-400 text-black font-bold text-lg py-3 px-6 rounded-lg hover:bg-yellow-500 transition-colors">
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

        {/* Prix */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Prix du taxi {FROM} → {TO}
              </h2>
              <p className="text-gray-600 mb-8">
                Tarification claire et fixe, communiquée lors de la réservation selon votre ville de départ
                en Essonne. Le tarif varie principalement en fonction de la distance et de l'horaire choisi.
                Voici notre grille indicative pour le trajet vers Disneyland Paris.
              </p>

              <div className="overflow-x-auto rounded-xl border border-gray-200">
                <table className="w-full text-left">
                  <thead className="bg-gray-900 text-white">
                    <tr>
                      <th className="py-4 px-4 font-bold">Type de trajet</th>
                      <th className="py-4 px-4 font-bold text-center">Jour (7h-19h)</th>
                      <th className="py-4 px-4 font-bold text-center">Nuit / Dimanche / Fériés</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white">
                    <tr className="border-t border-gray-200">
                      <td className="py-4 px-4 font-medium text-gray-900">Aller simple Essonne → Disneyland</td>
                      <td className="py-4 px-4 text-center"><span className="bg-yellow-400 text-black font-bold px-3 py-1 rounded">{PRICE_MIN}€</span></td>
                      <td className="py-4 px-4 text-center"><span className="bg-yellow-400 text-black font-bold px-3 py-1 rounded">{PRICE_MAX}€</span></td>
                    </tr>
                    <tr className="border-t border-gray-200 bg-gray-50">
                      <td className="py-4 px-4 font-medium text-gray-900">Aller-retour (forfait journée)</td>
                      <td className="py-4 px-4 text-center"><span className="bg-yellow-400 text-black font-bold px-3 py-1 rounded">{PRICE_MIN * 2 - 15}€</span></td>
                      <td className="py-4 px-4 text-center"><span className="bg-yellow-400 text-black font-bold px-3 py-1 rounded">{PRICE_MAX * 2 - 15}€</span></td>
                    </tr>
                    <tr className="border-t border-gray-200">
                      <td className="py-4 px-4 font-medium text-gray-900">Supplément Van (5-7 pax / poussette)</td>
                      <td className="py-4 px-4 text-center text-gray-700">+15€</td>
                      <td className="py-4 px-4 text-center text-gray-700">+20€</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-gray-500 text-sm mt-4">
                * Tarif communiqué et confirmé à la réservation, sans surprise. Le prix exact dépend de votre commune de départ
                en Essonne (Massy, Palaiseau, Évry, Corbeil, Les Ulis, etc.), de l'horaire et du véhicule choisi.
              </p>

              <div className="mt-8 p-5 bg-yellow-50 border border-yellow-200 rounded-xl">
                <p className="text-gray-900 text-sm leading-relaxed">
                  <strong>Bon plan famille :</strong> notre forfait aller-retour dans la journée vous fait économiser jusqu'à 15€
                  par rapport à deux courses séparées. Le chauffeur vous attend à votre adresse le matin, vous dépose à Disneyland,
                  puis revient vous récupérer en fin de journée à l'heure choisie. Plus pratique qu'un Uber retour aléatoire.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Durée & itinéraire */}
        <section className="py-12 md:py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Durée du trajet et itinéraire {FROM} Disneyland
              </h2>
              <p className="text-gray-600 mb-6">
                Le trajet entre l'Essonne et Disneyland Paris couvre environ <strong>55 à 70 kilomètres</strong> selon votre
                ville de départ et se parcourt en moyenne en <strong>{DURATION} minutes</strong>. L'itinéraire emprunte
                trois autoroutes successives qui forment l'arc francilien sud-est : <strong>A6, A86 et A4</strong>.
                Un trajet fluide en dehors des heures de pointe.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white rounded-xl p-6 border border-gray-200">
                  <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <RouteIcon className="w-5 h-5 text-yellow-500" /> Itinéraire principal
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    L'itinéraire le plus direct emprunte l'<strong>A6</strong> en direction de Paris, puis la
                    <strong> francilienne A86</strong> vers l'est, et enfin l'<strong>A4</strong> jusqu'à la sortie
                    14 Val d'Europe / Disneyland Paris. Sortie directe sur les parkings des Parcs et hôtels Disney.
                  </p>
                </div>

                <div className="bg-white rounded-xl p-6 border border-gray-200">
                  <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <Clock className="w-5 h-5 text-yellow-500" /> Temps selon l'heure
                  </h3>
                  <ul className="text-gray-600 text-sm space-y-2">
                    <li><strong>Heures creuses (avant 7h) :</strong> 45-55 minutes</li>
                    <li><strong>Heures de pointe (matin / vendredi soir) :</strong> 75-90 minutes</li>
                    <li><strong>Nuit (après 22h) :</strong> 45 minutes</li>
                    <li><strong>Week-end matin :</strong> 60-75 minutes</li>
                  </ul>
                </div>
              </div>

              <p className="text-gray-600 mb-6">
                <strong>Conseil de pro pour arriver avant l'ouverture des Parcs (9h30) :</strong> partez de l'Essonne
                <strong> entre 7h30 et 8h</strong> selon votre ville. Réservez impérativement la veille (J-1) pour garantir le créneau matinal.
                Nos chauffeurs connaissent les itinéraires alternatifs (par la N104 ou la N4 via Pontault-Combault) en cas d'incident sur l'A4.
              </p>

              <p className="text-gray-600">
                À noter : la <strong>francilienne A86</strong> est régulièrement chargée le matin entre 8h et 10h, et le vendredi
                soir entre 17h et 20h. Pour les sorties courtes (journée), nous conseillons un départ très tôt ou en milieu de matinée
                pour éviter les pics de trafic. Le retour en soirée est généralement plus fluide.
              </p>
            </div>
          </div>
        </section>

        {/* Points de dépose */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 text-center">
                Points de dépose sur place
              </h2>
              <p className="text-gray-600 text-center mb-10 max-w-2xl mx-auto">
                Nous vous déposons exactement où vous le souhaitez sur le site Disneyland Paris.
                Précisez votre destination finale à la réservation.
              </p>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {pointsDepose.map(p => {
                  const Icon = p.icon
                  return (
                    <div key={p.name} className="bg-gray-50 rounded-xl p-5 border border-gray-200 hover:border-yellow-400 transition-colors">
                      <div className="flex items-center gap-2 mb-2">
                        <Icon className="w-5 h-5 text-yellow-500" />
                        <h3 className="font-bold text-gray-900">{p.name}</h3>
                      </div>
                      <p className="text-gray-600 text-sm">{p.desc}</p>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </section>

        {/* 3 façons de réserver */}
        <section className="py-12 md:py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 text-center">
              3 façons de réserver votre taxi {FROM} → Disneyland
            </h2>
            <p className="text-gray-600 text-center mb-10 max-w-2xl mx-auto">
              Pour profiter pleinement de votre journée Disney, la réservation la veille (J-1) est fortement recommandée.
            </p>

            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <div className="bg-white rounded-xl p-6 border border-gray-200 text-center">
                <div className="w-14 h-14 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-7 h-7 text-black" />
                </div>
                <h3 className="font-bold text-gray-900 text-lg mb-2">Par téléphone</h3>
                <p className="text-gray-600 text-sm mb-4">Standard humain 24h/24, réservation immédiate ou à l'avance.</p>
                <a href={SITE.phone.tel} className="text-lg font-bold text-yellow-600 hover:text-yellow-700">
                  {SITE.phone.display}
                </a>
              </div>

              <div className="bg-white rounded-xl p-6 border border-gray-200 text-center">
                <div className="w-14 h-14 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Car className="w-7 h-7 text-black" />
                </div>
                <h3 className="font-bold text-gray-900 text-lg mb-2">Formulaire en ligne</h3>
                <p className="text-gray-600 text-sm mb-4">Réservation 24h/24 avec prix annoncé en temps réel.</p>
                <a href="#reservation" className="text-yellow-600 font-medium hover:text-yellow-700">Réserver en ligne</a>
              </div>

              <div className="bg-white rounded-xl p-6 border border-gray-200 text-center">
                <div className="w-14 h-14 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-7 h-7 text-black" />
                </div>
                <h3 className="font-bold text-gray-900 text-lg mb-2">À l'avance (J-1 recommandé)</h3>
                <p className="text-gray-600 text-sm mb-4">Pour les arrivées à l'ouverture des Parcs (9h30), réservez la veille.</p>
                <span className="text-yellow-600 font-medium">SMS de rappel inclus</span>
              </div>
            </div>
          </div>
        </section>

        {/* USP */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 text-center">
              Pourquoi choisir TAXI Pro 91 pour votre trajet {FROM} → Disneyland
            </h2>
            <p className="text-gray-600 text-center mb-10 max-w-2xl mx-auto">
              Spécialistes des sorties famille vers Disneyland Paris depuis l'Essonne, expérience confirmée par des milliers de trajets.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {usp.map(u => {
                const Icon = u.icon
                return (
                  <div key={u.title} className="bg-gray-50 rounded-xl p-6 border border-gray-200 text-center">
                    <div className="w-14 h-14 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-7 h-7 text-black" />
                    </div>
                    <h3 className="font-bold text-gray-900 mb-2">{u.title}</h3>
                    <p className="text-gray-600 text-sm">{u.desc}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Avis */}
        <section className="py-12 md:py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 text-center">
              Avis clients sur le trajet {FROM} → Disneyland
            </h2>
            <div className="flex items-center justify-center gap-2 mb-10">
              <div className="flex">{[1,2,3,4,5].map(i => <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />)}</div>
              <span className="font-bold text-gray-900">Avis vérifiés</span>
              <span className="text-gray-500">Avis clients vérifiés</span>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {avis.map((a, i) => (
                <div key={i} className="bg-white rounded-xl p-6 border border-gray-200">
                  <div className="flex items-center gap-1 mb-3">
                    {[...Array(a.note)].map((_, j) => <Star key={j} className="w-4 h-4 text-yellow-400 fill-yellow-400" />)}
                  </div>
                  <p className="text-gray-700 mb-4 italic text-sm">&quot;{a.texte}&quot;</p>
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-medium text-gray-900">{a.nom}</span>
                    <span className="text-gray-500">{a.date}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 text-center">
              Questions fréquentes : Taxi {FROM} Disneyland
            </h2>
            <p className="text-gray-600 text-center mb-10 max-w-2xl mx-auto">
              Toutes les réponses aux questions des familles et voyageurs qui réservent ce trajet.
            </p>

            <div className="max-w-3xl mx-auto space-y-4">
              {faqs.map((item, i) => (
                <details key={i} className="bg-gray-50 rounded-xl border border-gray-200 overflow-hidden group">
                  <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-white">
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

        {/* Autres trajets */}
        <section className="py-12 md:py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 text-center">
              Autres trajets populaires depuis l'{FROM}
            </h2>
            <p className="text-gray-600 text-center mb-10">Découvrez nos autres destinations au départ de l'Essonne.</p>
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {autresTrajets.map(r => (
                <Link key={r.slug} href={`/${r.slug}`} className="bg-white rounded-xl p-6 border border-gray-200 hover:border-yellow-400 transition-colors block">
                  <div className="flex items-center gap-2 mb-2 text-yellow-600">
                    <RouteIcon className="w-5 h-5" />
                    <span className="text-sm font-medium">Trajet</span>
                  </div>
                  <h3 className="font-bold text-gray-900 text-lg mb-2">{r.from} → {r.to}</h3>
                  <p className="text-gray-600 text-sm mb-3">{r.description}</p>
                  <div className="flex items-center justify-between text-sm">
                    <span className="bg-yellow-400 text-black font-bold px-2 py-1 rounded">{r.priceMin}-{r.priceMax}€</span>
                    <span className="text-gray-500">{r.durationMin} min</span>
                  </div>
                </Link>
              ))}
              <Link href="/taxi-aeroport" className="bg-white rounded-xl p-6 border border-gray-200 hover:border-yellow-400 transition-colors block">
                <div className="flex items-center gap-2 mb-2 text-yellow-600">
                  <MapPin className="w-5 h-5" />
                  <span className="text-sm font-medium">Service</span>
                </div>
                <h3 className="font-bold text-gray-900 text-lg mb-2">Taxi aéroport Essonne</h3>
                <p className="text-gray-600 text-sm mb-3">Transferts vers Orly et Roissy CDG depuis toute l'Essonne.</p>
                <span className="text-yellow-600 font-medium text-sm">Voir nos forfaits</span>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA final */}
        <section className="py-12 bg-yellow-400">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-3">
              Réservez votre taxi {FROM} → Disneyland maintenant
            </h2>
            <p className="text-gray-900 mb-6 max-w-2xl mx-auto">
              Tarif fixe dès {PRICE_MIN}€, dépose aux Parcs ou hôtels Disney, service 24h/24. Faites de votre journée Disney un souvenir parfait.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <a href={SITE.phone.tel} className="inline-flex items-center gap-3 bg-gray-900 text-white font-bold text-lg py-3 px-6 rounded-lg hover:bg-gray-800 transition-colors">
                <Phone className="w-5 h-5" />
                {SITE.phone.display}
              </a>
              <Link href="#reservation" className="inline-flex items-center gap-3 bg-white text-gray-900 font-bold text-lg py-3 px-6 rounded-lg hover:bg-gray-100 transition-colors">
                <Briefcase className="w-5 h-5" />
                Réserver en ligne
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
