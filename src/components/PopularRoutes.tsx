import Link from 'next/link'
import { Plane, Train, Building2, ArrowRight, Clock, Euro } from 'lucide-react'

const routes = [
  { slug: 'taxi-massy-orly', from: 'Massy', to: 'Aéroport Orly', price: '25-35€', duration: '15 min', icon: Plane },
  { slug: 'taxi-massy-cdg', from: 'Massy', to: 'Aéroport CDG', price: '70-90€', duration: '50 min', icon: Plane },
  { slug: 'taxi-massy-paris', from: 'Massy', to: 'Paris Centre', price: '45-60€', duration: '30 min', icon: Building2 },
  { slug: 'taxi-antony-orly', from: 'Antony', to: 'Aéroport Orly', price: '20-30€', duration: '12 min', icon: Plane },
  { slug: 'taxi-gare-massy-tgv', from: 'Essonne', to: 'Gare Massy TGV', price: 'Dès 10€', duration: 'Variable', icon: Train },
  { slug: 'taxi-conventionne-cpam-91', from: 'Essonne', to: 'Hôpitaux & cliniques', price: 'Tiers payant', duration: 'Sur prescription', icon: Building2 },
]

export default function PopularRoutes() {
  return (
    <section className="py-12 md:py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Trajets populaires depuis l&apos;Essonne
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Tarifs indicatifs pour les trajets les plus demandés. Devis personnalisé en 1 appel.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {routes.map((r) => {
            const Icon = r.icon
            return (
              <Link
                key={r.slug}
                href={`/${r.slug}`}
                className="group bg-white rounded-xl border border-gray-200 p-5 hover:border-yellow-400 hover:shadow-md transition"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center">
                    <Icon className="w-5 h-5 text-yellow-700" />
                  </div>
                  <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-yellow-500 group-hover:translate-x-1 transition" />
                </div>
                <h3 className="font-bold text-gray-900 mb-1">
                  {r.from} → {r.to}
                </h3>
                <div className="flex items-center gap-3 text-sm text-gray-600 mt-3">
                  <span className="inline-flex items-center gap-1">
                    <Euro className="w-3.5 h-3.5" />
                    {r.price}
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    {r.duration}
                  </span>
                </div>
              </Link>
            )
          })}
        </div>

        <div className="text-center mt-8">
          <Link
            href="/tarifs"
            className="inline-flex items-center gap-2 text-yellow-700 font-semibold hover:text-yellow-800"
          >
            Voir tous les tarifs
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
