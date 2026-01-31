'use client'

import { useState, useRef, useEffect } from 'react'
import { Loader2, ArrowLeft, ArrowRight, Check, MapPin, Calendar, Car, User, Zap, Crown, Bus } from 'lucide-react'
import { isStationOrAirport } from '@/lib/pricing'
import PlacesAutocomplete from './PlacesAutocomplete'

interface BookingFormProps {
  compact?: boolean
}

interface FormData {
  pickup: string
  destination: string
  date: string
  time: string
  passengers: string
  isRoundTrip: boolean
  returnPickup: string
  returnDestination: string
  returnDate: string
  returnTime: string
  vehicle: 'electrique' | 'van' | 'premium'
  firstName: string
  lastName: string
  email: string
  phone: string
}

interface PriceEstimate {
  min: number
  max: number
  distanceKm: number
  durationMin: number
  tariff: string
  originAddress: string
  destinationAddress: string
}

const STEPS = [
  { label: 'Trajet', icon: MapPin },
  { label: 'Véhicule', icon: Car },
  { label: 'Coordonnées', icon: User },
  { label: 'Confirmation', icon: Check },
]

function getMinDateTime(): { minDate: string; minTime: string } {
  const now = new Date()
  now.setHours(now.getHours() + 1)
  const minDate = now.toISOString().split('T')[0]
  const minTime = now.toTimeString().slice(0, 5)
  return { minDate, minTime }
}

function formatDate(dateStr: string): string {
  const [year, month, day] = dateStr.split('-')
  return `${day}/${month}/${year}`
}

const inputClass = "w-full bg-white border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-900 placeholder-gray-400 focus:border-yellow-400 focus:outline-none"

export default function BookingForm({ compact = false }: BookingFormProps) {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState<FormData>({
    pickup: '',
    destination: '',
    date: '',
    time: '',
    passengers: '1',
    isRoundTrip: false,
    returnPickup: '',
    returnDestination: '',
    returnDate: '',
    returnTime: '',
    vehicle: 'electrique',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
  })
  const [priceEstimate, setPriceEstimate] = useState<PriceEstimate | null>(null)
  const [isCalculating, setIsCalculating] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [bookingDone, setBookingDone] = useState(false)
  const [error, setError] = useState('')
  const [showRoundTrip, setShowRoundTrip] = useState(false)
  const [vehiclePrices, setVehiclePrices] = useState<Record<string, { min: number; max: number; distanceKm: number; durationMin: number }> | null>(null)

  const mapRef = useRef<HTMLDivElement>(null)

  const handlePlaceSelected = (address: string, field: keyof FormData) => {
    setFormData(prev => {
      const updated = { ...prev, [field]: address }
      if (field === 'pickup' || field === 'destination') {
        const shouldShow = isStationOrAirport(updated.pickup) || isStationOrAirport(updated.destination)
        setShowRoundTrip(shouldShow)
        if (shouldShow && !prev.isRoundTrip) {
          updated.returnPickup = field === 'pickup' ? updated.destination : updated.pickup
          updated.returnDestination = field === 'destination' ? updated.pickup : updated.destination
        }
      }
      return updated
    })
  }

  // Auto-calculate prices for all vehicles when entering step 2
  useEffect(() => {
    if (step !== 2 || vehiclePrices) return

    const fetchAllPrices = async () => {
      setIsCalculating(true)
      try {
        const results: Record<string, { min: number; max: number; distanceKm: number; durationMin: number }> = {}
        for (const v of ['electrique', 'premium', 'van'] as const) {
          const res = await fetch('/api/calculate-price', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              origin: formData.pickup,
              destination: formData.destination,
              vehicle: v,
              date: formData.date,
              time: formData.time,
              isRoundTrip: formData.isRoundTrip,
            }),
          })
          if (res.ok) {
            const data = await res.json()
            results[v] = { min: data.min, max: data.max, distanceKm: data.distanceKm, durationMin: data.durationMin }
          }
        }
        setVehiclePrices(results)
        // Set price estimate for the currently selected vehicle
        const selected = results[formData.vehicle]
        if (selected) {
          setPriceEstimate({ ...selected, tariff: '', originAddress: '', destinationAddress: '' })
        }
      } catch {
        setError('Erreur de calcul des prix')
      } finally {
        setIsCalculating(false)
      }
    }

    fetchAllPrices()
  }, [step, vehiclePrices, formData.pickup, formData.destination, formData.date, formData.time, formData.isRoundTrip, formData.vehicle])

  useEffect(() => {
    if (step === 3 && mapRef.current && window.google?.maps) {
      const directionsService = new google.maps.DirectionsService()
      const map = new google.maps.Map(mapRef.current, {
        zoom: 10,
        center: { lat: 48.7253, lng: 2.2714 },
        disableDefaultUI: true,
        gestureHandling: 'cooperative',
        styles: [
          { featureType: 'poi', stylers: [{ visibility: 'off' }] },
          { featureType: 'transit', stylers: [{ visibility: 'off' }] },
          { featureType: 'administrative.land_parcel', stylers: [{ visibility: 'off' }] },
          { featureType: 'administrative.neighborhood', stylers: [{ visibility: 'off' }] },
          { featureType: 'road', elementType: 'labels.icon', stylers: [{ visibility: 'off' }] },
        ],
      })

      const renderer = new google.maps.DirectionsRenderer({
        map,
        polylineOptions: { strokeColor: '#facc15', strokeWeight: 5 },
        suppressMarkers: false,
      })

      directionsService.route(
        {
          origin: formData.pickup,
          destination: formData.destination,
          travelMode: google.maps.TravelMode.DRIVING,
        },
        (result, status) => {
          if (status === 'OK' && result) {
            renderer.setDirections(result)
          }
        }
      )
    }
  }, [step, formData.pickup, formData.destination])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    const checked = (e.target as HTMLInputElement).checked

    setFormData(prev => {
      const updated = { ...prev, [name]: type === 'checkbox' ? checked : value }

      if (name === 'isRoundTrip' && checked) {
        updated.returnPickup = prev.destination
        updated.returnDestination = prev.pickup
      }

      // Update price estimate when switching vehicle
      if (name === 'vehicle' && vehiclePrices && vehiclePrices[value]) {
        const vp = vehiclePrices[value]
        setPriceEstimate({ ...vp, tariff: '', originAddress: '', destinationAddress: '' })
      }

      return updated
    })

    setError('')
  }

  const handleSubmitBooking = async () => {
    setIsSubmitting(true)
    setError('')

    try {
      const res = await fetch('/api/booking', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          phone: formData.phone,
          pickup: formData.pickup,
          destination: formData.destination,
          date: formData.date,
          time: formData.time,
          passengers: formData.passengers,
          vehicle: formData.vehicle,
          isRoundTrip: formData.isRoundTrip,
          returnPickup: formData.returnPickup,
          returnDestination: formData.returnDestination,
          returnDate: formData.returnDate,
          returnTime: formData.returnTime,
          priceMin: priceEstimate?.min || 0,
          priceMax: priceEstimate?.max || 0,
          distanceKm: priceEstimate?.distanceKm || 0,
        }),
      })

      if (!res.ok) {
        const data = await res.json()
        setError(data.error || 'Erreur lors de la réservation')
        return
      }

      setBookingDone(true)
      setStep(4)
    } catch {
      setError('Erreur de connexion')
    } finally {
      setIsSubmitting(false)
    }
  }

  const canGoNext = (): boolean => {
    switch (step) {
      case 1:
        if (!formData.pickup || !formData.destination || !formData.date || !formData.time) return false
        if (formData.isRoundTrip && (!formData.returnDate || !formData.returnTime)) return false
        return true
      case 2:
        return !!formData.vehicle && !!vehiclePrices
      case 3:
        return !!formData.firstName && !!formData.lastName && !!formData.email && !!formData.phone
      default:
        return false
    }
  }

  const handleNext = async () => {
    if (step === 1) {
      setStep(2)
      setPriceEstimate(null)
      setVehiclePrices(null)
    } else if (step === 2) {
      setStep(3)
    } else if (step === 3) {
      await handleSubmitBooking()
    }
  }

  const { minDate } = getMinDateTime()

  const VEHICLES = [
    { id: 'electrique' as const, name: 'Électrique', desc: 'Tesla Model 3 ou équivalent', icon: Zap },
    { id: 'premium' as const, name: 'Premium', desc: 'Mercedes Classe E ou équivalent', icon: Crown },
    { id: 'van' as const, name: 'Van', desc: 'Mercedes Classe V — jusqu\'à 7 passagers', icon: Bus },
  ]

  const StepIndicator = () => (
    <nav aria-label="Étapes de réservation" className="flex items-center justify-between mb-4 sm:mb-6">
      {STEPS.map((s, i) => {
        const Icon = s.icon
        const stepNum = i + 1
        const isActive = step === stepNum
        const isDone = step > stepNum || bookingDone
        return (
          <div key={i} className="flex items-center flex-1">
            <div className="flex flex-col items-center">
              <div className={`w-7 h-7 sm:w-9 sm:h-9 rounded-full flex items-center justify-center text-sm font-bold transition-colors ${
                isDone ? 'bg-yellow-400 text-black' : isActive ? 'bg-yellow-400 text-black' : 'bg-gray-200 text-gray-400'
              }`}>
                {isDone && !isActive ? <Check className="w-3.5 h-3.5 sm:w-4 sm:h-4" /> : <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />}
              </div>
              <span className={`text-[10px] sm:text-xs mt-1 ${isActive || isDone ? 'text-gray-900' : 'text-gray-500'}`}>
                {s.label}
              </span>
            </div>
            {i < STEPS.length - 1 && (
              <div className={`flex-1 h-0.5 mx-1 sm:mx-2 ${step > stepNum ? 'bg-yellow-400' : 'bg-gray-200'}`} />
            )}
          </div>
        )
      })}
    </nav>
  )

  if (bookingDone) {
    return (
      <div className={`bg-white rounded-xl shadow-lg border-2 border-gray-100 ${compact ? 'p-4 sm:p-5' : 'p-6 md:p-8'}`}>
        <StepIndicator />
        <div className="text-center py-8">
          <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
            <Check className="w-8 h-8 text-black" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-2">Réservation confirmée !</h3>
          <p className="text-gray-500 mb-6">
            Un email de confirmation a été envoyé à <span className="text-gray-900 font-medium">{formData.email}</span>
          </p>
          <div className="bg-gray-50 rounded-lg p-4 text-left space-y-2 max-w-sm mx-auto">
            <div className="flex justify-between">
              <span className="text-gray-500">Trajet</span>
              <span className="text-gray-900 text-sm text-right">{formData.pickup.split(',')[0]} → {formData.destination.split(',')[0]}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">Date</span>
              <span className="text-gray-900">{formatDate(formData.date)} à {formData.time}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">Prix estimé</span>
              <span className="text-gray-900 font-bold">{priceEstimate?.min}€ — {priceEstimate?.max}€</span>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className={`bg-white rounded-xl shadow-lg border-2 border-gray-100 ${compact ? 'p-4 sm:p-5' : 'p-6 md:p-8'}`}>
      <StepIndicator />

      {error && (
        <div className="bg-red-50 border border-red-200 text-red-600 text-sm rounded-lg p-3 mb-4">
          {error}
        </div>
      )}

      {/* STEP 1: Trajet */}
      {step === 1 && (
        <div className={compact ? 'space-y-3' : 'space-y-4'}>
          <h2 className={`font-bold text-gray-900 ${compact ? 'text-lg' : 'text-xl'}`}>
            Où allez-vous ?
          </h2>

          <div>
            <label className="block text-gray-700 text-sm font-medium mb-1">Départ *</label>
            <PlacesAutocomplete
              onPlaceSelected={(address) => handlePlaceSelected(address, 'pickup')}
              placeholder="Ex: 15 rue de la Gare, Massy"
              className={inputClass}
              defaultValue={formData.pickup}
              label="Adresse de départ"
            />
          </div>

          <div>
            <label className="block text-gray-700 text-sm font-medium mb-1">Arrivée *</label>
            <PlacesAutocomplete
              onPlaceSelected={(address) => handlePlaceSelected(address, 'destination')}
              placeholder="Ex: Aéroport d'Orly"
              className={inputClass}
              defaultValue={formData.destination}
              label="Adresse d'arrivée"
            />
          </div>

          {showRoundTrip && (
            <label className="flex items-center gap-3 bg-yellow-50 border border-yellow-300 rounded-lg p-3 cursor-pointer">
              <input
                type="checkbox"
                name="isRoundTrip"
                checked={formData.isRoundTrip}
                onChange={handleInputChange}
                className="w-5 h-5 accent-yellow-400"
              />
              <span className="text-gray-900 font-medium">Aller / Retour</span>
            </label>
          )}

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label htmlFor="booking-date" className="block text-gray-700 text-sm font-medium mb-1">Date *</label>
              <input
                id="booking-date"
                type="date"
                name="date"
                value={formData.date}
                onChange={handleInputChange}
                min={minDate}
                className={inputClass}
                required
              />
            </div>
            <div>
              <label htmlFor="booking-time" className="block text-gray-700 text-sm font-medium mb-1">Heure *</label>
              <input
                id="booking-time"
                type="time"
                name="time"
                value={formData.time}
                onChange={handleInputChange}
                className={inputClass}
                required
              />
            </div>
          </div>

          {formData.isRoundTrip && (
            <div className="border-t border-gray-200 pt-4 space-y-4">
              <h3 className="text-gray-900 font-medium flex items-center gap-2">
                <Calendar className="w-4 h-4" /> Trajet retour
              </h3>
              <div>
                <label className="block text-gray-700 text-sm font-medium mb-1">Départ retour</label>
                <PlacesAutocomplete
                  onPlaceSelected={(address) => handlePlaceSelected(address, 'returnPickup')}
                  placeholder="Départ retour"
                  className={inputClass}
                  defaultValue={formData.returnPickup}
                  label="Adresse de départ retour"
                />
              </div>
              <div>
                <label className="block text-gray-700 text-sm font-medium mb-1">Arrivée retour</label>
                <PlacesAutocomplete
                  onPlaceSelected={(address) => handlePlaceSelected(address, 'returnDestination')}
                  placeholder="Arrivée retour"
                  className={inputClass}
                  defaultValue={formData.returnDestination}
                  label="Adresse d'arrivée retour"
                />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label htmlFor="booking-return-date" className="block text-gray-700 text-sm font-medium mb-1">Date retour *</label>
                  <input
                    id="booking-return-date"
                    type="date"
                    name="returnDate"
                    value={formData.returnDate}
                    onChange={handleInputChange}
                    min={formData.date || minDate}
                    className={inputClass}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="booking-return-time" className="block text-gray-700 text-sm font-medium mb-1">Heure retour *</label>
                  <input
                    id="booking-return-time"
                    type="time"
                    name="returnTime"
                    value={formData.returnTime}
                    onChange={handleInputChange}
                    className={inputClass}
                    required
                  />
                </div>
              </div>
            </div>
          )}

          <div>
            <label htmlFor="booking-passengers" className="block text-gray-700 text-sm font-medium mb-1">Passagers</label>
            <select
              id="booking-passengers"
              name="passengers"
              value={formData.passengers}
              onChange={handleInputChange}
              className={inputClass}
            >
              <option value="1">1 passager</option>
              <option value="2">2 passagers</option>
              <option value="3">3 passagers</option>
              <option value="4">4 passagers</option>
              <option value="5">5+ passagers</option>
            </select>
          </div>
        </div>
      )}

      {/* STEP 2: Véhicule & Prix */}
      {step === 2 && (
        <div className={compact ? 'space-y-3' : 'space-y-4'}>
          <h2 className={`font-bold text-gray-900 ${compact ? 'text-lg' : 'text-xl'}`}>
            Choisissez votre véhicule
          </h2>

          {isCalculating && (
            <div className="flex items-center justify-center gap-2 py-4 text-gray-500">
              <Loader2 className="w-5 h-5 animate-spin" />
              <span className="text-sm">Calcul des prix...</span>
            </div>
          )}

          {!isCalculating && (
            <div className="space-y-2">
              {VEHICLES.map(v => {
                const VIcon = v.icon
                const vPrice = vehiclePrices?.[v.id]
                return (
                  <label
                    key={v.id}
                    className={`flex items-center gap-3 p-3 rounded-lg border-2 cursor-pointer transition-colors ${
                      formData.vehicle === v.id
                        ? 'border-yellow-400 bg-yellow-50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <input
                      type="radio"
                      name="vehicle"
                      value={v.id}
                      checked={formData.vehicle === v.id}
                      onChange={handleInputChange}
                      className="sr-only"
                    />
                    <div className={`w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 ${
                      formData.vehicle === v.id ? 'bg-yellow-400 text-black' : 'bg-gray-100 text-gray-500'
                    }`}>
                      <VIcon className="w-4.5 h-4.5" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <span className="text-gray-900 font-bold text-sm">{v.name}</span>
                      <span className="text-gray-500 text-xs block">{v.desc}</span>
                    </div>
                    {vPrice && (
                      <span className="text-sm font-bold text-gray-900 whitespace-nowrap">
                        {vPrice.min}€ — {vPrice.max}€
                      </span>
                    )}
                  </label>
                )
              })}
            </div>
          )}

          {vehiclePrices && priceEstimate && (
            <div className="text-center text-gray-500 text-xs pt-1">
              {priceEstimate.distanceKm} km • ~{priceEstimate.durationMin} min
            </div>
          )}
        </div>
      )}

      {/* STEP 3: Carte & Coordonnées */}
      {step === 3 && (
        <div className={compact ? 'space-y-3' : 'space-y-4'}>
          <h2 className={`font-bold text-gray-900 ${compact ? 'text-lg' : 'text-xl'}`}>
            Vos coordonnées
          </h2>

          <div ref={mapRef} role="img" aria-label="Carte du trajet" className="w-full h-40 sm:h-56 rounded-lg overflow-hidden border border-gray-200" />

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label htmlFor="booking-lastname" className="block text-gray-700 text-sm font-medium mb-1">Nom *</label>
              <input
                id="booking-lastname"
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                placeholder="Dupont"
                className={inputClass}
                required
              />
            </div>
            <div>
              <label htmlFor="booking-firstname" className="block text-gray-700 text-sm font-medium mb-1">Prénom *</label>
              <input
                id="booking-firstname"
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                placeholder="Jean"
                className={inputClass}
                required
              />
            </div>
          </div>

          <div>
            <label htmlFor="booking-email" className="block text-gray-700 text-sm font-medium mb-1">Email *</label>
            <input
              id="booking-email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="jean.dupont@email.com"
              className={inputClass}
              required
            />
          </div>

          <div>
            <label htmlFor="booking-phone" className="block text-gray-700 text-sm font-medium mb-1">Téléphone *</label>
            <input
              id="booking-phone"
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              placeholder="06 XX XX XX XX"
              className={inputClass}
              required
            />
          </div>
        </div>
      )}

      {/* Navigation buttons */}
      {!bookingDone && (
        <div className="flex gap-2 mt-4">
          {step > 1 && (
            <button
              onClick={() => setStep(step - 1)}
              className="flex items-center gap-1.5 px-4 py-2.5 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-100 transition-colors text-sm"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Retour</span>
            </button>
          )}
          <button
            onClick={handleNext}
            disabled={!canGoNext() || isSubmitting}
            className="flex-1 bg-yellow-400 hover:bg-yellow-500 disabled:bg-gray-200 disabled:text-gray-400 text-black font-bold rounded-lg py-2.5 text-sm transition-colors flex items-center justify-center gap-1.5"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                Envoi...
              </>
            ) : step === 3 ? (
              <>
                Confirmer la réservation
                <Check className="w-4 h-4" />
              </>
            ) : (
              <>
                Suivant
                <ArrowRight className="w-4 h-4" />
              </>
            )}
          </button>
        </div>
      )}
    </div>
  )
}
