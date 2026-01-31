'use client'

import { useState, useRef, useEffect, useCallback } from 'react'

const GOOGLE_MAPS_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || ''

let scriptLoadPromise: Promise<void> | null = null

function loadGoogleMapsScript(): Promise<void> {
  if (window.google?.maps?.importLibrary != null) return Promise.resolve()
  if (scriptLoadPromise) return scriptLoadPromise

  scriptLoadPromise = new Promise((resolve) => {
    if (document.querySelector('script[src*="maps.googleapis.com"]')) {
      const interval = setInterval(() => {
        if (window.google?.maps?.importLibrary != null) {
          clearInterval(interval)
          resolve()
        }
      }, 200)
      return
    }
    const script = document.createElement('script')
    script.src = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAPS_KEY}&libraries=places&loading=async`
    script.async = true
    script.onload = () => {
      const interval = setInterval(() => {
        if (window.google?.maps?.importLibrary != null) {
          clearInterval(interval)
          resolve()
        }
      }, 100)
    }
    document.head.appendChild(script)
  })
  return scriptLoadPromise
}

interface PlacesAutocompleteProps {
  placeholder: string
  className: string
  defaultValue?: string
  onPlaceSelected: (address: string) => void
  label?: string
}

interface Suggestion {
  text: string
  placeId: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  prediction: any
}

export default function PlacesAutocomplete({
  placeholder,
  className,
  defaultValue = '',
  onPlaceSelected,
  label,
}: PlacesAutocompleteProps) {
  const [inputValue, setInputValue] = useState(defaultValue)
  const [suggestions, setSuggestions] = useState<Suggestion[]>([])
  const [showDropdown, setShowDropdown] = useState(false)
  const [isReady, setIsReady] = useState(false)
  const [activeIndex, setActiveIndex] = useState(-1)

  const wrapperRef = useRef<HTMLDivElement>(null)
  const tokenRef = useRef<google.maps.places.AutocompleteSessionToken | null>(null)
  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const listboxId = useRef(`places-listbox-${Math.random().toString(36).slice(2, 8)}`).current

  // Close dropdown on outside click
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
        setShowDropdown(false)
      }
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [])

  const ensureReady = useCallback(async () => {
    if (isReady) return true
    await loadGoogleMapsScript()
    setIsReady(true)
    return true
  }, [isReady])

  const fetchSuggestions = useCallback(async (input: string) => {
    if (input.length < 3) {
      setSuggestions([])
      return
    }

    try {
      await ensureReady()
      const { AutocompleteSuggestion, AutocompleteSessionToken } =
        (await google.maps.importLibrary('places')) as google.maps.PlacesLibrary

      if (!tokenRef.current) {
        tokenRef.current = new AutocompleteSessionToken()
      }

      const { suggestions: results } = await AutocompleteSuggestion.fetchAutocompleteSuggestions({
        input,
        sessionToken: tokenRef.current,
        includedRegionCodes: ['fr'],
        language: 'fr',
      })

      const mapped: Suggestion[] = results
        .filter(s => s.placePrediction)
        .map(s => ({
          text: s.placePrediction!.text.toString(),
          placeId: s.placePrediction!.placeId,
          prediction: s.placePrediction,
        }))

      setSuggestions(mapped)
      setShowDropdown(mapped.length > 0)
      setActiveIndex(-1)
    } catch (err) {
      console.error('Autocomplete error:', err)
      setSuggestions([])
    }
  }, [ensureReady])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value
    setInputValue(val)

    if (debounceRef.current) clearTimeout(debounceRef.current)
    debounceRef.current = setTimeout(() => fetchSuggestions(val), 300)
  }

  const handleSelect = async (suggestion: Suggestion) => {
    try {
      const place = suggestion.prediction.toPlace()
      await place.fetchFields({ fields: ['formattedAddress', 'displayName'] })
      const address = place.formattedAddress || suggestion.text
      setInputValue(address)
      onPlaceSelected(address)
    } catch {
      setInputValue(suggestion.text)
      onPlaceSelected(suggestion.text)
    }

    setSuggestions([])
    setShowDropdown(false)
    tokenRef.current = null
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!showDropdown) return

    if (e.key === 'ArrowDown') {
      e.preventDefault()
      setActiveIndex(prev => (prev < suggestions.length - 1 ? prev + 1 : 0))
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      setActiveIndex(prev => (prev > 0 ? prev - 1 : suggestions.length - 1))
    } else if (e.key === 'Enter' && activeIndex >= 0) {
      e.preventDefault()
      handleSelect(suggestions[activeIndex])
    } else if (e.key === 'Escape') {
      setShowDropdown(false)
    }
  }

  return (
    <div ref={wrapperRef} className="relative">
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        onFocus={() => suggestions.length > 0 && setShowDropdown(true)}
        placeholder={placeholder}
        className={className}
        autoComplete="off"
        role="combobox"
        aria-expanded={showDropdown}
        aria-controls={listboxId}
        aria-activedescendant={activeIndex >= 0 ? `${listboxId}-${activeIndex}` : undefined}
        aria-autocomplete="list"
        aria-label={label || placeholder}
      />
      {showDropdown && suggestions.length > 0 && (
        <ul
          id={listboxId}
          role="listbox"
          aria-label="Suggestions d'adresses"
          className="absolute z-50 left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg max-h-60 overflow-y-auto"
        >
          {suggestions.map((s, i) => (
            <li
              key={s.placeId}
              id={`${listboxId}-${i}`}
              role="option"
              aria-selected={i === activeIndex}
              onClick={() => handleSelect(s)}
              className={`px-3 py-2.5 text-sm text-gray-900 cursor-pointer transition-colors ${
                i === activeIndex ? 'bg-yellow-50' : 'hover:bg-gray-50'
              }`}
            >
              {s.text}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
