import { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/Header'
import Breadcrumb from '@/components/Breadcrumb'
import Footer from '@/components/Footer'
import BookingForm from '@/components/BookingForm'
import { ServiceSchema, FAQSchema } from '@/components/seo/Schemas'
import { SITE } from '@/lib/site'
import { Phone, Train, MapPin, CheckCircle, HelpCircle, Moon, GraduationCap, Luggage } from 'lucide-react'

const PAGE_URL = `${SITE.url}/taxi-gare-palaiseau`

export const metadata: Metadata = {
  title: 'Taxi gare de Palaiseau : RER B et Saclay',
  description: `Taxi aux gares RER B de Palaiseau, Palaiseau-Villebon et Lozère, et à Massy-Palaiseau. Navette vers le plateau de Saclay, 24h/24. ${SITE.phone.display}.`,
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Taxi gare de Palaiseau : RER B et Saclay',
    description: 'Prise en charge aux gares de Palaiseau, Palaiseau-Villebon, Lozère et Massy-Palaiseau. Trajets vers le plateau de Saclay, Orly et Massy TGV.',
    url: PAGE_URL,
  },
}

const gares = [
  {
    name: 'Gare de Palaiseau',
    desc: 'La gare du centre-ville, sur le RER B. Point de rendez-vous simple pour rejoindre le reste de Palaiseau ou le plateau.',
  },
  {
    name: 'Gare de Palaiseau-Villebon',
    desc: 'Sur le RER B, à la limite de Villebon-sur-Yvette. Pratique pour les quartiers sud et la zone de Courtabœuf.',
  },
  {
    name: 'Gare de Lozère',
    desc: 'Sur le RER B, en contrebas du plateau. La montée à pied vers les écoles est raide : le taxi vous évite la côte avec une valise.',
  },
  {
    name: 'Gare de Massy-Palaiseau',
    desc: 'Côté Massy, correspondance RER B et RER C, à quelques minutes à pied de la gare Massy TGV.',
  },
]

const faqs = [
  {
    q: 'Dans quelles gares de Palaiseau pouvez-vous me prendre ?',
    a: 'À la gare de Palaiseau, à Palaiseau-Villebon, à Lozère, et à Massy-Palaiseau juste à côté. Indiquez la gare exacte et l\'heure d\'arrivée de votre RER à la réservation.',
  },
  {
    q: 'Je descends du RER B et je dois monter sur le plateau de Saclay, est-ce possible ?',
    a: 'Oui, c\'est un trajet que nous faisons souvent : écoles, laboratoires et entreprises du plateau. Donnez l\'adresse précise du bâtiment ou l\'entrée du campus pour une dépose au bon endroit.',
  },
  {
    q: 'Le RER B est interrompu, pouvez-vous m\'aider ?',
    a: `En cas de travaux ou d'incident sur la ligne, appelez le ${SITE.phone.display}. Nous vous indiquons le délai de prise en charge selon la disponibilité des chauffeurs.`,
  },
  {
    q: 'Combien coûte un taxi depuis une gare de Palaiseau ?',
    a: 'Le prix dépend de la destination, de l\'heure et du véhicule. Le formulaire de réservation affiche une estimation avant toute confirmation.',
  },
  {
    q: 'Puis-je réserver un taxi pour le dernier RER du soir ?',
    a: 'Oui. Réservez avec l\'heure d\'arrivée prévue. Si votre RER a du retard, prévenez le chauffeur ou appelez-nous.',
  },
]

export default function TaxiGarePalaiseau() {
  return (
    <>
      <Header />
      <Breadcrumb items={[{ name: 'Taxi Palaiseau', href: '/taxi-palaiseau' }, { name: 'Gares de Palaiseau' }]} />

      <ServiceSchema
        name="Taxi gares de Palaiseau"
        description="Taxi aux gares RER B de Palaiseau, Palaiseau-Villebon, Lozère et à la gare de Massy-Palaiseau. Trajets vers le plateau de Saclay, Orly et Massy TGV."
        url={PAGE_URL}
        areaServed={['Palaiseau', 'Massy', 'Saclay']}
      />
      <FAQSchema faqs={faqs} />

      <main>
        {/* Hero */}
        <section className="bg-gray-50 py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div>
                <div className="flex items-center gap-2 text-yellow-600 mb-4">
                  <Train className="w-5 h-5" />
                  <span className="font-medium">Palaiseau (91120), RER B</span>
                </div>

                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                  Taxi gare de Palaiseau
                </h1>

                <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                  Palaiseau compte trois gares sur le RER B, et Massy-Palaiseau est juste à côté. Beaucoup de
                  voyageurs y descendent pour monter ensuite sur le plateau de Saclay. Nous assurons ce dernier
                  trajet, et tous les autres, depuis la gare de votre choix.
                </p>

                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" /><span className="text-gray-700">Attente à la gare</span></div>
                  <div className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" /><span className="text-gray-700">Disponible 24h/24</span></div>
                  <div className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" /><span className="text-gray-700">Prix estimé en ligne</span></div>
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

        {/* Gares */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 text-center">
              Les gares où nous vous prenons en charge
            </h2>
            <p className="text-gray-600 text-center mb-10 max-w-2xl mx-auto">
              Précisez la gare à la réservation. Les noms se ressemblent et une erreur fait perdre du temps à tout le monde.
            </p>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {gares.map((g) => (
                <div key={g.name} className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                  <div className="flex items-center gap-3 mb-3">
                    <MapPin className="w-5 h-5 text-yellow-500" />
                    <h3 className="font-bold text-gray-900 text-lg">{g.name}</h3>
                  </div>
                  <p className="text-gray-600 text-sm">{g.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Plateau */}
        <section className="py-12 md:py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <GraduationCap className="w-7 h-7 text-yellow-500" />
                De la gare au plateau de Saclay
              </h2>
              <div className="text-gray-600 space-y-4 text-lg leading-relaxed">
                <p>
                  Le plateau est en hauteur et les gares sont en bas. Les bus font le lien, mais avec un horaire
                  serré, une valise ou un rendez-vous dans un bâtiment que vous ne connaissez pas, le taxi est plus
                  simple. Le chauffeur vous dépose devant l&apos;entrée indiquée.
                </p>
                <p>
                  Visiteurs, candidats à un entretien, intervenants de colloque : si vous venez pour la journée,
                  vous pouvez aussi réserver le retour vers la gare ou vers{' '}
                  <Link href="/taxi-gare-massy-tgv" className="text-yellow-600 underline">Massy TGV</Link>.
                  Pour les entreprises qui reçoivent souvent, voir notre page{' '}
                  <Link href="/taxi-entreprise" className="text-yellow-600 underline">taxi entreprise</Link>.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Soir et bagages */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                  <Moon className="w-6 h-6 text-yellow-500" />
                  Le soir et la nuit
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  Après le dernier RER, ou quand la ligne est coupée pour travaux, réservez votre taxi avec
                  l&apos;heure de votre arrivée. Le chauffeur vous attend devant la gare.
                </p>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                  <Luggage className="w-6 h-6 text-yellow-500" />
                  Avec des bagages
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  Pour un départ vers{' '}
                  <Link href="/taxi-palaiseau-orly" className="text-yellow-600 underline">Orly</Link> ou{' '}
                  <Link href="/taxi-palaiseau-cdg" className="text-yellow-600 underline">Roissy-CDG</Link>,
                  le taxi depuis votre domicile évite les changements de RER. Un van, jusqu&apos;à 7 passagers
                  selon disponibilité, prend les familles et les groupes.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-12 md:py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-10 text-center">
              Questions fréquentes : taxi gare de Palaiseau
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
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-3">Un taxi à votre descente du RER</h2>
            <p className="text-gray-900 mb-6">Réservez avec l&apos;heure d&apos;arrivée de votre train.</p>
            <div className="flex flex-wrap gap-3 justify-center">
              <a href={SITE.phone.tel} className="inline-flex items-center gap-3 bg-gray-900 text-white font-bold text-lg py-3 px-6 rounded-lg hover:bg-gray-800 transition-colors">
                <Phone className="w-5 h-5" />
                {SITE.phone.display}
              </a>
              <Link href="/taxi-palaiseau" className="inline-flex items-center gap-3 bg-white text-gray-900 font-bold text-lg py-3 px-6 rounded-lg hover:bg-gray-100 transition-colors">
                Taxi Palaiseau
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
