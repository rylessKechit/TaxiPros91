export interface PriceEstimate {
  min: number
  max: number
  distanceKm: number
  durationMin: number
  tariff: 'A' | 'B' | 'C' | 'D'
  isRoundTrip: boolean
  vehicle: 'electrique' | 'van' | 'premium'
}

const TARIFFS = {
  A: { rate: 1.00, label: 'Jour + Aller-Retour' },
  B: { rate: 1.50, label: 'Nuit/Dimanche + Aller-Retour' },
  C: { rate: 2.00, label: 'Jour + Aller Simple' },
  D: { rate: 3.00, label: 'Nuit/Dimanche + Aller Simple' },
} as const

const PICKUP_FEE = { day: 18, night: 8 } as const
const MIN_PRICE = 20
const VAN_SUPPLEMENT = 25
const PRICE_RANGE = 5

function isNightOrSunday(dateStr: string, timeStr: string): boolean {
  const date = new Date(`${dateStr}T${timeStr}`)
  const hour = date.getHours()
  const day = date.getDay()
  return day === 0 || hour < 8 || hour >= 19
}

export function calculatePrice(
  distanceKm: number,
  durationMin: number,
  isRoundTrip: boolean,
  vehicle: 'electrique' | 'van' | 'premium',
  date: string,
  time: string
): PriceEstimate {
  const nightOrSunday = isNightOrSunday(date, time)

  let tariff: 'A' | 'B' | 'C' | 'D'
  if (isRoundTrip) {
    tariff = nightOrSunday ? 'B' : 'A'
  } else {
    tariff = nightOrSunday ? 'D' : 'C'
  }

  const pickupFee = nightOrSunday ? PICKUP_FEE.night : PICKUP_FEE.day
  const totalDistance = isRoundTrip ? distanceKm * 2 : distanceKm

  let price = pickupFee + totalDistance * TARIFFS[tariff].rate

  if (vehicle === 'van') {
    price += VAN_SUPPLEMENT
  }

  price = Math.max(price, MIN_PRICE)
  const min = Math.round(price)
  const max = min + PRICE_RANGE

  return {
    min,
    max,
    distanceKm: Math.round(totalDistance * 10) / 10,
    durationMin: isRoundTrip ? durationMin * 2 : durationMin,
    tariff,
    isRoundTrip,
    vehicle,
  }
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
