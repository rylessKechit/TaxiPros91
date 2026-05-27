import { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/Header'
import Breadcrumb from '@/components/Breadcrumb'
import Footer from '@/components/Footer'
import BookingForm from '@/components/BookingForm'
import { ServiceSchema, FAQSchema } from '@/components/seo/Schemas'
import { SITE } from '@/lib/site'
import {
  Phone,
  Receipt,
  CreditCard,
  ShieldCheck,
  CheckCircle,
  Banknote,
  Building2,
  HelpCircle,
  HeartPulse,
  Calculator,
  Mail,
} from 'lucide-react'

const PAGE_URL = `${SITE.url}/tarifs`

export const metadata: Metadata = {
  title: 'Tarifs taxi Essonne — Grille de prix transparente 2026',
  description: `Tarifs taxi Essonne 2026 : tarifs réglementés A/B/C/D, forfaits Orly, CDG, Paris, Disneyland. Prix annoncé avant la course. ${SITE.phone.display}.`,
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Tarifs taxi Essonne — Grille de prix transparente',
    description:
      'Grille tarifaire complète : tarifs réglementés A/B/C/D, forfaits aéroports, suppléments. Tarif annoncé avant la course, sans surprise.',
    url: PAGE_URL,
  },
}

const tarifsReglementes = [
  {
    code: 'A',
    rate: '1,00 €/km',
    label: 'Jour + Aller-Retour',
    desc: 'Trajet de jour (8h — 19h), du lundi au samedi, avec retour à vide du chauffeur au point de départ.',
  },
  {
    code: 'B',
    rate: '1,50 €/km',
    label: 'Nuit / Dimanche + Aller-Retour',
    desc: 'Trajet de nuit (19h — 8h), dimanche ou jour férié, avec retour à vide au point de départ.',
  },
  {
    code: 'C',
    rate: '2,00 €/km',
    label: 'Jour + Aller simple',
    desc: 'Trajet de jour (8h — 19h), du lundi au samedi, sans retour à vide.',
  },
  {
    code: 'D',
    rate: '3,00 €/km',
    label: 'Nuit / Dimanche + Aller simple',
    desc: 'Trajet de nuit (19h — 8h), dimanche ou jour férié, sans retour à vide.',
  },
]

const forfaits = [
  { dest: 'Aéroport d\'Orly', duree: '15 min', prix: '25 — 35 €' },
  { dest: 'Aéroport Roissy CDG', duree: '50 min', prix: '70 — 90 €' },
  { dest: 'Paris Centre', duree: '30 min', prix: '45 — 60 €' },
  { dest: 'La Défense', duree: '35 min', prix: '50 — 65 €' },
  { dest: 'Disneyland Paris', duree: '50 min', prix: '85 — 105 €' },
  { dest: 'Château de Versailles', duree: '25 min', prix: '35 — 50 €' },
  { dest: 'Aéroport du Bourget', duree: '45 min', prix: '70 — 85 €' },
  { dest: 'Stade de France', duree: '40 min', prix: '60 — 80 €' },
  { dest: 'Gare de Lyon', duree: '35 min', prix: '50 — 65 €' },
  { dest: 'Gare Montparnasse', duree: '30 min', prix: '45 — 60 €' },
]

const usp = [
  {
    icon: ShieldCheck,
    title: 'Tarifs réglementés',
    desc: 'Notre grille de prix est strictement encadrée par la préfecture de l\'Essonne. Aucune surfacturation.',
  },
  {
    icon: Receipt,
    title: 'Prix annoncé à l\'avance',
    desc: 'Le tarif définitif est communiqué avant le départ. Pas de mauvaise surprise à l\'arrivée.',
  },
  {
    icon: HeartPulse,
    title: 'Conventionné CPAM',
    desc: 'Tiers payant intégral sur prescription médicale. Zéro avance de frais pour vos trajets santé.',
  },
  {
    icon: CreditCard,
    title: 'Paiement flexible',
    desc: 'CB, espèces, bons CPAM, facturation entreprise. Solution adaptée à chaque besoin.',
  },
]

const faqs = [
  {
    q: 'Quelle est la différence entre un forfait et un trajet au compteur ?',
    a: 'Un forfait est un prix fixe convenu avant la course, calculé selon la distance, la durée et l\'horaire. Il est conseillé pour les longues distances (aéroports, gares, Paris) car il garantit une sécurité tarifaire totale, même en cas d\'embouteillages. Le trajet au compteur applique en temps réel les tarifs réglementés A, B, C ou D — pertinent pour les courtes courses en ville.',
  },
  {
    q: 'Y a-t-il un supplément de nuit ou le dimanche ?',
    a: 'Oui, conformément aux tarifs réglementés. La nuit (19h — 8h), le dimanche et les jours fériés, le tarif kilométrique passe à 1,50 €/km en aller-retour (tarif B) ou 3,00 €/km en aller simple (tarif D). La prise en charge de nuit est réduite à 5 € (contre 10 € en journée).',
  },
  {
    q: 'Le prix annoncé sera-t-il bien respecté ?',
    a: 'Oui, sans exception. Le tarif communiqué avant la course est ferme et définitif, sauf changement de destination demandé par le client en cours de route ou demande d\'attente supplémentaire. Tous nos chauffeurs sont équipés d\'un compteur taximètre homologué et d\'un terminal de paiement délivrant un reçu détaillé.',
  },
  {
    q: 'Puis-je payer en carte bancaire ?',
    a: 'Oui, tous nos véhicules sont équipés d\'un terminal de paiement. Nous acceptons les cartes Visa, Mastercard, ainsi que les espèces, les bons de transport CPAM et la facturation entreprise. Aucun frais supplémentaire n\'est facturé en cas de paiement par CB.',
  },
  {
    q: 'Comment obtenir un devis gratuit ?',
    a: `Trois solutions : utiliser le formulaire de pré-réservation ci-dessous pour obtenir une estimation instantanée, appeler le ${SITE.phone.display} pour un devis personnalisé, ou envoyer un email à ${SITE.email} pour un devis B2B avec conditions négociées. Le devis est toujours gratuit et sans engagement.`,
  },
  {
    q: 'Que se passe-t-il si le trajet est plus long que l\'estimation ?',
    a: 'En cas de forfait, le prix annoncé est ferme : aucun dépassement ne vous sera facturé, même en cas d\'embouteillages exceptionnels ou de détour mineur. C\'est tout l\'intérêt du forfait. En cas de trajet au compteur, seul le trajet réellement parcouru est facturé, conformément aux tarifs réglementés.',
  },
]

export default function Tarifs() {
  return (
    <>
      <Header />
      <Breadcrumb items={[{ name: 'Tarifs' }]} />

      <ServiceSchema
        name="Tarifs taxi Essonne"
        description="Grille tarifaire complète du service de taxi en Essonne : tarifs réglementés A/B/C/D, forfaits aéroports et Paris, suppléments. Prix transparents annoncés avant la course."
        url={PAGE_URL}
      />
      <FAQSchema faqs={faqs} />

      <main>
        {/* Hero */}
        <section className="bg-gray-50 py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-white border border-gray-200 text-yellow-700 px-3 py-1.5 rounded-full text-sm font-medium mb-4">
                <Receipt className="w-4 h-4" />
                Grille tarifaire 2026
              </div>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Tarifs taxi Essonne — Grille de prix transparente
              </h1>

              <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
                Tarifs <strong>réglementés par la préfecture de l&apos;Essonne</strong>, forfaits aéroports et Paris,
                paiement flexible. Le prix exact de votre course vous est <strong>annoncé avant le départ</strong>,
                sans aucune surprise à l&apos;arrivée.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href={SITE.phone.tel}
                  className="inline-flex items-center gap-3 bg-gray-900 text-white font-bold text-lg py-3 px-6 rounded-lg hover:bg-gray-800 transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  {SITE.phone.display}
                </a>
                <a
                  href="#estimer"
                  className="inline-flex items-center gap-3 bg-yellow-400 text-black font-bold text-lg py-3 px-6 rounded-lg hover:bg-yellow-500 transition-colors"
                >
                  <Calculator className="w-5 h-5" />
                  Estimer mon trajet
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Engagement transparence */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Notre engagement transparence
              </h2>
              <div className="prose prose-lg text-gray-600 max-w-none space-y-4">
                <p>
                  Chez <strong>{SITE.name}</strong>, nous appliquons une politique tarifaire claire et sans ambiguïté.
                  Le prix de votre course vous est <strong>communiqué avant le départ</strong>, dès la réservation,
                  qu&apos;il s&apos;agisse d&apos;un forfait ou d&apos;une estimation au compteur. Vous ne découvrez
                  jamais le tarif final à l&apos;arrivée.
                </p>
                <p>
                  Tous nos chauffeurs sont titulaires de la carte professionnelle de taxi et équipés d&apos;un
                  <strong> compteur taximètre homologué</strong> ainsi que d&apos;un <strong>terminal de paiement</strong>
                  délivrant un reçu détaillé. Nos tarifs respectent strictement la réglementation préfectorale
                  applicable au département de l&apos;Essonne (91).
                </p>
                <p>
                  Des questions sur nos tarifs ou votre prochain trajet&nbsp;?{' '}
                  <Link href="/blog" className="text-yellow-700 hover:text-yellow-800 font-medium underline">
                    Retrouvez nos guides pratiques et conseils voyageurs sur le blog TAXI Pro 91
                  </Link>.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Tarifs réglementés */}
        <section className="py-12 md:py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 text-center">
              Tarifs réglementés taxi Essonne 2026
            </h2>
            <p className="text-gray-600 text-center mb-8 max-w-2xl mx-auto">
              Les tarifs taxi en France sont fixés annuellement par arrêté préfectoral. Voici la grille applicable en Essonne.
            </p>

            <div className="overflow-x-auto max-w-5xl mx-auto">
              <table className="w-full bg-white rounded-xl overflow-hidden border border-gray-200">
                <thead className="bg-gray-900 text-white">
                  <tr>
                    <th className="text-left py-4 px-4 font-bold w-20">Tarif</th>
                    <th className="text-left py-4 px-4 font-bold">Type de trajet</th>
                    <th className="text-right py-4 px-4 font-bold w-32">Prix au km</th>
                  </tr>
                </thead>
                <tbody>
                  {tarifsReglementes.map((t, i) => (
                    <tr key={t.code} className={i % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                      <td className="py-4 px-4">
                        <span className="inline-flex items-center justify-center w-10 h-10 bg-yellow-400 text-black font-bold rounded-lg">
                          {t.code}
                        </span>
                      </td>
                      <td className="py-4 px-4">
                        <div className="font-medium text-gray-900">{t.label}</div>
                        <div className="text-sm text-gray-500 mt-1">{t.desc}</div>
                      </td>
                      <td className="text-right py-4 px-4 font-bold text-gray-900 whitespace-nowrap">
                        {t.rate}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="grid sm:grid-cols-3 gap-4 max-w-5xl mx-auto mt-6">
              <div className="bg-white border border-gray-200 rounded-xl p-5">
                <p className="text-sm text-gray-500 mb-1">Prise en charge</p>
                <p className="text-xl font-bold text-gray-900">
                  10 € <span className="text-sm font-normal text-gray-500">jour</span>
                </p>
                <p className="text-xl font-bold text-gray-900">
                  5 € <span className="text-sm font-normal text-gray-500">nuit/dim.</span>
                </p>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl p-5">
                <p className="text-sm text-gray-500 mb-1">Course minimum</p>
                <p className="text-xl font-bold text-gray-900">20 €</p>
                <p className="text-sm text-gray-500 mt-1">applicable à toute course</p>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl p-5">
                <p className="text-sm text-gray-500 mb-1">Supplément Van</p>
                <p className="text-xl font-bold text-gray-900">+ 10 €</p>
                <p className="text-sm text-gray-500 mt-1">5 à 7 passagers</p>
              </div>
            </div>
          </div>
        </section>

        {/* Forfaits */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 text-center">
              Forfaits indicatifs depuis Massy
            </h2>
            <p className="text-gray-600 text-center mb-8 max-w-2xl mx-auto">
              Prix fixes communiqués à la réservation pour les destinations les plus demandées.
              Tarifs depuis Massy en jour ouvré.
            </p>

            <div className="overflow-x-auto max-w-4xl mx-auto">
              <table className="w-full bg-white rounded-xl overflow-hidden border border-gray-200">
                <thead className="bg-gray-900 text-white">
                  <tr>
                    <th className="text-left py-4 px-4 font-bold">Destination</th>
                    <th className="text-center py-4 px-4 font-bold">Durée</th>
                    <th className="text-right py-4 px-4 font-bold">Prix estimé</th>
                  </tr>
                </thead>
                <tbody>
                  {forfaits.map((f, i) => (
                    <tr key={f.dest} className={i % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                      <td className="py-4 px-4 font-medium text-gray-900">{f.dest}</td>
                      <td className="text-center py-4 px-4 text-gray-600">{f.duree}</td>
                      <td className="text-right py-4 px-4">
                        <span className="bg-yellow-400 text-black font-bold px-3 py-1 rounded">
                          {f.prix}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-gray-500 text-sm text-center mt-6 max-w-2xl mx-auto">
              Tarifs indicatifs pouvant varier selon l&apos;horaire (jour/nuit/dimanche), le trafic et le véhicule choisi.
              Tarif définitif confirmé à la réservation.
            </p>
          </div>
        </section>

        {/* Suppléments */}
        <section className="py-12 md:py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">
                Suppléments
              </h2>

              <div className="grid md:grid-cols-2 gap-5">
                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 text-lg mb-2">Véhicule Van (groupes / bagages)</h3>
                  <p className="text-2xl font-bold text-yellow-600 mb-2">+ 10 €</p>
                  <p className="text-sm text-gray-600">
                    Mercedes Classe V — jusqu&apos;à 7 passagers avec bagages. Idéal pour les voyages en groupe,
                    en famille ou avec bagages volumineux (skis, vélos, instruments de musique).
                  </p>
                </div>
                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 text-lg mb-2">Animaux de compagnie</h3>
                  <p className="text-2xl font-bold text-green-600 mb-2">Sans supplément</p>
                  <p className="text-sm text-gray-600">
                    Les animaux de compagnie tenus en laisse ou en cage de transport sont acceptés gratuitement.
                    Merci de le préciser à la réservation.
                  </p>
                </div>
                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 text-lg mb-2">Nuit (19h — 8h)</h3>
                  <p className="text-2xl font-bold text-yellow-600 mb-2">Tarif B ou D</p>
                  <p className="text-sm text-gray-600">
                    Tarification spécifique nuit (tarif B en aller-retour, D en aller simple). Prise en charge
                    réduite à 5 €.
                  </p>
                </div>
                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 text-lg mb-2">Dimanche et jours fériés</h3>
                  <p className="text-2xl font-bold text-yellow-600 mb-2">Tarif B ou D</p>
                  <p className="text-sm text-gray-600">
                    Même tarification que la nuit. Le tarif est appliqué automatiquement selon l&apos;horaire
                    et le jour de la course.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Moyens de paiement */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 text-center">
              Moyens de paiement acceptés
            </h2>
            <p className="text-gray-600 text-center mb-10 max-w-2xl mx-auto">
              Choisissez le mode de paiement qui vous convient. Reçu fourni systématiquement.
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto">
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-200 text-center">
                <Banknote className="w-10 h-10 text-yellow-500 mx-auto mb-3" />
                <h3 className="font-bold text-gray-900 mb-1">Espèces</h3>
                <p className="text-sm text-gray-600">Paiement direct au chauffeur</p>
              </div>
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-200 text-center">
                <CreditCard className="w-10 h-10 text-yellow-500 mx-auto mb-3" />
                <h3 className="font-bold text-gray-900 mb-1">Carte bancaire</h3>
                <p className="text-sm text-gray-600">Visa, Mastercard — sans frais</p>
              </div>
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-200 text-center">
                <HeartPulse className="w-10 h-10 text-yellow-500 mx-auto mb-3" />
                <h3 className="font-bold text-gray-900 mb-1">Bon CPAM</h3>
                <p className="text-sm text-gray-600">Tiers payant intégral</p>
              </div>
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-200 text-center">
                <Building2 className="w-10 h-10 text-yellow-500 mx-auto mb-3" />
                <h3 className="font-bold text-gray-900 mb-1">Facturation entreprise</h3>
                <p className="text-sm text-gray-600">Compte pro, paiement à 30 jours</p>
              </div>
            </div>
          </div>
        </section>

        {/* CPAM */}
        <section className="py-12 md:py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto bg-white rounded-xl border border-gray-200 p-6 md:p-8">
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="w-14 h-14 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0">
                  <HeartPulse className="w-7 h-7 text-black" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                    Taxi conventionné CPAM&nbsp;: tarifs réglementés
                  </h2>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    Pour les transports médicaux sur prescription, nos tarifs respectent strictement la
                    <strong> convention nationale signée avec l&apos;Assurance Maladie</strong>. Avec le tiers payant,
                    vous bénéficiez de <strong>0 avance de frais</strong> et nous facturons directement
                    la CPAM et votre mutuelle.
                  </p>
                  <Link
                    href="/taxi-conventionne-cpam-91"
                    className="inline-flex items-center gap-2 bg-gray-900 text-white font-bold py-2.5 px-5 rounded-lg hover:bg-gray-800 transition-colors text-sm"
                  >
                    En savoir plus sur le taxi CPAM
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Comment obtenir un devis */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 text-center">
              Comment obtenir un devis&nbsp;?
            </h2>
            <p className="text-gray-600 text-center mb-10 max-w-2xl mx-auto">
              Trois solutions au choix pour obtenir un prix précis avant votre course.
            </p>

            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="text-center bg-gray-50 rounded-xl p-6 border border-gray-200">
                <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calculator className="w-8 h-8 text-black" />
                </div>
                <h3 className="font-bold text-gray-900 text-lg mb-2">Formulaire en ligne</h3>
                <p className="text-gray-600 text-sm mb-3">
                  Estimation instantanée selon votre trajet, horaire et véhicule
                </p>
                <a href="#estimer" className="text-yellow-600 font-medium text-sm hover:text-yellow-700">
                  Estimer mon trajet
                </a>
              </div>

              <div className="text-center bg-gray-50 rounded-xl p-6 border border-gray-200">
                <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8 text-black" />
                </div>
                <h3 className="font-bold text-gray-900 text-lg mb-2">Téléphone</h3>
                <p className="text-gray-600 text-sm mb-3">Devis personnalisé immédiat, 24h/24</p>
                <a href={SITE.phone.tel} className="text-yellow-600 font-medium text-sm hover:text-yellow-700">
                  {SITE.phone.display}
                </a>
              </div>

              <div className="text-center bg-gray-50 rounded-xl p-6 border border-gray-200">
                <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8 text-black" />
                </div>
                <h3 className="font-bold text-gray-900 text-lg mb-2">Email (B2B)</h3>
                <p className="text-gray-600 text-sm mb-3">
                  Devis détaillé pour comptes entreprise et facturation
                </p>
                <a
                  href={`mailto:${SITE.email}`}
                  className="text-yellow-600 font-medium text-sm hover:text-yellow-700 break-all"
                >
                  {SITE.email}
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* USP */}
        <section className="py-12 md:py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 text-center">
              Pourquoi nos tarifs sont avantageux
            </h2>
            <p className="text-gray-600 text-center mb-10 max-w-2xl mx-auto">
              Une politique tarifaire conçue pour la clarté, la confiance et la fidélité.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
              {usp.map((u) => {
                const Icon = u.icon
                return (
                  <div
                    key={u.title}
                    className="bg-white rounded-xl p-6 border border-gray-200 text-center"
                  >
                    <div className="w-14 h-14 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-7 h-7 text-black" />
                    </div>
                    <h3 className="font-bold text-gray-900 mb-2">{u.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{u.desc}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 text-center">
              FAQ tarifs
            </h2>
            <p className="text-gray-600 text-center mb-10 max-w-2xl mx-auto">
              Les questions les plus fréquentes sur nos tarifs et modes de paiement.
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
          </div>
        </section>

        {/* Estimer mon trajet */}
        <section id="estimer" className="py-12 md:py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-8">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 flex items-center justify-center gap-3">
                  <Calculator className="w-7 h-7 text-yellow-500" />
                  Estimer mon trajet
                </h2>
                <p className="text-gray-600 max-w-xl mx-auto">
                  Renseignez votre départ et votre arrivée pour obtenir une estimation immédiate
                  du prix de votre course.
                </p>
              </div>

              <BookingForm />

              <div className="mt-6 flex items-center justify-center gap-2 text-sm text-gray-500">
                <CheckCircle className="w-4 h-4 text-green-500" />
                Estimation gratuite, sans engagement, en moins de 30 secondes.
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
