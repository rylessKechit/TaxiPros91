import { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/Header'
import Breadcrumb from '@/components/Breadcrumb'
import Footer from '@/components/Footer'
import RelatedCities from '@/components/RelatedCities'
import BookingForm from '@/components/BookingForm'
import { ServiceSchema, FAQSchema } from '@/components/seo/Schemas'
import { SITE } from '@/lib/site'
import { Phone, MapPin, Train, Plane, Clock, CheckCircle, HelpCircle, Users, Calculator } from 'lucide-react'

const PAGE_URL = `${SITE.url}/taxi-igny`

export const metadata: Metadata = {
  title: 'Taxi Igny : gare RER C, Orly, Massy TGV',
  description: `Taxi à Igny 24h/24 : gare d'Igny, Massy TGV, Orly, Roissy-CDG et Paris. Prix estimé en ligne avant de réserver. Appelez le ${SITE.phone.display}.`,
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Taxi Igny : gare RER C, Orly, Massy TGV',
    description: "Taxi à Igny : prise en charge à domicile ou à la gare RER C, trajets vers Massy TGV, Orly, Roissy-CDG et Paris. Estimation du prix en ligne.",
    url: PAGE_URL,
  },
}

const faqs = [
  {
    q: 'Combien coûte un taxi au départ d\'Igny ?',
    a: `Le prix dépend de la distance, de l'heure et du véhicule choisi. Le formulaire de réservation affiche une estimation dès que vous saisissez l'adresse de départ et la destination. Par téléphone au ${SITE.phone.display}, vous pouvez aussi demander le prix avant de réserver.`,
  },
  {
    q: 'Pouvez-vous me prendre à la gare d\'Igny ?',
    a: 'Oui. Indiquez « gare d\'Igny » comme adresse de prise en charge et l\'heure d\'arrivée de votre RER C. Le chauffeur vous attend devant la gare.',
  },
  {
    q: 'Combien de temps pour aller d\'Igny à Orly en taxi ?',
    a: 'Comptez en général 20 à 30 minutes selon le trafic. Aux heures de pointe, prévoyez une marge plus large pour un vol.',
  },
  {
    q: 'Je prends un TGV tôt le matin à Massy, comment faire ?',
    a: 'Réservez la veille en indiquant l\'heure de votre train. Massy TGV est tout proche d\'Igny : quelques minutes de route en temps normal, ce qui permet de partir tard sans risque.',
  },
  {
    q: 'Nous sommes un groupe avec beaucoup de bagages, est-ce possible ?',
    a: 'Oui. Choisissez le van à la réservation : il transporte jusqu\'à 7 passagers, selon disponibilité. Pour un départ en vacances avec poussette ou équipement de sport, précisez-le dans le formulaire.',
  },
  {
    q: 'Quels moyens de paiement acceptez-vous ?',
    a: 'Carte bancaire et espèces. Pour les déplacements professionnels, une facturation entreprise est possible sur demande.',
  },
]

const destinations = [
  { icon: Train, title: 'Gare Massy TGV', desc: 'La gare TGV la plus proche d\'Igny. Pratique pour les trains vers Lyon, Bordeaux, Nantes ou Marseille sans passer par Paris.', href: '/taxi-gare-massy-tgv' },
  { icon: Plane, title: 'Aéroport d\'Orly', desc: 'Environ 20 à 30 minutes selon le trafic. Donnez votre numéro de vol à la réservation pour un retour.', href: '/taxi-orly' },
  { icon: Plane, title: 'Aéroport Roissy-CDG', desc: 'Un trajet long qui traverse l\'Île-de-France. Prévoyez une bonne marge, surtout le matin en semaine.', href: '/taxi-cdg' },
  { icon: MapPin, title: 'Paris', desc: 'Gares parisiennes, rendez-vous, sorties du soir. Le retour tardif vers Igny est souvent le trajet le plus compliqué en transports.', href: '#reservation' },
]

export default function TaxiIgny() {
  return (
    <>
      <Header />
      <Breadcrumb items={[{ name: 'Taxi Igny' }]} />

      <ServiceSchema
        name="Taxi à Igny"
        description="Service de taxi à Igny (91430) : gare d'Igny RER C, gare Massy TGV, aéroports d'Orly et Roissy-CDG, Paris. Réservation 24h/24."
        url={PAGE_URL}
        areaServed={['Igny']}
      />
      <FAQSchema faqs={faqs} />

      <main>
        <section className="bg-yellow-400 py-4">
          <div className="container mx-auto px-4 text-center">
            <p className="text-black font-medium">
              Besoin d&apos;un taxi à Igny ? Appelez le{' '}
              <a href={SITE.phone.tel} className="font-bold text-xl hover:underline">{SITE.phone.display}</a>
            </p>
          </div>
        </section>

        {/* Hero */}
        <section className="bg-gray-50 py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div>
                <div className="flex items-center gap-2 text-yellow-600 mb-4">
                  <MapPin className="w-5 h-5" />
                  <span className="font-medium">Igny (91430), Essonne</span>
                </div>

                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                  Taxi à Igny
                </h1>

                <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                  Igny est une ville calme, entre Massy, Palaiseau et Bièvres. On y vit bien, mais dès qu&apos;il
                  faut attraper un avion ou un TGV avec des valises, le RER C ne suffit plus. Nous venons vous
                  chercher chez vous ou à la gare d&apos;Igny, de jour comme de nuit.
                </p>

                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" /><span className="text-gray-700">Disponible 24h/24</span></div>
                  <div className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" /><span className="text-gray-700">Prix estimé en ligne</span></div>
                  <div className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" /><span className="text-gray-700">Berline ou van</span></div>
                  <div className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" /><span className="text-gray-700">CB acceptée</span></div>
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

        {/* Gare d'Igny */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <Train className="w-7 h-7 text-yellow-500" />
                Taxi à la gare d&apos;Igny (RER C)
              </h2>
              <div className="text-gray-600 space-y-4 text-lg leading-relaxed">
                <p>
                  La gare d&apos;Igny est desservie par le RER C. Elle suffit pour un trajet simple vers Paris ou
                  Versailles. Elle devient moins pratique le soir, le week-end en cas de travaux, ou quand il faut
                  enchaîner avec un avion.
                </p>
                <p>
                  Vous rentrez tard et le dernier RER est passé ? Vous arrivez à Igny avec des bagages et personne
                  pour venir vous chercher ? Réservez un taxi avec l&apos;heure d&apos;arrivée de votre train. Le
                  chauffeur vous attend devant la gare et vous dépose à votre porte.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Destinations */}
        <section className="py-12 md:py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 text-center">
              Vos trajets en taxi depuis Igny
            </h2>
            <p className="text-gray-600 text-center mb-10 max-w-2xl mx-auto">
              Les durées sont données à titre indicatif et varient avec la circulation.
            </p>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {destinations.map((d) => {
                const Icon = d.icon
                return (
                  <Link key={d.title} href={d.href} className="bg-white rounded-xl p-6 border border-gray-200 hover:border-yellow-400 transition-colors block">
                    <div className="flex items-center gap-3 mb-3">
                      <Icon className="w-6 h-6 text-yellow-500" />
                      <h3 className="font-bold text-gray-900 text-lg">{d.title}</h3>
                    </div>
                    <p className="text-gray-600 text-sm">{d.desc}</p>
                  </Link>
                )
              })}
            </div>
          </div>
        </section>

        {/* Prix et véhicules */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                  <Calculator className="w-6 h-6 text-yellow-500" />
                  Connaître le prix avant de partir
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  Saisissez votre adresse à Igny et votre destination dans le formulaire : le prix estimé
                  s&apos;affiche avant toute confirmation. Il tient compte de la distance, de l&apos;heure de
                  départ et du véhicule.
                </p>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                  <Users className="w-6 h-6 text-yellow-500" />
                  Berline ou van
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  Une berline pour un ou deux voyageurs. Un van, jusqu&apos;à 7 passagers selon disponibilité,
                  pour une famille qui part en vacances ou un groupe de collègues.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Réserver tôt */}
        <section className="py-12 md:py-16 bg-gray-900 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 flex items-center gap-3">
                <Clock className="w-7 h-7 text-yellow-400" />
                Un vol ou un train tôt le matin
              </h2>
              <p className="text-gray-300 leading-relaxed">
                Pour un départ avant 7h, réservez la veille. Indiquez l&apos;heure de votre vol ou de votre train
                et nous fixons ensemble l&apos;heure de prise en charge. Vous n&apos;avez pas à chercher un taxi
                disponible à 4h du matin.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-12 md:py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-10 text-center">
              Questions fréquentes : taxi Igny
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
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-3">Réservez votre taxi à Igny</h2>
            <p className="text-gray-900 mb-6">Par téléphone ou en ligne, avec le prix estimé avant de confirmer.</p>
            <div className="flex flex-wrap gap-3 justify-center">
              <a href={SITE.phone.tel} className="inline-flex items-center gap-3 bg-gray-900 text-white font-bold text-lg py-3 px-6 rounded-lg hover:bg-gray-800 transition-colors">
                <Phone className="w-5 h-5" />
                {SITE.phone.display}
              </a>
              <a href="#reservation" className="inline-flex items-center gap-3 bg-white text-gray-900 font-bold text-lg py-3 px-6 rounded-lg hover:bg-gray-100 transition-colors">
                Réserver en ligne
              </a>
            </div>
          </div>
        </section>

        <RelatedCities currentSlug="taxi-igny" />
      </main>
      <Footer />
    </>
  )
}
