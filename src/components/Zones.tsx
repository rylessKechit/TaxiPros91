import { MapPin, ArrowRight } from 'lucide-react'
import Link from 'next/link'

const zones = [
  {
    city: 'Massy',
    postalCode: '91300',
    slug: 'taxi-massy',
    description: 'Taxi à Massy pour vos trajets vers la gare TGV, la gare RER Massy-Palaiseau, le centre commercial Massy et tous les quartiers.',
    highlights: ['Gare Massy TGV', 'RER B Massy-Palaiseau', 'Opéra de Massy', 'Centre commercial'],
    population: '50 000 habitants',
  },
  {
    city: 'Palaiseau',
    postalCode: '91120',
    slug: 'taxi-palaiseau',
    description: 'Service de taxi à Palaiseau pour le plateau de Saclay, l\'École Polytechnique, le campus universitaire et le centre-ville.',
    highlights: ['École Polytechnique', 'Plateau de Saclay', 'Gare RER Palaiseau', 'Centre-ville'],
    population: '35 000 habitants',
  },
  {
    city: 'Ballainvilliers',
    postalCode: '91160',
    slug: 'taxi-ballainvilliers',
    description: 'Votre taxi à Ballainvilliers et ses environs. Desserte de tous les quartiers résidentiels et accès rapide aux axes routiers.',
    highlights: ['Centre-ville', 'Zones résidentielles', 'Accès N20', 'Commerces de proximité'],
    population: '4 500 habitants',
  },
  {
    city: 'Verrières-le-Buisson',
    postalCode: '91370',
    slug: 'taxi-verrieres-le-buisson',
    description: 'Taxi à Verrières-le-Buisson pour tous vos déplacements. Accès rapide vers Antony, Massy et les axes A86/N118.',
    highlights: ['Centre-ville', 'Forêt de Verrières', 'Accès A86', 'Proximité Antony'],
    population: '16 000 habitants',
  },
  {
    city: 'Les Ulis',
    postalCode: '91940',
    slug: 'taxi-les-ulis',
    description: 'Votre taxi aux Ulis et à la zone industrielle de Courtabœuf. Desserte des entreprises, du centre commercial Ulis 2 et de toute la zone d\'activités.',
    highlights: ['Zone de Courtabœuf', 'Centre commercial Ulis 2', 'Entreprises', 'Accès N118'],
    population: '25 000 habitants',
  },
  {
    city: 'Saclay',
    postalCode: '91400',
    slug: 'taxi-saclay',
    description: 'Taxi à Saclay pour le plateau de Saclay, le CEA, les grandes écoles et universités. Desserte du campus Paris-Saclay.',
    highlights: ['Plateau de Saclay', 'CEA', 'Université Paris-Saclay', 'Grandes écoles'],
    population: '4 000 habitants',
  },
  {
    city: 'Longjumeau',
    postalCode: '91160',
    slug: 'taxi-longjumeau',
    description: 'Taxi disponible à Longjumeau pour la gare, le centre hospitalier, les zones commerciales et l\'accès à l\'autoroute A6.',
    highlights: ['Gare de Longjumeau', 'Centre hospitalier', 'Zone commerciale', 'Accès A6'],
    population: '22 000 habitants',
  },
  {
    city: 'Antony',
    postalCode: '92160',
    slug: 'taxi-antony',
    description: 'Service de taxi à Antony avec connexion directe vers Orly via Orlyval. Desserte du RER B, du Parc de Sceaux et de tous les quartiers.',
    highlights: ['RER B Antony', 'Orlyval', 'Parc de Sceaux', 'Centre-ville'],
    population: '62 000 habitants',
  },
]

const otherCities = [
  'Savigny-sur-Orge', 'Chilly-Mazarin', 'Morangis', 'Wissous', 'Champlan',
  'Villebon-sur-Yvette', 'Orsay', 'Bures-sur-Yvette', 'Gif-sur-Yvette',
  'Igny', 'Bièvres', 'Vauhallan'
]

export default function Zones() {
  return (
    <section id="zones" className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Zones desservies par nos taxis
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Nous intervenons principalement à Massy, Palaiseau, Ballainvilliers, Verrières-le-Buisson, Les Ulis, Saclay, Longjumeau et Antony,
            mais également dans toutes les communes de l'Essonne (91) et des Hauts-de-Seine (92).
          </p>
        </div>

        {/* Main zones */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {zones.map((zone) => (
            <article
              key={zone.city}
              className="bg-gray-50 rounded-xl p-6 border border-gray-200 hover:border-yellow-400 transition-colors"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-1">
                    Taxi {zone.city}
                  </h3>
                  <div className="flex items-center gap-2 text-gray-500">
                    <MapPin className="w-4 h-4" />
                    <span>{zone.postalCode}</span>
                    <span>•</span>
                    <span>{zone.population}</span>
                  </div>
                </div>
              </div>

              <p className="text-gray-600 mb-4">
                {zone.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {zone.highlights.map((highlight) => (
                  <span key={highlight} className="text-xs bg-white text-gray-600 px-2 py-1 rounded border border-gray-200">
                    {highlight}
                  </span>
                ))}
              </div>

              <Link
                href={`/${zone.slug}`}
                className="inline-flex items-center gap-2 text-yellow-700 font-semibold hover:text-yellow-700"
              >
                En savoir plus
                <ArrowRight className="w-4 h-4" />
              </Link>
            </article>
          ))}
        </div>

        {/* Other cities */}
        <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
          <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
            Nous desservons également
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {otherCities.map((city) => (
              <span key={city} className="bg-white text-gray-700 px-4 py-2 rounded-lg border border-gray-200">
                {city}
              </span>
            ))}
          </div>
          <p className="text-center text-gray-500 mt-4">
            Et toutes les communes de l'Essonne et des Hauts-de-Seine
          </p>
        </div>
      </div>
    </section>
  )
}
