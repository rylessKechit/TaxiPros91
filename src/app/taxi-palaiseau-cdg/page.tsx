import { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/Header'
import Breadcrumb from '@/components/Breadcrumb'
import Footer from '@/components/Footer'
import BookingForm from '@/components/BookingForm'
import { ServiceSchema, FAQSchema } from '@/components/seo/Schemas'
import { SITE } from '@/lib/site'
import { Phone, Plane, Clock, CheckCircle, HelpCircle, Luggage, Users, Sunrise, Route as RouteIcon } from 'lucide-react'

const PAGE_URL = `${SITE.url}/taxi-palaiseau-cdg`

export const metadata: Metadata = {
  title: 'Taxi Palaiseau Roissy-CDG 24h/24',
  description: `Taxi de Palaiseau à l'aéroport Roissy-CDG, tous terminaux. Départs très tôt, bagages, van jusqu'à 7 places. Prix estimé en ligne. ${SITE.phone.display}.`,
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Taxi Palaiseau Roissy-CDG 24h/24',
    description: 'Transfert en taxi de Palaiseau à Roissy-Charles de Gaulle, terminaux 1, 2 et 3. Prise en charge à domicile, départs matinaux, retour avec numéro de vol.',
    url: PAGE_URL,
  },
}

const faqs = [
  {
    q: 'Combien de temps faut-il pour aller de Palaiseau à Roissy-CDG en taxi ?',
    a: 'Comptez en général une heure, parfois davantage aux heures de pointe ou en cas d\'incident sur les autoroutes. Pour un vol en semaine le matin, prévoyez une marge confortable.',
  },
  {
    q: 'Quel est le prix d\'un taxi Palaiseau Roissy-CDG ?',
    a: `Le prix dépend de l'heure de départ et du véhicule. Saisissez votre adresse et votre terminal dans le formulaire : l'estimation s'affiche avant toute confirmation. Vous pouvez aussi appeler le ${SITE.phone.display}.`,
  },
  {
    q: 'À quelle heure partir de Palaiseau pour mon vol ?',
    a: 'Additionnez le temps de route (environ une heure, plus aux heures chargées) et le délai conseillé par votre compagnie avant le décollage. En cas de doute, nous fixons l\'heure de prise en charge avec vous à la réservation.',
  },
  {
    q: 'Desservez-vous tous les terminaux de Roissy ?',
    a: 'Oui : terminal 1, terminal 2 (de 2A à 2G) et terminal 3. Indiquez votre terminal à la réservation pour être déposé au bon endroit.',
  },
  {
    q: 'Et pour le retour de Roissy vers Palaiseau ?',
    a: 'Donnez votre numéro de vol à la réservation. Le chauffeur se cale sur votre heure d\'arrivée réelle.',
  },
  {
    q: 'Nous partons en famille avec beaucoup de valises, quel véhicule choisir ?',
    a: 'Le van, qui transporte jusqu\'à 7 passagers selon disponibilité, avec plus de place pour les bagages. Signalez poussette, siège enfant ou équipement volumineux dans le formulaire.',
  },
]

const terminaux = [
  { code: 'Terminal 1', desc: 'Bâtiment circulaire historique. Précisez votre compagnie, le chauffeur vous dépose au bon niveau.' },
  { code: 'Terminal 2', desc: 'Sept halls, de 2A à 2G. Le hall figure sur votre billet ou votre carte d\'embarquement.' },
  { code: 'Terminal 3', desc: 'Le plus petit des trois. Vérifiez sur votre billet que votre vol en part bien.' },
]

export default function TaxiPalaiseauCdg() {
  return (
    <>
      <Header />
      <Breadcrumb items={[{ name: 'Taxi Palaiseau', href: '/taxi-palaiseau' }, { name: 'Palaiseau → Roissy-CDG' }]} />

      <ServiceSchema
        name="Taxi Palaiseau Roissy-CDG"
        description="Transfert en taxi entre Palaiseau (91120) et l'aéroport Paris-Charles de Gaulle, terminaux 1, 2 et 3. Réservation 24h/24, berline ou van."
        url={PAGE_URL}
        areaServed={['Palaiseau', 'Roissy-en-France']}
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
                  <span className="font-medium">Palaiseau (91120) → Roissy-CDG</span>
                </div>

                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                  Taxi Palaiseau → Roissy-CDG
                </h1>

                <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                  Roissy est à l&apos;autre bout de l&apos;Île-de-France. Le RER B y va directement depuis
                  Palaiseau, mais il traverse tout Paris, s&apos;arrête souvent, et les valises ne facilitent rien.
                  En taxi, vous partez de chez vous et descendez devant votre terminal.
                </p>

                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" /><span className="text-gray-700">Terminaux 1, 2 et 3</span></div>
                  <div className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" /><span className="text-gray-700">Départs très tôt</span></div>
                  <div className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" /><span className="text-gray-700">Van jusqu&apos;à 7 places</span></div>
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

        {/* Prévoir le temps */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <Clock className="w-7 h-7 text-yellow-500" />
                Un trajet long : prévoir la marge
              </h2>
              <div className="text-gray-600 space-y-4 text-lg leading-relaxed">
                <p>
                  Entre Palaiseau et Roissy, il faut compter environ une heure de route quand tout va bien. Un
                  lundi matin ou un vendredi soir, ce temps peut nettement augmenter. Le chauffeur choisit
                  l&apos;itinéraire en fonction de la circulation au moment du départ.
                </p>
                <p>
                  Le plus sûr est de fixer l&apos;heure de prise en charge avec nous à la réservation, à partir de
                  l&apos;heure de votre vol. Nous préférons vous faire attendre un peu au terminal que vous faire
                  courir à l&apos;enregistrement.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Départs tôt + bagages */}
        <section className="py-12 md:py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <Sunrise className="w-8 h-8 text-yellow-500 mb-3" />
                <h3 className="font-bold text-gray-900 text-lg mb-2">Vols du matin</h3>
                <p className="text-gray-600 text-sm">
                  Beaucoup de vols long-courriers et de premiers vols européens partent tôt. Réservez la veille :
                  la prise en charge à 4h ou 5h du matin ne pose pas de problème.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <Luggage className="w-8 h-8 text-yellow-500 mb-3" />
                <h3 className="font-bold text-gray-900 text-lg mb-2">Valises</h3>
                <p className="text-gray-600 text-sm">
                  Le chauffeur charge vos bagages chez vous et les décharge au terminal. Aucun escalier de gare,
                  aucun changement de train.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <Users className="w-8 h-8 text-yellow-500 mb-3" />
                <h3 className="font-bold text-gray-900 text-lg mb-2">Familles et groupes</h3>
                <p className="text-gray-600 text-sm">
                  Le van emmène jusqu&apos;à 7 passagers selon disponibilité. Un seul véhicule pour toute la
                  famille ou toute l&apos;équipe.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Terminaux */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 text-center">
              Les terminaux de Roissy-CDG
            </h2>
            <p className="text-gray-600 text-center mb-10 max-w-2xl mx-auto">
              Indiquez votre terminal, et pour le terminal 2 votre hall, au moment de réserver.
            </p>
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {terminaux.map((t) => (
                <div key={t.code} className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                  <div className="flex items-center gap-2 mb-2">
                    <Plane className="w-5 h-5 text-yellow-500" />
                    <h3 className="font-bold text-gray-900 text-lg">{t.code}</h3>
                  </div>
                  <p className="text-gray-600 text-sm">{t.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Retour */}
        <section className="py-12 md:py-16 bg-gray-900 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Le retour de Roissy vers Palaiseau</h2>
              <p className="text-gray-300 leading-relaxed">
                Après un long vol, personne n&apos;a envie de chercher un taxi. Réservez le retour en même temps
                que l&apos;aller et donnez votre numéro de vol : le chauffeur se cale sur votre heure d&apos;arrivée
                réelle. Pour Orly, voir notre page{' '}
                <Link href="/taxi-palaiseau-orly" className="text-yellow-400 underline">taxi Palaiseau Orly</Link>.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-12 md:py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-10 text-center">
              Questions fréquentes : taxi Palaiseau Roissy-CDG
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
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-3">Réservez votre taxi pour Roissy</h2>
            <p className="text-gray-900 mb-6">Le prix estimé s&apos;affiche avant de confirmer.</p>
            <div className="flex flex-wrap gap-3 justify-center">
              <a href={SITE.phone.tel} className="inline-flex items-center gap-3 bg-gray-900 text-white font-bold text-lg py-3 px-6 rounded-lg hover:bg-gray-800 transition-colors">
                <Phone className="w-5 h-5" />
                {SITE.phone.display}
              </a>
              <Link href="/taxi-cdg" className="inline-flex items-center gap-3 bg-white text-gray-900 font-bold text-lg py-3 px-6 rounded-lg hover:bg-gray-100 transition-colors">
                Taxi aéroport CDG
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
