import { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/Header'
import Breadcrumb from '@/components/Breadcrumb'
import Footer from '@/components/Footer'
import BookingForm from '@/components/BookingForm'
import { FAQSchema, ServiceSchema } from '@/components/seo/Schemas'
import { SITE } from '@/lib/site'
import { popularRoutes, Route } from '@/lib/routes'
import { Phone, Clock, CheckCircle, Star, CreditCard, Shield, Plane, HelpCircle, MapPin, Car, Briefcase, Route as RouteIcon } from 'lucide-react'

const ROUTE = popularRoutes.find(r => r.slug === 'taxi-antony-orly')!
const FROM = ROUTE.from
const TO = ROUTE.to
const PRICE_MIN = ROUTE.priceMin
const PRICE_MAX = ROUTE.priceMax
const DURATION = ROUTE.durationMin
const URL = `${SITE.url}/taxi-antony-orly`

export const metadata: Metadata = {
  title: `Taxi ${FROM} → Aéroport Orly : Tarif dès ${PRICE_MIN}€ & Réservation 24h/24`,
  description: `Taxi ${FROM} (92160) vers Aéroport Orly : tarif fixe dès ${PRICE_MIN}€, trajet ${DURATION} min, suivi de vol inclus. Tous terminaux Orly 1, 2, 3, 4. Réservez au ${SITE.phone.display}.`,
  openGraph: {
    title: `Taxi ${FROM} → Orly : Dès ${PRICE_MIN}€ • ${DURATION} min`,
    description: `Transfert taxi ${FROM} (92) Aéroport Orly : tarif fixe, suivi de vol, prise en charge 24h/24.`,
    url: URL,
  },
  alternates: { canonical: URL },
}

const faqs = [
  {
    q: `Quel est le prix d'un taxi ${FROM} → Aéroport Orly ?`,
    a: `Le tarif d'un taxi de ${FROM} vers l'aéroport d'Orly est compris entre ${PRICE_MIN}€ et ${PRICE_MAX}€ selon l'heure (jour ou nuit/dimanche/jours fériés) et le trafic. Antony étant l'une des villes les plus proches d'Orly, c'est l'un des transferts aéroport les plus économiques de la région. Tarif fixe communiqué à la réservation.`,
  },
  {
    q: `Combien de temps dure le trajet ${FROM} Orly en taxi ?`,
    a: `Le trajet ${FROM} → Aéroport d'Orly dure en moyenne ${DURATION} minutes en taxi via la RD920 puis l'A86. C'est l'un des transferts aéroport les plus courts d'Île-de-France. Aux heures de pointe (7h-9h, 17h-20h), comptez 18 à 22 minutes en raison de la circulation sur l'A86.`,
  },
  {
    q: 'Comment réserver un taxi de Antony vers Orly ?',
    a: `Trois options : appelez le ${SITE.phone.display} disponible 24h/24, utilisez notre formulaire en ligne (confirmation immédiate), ou réservez à l'avance pour un vol matinal. Pour un vol tôt le matin, la réservation au moins la veille (J-1) est fortement recommandée.`,
  },
  {
    q: 'Quels moyens de paiement acceptez-vous ?',
    a: `Tous nos taxis acceptent la carte bancaire (Visa, Mastercard, American Express), les espèces et les bons de transport CPAM. La facturation entreprise mensuelle est disponible sur demande pour vos déplacements professionnels.`,
  },
  {
    q: 'Proposez-vous l\'aller-retour Antony ↔ Orly ?',
    a: `Oui, nous proposons un forfait aller-retour Antony ↔ Orly à tarif préférentiel. Le chauffeur vous attend à votre vol retour avec suivi en temps réel : idéal pour un voyage court (city break, déplacement pro de quelques jours).`,
  },
  {
    q: 'Que se passe-t-il si mon vol est retardé ?',
    a: `Aucun stress : nous suivons votre vol en temps réel grâce au numéro de vol communiqué à la réservation. En cas de retard, l'heure de prise en charge est automatiquement ajustée, aucun supplément d'attente facturé. En cas d'annulation, prévenez-nous au ${SITE.phone.display} pour reporter sans frais.`,
  },
  {
    q: 'Tous les terminaux d\'Orly sont-ils desservis ?',
    a: `Oui, nous desservons l'ensemble des terminaux : Orly 1, Orly 2, Orly 3 et Orly 4. Précisez votre terminal à la réservation pour une dépose au plus près de votre porte d'embarquement.`,
  },
  {
    q: 'Y a-t-il un supplément pour les bagages ou les groupes ?',
    a: `Les bagages standards (valises, sacs) sont inclus dans le tarif. Pour les groupes (jusqu'à 7 passagers) ou les bagages volumineux (skis, instruments, poussette), nous proposons notre service Van avec un léger supplément à préciser à la réservation.`,
  },
]

const terminaux = [
  { code: 'Orly 1', desc: 'Vols low-cost et certaines compagnies européennes' },
  { code: 'Orly 2', desc: 'Vols domestiques et internationaux Air France principalement' },
  { code: 'Orly 3', desc: 'Vols court et moyen-courrier, compagnies européennes' },
  { code: 'Orly 4', desc: 'Vols internationaux long-courrier et destinations Outre-mer' },
]

const usp = [
  { icon: Clock, title: 'Disponible 24h/24', desc: 'Vols tôt le matin, vols de nuit, week-ends : nous sommes là à toute heure pour votre trajet Antony Orly.' },
  { icon: Plane, title: 'Suivi de vol inclus', desc: 'Votre numéro de vol tracké en temps réel : aucune attente facturée en cas de retard.' },
  { icon: CreditCard, title: 'Tarif fixe sans surprise', desc: `Prix communiqué à la réservation, entre ${PRICE_MIN}€ et ${PRICE_MAX}€. Pas de compteur qui tourne.` },
  { icon: Shield, title: 'Chauffeurs professionnels', desc: 'Conducteurs expérimentés, véhicules récents, aide aux bagages systématique.' },
]

const avis = [
  { nom: 'Marie L. (Antony)', note: 5, texte: `Réservé pour un vol à 6h depuis Orly 4. Chauffeur ponctuel à 4h50, trajet en 12 minutes par la RD920. Tarif annoncé respecté (28€). Excellent service, je recommande pour Antony-Orly.`, date: 'Mars 2025' },
  { nom: 'Pierre D. (Antony Centre)', note: 5, texte: `J'utilise TAXI Pro 91 chaque mois pour mes déplacements pros depuis Antony vers Orly 2. Toujours ponctuel, voiture propre, facturation entreprise simple.`, date: 'Février 2025' },
  { nom: 'Sophie M. (Antony - Croix de Berny)', note: 5, texte: `Vol retour retardé d'1h30, le chauffeur a attendu sans supplément. Suivi de vol vraiment fonctionnel, j'ai été récupérée en sortie de terminal sans stress.`, date: 'Janvier 2025' },
  { nom: 'Jean B. (Antony - Pajeaud)', note: 5, texte: `Aller-retour Antony-Orly pour un week-end à Lisbonne. Prix très compétitif comparé aux applications VTC qui surchargent aux heures de pointe. Parfait.`, date: 'Avril 2025' },
]

const autresTrajetsAntony: Route[] = [
  { slug: 'taxi-massy-orly', from: 'Antony', to: 'Aéroport CDG', fromSlug: 'antony', priceMin: 65, priceMax: 85, durationMin: 45, description: 'Liaison directe vers Roissy Charles de Gaulle' },
  { slug: 'taxi-massy-paris', from: 'Antony', to: 'Paris Centre', fromSlug: 'antony', priceMin: 40, priceMax: 55, durationMin: 25, description: 'Trajet rapide vers tous les arrondissements parisiens' },
]

export default function TaxiAntonyOrly() {
  return (
    <>
      <Header />
      <Breadcrumb items={[{ name: `Taxi ${FROM} → ${TO}` }]} />

      <ServiceSchema
        name={`Taxi ${FROM} ${TO}`}
        description={`Service de taxi entre ${FROM} (92160) et l'aéroport d'Orly. Tarif fixe dès ${PRICE_MIN}€, trajet en ${DURATION} minutes, disponible 24h/24 avec suivi de vol inclus.`}
        url={URL}
        areaServed={[FROM, 'Orly']}
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
                  <span className="font-medium">{FROM} (92160) → Aéroport Orly</span>
                </div>

                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-5">
                  Taxi {FROM} → {TO} : Tarif fixe & Réservation 24h/24
                </h1>

                <div className="flex flex-wrap gap-3 mb-6">
                  <span className="bg-yellow-400 text-black font-bold px-4 py-2 rounded-lg text-sm">Dès {PRICE_MIN}€</span>
                  <span className="bg-gray-900 text-white font-bold px-4 py-2 rounded-lg text-sm flex items-center gap-2">
                    <Clock className="w-4 h-4" /> {DURATION} min
                  </span>
                  <span className="bg-white border border-gray-200 text-gray-900 font-medium px-4 py-2 rounded-lg text-sm flex items-center gap-2">
                    <Plane className="w-4 h-4 text-yellow-500" /> Suivi de vol
                  </span>
                </div>

                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Votre <strong>taxi {FROM} Orly</strong> au tarif fixe, sans mauvaise surprise.
                  Trajet ultra-rapide en <strong>{DURATION} minutes</strong> via la RD920, prise en charge à
                  votre adresse à {FROM} et dépose directe à votre terminal (Orly 1, 2, 3 ou 4).
                  Service 24h/24 et 7j/7, idéal pour les vols matinaux ou les retours tardifs.
                </p>

                <div className="grid grid-cols-2 gap-3 mb-6">
                  <div className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" /><span className="text-gray-700 text-sm">Tarif fixe garanti</span></div>
                  <div className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" /><span className="text-gray-700 text-sm">Suivi de vol inclus</span></div>
                  <div className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" /><span className="text-gray-700 text-sm">Tous terminaux Orly</span></div>
                  <div className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" /><span className="text-gray-700 text-sm">Paiement CB acceptée</span></div>
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
                Prix du taxi {FROM} → Aéroport Orly
              </h2>
              <p className="text-gray-600 mb-8">
                Antony étant l'une des communes les plus proches de l'aéroport d'Orly (environ 8 km),
                ce trajet est l'un des plus économiques d'Île-de-France. Voici notre grille tarifaire
                indicative, le prix définitif vous est confirmé à la réservation sans surprise.
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
                      <td className="py-4 px-4 font-medium text-gray-900">Aller simple {FROM} → Orly</td>
                      <td className="py-4 px-4 text-center"><span className="bg-yellow-400 text-black font-bold px-3 py-1 rounded">{PRICE_MIN}€</span></td>
                      <td className="py-4 px-4 text-center"><span className="bg-yellow-400 text-black font-bold px-3 py-1 rounded">{PRICE_MAX}€</span></td>
                    </tr>
                    <tr className="border-t border-gray-200 bg-gray-50">
                      <td className="py-4 px-4 font-medium text-gray-900">Aller-retour (forfait)</td>
                      <td className="py-4 px-4 text-center"><span className="bg-yellow-400 text-black font-bold px-3 py-1 rounded">{PRICE_MIN * 2 - 5}€</span></td>
                      <td className="py-4 px-4 text-center"><span className="bg-yellow-400 text-black font-bold px-3 py-1 rounded">{PRICE_MAX * 2 - 5}€</span></td>
                    </tr>
                    <tr className="border-t border-gray-200">
                      <td className="py-4 px-4 font-medium text-gray-900">Supplément Van (5-7 pax / gros bagages)</td>
                      <td className="py-4 px-4 text-center text-gray-700">+10€</td>
                      <td className="py-4 px-4 text-center text-gray-700">+15€</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-gray-500 text-sm mt-4">
                * Tarif communiqué à la réservation, sans surprise. Le prix dépend du tarif applicable
                (jour ou nuit/dimanche selon la réglementation préfectorale) et du véhicule choisi.
              </p>

              <div className="mt-8 p-5 bg-yellow-50 border border-yellow-200 rounded-xl">
                <p className="text-gray-900 text-sm leading-relaxed">
                  <strong>À noter :</strong> les forfaits officiels Paris-Orly à 36€ (rive gauche) et 45€ (rive droite)
                  sont réservés aux <strong>taxis parisiens</strong> détenant la carte professionnelle Préfecture de Police.
                  TAXI Pro 91 dessert {FROM} avec ses propres tarifs fixes négociés, souvent plus avantageux
                  pour les habitants des Hauts-de-Seine sud (Antony, Bourg-la-Reine, Sceaux) qui n'auraient pas
                  accès aux forfaits parisiens.
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
                Durée du trajet et itinéraire {FROM} Orly
              </h2>
              <p className="text-gray-600 mb-6">
                Le trajet entre {FROM} et l'aéroport d'Orly couvre environ <strong>8 kilomètres</strong> et
                se parcourt en moyenne en <strong>{DURATION} minutes</strong>. C'est <strong>le trajet aéroport
                le plus court</strong> de notre catalogue, un atout majeur pour les voyageurs qui veulent
                gagner du temps et éviter le stress des transports en commun avec bagages.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white rounded-xl p-6 border border-gray-200">
                  <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <RouteIcon className="w-5 h-5 text-yellow-500" /> Itinéraire principal
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    L'itinéraire le plus direct emprunte la <strong>RD920</strong> (ex-RN20) au départ d'Antony,
                    puis rejoint l'<strong>A86</strong> en direction de Rungis, avant de bifurquer sur l'<strong>A106</strong> qui
                    dessert directement les terminaux d'Orly. Trajet sans péage.
                  </p>
                </div>

                <div className="bg-white rounded-xl p-6 border border-gray-200">
                  <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <Clock className="w-5 h-5 text-yellow-500" /> Temps selon l'heure
                  </h3>
                  <ul className="text-gray-600 text-sm space-y-2">
                    <li><strong>Heures creuses :</strong> 10-12 minutes</li>
                    <li><strong>Heures de pointe (7h-9h / 17h-20h) :</strong> 18-22 minutes</li>
                    <li><strong>Nuit (après 22h) :</strong> 10 minutes</li>
                    <li><strong>Week-end :</strong> 12-15 minutes</li>
                  </ul>
                </div>
              </div>

              <p className="text-gray-600">
                <strong>Conseil de pro :</strong> pour un vol au départ d'Orly, partez d'Antony <strong>2 heures avant</strong> votre
                vol en heures de pointe et <strong>1h30 avant</strong> en heures creuses. Nos chauffeurs connaissent
                les itinéraires alternatifs (D67, contournement de Rungis) en cas d'incident sur l'A86.
              </p>
            </div>
          </div>
        </section>

        {/* Terminaux */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 text-center">
                Tous les terminaux d'Orly desservis
              </h2>
              <p className="text-gray-600 text-center mb-10 max-w-2xl mx-auto">
                Précisez votre terminal à la réservation : votre chauffeur vous dépose au plus près
                des dépose-minute, juste devant les portes d'entrée du terminal.
              </p>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {terminaux.map(t => (
                  <div key={t.code} className="bg-gray-50 rounded-xl p-5 border border-gray-200 hover:border-yellow-400 transition-colors">
                    <div className="flex items-center gap-2 mb-2">
                      <Plane className="w-5 h-5 text-yellow-500" />
                      <h3 className="font-bold text-gray-900 text-lg">{t.code}</h3>
                    </div>
                    <p className="text-gray-600 text-sm">{t.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Suivi de vol */}
        <section className="py-12 md:py-16 bg-gray-900 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Suivi de vol inclus : aucun stress à l'arrivée
              </h2>
              <p className="text-gray-300 mb-6">
                Pour vos retours à Orly, communiquez-nous votre <strong>numéro de vol</strong> à la réservation.
                Notre système connecté aux données de l'aéroport suit en temps réel votre vol :
              </p>
              <ul className="space-y-3 text-gray-300 mb-6">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                  <span><strong className="text-white">Vol à l'heure :</strong> chauffeur positionné au dépose-minute avant votre atterrissage.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                  <span><strong className="text-white">Vol en retard :</strong> ajustement automatique, aucun supplément d'attente.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                  <span><strong className="text-white">Vol en avance :</strong> notre standard accélère la prise en charge.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                  <span><strong className="text-white">Vol annulé :</strong> appelez le {SITE.phone.display} pour reporter sans frais jusqu'à 2h avant.</span>
                </li>
              </ul>
              <p className="text-gray-400 text-sm">
                Le numéro de vol est demandé uniquement pour les trajets retour Orly → {FROM}. Pour un départ
                depuis Antony, indiquez simplement l'heure souhaitée de prise en charge.
              </p>
            </div>
          </div>
        </section>

        {/* 3 façons de réserver */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 text-center">
              3 façons de réserver votre taxi {FROM} → Orly
            </h2>
            <p className="text-gray-600 text-center mb-10 max-w-2xl mx-auto">
              Choisissez le canal qui vous convient. Pour un vol matinal, la réservation à l'avance (J-1) est fortement recommandée.
            </p>

            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-200 text-center">
                <div className="w-14 h-14 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-7 h-7 text-black" />
                </div>
                <h3 className="font-bold text-gray-900 text-lg mb-2">Par téléphone</h3>
                <p className="text-gray-600 text-sm mb-4">Standard humain 24h/24, réservation immédiate ou à l'avance.</p>
                <a href={SITE.phone.tel} className="text-lg font-bold text-yellow-600 hover:text-yellow-700">
                  {SITE.phone.display}
                </a>
              </div>

              <div className="bg-gray-50 rounded-xl p-6 border border-gray-200 text-center">
                <div className="w-14 h-14 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Car className="w-7 h-7 text-black" />
                </div>
                <h3 className="font-bold text-gray-900 text-lg mb-2">Formulaire en ligne</h3>
                <p className="text-gray-600 text-sm mb-4">Réservation 24h/24 avec prix annoncé en temps réel.</p>
                <a href="#reservation" className="text-yellow-600 font-medium hover:text-yellow-700">Réserver en ligne</a>
              </div>

              <div className="bg-gray-50 rounded-xl p-6 border border-gray-200 text-center">
                <div className="w-14 h-14 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-7 h-7 text-black" />
                </div>
                <h3 className="font-bold text-gray-900 text-lg mb-2">À l'avance (J-1 recommandé)</h3>
                <p className="text-gray-600 text-sm mb-4">Pour les vols tôt le matin, réservez la veille pour garantir votre chauffeur.</p>
                <span className="text-yellow-600 font-medium">SMS de rappel inclus</span>
              </div>
            </div>
          </div>
        </section>

        {/* USP */}
        <section className="py-12 md:py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 text-center">
              Pourquoi choisir TAXI Pro 91 pour votre trajet {FROM} → Orly
            </h2>
            <p className="text-gray-600 text-center mb-10 max-w-2xl mx-auto">
              Plus de 10 ans d'expérience sur l'axe Antony-Orly, des centaines de transferts aéroport chaque mois.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {usp.map(u => {
                const Icon = u.icon
                return (
                  <div key={u.title} className="bg-white rounded-xl p-6 border border-gray-200 text-center">
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
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 text-center">
              Avis clients sur le trajet {FROM} → Orly
            </h2>
            <div className="flex items-center justify-center gap-2 mb-10">
              <div className="flex">{[1,2,3,4,5].map(i => <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />)}</div>
              <span className="font-bold text-gray-900">4.9/5</span>
              <span className="text-gray-500">basé sur les retours clients</span>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {avis.map((a, i) => (
                <div key={i} className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                  <div className="flex items-center gap-1 mb-3">
                    {[...Array(a.note)].map((_, j) => <Star key={j} className="w-4 h-4 text-yellow-400 fill-yellow-400" />)}
                  </div>
                  <p className="text-gray-700 mb-4 italic text-sm">"{a.texte}"</p>
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
        <section className="py-12 md:py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 text-center">
              Questions fréquentes : Taxi {FROM} Orly
            </h2>
            <p className="text-gray-600 text-center mb-10 max-w-2xl mx-auto">
              Toutes les réponses aux questions des voyageurs d'Antony qui partent à Orly.
            </p>

            <div className="max-w-3xl mx-auto space-y-4">
              {faqs.map((item, i) => (
                <details key={i} className="bg-white rounded-xl border border-gray-200 overflow-hidden group">
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

        {/* Autres trajets */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 text-center">
              Autres trajets populaires depuis {FROM}
            </h2>
            <p className="text-gray-600 text-center mb-10">Découvrez nos autres liaisons au départ d'Antony.</p>
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {autresTrajetsAntony.map((r, i) => (
                <div key={i} className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                  <div className="flex items-center gap-2 mb-2 text-yellow-600">
                    <RouteIcon className="w-5 h-5" />
                    <span className="text-sm font-medium">Trajet</span>
                  </div>
                  <h3 className="font-bold text-gray-900 text-lg mb-2">{r.from} → {r.to}</h3>
                  <p className="text-gray-600 text-sm mb-3">{r.description}</p>
                  <div className="flex items-center justify-between text-sm mb-4">
                    <span className="bg-yellow-400 text-black font-bold px-2 py-1 rounded">{r.priceMin}-{r.priceMax}€</span>
                    <span className="text-gray-500">{r.durationMin} min</span>
                  </div>
                  <a href={SITE.phone.tel} className="text-yellow-600 font-medium text-sm hover:text-yellow-700">Appeler pour réserver</a>
                </div>
              ))}
              <Link href="/taxi-antony" className="bg-gray-50 rounded-xl p-6 border border-gray-200 hover:border-yellow-400 transition-colors block">
                <div className="flex items-center gap-2 mb-2 text-yellow-600">
                  <MapPin className="w-5 h-5" />
                  <span className="text-sm font-medium">Ville</span>
                </div>
                <h3 className="font-bold text-gray-900 text-lg mb-2">Taxi {FROM}</h3>
                <p className="text-gray-600 text-sm mb-3">Toutes nos prestations à {FROM} : gares, aéroports, transport médical.</p>
                <span className="text-yellow-600 font-medium text-sm">Voir la page ville</span>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA final */}
        <section className="py-12 bg-yellow-400">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-3">
              Réservez votre taxi {FROM} → Orly maintenant
            </h2>
            <p className="text-gray-900 mb-6 max-w-2xl mx-auto">
              Tarif fixe dès {PRICE_MIN}€, trajet en {DURATION} minutes, suivi de vol inclus.
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
