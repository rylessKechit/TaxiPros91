import { Users, Briefcase, Snowflake, Wifi } from 'lucide-react'
import Image from 'next/image'

const vehicles = [
  {
    name: 'Berline Confort',
    model: 'Mercedes Classe E / BMW Série 5',
    image: '/images/fleet/berline.jpg',
    passengers: '1-4 passagers',
    luggage: '3 bagages',
    features: ['Climatisation', 'Prises USB', 'Sièges cuir'],
    description: 'Idéale pour vos trajets quotidiens et transferts aéroport.',
  },
  {
    name: 'Van 7 places',
    model: 'Mercedes Classe V / Volkswagen Caravelle',
    image: '/images/fleet/van.jpg',
    passengers: '1-7 passagers',
    luggage: '7 bagages',
    features: ['Climatisation', 'Espace bagages', 'Confort groupe'],
    description: 'Parfait pour les familles et groupes, transferts avec bagages.',
  },
  {
    name: 'Berline Standard',
    model: 'Peugeot 508 / Renault Talisman',
    image: '/images/fleet/standard.jpg',
    passengers: '1-4 passagers',
    luggage: '2 bagages',
    features: ['Climatisation', 'GPS intégré', 'Confort'],
    description: 'Solution économique pour vos courses en ville.',
  },
]

export default function Fleet() {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Notre flotte de véhicules
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Des véhicules récents, confortables et parfaitement entretenus
            pour tous vos déplacements en Essonne.
          </p>
        </div>

        {/* Vehicles grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {vehicles.map((vehicle) => (
            <div
              key={vehicle.name}
              className="bg-gray-50 rounded-xl overflow-hidden border border-gray-200"
            >
              {/* Image */}
              <div className="relative h-48 bg-gray-200">
                {/* Placeholder - remplacer par de vraies images */}
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-700 to-gray-900">
                  <div className="text-center text-white">
                    <svg className="w-16 h-16 mx-auto mb-2 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h8m-8 4h8m-4 4v-4m-6 8h12a2 2 0 002-2V7a2 2 0 00-2-2H6a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <p className="text-sm opacity-75">Image à ajouter</p>
                    <p className="text-xs opacity-50">/images/fleet/...</p>
                  </div>
                </div>
                {/* Uncomment when you have real images:
                <Image
                  src={vehicle.image}
                  alt={vehicle.name}
                  fill
                  className="object-cover"
                />
                */}
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-1">{vehicle.name}</h3>
                <p className="text-gray-500 text-sm mb-4">{vehicle.model}</p>

                {/* Specs */}
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex items-center gap-2 text-gray-600">
                    <Users className="w-4 h-4" />
                    <span className="text-sm">{vehicle.passengers}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Briefcase className="w-4 h-4" />
                    <span className="text-sm">{vehicle.luggage}</span>
                  </div>
                </div>

                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {vehicle.features.map((feature) => (
                    <span
                      key={feature}
                      className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                <p className="text-gray-600 text-sm">{vehicle.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom info */}
        <div className="mt-12 bg-gray-900 rounded-xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-3">Tous nos véhicules sont équipés</h3>
          <div className="flex flex-wrap justify-center gap-6 md:gap-10 mt-6">
            <div className="flex items-center gap-2">
              <Snowflake className="w-5 h-5 text-yellow-400" />
              <span>Climatisation</span>
            </div>
            <div className="flex items-center gap-2">
              <Wifi className="w-5 h-5 text-yellow-400" />
              <span>Prises USB</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
              </svg>
              <span>Paiement CB</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Contrôle technique OK</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
