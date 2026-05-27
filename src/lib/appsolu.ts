// Intégration AppSolu (groupement Taxi Pro 91)
// API publique non documentée : endpoints reverse-engineerés depuis le widget officiel.
// base: https://prod.taxi.appsolu.net

const APPSOLU_BASE = 'https://prod.taxi.appsolu.net'
const GROUPEMENT = 'T91MP3'

export interface AppsoluLocation {
  lat: number
  lng: number
  street: string
  city: string
  label: string // adresse complète affichée
}

export interface AppsoluBookingInput {
  from: AppsoluLocation
  to: AppsoluLocation
  bookedDate: string // ISO 8601 (ex: 2026-05-27T19:54:00.000Z)
  firstName: string
  lastName: string
  phone: string // format libre, sera normalisé en +33
  email: string
  passengers: number
  baggages?: number
  comment?: string
}

export interface AppsoluEstimate {
  estimatedPriceInCents: number
  estimatedPriceInCentsHigh: number
  distanceMeters: number
  durationMinutes: number
}

/** Normalise un numéro FR vers le format E.164 (+33...) attendu par AppSolu */
export function normalizePhone(phone: string): string {
  const digits = phone.replace(/[^\d+]/g, '')
  if (digits.startsWith('+')) return digits
  if (digits.startsWith('0')) return '+33' + digits.slice(1)
  if (digits.startsWith('33')) return '+' + digits
  return digits
}

/** GET estimation de prix AppSolu */
export async function getEstimate(
  from: { lat: number; lng: number },
  to: { lat: number; lng: number },
  bookedDate: string,
  nbPlaces: number,
): Promise<AppsoluEstimate> {
  const params = new URLSearchParams({
    groupementCId: GROUPEMENT,
    bookedDate,
    fromLat: String(from.lat),
    fromLng: String(from.lng),
    toLat: String(to.lat),
    toLng: String(to.lng),
    origin: 'WEB',
    nbPlaces: String(nbPlaces),
  })
  const res = await fetch(`${APPSOLU_BASE}/rest/callcenter/courses/estimate?${params}`, {
    method: 'GET',
    headers: { Accept: 'application/json' },
  })
  if (!res.ok) throw new Error(`Estimate AppSolu échouée (${res.status})`)
  return res.json()
}

/** Construit le payload course attendu par POST /rest/courses/{groupement} */
function buildCoursePayload(input: AppsoluBookingInput, estimate: AppsoluEstimate | null) {
  const low = estimate?.estimatedPriceInCents ?? 0
  const high = estimate?.estimatedPriceInCentsHigh ?? 0
  const distanceKm = estimate ? String(Math.round(estimate.distanceMeters / 1000)) : ''

  return {
    callNumber: '',
    booked_depart_date: input.bookedDate,
    ret_bookedDepartDate: null,
    lat: input.from.lat,
    rc_freq: 'NONE',
    rc_untilDate: null,
    rc_weeklyOccurence: [],
    rc_keyName: null,
    rc_changing: false,
    lng: input.from.lng,
    cid: '',
    createdByCId: 'Web:SiteClient',
    callDate: null,
    dispatchedDate: null,
    car_type: 'CAR',
    lastChangeDate: null,
    lateness: '',
    passenger: input.lastName,
    passengerFirstname: input.firstName,
    passenger_ssn: '',
    payment_mode: 'CASH',
    room: '',
    status: 'DRAFT',
    number: '',
    taxiCId: '',
    taxiAcceptedDistance: 0,
    amountInCents: 0,
    amountTollInCents: 0,
    amountWaitInMn: 0,
    cellphone: normalizePhone(input.phone),
    emailConfirmation: input.email,
    distanceInKm: distanceKm,
    from_adr: input.from.street,
    from_city: input.from.city,
    to_adr: input.to.street,
    to_city: input.to.city,
    to_expected_time: null,
    to_lat: input.to.lat,
    to_lng: input.to.lng,
    getToDepartTime: '',
    requestor: '',
    groupement: '',
    groupementCId: '',
    missionDet: '',
    missionType: 'TAXI',
    flexible: 0,
    hasComments: Boolean(input.comment),
    options: '',
    requestorCode: '',
    commentCourse: input.comment || '',
    from_label: input.from.label,
    to_label: input.to.label,
    dispatch_order: 'REQUEST',
    do_taxi_cid: '',
    do_groupementsCId: [],
    do_changing: false,
    do_dispatchStep: -1,
    from_input_method: 'TEXT',
    to_input_method: 'TEXT',
    from_fp_cid: '',
    to_fp_cid: '',
    customerName: '',
    customerCId: null,
    ret_changing: false,
    autoDispatchTargetStationCId: '',
    do_modified_by_taxi_cid: '',
    isFavoriteAddress: false,
    numberOfCourses: 1,
    asteriskId: '',
    forMyEyesOnly: false,
    dispatchStep: 0,
    createdByMedia: 'WAP',
    invoiceStatus: 'DRAFT',
    tripDate: null,
    tripTrainNumber: '',
    tripFlightNumber: '',
    tripOrigin: '',
    passengersNb: input.passengers,
    baggagesNb: input.baggages ?? 0,
    notOpened: false,
    amountInCentsLow: low,
    amountInCentsHigh: high,
  }
}

/** POST création d'une course dans AppSolu. Retourne le cid de la course créée. */
export async function createCourse(
  input: AppsoluBookingInput,
  estimate: AppsoluEstimate | null,
): Promise<{ cid: string; raw: unknown }> {
  const payload = buildCoursePayload(input, estimate)
  const res = await fetch(`${APPSOLU_BASE}/rest/courses/${GROUPEMENT}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify(payload),
  })
  if (!res.ok) {
    const text = await res.text().catch(() => '')
    throw new Error(`Création course AppSolu échouée (${res.status}): ${text.slice(0, 300)}`)
  }
  const raw = await res.json()
  return { cid: (raw as { cid?: string })?.cid || '', raw }
}
