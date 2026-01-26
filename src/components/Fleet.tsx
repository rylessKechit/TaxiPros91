import { Users, Briefcase, Snowflake, Wifi, Zap } from 'lucide-react'
import Image from 'next/image'

const vehicles = [
  {
    name: 'Mercedes Classe S',
    category: 'Berline de Luxe',
    image: '/images/fleet/s-class.webp',
    passengers: '1-4 passagers',
    luggage: '3 bagages',
    features: ['Sièges massants', 'Wifi', 'Champagne'],
    description: 'Le summum du luxe pour vos événements et clients VIP.',
  },
  {
    name: 'BMW Série 7',
    category: 'Berline de Luxe',
    image: '/images/fleet/7-series.webp',
    passengers: '1-4 passagers',
    luggage: '3 bagages',
    features: ['Sièges cuir', 'Wifi', 'Confort premium'],
    description: 'Élégance et technologie pour vos déplacements d\'affaires.',
  },
  {
    name: 'Mercedes Classe V',
    category: 'Van VIP',
    image: '/images/fleet/v-class.webp',
    passengers: '1-7 passagers',
    luggage: '8 bagages',
    features: ['Configuration salon', 'Climatisation', 'Grand espace'],
    description: 'Parfait pour les groupes, familles et transferts aéroport.',
  },
  {
    name: 'Mercedes Classe E',
    category: 'Berline Premium',
    image: '/images/fleet/e-class.webp',
    passengers: '1-4 passagers',
    luggage: '3 bagages',
    features: ['Sièges cuir', 'Climatisation', 'Wifi'],
    description: 'Notre véhicule phare pour tous vos trajets professionnels.',
  },
  {
    name: 'Tesla Model 3',
    category: 'Électrique',
    image: '/images/fleet/model-3.webp',
    passengers: '1-4 passagers',
    luggage: '2 bagages',
    features: ['100% électrique', 'Silencieuse', 'Écologique'],
    description: 'Voyagez vert sans compromis sur le confort.',
    isElectric: true,
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
            Des véhicules haut de gamme, récents et parfaitement entretenus
            pour tous vos déplacements en Essonne.
          </p>
        </div>

        {/* Vehicles grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {vehicles.map((vehicle) => (
            <div
              key={vehicle.name}
              className="bg-gray-50 rounded-xl overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow"
            >
              {/* Image */}
              <div className="relative h-48 bg-gray-200">
                <Image
                  src={vehicle.image}
                  alt={vehicle.name}
                  fill
                  className="object-cover"
                />
                {/* Badge catégorie */}
                <div className="absolute top-3 left-3">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    vehicle.isElectric
                      ? 'bg-green-500 text-white'
                      : 'bg-yellow-400 text-black'
                  }`}>
                    {vehicle.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{vehicle.name}</h3>

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
                      className={`text-xs px-2 py-1 rounded ${
                        vehicle.isElectric
                          ? 'bg-green-100 text-green-800'
                          : 'bg-yellow-100 text-yellow-800'
                      }`}
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
              <span>Wifi gratuit</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-5 h-5 text-yellow-400" />
              <span>Chargeurs USB</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
              </svg>
              <span>Paiement CB</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
