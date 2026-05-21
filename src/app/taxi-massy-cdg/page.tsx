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

const ROUTE = popularRoutes.find(r => r.slug === 'taxi-massy-cdg')!
const FROM = ROUTE.from
const TO = ROUTE.to
const PRICE_MIN = ROUTE.priceMin
const PRICE_MAX = ROUTE.priceMax
const DURATION = ROUTE.durationMin
const URL = `${SITE.url}/taxi-massy-cdg`

export const metadata: Metadata = {
  title: `Taxi ${FROM} → Aéroport CDG (Roissy) — Tarif dès ${PRICE_MIN}€ & Réservation 24h/24`,
  description: `Taxi ${FROM} vers Roissy Charles de Gaulle : tarif fixe dès ${PRICE_MIN}€, trajet ${DURATION} min, suivi de vol inclus. Tous terminaux T1, T2A-G, T3 desservis. Appelez le ${SITE.phone.display}.`,
  openGraph: {
    title: `Taxi ${FROM} → CDG — Dès ${PRICE_MIN}€ • ${DURATION} min`,
    description: `Transfert taxi ${FROM} Roissy CDG : tarif fixe, suivi de vol, prise en charge 24h/24, tous terminaux.`,
    url: URL,
  },
  alternates: { canonical: URL },
}

const faqs = [
  {
    q: `Quel est le prix d'un taxi ${FROM} → Aéroport CDG ?`,
    a: `Le tarif d'un taxi de ${FROM} vers l'aéroport Paris-Charles de Gaulle (Roissy) est compris entre ${PRICE_MIN}€ et ${PRICE_MAX}€ selon l'heure (jour ou nuit/dimanche/jours fériés) et le trafic. Ce tarif est fixe, communiqué à la réservation et inclut la prise en charge, l'attente au terminal et l'aide aux bagages. Pas de surprise au compteur.`,
  },
  {
    q: `Combien de temps dure le trajet ${FROM} CDG en taxi ?`,
    a: `Le trajet ${FROM} → Roissy CDG dure en moyenne ${DURATION} minutes via l'A6, l'A86 puis l'A1. Aux heures de pointe (7h-9h, 17h-20h) ou en cas d'incident sur le périphérique francilien, comptez 1h10 à 1h30. La nuit ou tôt le matin, le trajet peut tomber à 40 minutes.`,
  },
  {
    q: `Comment réserver un taxi ${FROM} → CDG ?`,
    a: `Trois options : appelez le ${SITE.phone.display} (24h/24), réservez en ligne avec confirmation immédiate, ou planifiez à l'avance. Pour un vol au départ de Roissy, la réservation au moins la veille (J-1) est fortement recommandée afin de garantir votre prise en charge à l'heure souhaitée.`,
  },
  {
    q: 'Quels moyens de paiement acceptez-vous ?',
    a: `Tous nos véhicules acceptent la carte bancaire (Visa, Mastercard, American Express), les espèces et les bons de transport CPAM. Pour les déplacements professionnels vers CDG, une facturation entreprise mensuelle est possible sur demande.`,
  },
  {
    q: 'Proposez-vous l\'aller-retour Massy ↔ CDG ?',
    a: `Oui, un forfait aller-retour ${FROM} ↔ Roissy CDG est disponible à tarif préférentiel (économie de 5 à 10€ par rapport à deux trajets simples). Le chauffeur vous récupère au terminal à votre vol retour avec suivi en temps réel — idéal pour un voyage de quelques jours.`,
  },
  {
    q: 'Que se passe-t-il si mon vol CDG est retardé ?',
    a: `Nous suivons votre vol en temps réel via le numéro de vol communiqué à la réservation. En cas de retard à l'arrivée à Roissy, l'heure de prise en charge est automatiquement ajustée — aucun supplément d'attente n'est facturé. En cas d'annulation, prévenez-nous au ${SITE.phone.display} pour reporter sans frais.`,
  },
  {
    q: 'Tous les terminaux de Roissy CDG sont-ils desservis ?',
    a: `Oui, nous desservons l'ensemble des terminaux : T1, T2A, T2B, T2C, T2D, T2E, T2F, T2G et T3. Précisez votre terminal et porte d'embarquement à la réservation pour une dépose au plus près de votre comptoir d'enregistrement ou de la sortie des bagages.`,
  },
  {
    q: 'Y a-t-il un supplément pour les bagages ou les groupes ?',
    a: `Les bagages standards sont inclus dans le tarif. Pour les groupes jusqu'à 7 passagers, les familles avec poussette, ou les bagages volumineux (skis, instruments, vélos démontés), nous proposons notre service Van avec un léger supplément à préciser à la réservation.`,
  },
]

const terminaux = [
  { code: 'Terminal 1', desc: 'Vols internationaux : Lufthansa, United, Etihad, Turkish Airlines, Star Alliance' },
  { code: 'Terminal 2A / 2C', desc: 'Vols court et moyen-courrier : British Airways, Air Canada, certaines lignes Air France' },
  { code: 'Terminal 2B / 2D', desc: 'Compagnies européennes et Air France court-courrier' },
  { code: 'Terminal 2E (Halls K/L/M)', desc: 'Long-courriers Air France et SkyTeam : Asie, Amérique, Afrique' },
  { code: 'Terminal 2F', desc: 'Air France Schengen (vols européens et domestiques)' },
  { code: 'Terminal 2G', desc: 'HOP! et vols régionaux Air France' },
  { code: 'Terminal 3', desc: 'Compagnies low-cost : easyJet, Vueling, Transavia, Wizz Air' },
]

const usp = [
  { icon: Clock, title: 'Disponible 24h/24', desc: 'Vols de nuit, départs à 5h du matin, retours après minuit : présent à toute heure.' },
  { icon: Plane, title: 'Suivi de vol inclus', desc: 'Votre numéro de vol tracké en direct. Pas de stress en cas de retard ou d\'avance.' },
  { icon: CreditCard, title: 'Tarif fixe garanti', desc: `Entre ${PRICE_MIN}€ et ${PRICE_MAX}€ annoncé à la réservation. Pas de compteur, pas de mauvaise surprise.` },
  { icon: Shield, title: 'Chauffeurs experts Roissy', desc: 'Nos chauffeurs connaissent parfaitement les itinéraires CDG et les alternatives en cas de bouchon.' },
]

const avis = [
  { nom: 'Jean B. (Massy-Opéra)', note: 5, texte: `Pris à 4h30 pour un vol long-courrier au T2E. Arrivé à 5h20 sans encombre via l'A6 / A1. Tarif annoncé respecté, chauffeur sympa, voiture impeccable. Recommandé pour CDG.`, date: 'Avril 2025' },
  { nom: 'Sophie M. (Atlantis)', note: 5, texte: `Aller-retour Massy ↔ CDG T1 pour un séminaire à Berlin. Forfait avantageux, chauffeur ponctuel à l'arrivée malgré 45 min de retard du vol. Suivi de vol au top.`, date: 'Mars 2025' },
  { nom: 'Marie L. (Massy-Verrières)', note: 5, texte: `J'ai testé les VTC pour Roissy, jamais plus. TAXI Pro 91 a un tarif fixe à 85€ contre 110-130€ en surge. Ponctualité parfaite à 5h du matin.`, date: 'Février 2025' },
  { nom: 'Pierre D. (Massy)', note: 5, texte: `Trajet en 55 minutes par l'A86, chauffeur a évité un gros bouchon sur l'A1 en passant par la Francilienne. Vrai professionnel qui connaît la route.`, date: 'Janvier 2025' },
]

const autresTrajets = popularRoutes.filter(r => r.fromSlug === 'massy' && r.slug !== 'taxi-massy-cdg')

export default function TaxiMassyCDG() {
  return (
    <>
      <Header />
      <Breadcrumb items={[{ name: `Taxi ${FROM} → ${TO}` }]} />

      <ServiceSchema
        name={`Taxi ${FROM} ${TO}`}
        description={`Service de taxi entre ${FROM} (91300) et l'aéroport Paris-Charles de Gaulle (Roissy). Tarif fixe dès ${PRICE_MIN}€, trajet en ${DURATION} minutes, disponible 24h/24 avec suivi de vol.`}
        url={URL}
        areaServed={[FROM, 'Roissy-en-France']}
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
                  <span className="font-medium">{FROM} (91300) → Roissy CDG (95700)</span>
                </div>

                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-5">
                  Taxi {FROM} → {TO} — Tarif fixe & Réservation 24h/24
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
                  Votre <strong>taxi {FROM} CDG</strong> au tarif fixe pour rejoindre Roissy en {DURATION} minutes
                  (hors trafic). Prise en charge à votre adresse, suivi du vol en temps réel, dépose directe à
                  votre terminal (T1, T2A-G ou T3). Service 24h/24 et 7j/7, idéal pour les vols matinaux ou
                  les retours tardifs.
                </p>

                <div className="grid grid-cols-2 gap-3 mb-6">
                  <div className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" /><span className="text-gray-700 text-sm">Tarif fixe garanti</span></div>
                  <div className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" /><span className="text-gray-700 text-sm">Suivi de vol inclus</span></div>
                  <div className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" /><span className="text-gray-700 text-sm">Tous terminaux CDG</span></div>
                  <div className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" /><span className="text-gray-700 text-sm">Service Van groupes</span></div>
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
                Prix du taxi {FROM} → Aéroport CDG
              </h2>
              <p className="text-gray-600 mb-8">
                Le trajet vers Roissy CDG est plus long que vers Orly (environ 50 km contre 12 km pour Orly).
                Voici notre grille tarifaire indicative pour le trajet {FROM} CDG. Le prix définitif vous est
                confirmé à la réservation, sans surprise au compteur ni supplément caché.
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
                      <td className="py-4 px-4 font-medium text-gray-900">Aller simple {FROM} → CDG</td>
                      <td className="py-4 px-4 text-center"><span className="bg-yellow-400 text-black font-bold px-3 py-1 rounded">{PRICE_MIN}€</span></td>
                      <td className="py-4 px-4 text-center"><span className="bg-yellow-400 text-black font-bold px-3 py-1 rounded">{PRICE_MAX}€</span></td>
                    </tr>
                    <tr className="border-t border-gray-200 bg-gray-50">
                      <td className="py-4 px-4 font-medium text-gray-900">Aller-retour (forfait)</td>
                      <td className="py-4 px-4 text-center"><span className="bg-yellow-400 text-black font-bold px-3 py-1 rounded">{PRICE_MIN * 2 - 10}€</span></td>
                      <td className="py-4 px-4 text-center"><span className="bg-yellow-400 text-black font-bold px-3 py-1 rounded">{PRICE_MAX * 2 - 10}€</span></td>
                    </tr>
                    <tr className="border-t border-gray-200">
                      <td className="py-4 px-4 font-medium text-gray-900">Supplément Van (5-7 pax / gros bagages)</td>
                      <td className="py-4 px-4 text-center text-gray-700">+15€</td>
                      <td className="py-4 px-4 text-center text-gray-700">+20€</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-gray-500 text-sm mt-4">
                * Tarif communiqué à la réservation, sans surprise. Le prix dépend du tarif applicable
                (jour ou nuit/dimanche selon la réglementation préfectorale), du véhicule et du trafic anticipé.
              </p>

              <div className="mt-8 p-5 bg-yellow-50 border border-yellow-200 rounded-xl">
                <p className="text-gray-900 text-sm leading-relaxed">
                  <strong>À noter :</strong> les forfaits officiels Paris-CDG à 56€ (rive gauche) et 65€ (rive droite)
                  sont réservés aux <strong>taxis parisiens</strong> détenant la carte professionnelle Préfecture de Police.
                  TAXI Pro 91 est une compagnie de taxis basée en <strong>Essonne (91)</strong> avec ses propres tarifs fixes
                  négociés pour vos trajets vers Roissy depuis le sud francilien — sans surprise et souvent plus
                  intéressants que les VTC en heures de pointe ou pendant les surge.
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
                Durée du trajet et itinéraire {FROM} CDG
              </h2>
              <p className="text-gray-600 mb-6">
                Le trajet entre {FROM} et l'aéroport Roissy Charles de Gaulle couvre environ <strong>50 kilomètres</strong> et
                se parcourt en moyenne en <strong>{DURATION} minutes</strong> hors trafic. C'est l'un des trajets aéroport
                les plus exigeants depuis le sud francilien — il nécessite de traverser ou contourner Paris.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white rounded-xl p-6 border border-gray-200">
                  <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <RouteIcon className="w-5 h-5 text-yellow-500" /> Itinéraire principal
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Notre itinéraire de référence emprunte l'<strong>A6</strong> au départ de {FROM},
                    puis l'<strong>A86</strong> (contournement est de Paris), avant de rejoindre
                    l'<strong>A1</strong> qui dessert directement Roissy CDG. C'est le parcours le plus
                    rapide en heures creuses.
                  </p>
                </div>

                <div className="bg-white rounded-xl p-6 border border-gray-200">
                  <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <Clock className="w-5 h-5 text-yellow-500" /> Temps selon l'heure
                  </h3>
                  <ul className="text-gray-600 text-sm space-y-2">
                    <li><strong>Heures creuses :</strong> 45-50 minutes</li>
                    <li><strong>Heures de pointe (7h-9h / 17h-20h) :</strong> 1h10 à 1h30</li>
                    <li><strong>Nuit (après 22h) :</strong> 40 minutes</li>
                    <li><strong>Week-end :</strong> 50-60 minutes</li>
                  </ul>
                </div>
              </div>

              <p className="text-gray-600 mb-4">
                <strong>Itinéraires alternatifs :</strong> en cas d'incident sur l'A86 (zone Créteil ou Rungis),
                nos chauffeurs basculent sur la <strong>Francilienne (N104)</strong> ou empruntent l'<strong>A104</strong> via
                Roissy-en-Brie. Pour les vols de nuit, le passage par l'A6b puis le périphérique est parfois
                plus rapide.
              </p>
              <p className="text-gray-600">
                <strong>Conseil de pro :</strong> pour un vol au départ de CDG, prévoyez <strong>3 heures avant</strong> votre
                vol en heures de pointe et <strong>2h30 avant</strong> en heures creuses — il faut intégrer la marge
                pour le check-in, les contrôles de sécurité et les déplacements internes au terminal (notamment T2E).
              </p>
            </div>
          </div>
        </section>

        {/* Terminaux */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 text-center">
                Tous les terminaux de Roissy CDG desservis
              </h2>
              <p className="text-gray-600 text-center mb-10 max-w-2xl mx-auto">
                Précisez votre terminal à la réservation : votre chauffeur vous dépose au plus près
                des dépose-minute, juste devant les portes d'entrée du terminal.
              </p>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
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
                Suivi de vol inclus : indispensable pour les vols long-courriers
              </h2>
              <p className="text-gray-300 mb-6">
                Roissy CDG accueille de nombreux vols long-courriers susceptibles d'arriver en retard.
                À la réservation, communiquez-nous votre <strong>numéro de vol</strong> : notre système
                connecté aux données aéroportuaires suit votre vol en temps réel et adapte l'heure de
                prise en charge sans aucun supplément.
              </p>
              <ul className="space-y-3 text-gray-300 mb-6">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                  <span><strong className="text-white">Vol à l'heure :</strong> chauffeur positionné au dépose-minute du terminal avant votre atterrissage.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                  <span><strong className="text-white">Vol en retard :</strong> ajustement automatique. Pas de surfacturation d'attente.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                  <span><strong className="text-white">Vol en avance :</strong> notre standard accélère la prise en charge.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                  <span><strong className="text-white">Vol annulé :</strong> appelez le {SITE.phone.display} pour reporter ou annuler sans frais jusqu'à 2h avant la prise en charge.</span>
                </li>
              </ul>
              <p className="text-gray-400 text-sm">
                Le numéro de vol n'est nécessaire que pour les trajets retour CDG → {FROM}. Pour un départ
                depuis {FROM}, indiquez l'heure souhaitée de prise en charge à votre domicile.
              </p>
            </div>
          </div>
        </section>

        {/* 3 façons de réserver */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 text-center">
              3 façons de réserver votre taxi {FROM} → CDG
            </h2>
            <p className="text-gray-600 text-center mb-10 max-w-2xl mx-auto">
              Choisissez le canal qui vous convient. Pour un vol matinal ou un long-courrier, la réservation à l'avance (J-1) est essentielle.
            </p>

            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-200 text-center">
                <div className="w-14 h-14 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-7 h-7 text-black" />
                </div>
                <h3 className="font-bold text-gray-900 text-lg mb-2">Par téléphone</h3>
                <p className="text-gray-600 text-sm mb-4">Standard humain disponible 24h/24, conseil personnalisé pour Roissy.</p>
                <a href={SITE.phone.tel} className="text-lg font-bold text-yellow-600 hover:text-yellow-700">
                  {SITE.phone.display}
                </a>
              </div>

              <div className="bg-gray-50 rounded-xl p-6 border border-gray-200 text-center">
                <div className="w-14 h-14 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Car className="w-7 h-7 text-black" />
                </div>
                <h3 className="font-bold text-gray-900 text-lg mb-2">Formulaire en ligne</h3>
                <p className="text-gray-600 text-sm mb-4">Réservation 24h/24 avec prix annoncé en temps réel et confirmation par email.</p>
                <a href="#reservation" className="text-yellow-600 font-medium hover:text-yellow-700">Réserver en ligne</a>
              </div>

              <div className="bg-gray-50 rounded-xl p-6 border border-gray-200 text-center">
                <div className="w-14 h-14 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-7 h-7 text-black" />
                </div>
                <h3 className="font-bold text-gray-900 text-lg mb-2">À l'avance (J-1 conseillé)</h3>
                <p className="text-gray-600 text-sm mb-4">Pour les vols tôt le matin ou en plein week-end, réservez la veille pour garantir votre chauffeur.</p>
                <span className="text-yellow-600 font-medium">SMS de rappel inclus</span>
              </div>
            </div>
          </div>
        </section>

        {/* USP */}
        <section className="py-12 md:py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 text-center">
              Pourquoi choisir TAXI Pro 91 pour votre trajet {FROM} → CDG
            </h2>
            <p className="text-gray-600 text-center mb-10 max-w-2xl mx-auto">
              Centaines de transferts CDG par an, des chauffeurs qui maîtrisent les pièges de l'A1 et de l'A86.
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
              Avis clients sur le trajet {FROM} → CDG
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
              Questions fréquentes — Taxi {FROM} CDG
            </h2>
            <p className="text-gray-600 text-center mb-10 max-w-2xl mx-auto">
              Toutes les réponses aux questions des voyageurs qui partent à Roissy CDG.
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
            <p className="text-gray-600 text-center mb-10">Découvrez nos autres liaisons au départ de {FROM}.</p>
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
              <Link href="/taxi-massy" className="bg-gray-50 rounded-xl p-6 border border-gray-200 hover:border-yellow-400 transition-colors block">
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
              Réservez votre taxi {FROM} → CDG maintenant
            </h2>
            <p className="text-gray-900 mb-6 max-w-2xl mx-auto">
              Tarif fixe dès {PRICE_MIN}€, suivi de vol, prise en charge 24h/24. La ponctualité, notre première promesse.
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
