export interface City {
  slug: string
  name: string
  postalCode: string
  region: 'Essonne' | 'Hauts-de-Seine'
  coords: { lat: number; lng: number }
  population?: number
}

// Villes avec page dédiée existante (Sprint 1 & 3)
export const cities: City[] = [
  { slug: 'massy', name: 'Massy', postalCode: '91300', region: 'Essonne', coords: { lat: 48.7308, lng: 2.2737 }, population: 50000 },
  { slug: 'palaiseau', name: 'Palaiseau', postalCode: '91120', region: 'Essonne', coords: { lat: 48.7147, lng: 2.2464 }, population: 35000 },
  { slug: 'antony', name: 'Antony', postalCode: '92160', region: 'Hauts-de-Seine', coords: { lat: 48.7544, lng: 2.2986 }, population: 62000 },
  { slug: 'longjumeau', name: 'Longjumeau', postalCode: '91160', region: 'Essonne', coords: { lat: 48.6953, lng: 2.2942 }, population: 21000 },
  { slug: 'les-ulis', name: 'Les Ulis', postalCode: '91940', region: 'Essonne', coords: { lat: 48.6819, lng: 2.1697 }, population: 25000 },
  { slug: 'saclay', name: 'Saclay', postalCode: '91400', region: 'Essonne', coords: { lat: 48.7314, lng: 2.1664 }, population: 4000 },
  { slug: 'ballainvilliers', name: 'Ballainvilliers', postalCode: '91160', region: 'Essonne', coords: { lat: 48.6664, lng: 2.3033 }, population: 4500 },
  { slug: 'verrieres-le-buisson', name: 'Verrières-le-Buisson', postalCode: '91370', region: 'Essonne', coords: { lat: 48.7494, lng: 2.2622 }, population: 16000 },
  { slug: 'evry-courcouronnes', name: 'Évry-Courcouronnes', postalCode: '91000', region: 'Essonne', coords: { lat: 48.6239, lng: 2.4292 }, population: 70000 },
  { slug: 'corbeil-essonnes', name: 'Corbeil-Essonnes', postalCode: '91100', region: 'Essonne', coords: { lat: 48.6086, lng: 2.4828 }, population: 51000 },
  { slug: 'savigny-sur-orge', name: 'Savigny-sur-Orge', postalCode: '91600', region: 'Essonne', coords: { lat: 48.6789, lng: 2.3506 }, population: 38000 },
  { slug: 'orsay', name: 'Orsay', postalCode: '91400', region: 'Essonne', coords: { lat: 48.6989, lng: 2.1872 }, population: 16000 },
  { slug: 'gif-sur-yvette', name: 'Gif-sur-Yvette', postalCode: '91190', region: 'Essonne', coords: { lat: 48.6975, lng: 2.1361 }, population: 21000 },
  { slug: 'chilly-mazarin', name: 'Chilly-Mazarin', postalCode: '91380', region: 'Essonne', coords: { lat: 48.7019, lng: 2.3194 }, population: 21000 },
]

export const getCity = (slug: string) => cities.find(c => c.slug === slug)
