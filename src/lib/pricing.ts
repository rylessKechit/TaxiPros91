export interface PriceEstimate {
  min: number
  max: number
  distanceKm: number
  durationMin: number
  tariff: 'A' | 'B' | 'C' | 'D'
  isRoundTrip: boolean
  vehicle: 'electrique' | 'van' | 'premium'
}

const AIRPORT_KEYWORDS = [
  'orly', 'cdg', 'charles de gaulle', 'roissy', 'le bourget', 'beauvais',
  'aéroport', 'aeroport', 'airport',
]

const TRAIN_STATION_KEYWORDS = [
  'gare de lyon', 'gare montparnasse', 'gare du nord', 'gare de l\'est',
  'gare saint-lazare', 'gare d\'austerlitz', 'gare de massy',
  'massy tgv', 'massy palaiseau', 'gare',
]

export const STATION_KEYWORDS = [...AIRPORT_KEYWORDS, ...TRAIN_STATION_KEYWORDS]

export function isAirport(address: string): boolean {
  const lower = address.toLowerCase()
  return AIRPORT_KEYWORDS.some(keyword => lower.includes(keyword))
}

export function isTrainStation(address: string): boolean {
  const lower = address.toLowerCase()
  return TRAIN_STATION_KEYWORDS.some(keyword => lower.includes(keyword))
}

export function isStationOrAirport(address: string): boolean {
  return isAirport(address) || isTrainStation(address)
}
