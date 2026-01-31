import { NextRequest, NextResponse } from 'next/server'
import { sendBookingEmails, type BookingData } from '@/lib/email'

export async function POST(request: NextRequest) {
  try {
    const body: BookingData = await request.json()

    if (!body.firstName || !body.lastName || !body.email || !body.phone || !body.pickup || !body.destination || !body.date || !body.time || !body.vehicle) {
      return NextResponse.json({ error: 'Champs requis manquants' }, { status: 400 })
    }

    await sendBookingEmails(body)

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Booking error:', error)
    return NextResponse.json({ error: 'Erreur lors de l\'envoi de la confirmation' }, { status: 500 })
  }
}
