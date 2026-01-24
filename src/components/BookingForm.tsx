'use client'

import { useState } from 'react'
import { Phone, Loader2 } from 'lucide-react'

interface BookingFormProps {
  compact?: boolean
}

export default function BookingForm({ compact = false }: BookingFormProps) {
  const [formData, setFormData] = useState({
    pickup: '',
    destination: '',
    date: '',
    time: '',
    passengers: '1',
    phone: '',
  })

  const [estimatedPrice, setEstimatedPrice] = useState<{ min: number; max: number } | null>(null)
  const [isCalculating, setIsCalculating] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    setEstimatedPrice(null)
  }

  const handleCalculatePrice = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!formData.pickup || !formData.destination) {
      return
    }

    setIsCalculating(true)

    // Simulation du calcul (à remplacer par la vraie logique avec Google Maps)
    setTimeout(() => {
      const basePrice = Math.floor(Math.random() * 30) + 15
      setEstimatedPrice({
        min: basePrice,
        max: basePrice + 5
      })
      setIsCalculating(false)
    }, 1500)
  }

  const inputClass = compact
    ? "w-full border-2 border-gray-200 rounded-lg px-4 py-3 text-gray-900 placeholder-gray-400 focus:border-yellow-400 focus:outline-none"
    : "w-full border-2 border-gray-200 rounded-lg px-4 py-4 text-gray-900 placeholder-gray-400 focus:border-yellow-400 focus:outline-none"

  const labelClass = compact
    ? "block text-gray-700 font-medium mb-1.5"
    : "block text-gray-700 font-medium mb-2"

  return (
    <div className={`bg-white rounded-xl shadow-lg border-2 border-gray-100 ${compact ? 'p-5' : 'p-6 md:p-8'}`}>
      <h2 className={`font-bold text-gray-900 ${compact ? 'text-xl mb-1' : 'text-2xl mb-2'}`}>
        Réserver votre taxi
      </h2>
      <p className={`text-gray-600 ${compact ? 'mb-4' : 'mb-6'}`}>
        Obtenez une estimation de prix
      </p>

      <form onSubmit={handleCalculatePrice} className={compact ? 'space-y-4' : 'space-y-5'}>
        {/* Adresse de départ */}
        <div>
          <label htmlFor="pickup" className={labelClass}>
            Départ *
          </label>
          <input
            type="text"
            id="pickup"
            name="pickup"
            value={formData.pickup}
            onChange={handleInputChange}
            placeholder="Ex: 15 rue de la Gare, Massy"
            className={inputClass}
            required
          />
        </div>

        {/* Adresse d'arrivée */}
        <div>
          <label htmlFor="destination" className={labelClass}>
            Arrivée *
          </label>
          <input
            type="text"
            id="destination"
            name="destination"
            value={formData.destination}
            onChange={handleInputChange}
            placeholder="Ex: Aéroport d'Orly"
            className={inputClass}
            required
          />
        </div>

        {/* Date, Heure, Passagers - sur une ligne en mode compact */}
        {compact ? (
          <div className="grid grid-cols-3 gap-2">
            <div>
              <label htmlFor="date" className={labelClass}>Date *</label>
              <input
                type="date"
                id="date"
                name="date"
                value={formData.date}
                onChange={handleInputChange}
                className={inputClass}
                required
              />
            </div>
            <div>
              <label htmlFor="time" className={labelClass}>Heure *</label>
              <input
                type="time"
                id="time"
                name="time"
                value={formData.time}
                onChange={handleInputChange}
                className={inputClass}
                required
              />
            </div>
            <div>
              <label htmlFor="passengers" className={labelClass}>Passagers</label>
              <select
                id="passengers"
                name="passengers"
                value={formData.passengers}
                onChange={handleInputChange}
                className={`${inputClass} bg-white`}
              >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5+</option>
              </select>
            </div>
          </div>
        ) : (
          <>
            {/* Date et Heure */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="date" className={labelClass}>Date *</label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  value={formData.date}
                  onChange={handleInputChange}
                  className={inputClass}
                  required
                />
              </div>
              <div>
                <label htmlFor="time" className={labelClass}>Heure *</label>
                <input
                  type="time"
                  id="time"
                  name="time"
                  value={formData.time}
                  onChange={handleInputChange}
                  className={inputClass}
                  required
                />
              </div>
            </div>

            {/* Nombre de passagers */}
            <div>
              <label htmlFor="passengers" className={labelClass}>Nombre de passagers</label>
              <select
                id="passengers"
                name="passengers"
                value={formData.passengers}
                onChange={handleInputChange}
                className={`${inputClass} bg-white`}
              >
                <option value="1">1 passager</option>
                <option value="2">2 passagers</option>
                <option value="3">3 passagers</option>
                <option value="4">4 passagers</option>
                <option value="5">5+ passagers (Van)</option>
              </select>
            </div>

            {/* Téléphone */}
            <div>
              <label htmlFor="phone" className={labelClass}>Votre téléphone</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="06 XX XX XX XX"
                className={inputClass}
              />
            </div>
          </>
        )}

        {/* Estimation du prix */}
        {estimatedPrice && (
          <div className={`bg-yellow-50 border-2 border-yellow-400 rounded-lg ${compact ? 'p-3' : 'p-4'}`}>
            <p className="text-gray-700 text-sm mb-1">Estimation :</p>
            <p className={`font-bold text-gray-900 ${compact ? 'text-2xl' : 'text-3xl'}`}>
              {estimatedPrice.min}€ - {estimatedPrice.max}€
            </p>
          </div>
        )}

        {/* Bouton */}
        <button
          type="submit"
          disabled={isCalculating}
          className={`w-full bg-yellow-400 hover:bg-yellow-500 disabled:bg-yellow-300 text-black font-bold rounded-lg transition-colors flex items-center justify-center gap-2 ${
            compact ? 'text-lg py-4' : 'text-xl py-5'
          }`}
        >
          {isCalculating ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              Calcul...
            </>
          ) : estimatedPrice ? (
            'Confirmer'
          ) : (
            'Calculer le prix'
          )}
        </button>

        {/* Ou appeler - uniquement en mode non compact */}
        {!compact && (
          <div className="text-center">
            <p className="text-gray-500 mb-3">ou appelez-nous directement</p>
            <a
              href="tel:+33100000000"
              className="inline-flex items-center justify-center gap-2 bg-gray-900 hover:bg-gray-800 text-white font-bold text-xl py-4 px-8 rounded-lg"
            >
              <Phone className="w-6 h-6" />
              01 XX XX XX XX
            </a>
          </div>
        )}
      </form>
    </div>
  )
}
