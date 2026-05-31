import { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/Header'
import Breadcrumb from '@/components/Breadcrumb'
import Footer from '@/components/Footer'
import BookingForm from '@/components/BookingForm'
import { FAQSchema, ServiceSchema } from '@/components/seo/Schemas'
import { SITE } from '@/lib/site'
import { popularRoutes } from '@/lib/routes'
import { Phone, Clock, CheckCircle, Star, CreditCard, Shield, Plane, HelpCircle, MapPin, Car, Briefcase, Route as RouteIcon } from 'lucide-react'

const ROUTE = popularRoutes.find(r => r.slug === 'taxi-les-ulis-orly')!
const FROM = ROUTE.from
const TO = ROUTE.to
const PRICE_MIN = ROUTE.priceMin
const PRICE_MAX = ROUTE.priceMax
const DURATION = ROUTE.durationMin
const URL = `${SITE.url}/taxi-les-ulis-orly`

export const metadata: Metadata = {
  title: `Taxi ${FROM} → Aéroport Orly : Tarif dès ${PRICE_MIN}€ & Réservation 24h/24`,
  description: `Taxi ${FROM} vers Aéroport Orly : tarif fixe dès ${PRICE_MIN}€, trajet en ${DURATION} min via RN118 et A10, suivi de vol inclus. Réservation 24h/24 au ${SITE.phone.display}. Courtaboeuf, ZA, gare RER B Orsay desservis.`,
  openGraph: {
    title: `Taxi ${FROM} → Orly : Dès ${PRICE_MIN}€ • ${DURATION} min`,
    description: `Transfert taxi ${FROM} Aéroport d'Orly. Tarif fixe, suivi de vol, prise en charge 24h/24 à Courtaboeuf et dans tout Les Ulis.`,
    url: URL,
  },
  alternates: { canonical: URL },
}

const faqs = [
  {
    q: `Quel est le prix d'un taxi ${FROM} → Aéroport Orly ?`,
    a: `Le prix d'un taxi de ${FROM} vers l'aéroport d'Orly est compris entre ${PRICE_MIN}€ et ${PRICE_MAX}€ selon l'heure (tarif jour ou tarif nuit/dimanche/jours fériés) et les conditions de circulation. Ce tarif est fixe, communiqué à la réservation et inclut la prise en charge à votre adresse (centre commercial Ulis 2, ZA Courtaboeuf, quartier résidentiel), l'attente au terminal et l'aide aux bagages.`,
  },
  {
    q: `Combien de temps dure le trajet ${FROM} Orly en taxi ?`,
    a: `Le trajet ${FROM} → Aéroport d'Orly dure en moyenne ${DURATION} minutes en taxi via la RN118 puis l'A10 et l'A106. Aux heures de pointe (7h-9h et 17h-20h), comptez 30 à 45 minutes en raison du trafic intense sur la N118 (axe historiquement chargé). En heures creuses ou la nuit, le trajet se fait en 20 minutes.`,
  },
  {
    q: `Comment réserver un taxi de ${FROM} vers Orly ?`,
    a: `Trois options : appelez le ${SITE.phone.display} disponible 24h/24, utilisez le formulaire de réservation en ligne (confirmation immédiate par email et SMS), ou réservez à l'avance pour un trajet matinal. Pour un vol tôt le matin depuis Les Ulis ou Courtaboeuf, nous recommandons de réserver au moins la veille (J-1).`,
  },
  {
    q: `Desservez-vous la ZA de Courtaboeuf ?`,
    a: `Oui, TAXI Pro 91 dessert intégralement la ZA de Courtaboeuf, première zone d'activité économique d'Île-de-France. Nous intervenons pour toutes les entreprises du parc (Hewlett Packard, Sanofi, Bull, ATOS, Ingenico, etc.) avec facturation entreprise possible. Précisez le bâtiment ou l'adresse exacte à la réservation.`,
  },
  {
    q: 'Quels moyens de paiement acceptez-vous ?',
    a: `Tous nos taxis acceptent la carte bancaire (Visa, Mastercard, American Express), les espèces et les bons de transport CPAM. La facturation entreprise est disponible sur demande pour vos déplacements professionnels depuis Les Ulis vers Orly, particulièrement utile pour les sociétés de Courtaboeuf.`,
  },
  {
    q: `Proposez-vous l'aller-retour ${FROM} ↔ Orly ?`,
    a: `Oui, nous proposons un forfait aller-retour ${FROM} ↔ Orly à tarif préférentiel. Très demandé par les cadres et collaborateurs des entreprises de Courtaboeuf pour leurs déplacements pros courts. Indiquez les horaires aller et retour à la réservation ; le chauffeur vous attend à votre vol retour avec suivi en temps réel.`,
  },
  {
    q: 'Que se passe-t-il si mon vol est retardé ?',
    a: `Aucun stress : nous suivons votre vol en temps réel grâce au numéro de vol communiqué à la réservation. Si votre avion a du retard, nous adaptons automatiquement l'heure de prise en charge à Orly, sans supplément d'attente. Si votre vol est annulé, prévenez-nous au ${SITE.phone.display} pour annuler ou reporter.`,
  },
  {
    q: 'Tous les terminaux d\'Orly sont-ils desservis ?',
    a: `Oui, nous desservons l'ensemble des terminaux d'Orly : Orly 1, Orly 2, Orly 3 et Orly 4. Précisez votre terminal à la réservation pour une dépose au plus près de votre porte d'embarquement.`,
  },
  {
    q: 'Le taxi est-il plus rapide que le RER B depuis Les Ulis ?',
    a: `Oui, largement. Depuis Les Ulis, il faut d'abord rejoindre la gare RER B d'Orsay-Ville ou du Guichet (en bus ou voiture), puis prendre le RER B jusqu'à Antony, puis l'Orlyval. Comptez 1h à 1h15 au total. Notre taxi vous dépose directement à votre terminal en ${DURATION} minutes, sans rupture de charge.`,
  },
]

const terminaux = [
  { code: 'Orly 1', desc: 'Vols low-cost et certaines compagnies européennes' },
  { code: 'Orly 2', desc: 'Vols domestiques et internationaux Air France principalement' },
  { code: 'Orly 3', desc: 'Vols court et moyen-courrier, compagnies européennes' },
  { code: 'Orly 4', desc: 'Vols internationaux long-courrier et destinations Outre-mer' },
]

const usp = [
  { icon: Clock, title: 'Disponible 24h/24', desc: `Vols tôt le matin, vols de nuit, week-ends : nous sommes là à toute heure pour votre trajet ${FROM} Orly.` },
  { icon: Plane, title: 'Suivi de vol inclus', desc: 'Votre numéro de vol est tracké en temps réel : aucune attente facturée en cas de retard.' },
  { icon: CreditCard, title: 'Tarif fixe sans surprise', desc: `Prix communiqué à la réservation, entre ${PRICE_MIN}€ et ${PRICE_MAX}€. Pas de compteur qui tourne dans les bouchons de la N118.` },
  { icon: Briefcase, title: 'Expert entreprises Courtaboeuf', desc: 'Facturation centralisée pour les entreprises du parc, chauffeurs habitués aux navettes pros.' },
]

const avis = [
  { nom: 'Antoine F. (Les Ulis nord)', note: 5, texte: `Réservé pour un vol à 8h depuis Orly 4. Le chauffeur était à l'heure malgré les bouchons habituels de la N118, trajet sécurisé, dépose pile à l'entrée du terminal. Tarif annoncé respecté.`, date: 'Mars 2025' },
  { nom: 'Carole D. (Courtaboeuf)', note: 5, texte: `Mon employeur passe par TAXI Pro 91 pour nos déplacements pros vers Orly. Toujours impeccable : ponctualité, voiture propre, chauffeur courtois, et la facture entreprise arrive direct au service comptable.`, date: 'Février 2025' },
  { nom: 'Bruno M. (Les Ulis centre)', note: 5, texte: `Voyage en famille, 4 personnes + bagages volumineux. Le Van réservé était nickel, plus confortable que de prendre 2 voitures. Bon rapport qualité-prix vers Orly.`, date: 'Janvier 2025' },
  { nom: 'Léa P. (résidentielle Les Amonts)', note: 5, texte: `Vol retour à 23h depuis Lisbonne, retardé d'une heure. Le chauffeur était bien là à mon arrivée à Orly 1, malgré le décalage. Aucun supplément, pro de bout en bout.`, date: 'Avril 2025' },
]

const autresTrajets = popularRoutes.filter(r => r.fromSlug === 'les-ulis' && r.slug !== 'taxi-les-ulis-orly')

export default function TaxiLesUlisOrly() {
  return (
    <>
      <Header />
      <Breadcrumb items={[{ name: `Taxi ${FROM} → ${TO}` }]} />

      <ServiceSchema
        name={`Taxi ${FROM} ${TO}`}
        description={`Service de taxi entre ${FROM} (91940) et l'aéroport d'Orly. Tarif fixe dès ${PRICE_MIN}€, trajet en ${DURATION} minutes via RN118 et A10, disponible 24h/24 avec suivi de vol inclus.`}
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
                  <span className="font-medium">{FROM} (91940) → Aéroport Orly</span>
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
                    <Plane className="w-4 h-4 text-yellow-500" /> Suivi de vol
                  </span>
                </div>

                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Votre <strong>taxi {FROM} Orly</strong> au tarif fixe, sans surprise.
                  Trajet en <strong>{DURATION} minutes</strong> via la RN118 puis l'A10 et l'A106, prise en charge à votre adresse
                  aux Ulis ou dans la <strong>ZA de Courtaboeuf</strong> (1ère ZAE d'IDF) et dépose directe à votre terminal. Service 24h/24.
                </p>

                <div className="grid grid-cols-2 gap-3 mb-6">
                  <div className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" /><span className="text-gray-700 text-sm">Tarif fixe garanti</span></div>
                  <div className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" /><span className="text-gray-700 text-sm">Suivi de vol inclus</span></div>
                  <div className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" /><span className="text-gray-700 text-sm">Tous terminaux Orly</span></div>
                  <div className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" /><span className="text-gray-700 text-sm">Facturation entreprise</span></div>
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
                Tarification claire et fixe, communiquée lors de la réservation. Aucun supplément caché.
                Voici notre grille indicative pour le trajet {FROM} Orly, applicable depuis tous les quartiers
                des Ulis (centre, Les Amonts, Bathes) et l'ensemble de la ZA de Courtaboeuf.
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
                * Tarif communiqué et confirmé à la réservation, sans surprise. Le prix dépend du tarif applicable
                (jour ou nuit/dimanche selon la réglementation préfectorale) et du véhicule choisi.
              </p>

              <div className="mt-8 p-5 bg-yellow-50 border border-yellow-200 rounded-xl">
                <p className="text-gray-900 text-sm leading-relaxed">
                  <strong>À noter :</strong> les forfaits officiels Paris-Orly à 36€ (rive gauche) et 45€ (rive droite)
                  sont réservés aux <strong>taxis parisiens</strong> titulaires de la carte professionnelle Préfecture de Police.
                  TAXI Pro 91 est une compagnie de taxis basée en <strong>Essonne (91)</strong> avec ses propres tarifs fixes
                  négociés pour vos trajets Les Ulis-Orly, souvent plus avantageux pour les habitants et entreprises de l'Essonne.
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
                Le trajet entre {FROM} et l'aéroport d'Orly couvre environ <strong>25 kilomètres</strong> et
                se parcourt en moyenne en <strong>{DURATION} minutes</strong>. Les Ulis, située à l'extrémité ouest
                du plateau de Saclay, accède rapidement à la <strong>RN118</strong> qui rejoint ensuite l'<strong>A10</strong>
                puis l'<strong>A106</strong> jusqu'à Orly. Un itinéraire fluide en dehors des heures de pointe.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white rounded-xl p-6 border border-gray-200">
                  <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <RouteIcon className="w-5 h-5 text-yellow-500" /> Itinéraire principal
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Au départ des Ulis ou de Courtaboeuf, l'itinéraire emprunte la <strong>RN118</strong>
                    en direction de Paris, puis l'<strong>A10</strong> à hauteur de Massy, avant de bifurquer sur
                    l'<strong>A106</strong> jusqu'aux terminaux d'Orly. Aucun péage sur ce parcours.
                  </p>
                </div>

                <div className="bg-white rounded-xl p-6 border border-gray-200">
                  <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <Clock className="w-5 h-5 text-yellow-500" /> Temps selon l'heure
                  </h3>
                  <ul className="text-gray-600 text-sm space-y-2">
                    <li><strong>Heures creuses :</strong> 20-25 minutes</li>
                    <li><strong>Heures de pointe (7h-9h / 17h-20h) :</strong> 30-45 minutes</li>
                    <li><strong>Nuit (après 22h) :</strong> 20 minutes</li>
                    <li><strong>Week-end :</strong> 22-28 minutes</li>
                  </ul>
                </div>
              </div>

              <p className="text-gray-600 mb-6">
                <strong>Conseil de pro :</strong> pour un vol au départ d'Orly, partez des Ulis <strong>2h30 avant</strong> votre
                vol en semaine aux heures de pointe (la N118 peut être très chargée), <strong>1h45 avant</strong> en heures creuses.
                Nos chauffeurs connaissent les itinéraires alternatifs (par la N20 ou la D188 via Saulx-les-Chartreux) en cas d'incident.
              </p>

              <p className="text-gray-600">
                Pour les collaborateurs de la <strong>ZA de Courtaboeuf</strong>, nous proposons un service de navette aéroport
                régulier pour les déplacements professionnels. La gare RER B <strong>Orsay-Ville</strong> et celle du <strong>Guichet</strong>
                sont également desservies pour les voyageurs qui souhaitent rejoindre Les Ulis depuis Paris avant de partir vers Orly.
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
                des dépose-minute, juste devant les portes d'entrée.
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
                Pour vos retours à Orly, nous vous demandons votre <strong>numéro de vol</strong> à la réservation.
                Notre système connecté aux données de l'aéroport suit en temps réel votre vol :
              </p>
              <ul className="space-y-3 text-gray-300 mb-6">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                  <span><strong className="text-white">Vol à l'heure :</strong> votre chauffeur est positionné au dépose-minute du terminal avant votre atterrissage.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                  <span><strong className="text-white">Vol en retard :</strong> l'heure de prise en charge est automatiquement ajustée. Aucun supplément d'attente facturé.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                  <span><strong className="text-white">Vol en avance :</strong> notre standard vous prévient et accélère la prise en charge.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                  <span><strong className="text-white">Vol annulé :</strong> contactez-nous au {SITE.phone.display} pour reporter ou annuler sans frais (jusqu'à 2h avant).</span>
                </li>
              </ul>
              <p className="text-gray-400 text-sm">
                Le numéro de vol est demandé uniquement pour les trajets retour Orly → {FROM}. Pour un départ depuis {FROM}, indiquez simplement l'heure souhaitée de prise en charge.
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
              Partenaire des entreprises de Courtaboeuf depuis plus de 10 ans, chauffeurs experts de la RN118 et de ses alternatives.
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
              <span className="font-bold text-gray-900">Avis vérifiés</span>
              <span className="text-gray-500">Avis clients vérifiés</span>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {avis.map((a, i) => (
                <div key={i} className="bg-gray-50 rounded-xl p-6 border border-gray-200">
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
        <section className="py-12 md:py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 text-center">
              Questions fréquentes : Taxi {FROM} Orly
            </h2>
            <p className="text-gray-600 text-center mb-10 max-w-2xl mx-auto">
              Toutes les réponses aux questions des voyageurs qui réservent ce trajet.
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
            <p className="text-gray-600 text-center mb-10">Découvrez nos autres liaisons au départ des Ulis et de l'Essonne.</p>
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {autresTrajets.map(r => (
                <Link key={r.slug} href={`/${r.slug}`} className="bg-gray-50 rounded-xl p-6 border border-gray-200 hover:border-yellow-400 transition-colors block">
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
              <Link href="/taxi-essonne-disneyland" className="bg-gray-50 rounded-xl p-6 border border-gray-200 hover:border-yellow-400 transition-colors block">
                <div className="flex items-center gap-2 mb-2 text-yellow-600">
                  <RouteIcon className="w-5 h-5" />
                  <span className="text-sm font-medium">Trajet</span>
                </div>
                <h3 className="font-bold text-gray-900 text-lg mb-2">Les Ulis → Disneyland Paris</h3>
                <p className="text-gray-600 text-sm mb-3">Transfert direct depuis Les Ulis vers Marne-la-Vallée.</p>
                <div className="flex items-center justify-between text-sm">
                  <span className="bg-yellow-400 text-black font-bold px-2 py-1 rounded">100-140€</span>
                  <span className="text-gray-500">65 min</span>
                </div>
              </Link>
              <Link href="/taxi-les-ulis" className="bg-gray-50 rounded-xl p-6 border border-gray-200 hover:border-yellow-400 transition-colors block">
                <div className="flex items-center gap-2 mb-2 text-yellow-600">
                  <MapPin className="w-5 h-5" />
                  <span className="text-sm font-medium">Ville</span>
                </div>
                <h3 className="font-bold text-gray-900 text-lg mb-2">Taxi {FROM}</h3>
                <p className="text-gray-600 text-sm mb-3">Toutes nos prestations aux Ulis et à Courtaboeuf : aéroports, gares, transport pro.</p>
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
              Tarif fixe dès {PRICE_MIN}€, suivi de vol inclus, prise en charge 24h/24. Une seule promesse : la ponctualité.
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
