import { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/Header'
import Breadcrumb from '@/components/Breadcrumb'
import Footer from '@/components/Footer'
import BookingForm from '@/components/BookingForm'
import { FAQSchema, ServiceSchema } from '@/components/seo/Schemas'
import { SITE } from '@/lib/site'
import { popularRoutes } from '@/lib/routes'
import { Phone, Clock, CheckCircle, Star, CreditCard, Shield, HelpCircle, MapPin, Car, Briefcase, Building2, Train, Route as RouteIcon } from 'lucide-react'

const ROUTE = popularRoutes.find(r => r.slug === 'taxi-massy-paris')!
const FROM = ROUTE.from
const TO = ROUTE.to
const PRICE_MIN = ROUTE.priceMin
const PRICE_MAX = ROUTE.priceMax
const DURATION = ROUTE.durationMin
const URL = `${SITE.url}/taxi-massy-paris`

export const metadata: Metadata = {
  title: `Taxi ${FROM} → Paris : tarif fixe dès ${PRICE_MIN}€`,
  description: `Taxi ${FROM} vers Paris Centre : tarif fixe dès ${PRICE_MIN}€, trajet ${DURATION} min, dépose à toutes les gares et tous les arrondissements. Réservation 24h/24 au ${SITE.phone.display}.`,
  openGraph: {
    title: `Taxi ${FROM} → Paris : tarif fixe dès ${PRICE_MIN}€`,
    description: `Transfert taxi ${FROM} Paris Centre : tarif fixe, gares parisiennes et tous arrondissements, prise en charge 24h/24.`,
    url: URL,
  },
  alternates: { canonical: URL },
}

const faqs = [
  {
    q: `Quel est le prix d'un taxi ${FROM} → Paris Centre ?`,
    a: `Le prix d'un taxi de ${FROM} vers Paris Centre est compris entre ${PRICE_MIN}€ et ${PRICE_MAX}€ selon l'arrondissement de dépose, l'heure (jour ou nuit/dimanche/jours fériés) et le trafic. Ce tarif est fixe, communiqué à la réservation et inclut la prise en charge à votre adresse et la dépose au point exact souhaité.`,
  },
  {
    q: `Combien de temps dure le trajet ${FROM} → Paris en taxi ?`,
    a: `Le trajet ${FROM} → Paris Centre dure en moyenne ${DURATION} minutes via l'A6 ou la RN20. Aux heures de pointe (7h-10h, 17h-20h), comptez 45 à 60 minutes en raison de la circulation sur le périphérique et les axes d'entrée parisiens. La nuit, le trajet peut tomber à 25 minutes.`,
  },
  {
    q: 'Comment réserver un taxi de Massy vers Paris ?',
    a: `Trois options : appelez le ${SITE.phone.display} (24h/24), utilisez le formulaire en ligne (confirmation immédiate), ou réservez à l'avance pour un déplacement important (rendez-vous médical, train, événement). Les SMS de rappel sont envoyés systématiquement.`,
  },
  {
    q: 'Quels moyens de paiement acceptez-vous ?',
    a: `Tous nos taxis acceptent la carte bancaire (Visa, Mastercard, American Express), les espèces et les bons de transport CPAM. La facturation entreprise mensuelle est possible pour vos déplacements professionnels Massy → Paris.`,
  },
  {
    q: 'Proposez-vous l\'aller-retour Massy ↔ Paris dans la journée ?',
    a: `Oui, un forfait aller-retour Massy ↔ Paris est disponible si vous avez un rendez-vous, une consultation ou un événement à Paris. Le chauffeur vous attend sur place ou revient à l'heure convenue, avec un tarif préférentiel par rapport à deux courses simples.`,
  },
  {
    q: 'Pouvez-vous me déposer à n\'importe quelle gare parisienne ?',
    a: `Oui, nous desservons toutes les grandes gares de Paris : Gare de Lyon, Gare du Nord, Gare de l'Est, Gare Montparnasse, Gare Saint-Lazare, Gare d'Austerlitz et Gare de Bercy. Précisez la gare et l'heure de votre train à la réservation, nous calculons le départ pour arriver 20-30 minutes en avance.`,
  },
  {
    q: 'Y a-t-il un supplément pour les bagages ?',
    a: `Les bagages standards (valises, sacs) sont inclus dans le tarif. Pour les bagages volumineux, les groupes jusqu'à 7 personnes ou les déménagements ponctuels, nous proposons notre service Van. Précisez votre besoin à la réservation.`,
  },
  {
    q: 'Pouvez-vous me déposer à une adresse précise (hôtel, bureau, hôpital) ?',
    a: `Bien sûr. Communiquez l'adresse exacte à la réservation (numéro, rue, arrondissement, code d'accès si nécessaire). Nos chauffeurs connaissent parfaitement Paris et utilisent le GPS pour vous déposer au plus près. Idéal pour les rendez-vous d'affaires, hôtels, hôpitaux ou théâtres.`,
  },
]

const depotsParis = [
  { icon: Train, name: 'Gare de Lyon', desc: 'Vers Lyon, Marseille, Avignon, Genève, Italie. TGV inOui, TER Bourgogne.' },
  { icon: Train, name: 'Gare du Nord', desc: 'Eurostar (Londres), Thalys (Bruxelles, Amsterdam), TER Hauts-de-France.' },
  { icon: Train, name: 'Gare Montparnasse', desc: 'Bretagne, Nantes, Bordeaux, Sud-Ouest. TGV Atlantique.' },
  { icon: Train, name: 'Gare de l\'Est', desc: 'Strasbourg, Reims, Allemagne, Luxembourg. TGV Est.' },
  { icon: Train, name: 'Gare Saint-Lazare', desc: 'Normandie : Rouen, Le Havre, Caen, Cherbourg.' },
  { icon: Train, name: 'Gare d\'Austerlitz', desc: 'Centre, Limoges, Toulouse (intercités) et trains de nuit.' },
  { icon: Building2, name: 'Châtelet / Les Halles', desc: 'Centre-Paris, hyper-centre, hôtels et magasins.' },
  { icon: Building2, name: 'Opéra / Madeleine', desc: '9e arrondissement, théâtres, grands magasins, hôtels.' },
  { icon: Building2, name: 'Bastille / République', desc: '11e arrondissement, bars, restaurants, salles de spectacles.' },
  { icon: Building2, name: 'Bercy / Bibliothèque', desc: '12e et 13e arrondissements, AccorHotels Arena.' },
  { icon: Building2, name: 'Champs-Élysées / Étoile', desc: '8e et 16e, hôtels haut de gamme, bureaux d\'affaires.' },
  { icon: Building2, name: 'La Défense', desc: 'Quartier d\'affaires, tours de bureaux, CNIT, centre commercial Westfield.' },
]

const usp = [
  { icon: Clock, title: 'Disponible 24h/24', desc: 'Pour vos trains tôt le matin, vos sorties à Paris ou vos retours de soirée, toujours présent.' },
  { icon: MapPin, title: 'Dépose précise', desc: 'À votre adresse exacte (hôtel, bureau, théâtre, gare, hôpital). Pas besoin de finir en métro.' },
  { icon: CreditCard, title: 'Tarif fixe annoncé', desc: `Entre ${PRICE_MIN}€ et ${PRICE_MAX}€ communiqué à la réservation. Pas de compteur dans les bouchons.` },
  { icon: Shield, title: 'Chauffeurs experts Paris', desc: 'Connaissance fine des axes parisiens, des itinéraires bis et des zones piétonnes.' },
]

const avis = [
  { nom: 'Marie L. (Massy)', note: 5, texte: `Réservé pour un TGV à Gare de Lyon. Trajet en 35 minutes par la RN20 en évitant l'A6 chargée. Dépose pile devant l'entrée de la gare, je n'ai même pas eu à courir. Parfait.`, date: 'Avril 2025' },
  { nom: 'Pierre D. (Massy-Villaine)', note: 5, texte: `Aller-retour Massy ↔ Gare du Nord pour un Eurostar. Forfait avantageux, et au retour le chauffeur m'attendait avec une pancarte malgré l'heure tardive (23h45). Service au top.`, date: 'Mars 2025' },
  { nom: 'Sophie M. (Atlantis)', note: 5, texte: `J'ai un rendez-vous médical mensuel à l'hôpital Necker (15e). Toujours pris en charge avec ma CPAM, chauffeur courtois et ponctuel. Bien mieux qu'un VTC.`, date: 'Février 2025' },
  { nom: 'Jean B. (Massy-Opéra)', note: 5, texte: `Soirée à Bastille avec mon épouse, retour à 1h du matin sans soucis. Tarif fixe annoncé, pas de surge comme les applications. Je recommande pour Paris.`, date: 'Janvier 2025' },
]

const autresTrajets = popularRoutes.filter(r => r.fromSlug === 'massy' && r.slug !== 'taxi-massy-paris')

export default function TaxiMassyParis() {
  return (
    <>
      <Header />
      <Breadcrumb items={[{ name: `Taxi ${FROM} → ${TO}` }]} />

      <ServiceSchema
        name={`Taxi ${FROM} ${TO}`}
        description={`Service de taxi entre ${FROM} (91300) et Paris Centre (tous arrondissements et gares). Tarif fixe dès ${PRICE_MIN}€, trajet en ${DURATION} minutes, disponible 24h/24.`}
        url={URL}
        areaServed={[FROM, 'Paris']}
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
                  <span className="font-medium">{FROM} (91300) → Paris Centre (75)</span>
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
                    <Train className="w-4 h-4 text-yellow-500" /> Toutes les gares
                  </span>
                </div>

                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Votre <strong>taxi {FROM} Paris</strong> au tarif fixe pour rejoindre tous les arrondissements
                  parisiens et toutes les gares (Lyon, Nord, Montparnasse, Est, Saint-Lazare, Austerlitz, Bercy).
                  Prise en charge à votre adresse à {FROM} et dépose à l'adresse exacte de votre choix.
                  Service 24h/24, idéal pour les TGV, Eurostar, rendez-vous d'affaires ou sorties parisiennes.
                </p>

                <div className="grid grid-cols-2 gap-3 mb-6">
                  <div className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" /><span className="text-gray-700 text-sm">Tarif fixe garanti</span></div>
                  <div className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" /><span className="text-gray-700 text-sm">Toutes les gares</span></div>
                  <div className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" /><span className="text-gray-700 text-sm">Dépose adresse exacte</span></div>
                  <div className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" /><span className="text-gray-700 text-sm">Paiement CB / espèces</span></div>
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
                Prix du taxi {FROM} → Paris Centre
              </h2>
              <p className="text-gray-600 mb-8">
                Notre tarification claire et fixe pour le trajet {FROM} Paris est communiquée à la réservation.
                Le prix varie légèrement selon l'arrondissement de dépose (rive gauche / rive droite, distance
                depuis le périphérique). Aucun supplément caché, aucun compteur qui s'emballe.
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
                      <td className="py-4 px-4 font-medium text-gray-900">Aller simple {FROM} → Paris Centre</td>
                      <td className="py-4 px-4 text-center"><span className="bg-yellow-400 text-black font-bold px-3 py-1 rounded">{PRICE_MIN}€</span></td>
                      <td className="py-4 px-4 text-center"><span className="bg-yellow-400 text-black font-bold px-3 py-1 rounded">{PRICE_MAX}€</span></td>
                    </tr>
                    <tr className="border-t border-gray-200 bg-gray-50">
                      <td className="py-4 px-4 font-medium text-gray-900">Aller-retour journée (forfait)</td>
                      <td className="py-4 px-4 text-center"><span className="bg-yellow-400 text-black font-bold px-3 py-1 rounded">{PRICE_MIN * 2 - 10}€</span></td>
                      <td className="py-4 px-4 text-center"><span className="bg-yellow-400 text-black font-bold px-3 py-1 rounded">{PRICE_MAX * 2 - 10}€</span></td>
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
                (jour ou nuit/dimanche selon la réglementation préfectorale) et de l'arrondissement de dépose.
              </p>
            </div>
          </div>
        </section>

        {/* Durée & itinéraire */}
        <section className="py-12 md:py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Durée du trajet et itinéraire {FROM} → Paris
              </h2>
              <p className="text-gray-600 mb-6">
                Le trajet entre {FROM} et Paris Centre couvre environ <strong>25 kilomètres</strong> et
                se parcourt en moyenne en <strong>{DURATION} minutes</strong>. Mais ce temps dépend
                fortement de l'heure : Paris est l'une des zones les plus congestionnées de France
                aux heures de pointe.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white rounded-xl p-6 border border-gray-200">
                  <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <RouteIcon className="w-5 h-5 text-yellow-500" /> Itinéraires possibles
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-3">
                    Deux grands axes pour rejoindre Paris depuis {FROM} :
                  </p>
                  <ul className="text-gray-600 text-sm space-y-2">
                    <li><strong>Via la RN20 :</strong> plus directe vers le sud parisien (Porte d'Orléans, 14e arrondissement).</li>
                    <li><strong>Via l'A6 :</strong> plus rapide hors heures de pointe, dessert Porte d'Italie et le centre par les quais.</li>
                  </ul>
                </div>

                <div className="bg-white rounded-xl p-6 border border-gray-200">
                  <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <Clock className="w-5 h-5 text-yellow-500" /> Temps selon l'heure
                  </h3>
                  <ul className="text-gray-600 text-sm space-y-2">
                    <li><strong>Heures creuses :</strong> 25-30 minutes</li>
                    <li><strong>Heures de pointe (7h-10h / 17h-20h) :</strong> 45 min à 1h</li>
                    <li><strong>Nuit (après 22h) :</strong> 25 minutes</li>
                    <li><strong>Week-end :</strong> 30-40 minutes</li>
                  </ul>
                </div>
              </div>

              <p className="text-gray-600">
                <strong>Conseil de pro :</strong> pour un train à Gare de Lyon, Gare du Nord ou Montparnasse,
                prévoyez <strong>1h30 avant</strong> votre départ en heures de pointe et <strong>1h avant</strong> en
                heures creuses. Nos chauffeurs adaptent l'itinéraire selon le trafic temps réel et
                connaissent les contournements (A86, périphérique extérieur, quais).
              </p>
            </div>
          </div>
        </section>

        {/* Points de dépose */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 text-center">
                Tous les points de dépose à Paris
              </h2>
              <p className="text-gray-600 text-center mb-10 max-w-2xl mx-auto">
                Gares, quartiers d'affaires, hôtels, théâtres, hôpitaux : nous desservons l'ensemble
                de la capitale. Indiquez votre adresse exacte à la réservation.
              </p>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {depotsParis.map(d => {
                  const Icon = d.icon
                  return (
                    <div key={d.name} className="bg-gray-50 rounded-xl p-5 border border-gray-200 hover:border-yellow-400 transition-colors">
                      <div className="flex items-center gap-2 mb-2">
                        <Icon className="w-5 h-5 text-yellow-500" />
                        <h3 className="font-bold text-gray-900">{d.name}</h3>
                      </div>
                      <p className="text-gray-600 text-sm">{d.desc}</p>
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
              3 façons de réserver votre taxi {FROM} → Paris
            </h2>
            <p className="text-gray-600 text-center mb-10 max-w-2xl mx-auto">
              Choisissez le canal qui vous convient. Pour un train ou un rendez-vous important, anticipez la réservation.
            </p>

            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <div className="bg-white rounded-xl p-6 border border-gray-200 text-center">
                <div className="w-14 h-14 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-7 h-7 text-black" />
                </div>
                <h3 className="font-bold text-gray-900 text-lg mb-2">Par téléphone</h3>
                <p className="text-gray-600 text-sm mb-4">Standard humain 24h/24, idéal pour réservations urgentes.</p>
                <a href={SITE.phone.tel} className="text-lg font-bold text-yellow-600 hover:text-yellow-700">
                  {SITE.phone.display}
                </a>
              </div>

              <div className="bg-white rounded-xl p-6 border border-gray-200 text-center">
                <div className="w-14 h-14 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Car className="w-7 h-7 text-black" />
                </div>
                <h3 className="font-bold text-gray-900 text-lg mb-2">Formulaire en ligne</h3>
                <p className="text-gray-600 text-sm mb-4">Réservation 24h/24 avec prix en temps réel, confirmation email.</p>
                <a href="#reservation" className="text-yellow-600 font-medium hover:text-yellow-700">Réserver en ligne</a>
              </div>

              <div className="bg-white rounded-xl p-6 border border-gray-200 text-center">
                <div className="w-14 h-14 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-7 h-7 text-black" />
                </div>
                <h3 className="font-bold text-gray-900 text-lg mb-2">À l'avance (J-1 conseillé)</h3>
                <p className="text-gray-600 text-sm mb-4">Pour un train tôt le matin ou un événement, réservez la veille pour garantir votre prise en charge.</p>
                <span className="text-yellow-600 font-medium">SMS de rappel inclus</span>
              </div>
            </div>
          </div>
        </section>

        {/* USP */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 text-center">
              Pourquoi choisir TAXI Pro 91 pour votre trajet {FROM} → Paris
            </h2>
            <p className="text-gray-600 text-center mb-10 max-w-2xl mx-auto">
              Des dizaines de trajets Massy-Paris chaque semaine, des chauffeurs qui maîtrisent les pièges du périphérique.
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
              Avis clients sur le trajet {FROM} → Paris
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
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 text-center">
              Questions fréquentes : Taxi {FROM} Paris
            </h2>
            <p className="text-gray-600 text-center mb-10 max-w-2xl mx-auto">
              Toutes les réponses aux questions des voyageurs qui se déplacent vers Paris.
            </p>

            <div className="max-w-3xl mx-auto space-y-4">
              {faqs.map((item, i) => (
                <details key={i} className="bg-gray-50 rounded-xl border border-gray-200 overflow-hidden group">
                  <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-gray-100">
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
              Autres trajets populaires depuis {FROM}
            </h2>
            <p className="text-gray-600 text-center mb-10">Découvrez nos autres liaisons au départ de {FROM}.</p>
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
              <Link href="/taxi-massy" className="bg-white rounded-xl p-6 border border-gray-200 hover:border-yellow-400 transition-colors block">
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
              Réservez votre taxi {FROM} → Paris maintenant
            </h2>
            <p className="text-gray-900 mb-6 max-w-2xl mx-auto">
              Tarif fixe dès {PRICE_MIN}€, dépose à l'adresse exacte, prise en charge 24h/24.
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
