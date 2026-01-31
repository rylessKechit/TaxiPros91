import { NextRequest, NextResponse } from 'next/server'
import { calculatePrice } from '@/lib/pricing'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { origin, destination, vehicle, date, time, isRoundTrip } = body

    if (!origin || !destination || !vehicle || !date || !time) {
      return NextResponse.json({ error: 'Champs requis manquants' }, { status: 400 })
    }

    const apiKey = process.env.GOOGLE_MAPS_API_KEY
    if (!apiKey) {
      return NextResponse.json({ error: 'Configuration serveur manquante' }, { status: 500 })
    }

    const directionsUrl = `https://maps.googleapis.com/maps/api/directions/json?origin=${encodeURIComponent(origin)}&destination=${encodeURIComponent(destination)}&key=${apiKey}&language=fr&region=fr`

    const res = await fetch(directionsUrl)
    const data = await res.json()

    if (data.status !== 'OK' || !data.routes?.length) {
      return NextResponse.json({ error: 'Impossible de calculer le trajet' }, { status: 400 })
    }

    const route = data.routes[0].legs[0]
    const distanceKm = route.distance.value / 1000
    const durationMin = Math.round(route.duration.value / 60)

    const estimate = calculatePrice(distanceKm, durationMin, isRoundTrip, vehicle, date, time)

    return NextResponse.json({
      ...estimate,
      originAddress: route.start_address,
      destinationAddress: route.end_address,
    })
  } catch {
    return NextResponse.json({ error: 'Erreur serveur' }, { status: 500 })
  }
}
