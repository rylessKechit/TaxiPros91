import Link from 'next/link'
import { MapPin } from 'lucide-react'

const allCities = [
  { name: 'Massy', slug: 'taxi-massy' },
  { name: 'Palaiseau', slug: 'taxi-palaiseau' },
  { name: 'Ballainvilliers', slug: 'taxi-ballainvilliers' },
  { name: 'Longjumeau', slug: 'taxi-longjumeau' },
  { name: 'Antony', slug: 'taxi-antony' },
  { name: 'Verrières-le-Buisson', slug: 'taxi-verrieres-le-buisson' },
  { name: 'Les Ulis', slug: 'taxi-les-ulis' },
  { name: 'Saclay', slug: 'taxi-saclay' },
]

export default function RelatedCities({ currentSlug }: { currentSlug: string }) {
  const otherCities = allCities.filter((city) => city.slug !== currentSlug)

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
          Nos autres zones desservies
        </h2>
        <div className="flex flex-wrap justify-center gap-3">
          {otherCities.map((city) => (
            <Link
              key={city.slug}
              href={`/${city.slug}`}
              className="flex items-center gap-2 bg-white text-gray-700 px-4 py-2 rounded-lg border border-gray-200 hover:border-yellow-400 hover:text-yellow-600 transition-colors"
            >
              <MapPin className="w-4 h-4" />
              Taxi {city.name}
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
