import { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/Header'
import Breadcrumb from '@/components/Breadcrumb'
import Footer from '@/components/Footer'
import BookingForm from '@/components/BookingForm'
import { FAQSchema, ServiceSchema } from '@/components/seo/Schemas'
import { SITE } from '@/lib/site'
import { popularRoutes } from '@/lib/routes'
import { Phone, Clock, CheckCircle, Star, CreditCard, Shield, HelpCircle, MapPin, Car, Briefcase, Route as RouteIcon, Landmark, Crown } from 'lucide-react'

const ROUTE = popularRoutes.find(r => r.slug === 'taxi-essonne-versailles')!
const FROM = ROUTE.from
const TO = ROUTE.to
const PRICE_MIN = ROUTE.priceMin
const PRICE_MAX = ROUTE.priceMax
const DURATION = ROUTE.durationMin
const URL = `${SITE.url}/taxi-essonne-versailles`

export const metadata: Metadata = {
  title: `Taxi ${FROM} → ${TO} : Tarif dès ${PRICE_MIN}€ & Réservation 24h/24`,
  description: `Taxi depuis l'${FROM} vers le Château de ${TO} : tarif fixe dès ${PRICE_MIN}€, trajet en ${DURATION} min via RN118 et A86. Dépose Château, Trianon, Grandes Eaux. Réservation 24h/24 au ${SITE.phone.display}.`,
  openGraph: {
    title: `Taxi ${FROM} → Versailles : Dès ${PRICE_MIN}€ • ${DURATION} min`,
    description: `Transfert direct depuis l'Essonne vers Versailles. Tarif fixe, dépose au Château, au Trianon ou au hameau de la Reine. Service 24h/24.`,
    url: URL,
  },
  alternates: { canonical: URL },
}

const faqs = [
  {
    q: `Quel est le prix d'un taxi de l'${FROM} → ${TO} ?`,
    a: `Le prix d'un taxi depuis l'${FROM} vers Versailles est compris entre ${PRICE_MIN}€ et ${PRICE_MAX}€ selon votre ville de départ en Essonne (Massy, Palaiseau, Les Ulis, Orsay, etc.), l'heure du trajet (tarif jour ou nuit/dimanche/fériés) et la circulation. Ce tarif fixe est communiqué à la réservation et inclut la prise en charge à votre adresse, l'attente et l'aide aux bagages.`,
  },
  {
    q: `Combien de temps dure le trajet ${FROM} Versailles en taxi ?`,
    a: `Le trajet entre l'${FROM} et Versailles dure en moyenne ${DURATION} minutes en taxi via la RN118 puis l'A86. Aux heures de pointe (8h-10h et 17h-19h), comptez 50 à 60 minutes en raison du trafic sur la N118. Le matin tôt (avant 9h) ou en milieu de journée, le trajet se fait en 30 à 35 minutes.`,
  },
  {
    q: `Comment réserver un taxi de l'${FROM} vers ${TO} ?`,
    a: `Trois options : appelez le ${SITE.phone.display} disponible 24h/24, utilisez le formulaire de réservation en ligne (confirmation immédiate par email et SMS), ou réservez à l'avance pour un trajet matinal. Pour une visite du Château à l'ouverture (9h), nous recommandons de réserver la veille (J-1).`,
  },
  {
    q: 'Où me dépose le chauffeur exactement à Versailles ?',
    a: `Selon votre programme, nous vous déposons : devant la grille d'honneur du Château de Versailles (entrée principale), à l'entrée du domaine de Trianon (Grand et Petit Trianon, hameau de la Reine), à l'entrée du parc côté Apollon pour les Grandes Eaux Musicales et Nocturnes, à la gare Versailles Château Rive Gauche (RER C) ou Versailles Chantiers (SNCF). Précisez votre destination à la réservation.`,
  },
  {
    q: 'Quels moyens de paiement acceptez-vous ?',
    a: `Tous nos taxis acceptent la carte bancaire (Visa, Mastercard, American Express), les espèces et la facturation entreprise sur demande. Pour les groupes (associations, sorties scolaires, CE) organisant une visite à Versailles, nous proposons une facturation centralisée.`,
  },
  {
    q: `Proposez-vous l'aller-retour ${FROM} ↔ Versailles dans la journée ?`,
    a: `Oui, forfait aller-retour à tarif préférentiel : le chauffeur vous dépose le matin au Château et vient vous récupérer en fin de visite à l'heure de votre choix. Particulièrement pratique les soirs de Grandes Eaux Nocturnes (jusqu'à 22h30) ou de spectacle à l'Opéra Royal.`,
  },
  {
    q: 'Combien de personnes peuvent monter à bord ?',
    a: `Nos berlines accueillent jusqu'à 4 passagers. Pour les familles ou groupes (5 à 7 personnes), nous proposons un Van Mercedes Classe V avec un léger supplément. Idéal pour une sortie en famille au Château avec poussette ou grands-parents.`,
  },
  {
    q: 'Le taxi est-il plus pratique que le RER C ou le train depuis l\'Essonne ?',
    a: `Pour la plupart des voyageurs, oui. Le RER C dessert Versailles Château Rive Gauche depuis l'Essonne mais nécessite souvent une correspondance et impose le respect des horaires de train. Notre taxi vous prend à votre adresse et vous dépose directement devant la grille du Château, sans correspondance ni marche depuis la gare (10-15 minutes à pied entre Rive Gauche et le Château).`,
  },
  {
    q: 'Y a-t-il un service pour les Grandes Eaux Musicales / Nocturnes ?',
    a: `Oui, nous avons une demande forte pour ces soirées événementielles (avril à octobre, samedis soirs). Pensez à réserver très en amont (au moins 48h avant) ; nous adaptons les horaires retour pour vous récupérer après le feu d'artifice final, sans contrainte de RER de nuit.`,
  },
]

const pointsDepose = [
  { icon: Crown, name: 'Château de Versailles', desc: 'Dépose à la grille d\'honneur, place d\'Armes, juste devant l\'entrée des visiteurs.' },
  { icon: Landmark, name: 'Trianon &amp; hameau de la Reine', desc: 'Accès direct au Grand Trianon, Petit Trianon et hameau de Marie-Antoinette par l\'entrée du domaine.' },
  { icon: Star, name: 'Grandes Eaux Musicales', desc: 'Dépose à proximité du bassin de Neptune pour profiter pleinement du spectacle et des jardins de Le Nôtre.' },
  { icon: MapPin, name: 'Gares Versailles', desc: 'Dépose aux gares Versailles Château Rive Gauche (RER C), Versailles Chantiers (SNCF) ou Versailles Rive Droite.' },
]

const usp = [
  { icon: Clock, title: 'Disponible 24h/24', desc: `Départ matinal pour l'ouverture du Château (9h), retour tardif après les Grandes Eaux Nocturnes : nous sommes là à toute heure.` },
  { icon: Crown, title: 'Dépose grille d\'honneur', desc: 'Connaissance parfaite du site : nous vous déposons au point le plus pratique selon votre billet (Château, Trianon, Grandes Eaux).' },
  { icon: CreditCard, title: 'Tarif fixe sans surprise', desc: `Prix communiqué à la réservation, entre ${PRICE_MIN}€ et ${PRICE_MAX}€. Pas de compteur qui tourne dans les bouchons de la N118.` },
  { icon: Shield, title: 'Confort &amp; bagages', desc: 'Véhicules récents et entretenus, aide aux bagages et poussettes systématique, Van pour les familles nombreuses.' },
]

const avis = [
  { nom: 'Patricia M. (Massy)', note: 5, texte: `Visite du Château pour mes 60 ans avec mes filles. Réservé un taxi pour 4 personnes, déposée pile devant la grille d'honneur à 9h. Au retour, le chauffeur nous attendait après les Grandes Eaux. Mémorable.`, date: 'Mars 2025' },
  { nom: 'Famille Lemoine (Évry)', note: 5, texte: `Sortie Versailles en famille (2 adultes, 3 enfants). Van Mercedes confortable, chauffeur très sympa avec les enfants, dépose au Trianon comme demandé. Aucun stress de RER. Excellent rapport qualité-prix.`, date: 'Février 2025' },
  { nom: 'Christophe B. (Palaiseau)', note: 5, texte: `Aller-retour pour les Grandes Eaux Nocturnes un samedi soir. Le chauffeur nous a récupéré à 22h45 après le feu d'artifice, retour direct à Palaiseau. Pas le stress du dernier RER, parfait.`, date: 'Juillet 2024' },
  { nom: 'Anne T. (Les Ulis)', note: 5, texte: `Avec mes parents âgés, le RER c'était compliqué. TAXI Pro 91 nous a déposés exactement devant la billetterie. Service sur-mesure, prix correct, je referai pour le concert à l'Opéra Royal.`, date: 'Avril 2025' },
]

const autresTrajets = popularRoutes.filter(r => r.from === 'Essonne' && r.slug !== 'taxi-essonne-versailles')

export default function TaxiEssonneVersailles() {
  return (
    <>
      <Header />
      <Breadcrumb items={[{ name: `Taxi ${FROM} → ${TO}` }]} />

      <ServiceSchema
        name={`Taxi ${FROM} ${TO}`}
        description={`Service de taxi depuis l'${FROM} (91) vers Versailles. Tarif fixe dès ${PRICE_MIN}€, trajet en ${DURATION} minutes via RN118 et A86, dépose Château, Trianon, Grandes Eaux. Disponible 24h/24.`}
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
                    <Crown className="w-4 h-4 text-yellow-500" /> Dépose Château
                  </span>
                </div>

                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Votre <strong>taxi {FROM} Versailles</strong> au tarif fixe, sans mauvaise surprise.
                  Trajet en <strong>{DURATION} minutes</strong> via la RN118 puis l'A86. Prise en charge à votre adresse
                  partout en Essonne et dépose directe à la grille d'honneur du Château, au Trianon, au hameau de la Reine
                  ou aux Grandes Eaux Musicales.
                </p>

                <div className="grid grid-cols-2 gap-3 mb-6">
                  <div className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" /><span className="text-gray-700 text-sm">Tarif fixe garanti</span></div>
                  <div className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" /><span className="text-gray-700 text-sm">Dépose grille d&apos;honneur</span></div>
                  <div className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" /><span className="text-gray-700 text-sm">Aller-retour possible</span></div>
                  <div className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" /><span className="text-gray-700 text-sm">Grandes Eaux Nocturnes</span></div>
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
                Voici notre grille indicative pour le trajet vers Versailles.
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
                      <td className="py-4 px-4 font-medium text-gray-900">Aller simple Essonne → Versailles</td>
                      <td className="py-4 px-4 text-center"><span className="bg-yellow-400 text-black font-bold px-3 py-1 rounded">{PRICE_MIN}€</span></td>
                      <td className="py-4 px-4 text-center"><span className="bg-yellow-400 text-black font-bold px-3 py-1 rounded">{PRICE_MAX}€</span></td>
                    </tr>
                    <tr className="border-t border-gray-200 bg-gray-50">
                      <td className="py-4 px-4 font-medium text-gray-900">Aller-retour (forfait journée)</td>
                      <td className="py-4 px-4 text-center"><span className="bg-yellow-400 text-black font-bold px-3 py-1 rounded">{PRICE_MIN * 2 - 10}€</span></td>
                      <td className="py-4 px-4 text-center"><span className="bg-yellow-400 text-black font-bold px-3 py-1 rounded">{PRICE_MAX * 2 - 10}€</span></td>
                    </tr>
                    <tr className="border-t border-gray-200">
                      <td className="py-4 px-4 font-medium text-gray-900">Supplément Van (5-7 pax / poussette)</td>
                      <td className="py-4 px-4 text-center text-gray-700">+10€</td>
                      <td className="py-4 px-4 text-center text-gray-700">+15€</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-gray-500 text-sm mt-4">
                * Tarif communiqué et confirmé à la réservation, sans surprise. Le prix exact dépend de votre commune de départ
                en Essonne (Massy, Palaiseau, Les Ulis, Orsay, Évry, etc.), de l'horaire et du véhicule choisi.
              </p>

              <div className="mt-8 p-5 bg-yellow-50 border border-yellow-200 rounded-xl">
                <p className="text-gray-900 text-sm leading-relaxed">
                  <strong>Bon plan visite :</strong> notre forfait aller-retour vous fait économiser jusqu'à 10€
                  par rapport à deux courses séparées. Le chauffeur vous attend à votre adresse le matin, vous dépose
                  devant la grille d'honneur du Château, puis revient vous récupérer en fin de visite (idéal après les Grandes Eaux Musicales).
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
                Durée du trajet et itinéraire {FROM} Versailles
              </h2>
              <p className="text-gray-600 mb-6">
                Le trajet entre l'Essonne et Versailles couvre environ <strong>25 à 40 kilomètres</strong> selon votre
                ville de départ et se parcourt en moyenne en <strong>{DURATION} minutes</strong>. L'itinéraire principal
                emprunte la <strong>RN118</strong> en direction de Vélizy, puis l'<strong>A86</strong> jusqu'à la sortie
                Versailles-Centre. Un trajet bien optimisé en dehors des heures de pointe.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white rounded-xl p-6 border border-gray-200">
                  <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <RouteIcon className="w-5 h-5 text-yellow-500" /> Itinéraire principal
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    L'itinéraire le plus direct emprunte la <strong>RN118</strong> en direction de Vélizy/Versailles,
                    puis bifurque sur l'<strong>A86</strong> à hauteur de Vélizy 2, et sort à Versailles-Centre.
                    Quelques minutes à travers la ville pour rejoindre la place d'Armes et la grille d'honneur du Château.
                  </p>
                </div>

                <div className="bg-white rounded-xl p-6 border border-gray-200">
                  <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <Clock className="w-5 h-5 text-yellow-500" /> Temps selon l'heure
                  </h3>
                  <ul className="text-gray-600 text-sm space-y-2">
                    <li><strong>Heures creuses :</strong> 30-35 minutes</li>
                    <li><strong>Heures de pointe (8h-10h / 17h-19h) :</strong> 50-60 minutes</li>
                    <li><strong>Nuit (après 22h) :</strong> 25-30 minutes</li>
                    <li><strong>Week-end matin :</strong> 35-45 minutes</li>
                  </ul>
                </div>
              </div>

              <p className="text-gray-600 mb-6">
                <strong>Conseil de pro pour la visite du Château :</strong> partez de l'Essonne <strong>1h15 avant</strong> l'horaire
                de votre billet (le Château ouvre à 9h00). Réservez la veille (J-1) pour garantir le créneau matinal.
                Nos chauffeurs connaissent les itinéraires alternatifs (par la D444 ou la N12 via Bièvres) en cas d'incident sur la N118.
              </p>

              <p className="text-gray-600">
                À noter : pour les <strong>Grandes Eaux Musicales</strong> et <strong>Nocturnes</strong> (saison avril-octobre, samedis soirs),
                pensez à réserver le retour en même temps que l'aller. Nous adaptons les horaires pour vous récupérer après le feu d'artifice final
                (vers 23h), sans contrainte de RER C de nuit. Idéal pour vivre pleinement la magie des jardins de Le Nôtre illuminés.
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
                Nous vous déposons exactement où vous le souhaitez sur le domaine de Versailles.
                Précisez votre destination finale à la réservation.
              </p>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {pointsDepose.map(p => {
                  const Icon = p.icon
                  return (
                    <div key={p.name} className="bg-gray-50 rounded-xl p-5 border border-gray-200 hover:border-yellow-400 transition-colors">
                      <div className="flex items-center gap-2 mb-2">
                        <Icon className="w-5 h-5 text-yellow-500" />
                        <h3 className="font-bold text-gray-900" dangerouslySetInnerHTML={{ __html: p.name }} />
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
              3 façons de réserver votre taxi {FROM} → Versailles
            </h2>
            <p className="text-gray-600 text-center mb-10 max-w-2xl mx-auto">
              Pour une visite à l'ouverture du Château ou un spectacle aux Grandes Eaux Nocturnes, la réservation à l'avance (J-1) est fortement recommandée.
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
                <p className="text-gray-600 text-sm mb-4">Pour les Grandes Eaux Nocturnes ou l'Opéra Royal, réservez au moins 48h avant.</p>
                <span className="text-yellow-600 font-medium">SMS de rappel inclus</span>
              </div>
            </div>
          </div>
        </section>

        {/* USP */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 text-center">
              Pourquoi choisir TAXI Pro 91 pour votre trajet {FROM} → Versailles
            </h2>
            <p className="text-gray-600 text-center mb-10 max-w-2xl mx-auto">
              Spécialistes des sorties culturelles depuis l'Essonne, connaissance fine du domaine de Versailles et de ses accès.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {usp.map(u => {
                const Icon = u.icon
                return (
                  <div key={u.title} className="bg-gray-50 rounded-xl p-6 border border-gray-200 text-center">
                    <div className="w-14 h-14 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-7 h-7 text-black" />
                    </div>
                    <h3 className="font-bold text-gray-900 mb-2" dangerouslySetInnerHTML={{ __html: u.title }} />
                    <p className="text-gray-600 text-sm" dangerouslySetInnerHTML={{ __html: u.desc }} />
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
              Avis clients sur le trajet {FROM} → Versailles
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
              Questions fréquentes : Taxi {FROM} Versailles
            </h2>
            <p className="text-gray-600 text-center mb-10 max-w-2xl mx-auto">
              Toutes les réponses aux questions des visiteurs et amateurs de patrimoine qui réservent ce trajet.
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
              Réservez votre taxi {FROM} → Versailles maintenant
            </h2>
            <p className="text-gray-900 mb-6 max-w-2xl mx-auto">
              Tarif fixe dès {PRICE_MIN}€, dépose à la grille d'honneur, service 24h/24. Profitez du patrimoine sans contrainte de transport.
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
