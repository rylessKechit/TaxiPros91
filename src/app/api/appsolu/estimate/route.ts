import { NextRequest, NextResponse } from 'next/server'
import { getEstimate } from '@/lib/appsolu'

export async function POST(request: NextRequest) {
  try {
    const { fromLat, fromLng, toLat, toLng, bookedDate, nbPlaces } = await request.json()

    if (fromLat == null || fromLng == null || toLat == null || toLng == null || !bookedDate) {
      return NextResponse.json({ error: 'Coordonnées ou date manquantes' }, { status: 400 })
    }

    const estimate = await getEstimate(
      { lat: Number(fromLat), lng: Number(fromLng) },
      { lat: Number(toLat), lng: Number(toLng) },
      bookedDate,
      Number(nbPlaces) || 1,
    )

    return NextResponse.json(estimate)
  } catch (error) {
    console.error('AppSolu estimate error:', error)
    return NextResponse.json({ error: 'Erreur lors de l\'estimation du trajet' }, { status: 502 })
  }
}
