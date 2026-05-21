export interface Route {
  slug: string
  from: string
  to: string
  fromSlug?: string
  priceMin: number
  priceMax: number
  durationMin: number
  description: string
}

export const popularRoutes: Route[] = [
  // P1
  { slug: 'taxi-massy-orly', from: 'Massy', to: 'Aéroport Orly', fromSlug: 'massy', priceMin: 25, priceMax: 35, durationMin: 15, description: 'Transfert express vers tous les terminaux Orly' },
  { slug: 'taxi-massy-cdg', from: 'Massy', to: 'Aéroport CDG', fromSlug: 'massy', priceMin: 70, priceMax: 90, durationMin: 50, description: 'Liaison directe vers Roissy Charles de Gaulle' },
  { slug: 'taxi-massy-paris', from: 'Massy', to: 'Paris Centre', fromSlug: 'massy', priceMin: 45, priceMax: 60, durationMin: 30, description: 'Trajet rapide vers tous les arrondissements parisiens' },
  { slug: 'taxi-antony-orly', from: 'Antony', to: 'Aéroport Orly', fromSlug: 'antony', priceMin: 20, priceMax: 30, durationMin: 12, description: 'Course courte et économique vers Orly' },
  // P2
  { slug: 'taxi-palaiseau-orly', from: 'Palaiseau', to: 'Aéroport Orly', fromSlug: 'palaiseau', priceMin: 30, priceMax: 40, durationMin: 20, description: 'Depuis Palaiseau et le plateau de Saclay' },
  { slug: 'taxi-longjumeau-orly', from: 'Longjumeau', to: 'Aéroport Orly', fromSlug: 'longjumeau', priceMin: 25, priceMax: 35, durationMin: 18, description: 'Liaison rapide Longjumeau-Orly' },
  { slug: 'taxi-les-ulis-orly', from: 'Les Ulis', to: 'Aéroport Orly', fromSlug: 'les-ulis', priceMin: 35, priceMax: 50, durationMin: 25, description: 'Depuis Courtaboeuf et Les Ulis' },
  { slug: 'taxi-essonne-disneyland', from: 'Essonne', to: 'Disneyland Paris', priceMin: 90, priceMax: 130, durationMin: 60, description: 'Transfert direct vers Disneyland Paris (Marne-la-Vallée)' },
  { slug: 'taxi-essonne-versailles', from: 'Essonne', to: 'Versailles', priceMin: 55, priceMax: 80, durationMin: 40, description: 'Trajet vers le Château de Versailles' },
]
