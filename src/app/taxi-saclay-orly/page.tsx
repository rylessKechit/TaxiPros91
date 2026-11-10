import { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/Header'
import Breadcrumb from '@/components/Breadcrumb'
import Footer from '@/components/Footer'
import BookingForm from '@/components/BookingForm'
import { ServiceSchema, FAQSchema } from '@/components/seo/Schemas'
import { SITE } from '@/lib/site'
import { Phone, Plane, CheckCircle, HelpCircle, Building2, GraduationCap, Receipt, MapPin, Route as RouteIcon } from 'lucide-react'

const PAGE_URL = `${SITE.url}/taxi-saclay-orly`

export const metadata: Metadata = {
  title: 'Taxi Saclay Orly : plateau vers l\'aéroport',
  description: `Taxi du plateau de Saclay à l'aéroport d'Orly : campus, laboratoires, entreprises. Facturation entreprise possible. Prix estimé en ligne. ${SITE.phone.display}.`,
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Taxi Saclay Orly : plateau vers l\'aéroport',
    description: 'Transfert en taxi entre le plateau de Saclay et Orly pour chercheurs, étudiants, visiteurs et collaborateurs. Réservation 24h/24, retour avec numéro de vol.',
    url: PAGE_URL,
  },
}

const faqs = [
  {
    q: 'Combien de temps entre le plateau de Saclay et Orly en taxi ?',
    a: 'En général 25 à 40 minutes, selon votre point de départ sur le plateau et la circulation. Aux heures de pointe, prévoyez davantage.',
  },
  {
    q: 'Quel est le prix d\'un taxi Saclay Orly ?',
    a: 'Il dépend du point de départ, de l\'heure et du véhicule. Le formulaire de réservation affiche une estimation avant toute confirmation.',
  },
  {
    q: 'Pouvez-vous venir me chercher devant mon bâtiment sur le campus ?',
    a: 'Oui. Donnez le nom de l\'établissement et, si possible, le bâtiment ou l\'entrée. Les campus du plateau sont grands, une adresse précise évite de se chercher.',
  },
  {
    q: 'Je reçois un visiteur qui arrive à Orly, puis-je réserver pour lui ?',
    a: 'Oui. Indiquez son nom, son numéro de vol et son numéro de téléphone dans le formulaire. Le chauffeur l\'attend à l\'arrivée et le dépose à l\'adresse du rendez-vous.',
  },
  {
    q: 'Proposez-vous une facture au nom de l\'entreprise ou du laboratoire ?',
    a: 'Oui, la facturation entreprise est possible sur demande. Pour des trajets réguliers, voyez notre page taxi entreprise.',
  },
  {
    q: 'Desservez-vous tous les terminaux d\'Orly ?',
    a: 'Oui, Orly 1, 2, 3 et 4. Précisez le terminal à la réservation.',
  },
]

const sites = [
  'École polytechnique',
  'CentraleSupélec',
  'ENS Paris-Saclay',
  'CEA Paris-Saclay',
  'Université Paris-Saclay',
  'Entreprises et centres de R&D du plateau',
]

export default function TaxiSaclayOrly() {
  return (
    <>
      <Header />
      <Breadcrumb items={[{ name: 'Taxi Saclay', href: '/taxi-saclay' }, { name: 'Saclay → Orly' }]} />

      <ServiceSchema
        name="Taxi Saclay Orly"
        description="Transfert en taxi entre le plateau de Saclay et l'aéroport d'Orly pour chercheurs, étudiants, visiteurs et entreprises. Réservation 24h/24, facturation entreprise possible."
        url={PAGE_URL}
        areaServed={['Saclay', 'Palaiseau', 'Gif-sur-Yvette', 'Orsay', 'Orly']}
      />
      <FAQSchema faqs={faqs} />

      <main>
        {/* Hero */}
        <section className="bg-gray-50 py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div>
                <div className="flex items-center gap-2 text-yellow-600 mb-4">
                  <RouteIcon className="w-5 h-5" />
                  <span className="font-medium">Plateau de Saclay → Aéroport d&apos;Orly</span>
                </div>

                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                  Taxi Saclay → Orly
                </h1>

                <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                  Sur le plateau de Saclay, on part souvent en colloque, en mission ou en conférence, et on reçoit
                  des visiteurs du monde entier. Orly est l&apos;aéroport le plus proche. Le taxi relie les deux
                  sans passer par le RER, le bus et la navette.
                </p>

                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" /><span className="text-gray-700">Prise en charge sur le campus</span></div>
                  <div className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" /><span className="text-gray-700">Accueil des visiteurs</span></div>
                  <div className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" /><span className="text-gray-700">Facture entreprise</span></div>
                  <div className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" /><span className="text-gray-700">Prix estimé en ligne</span></div>
                </div>

                <a href={SITE.phone.tel} className="inline-flex items-center gap-3 bg-gray-900 text-white font-bold text-xl py-4 px-8 rounded-lg hover:bg-gray-800 transition-colors">
                  <Phone className="w-6 h-6" />
                  {SITE.phone.display}
                </a>
              </div>

              <div id="reservation">
                <BookingForm />
              </div>
            </div>
          </div>
        </section>

        {/* Lieux */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <GraduationCap className="w-7 h-7 text-yellow-500" />
                Prise en charge partout sur le plateau
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Les écoles, les laboratoires et les entreprises sont répartis sur plusieurs kilomètres. Donnez
                l&apos;établissement et l&apos;entrée la plus proche : le chauffeur vient vous chercher au pied du
                bâtiment.
              </p>
              <ul className="grid sm:grid-cols-2 gap-3">
                {sites.map((s) => (
                  <li key={s} className="flex items-center gap-3 bg-gray-50 rounded-lg px-4 py-3 border border-gray-200">
                    <MapPin className="w-5 h-5 text-yellow-500 flex-shrink-0" />
                    <span className="text-gray-700">{s}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Visiteurs */}
        <section className="py-12 md:py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <Plane className="w-8 h-8 text-yellow-500 mb-3" />
                <h2 className="text-xl font-bold text-gray-900 mb-3">Vous recevez un visiteur</h2>
                <p className="text-gray-600 leading-relaxed">
                  Un chercheur invité, un jury de thèse, un client qui arrive à Orly : réservez le trajet à sa
                  place avec son numéro de vol. Il n&apos;a pas à comprendre le réseau de transport francilien en
                  sortant de l&apos;avion.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <Building2 className="w-8 h-8 text-yellow-500 mb-3" />
                <h2 className="text-xl font-bold text-gray-900 mb-3">Vous partez en mission</h2>
                <p className="text-gray-600 leading-relaxed">
                  Réservez l&apos;aller depuis votre bureau et le retour avec votre numéro de vol. Pour un groupe
                  qui part au même congrès, le van prend jusqu&apos;à 7 passagers selon disponibilité.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Facturation */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <Receipt className="w-7 h-7 text-yellow-500" />
                Facture pour l&apos;entreprise ou le laboratoire
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Les déplacements professionnels se remboursent sur justificatif. Nous établissons une facture
                au nom de votre structure sur demande. Pour des trajets fréquents, consultez notre page{' '}
                <Link href="/taxi-entreprise" className="text-yellow-600 underline">taxi entreprise</Link>.
                Plus d&apos;informations sur le secteur :{' '}
                <Link href="/taxi-paris-saclay" className="text-yellow-600 underline">taxi Paris-Saclay</Link> et{' '}
                <Link href="/taxi-ecole-polytechnique" className="text-yellow-600 underline">taxi École polytechnique</Link>.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-12 md:py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-10 text-center">
              Questions fréquentes : taxi Saclay Orly
            </h2>
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

        {/* CTA */}
        <section className="py-12 bg-yellow-400">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-3">Réservez votre taxi Saclay Orly</h2>
            <p className="text-gray-900 mb-6">Pour vous ou pour votre visiteur, avec le prix estimé avant de confirmer.</p>
            <div className="flex flex-wrap gap-3 justify-center">
              <a href={SITE.phone.tel} className="inline-flex items-center gap-3 bg-gray-900 text-white font-bold text-lg py-3 px-6 rounded-lg hover:bg-gray-800 transition-colors">
                <Phone className="w-5 h-5" />
                {SITE.phone.display}
              </a>
              <Link href="/taxi-orly" className="inline-flex items-center gap-3 bg-white text-gray-900 font-bold text-lg py-3 px-6 rounded-lg hover:bg-gray-100 transition-colors">
                Taxi aéroport Orly
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
