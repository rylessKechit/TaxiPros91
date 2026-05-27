import { NextRequest, NextResponse } from 'next/server'
import { createCourse, getEstimate, type AppsoluBookingInput, type AppsoluEstimate } from '@/lib/appsolu'
import { sendBookingEmails, type BookingData } from '@/lib/email'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { from, to, bookedDate, firstName, lastName, phone, email } = body

    // Validation des champs indispensables pour AppSolu
    if (
      !from?.lat || !from?.lng || !to?.lat || !to?.lng ||
      !bookedDate || !firstName || !lastName || !phone || !email
    ) {
      return NextResponse.json({ error: 'Champs requis manquants pour la réservation' }, { status: 400 })
    }

    const passengers = Number(body.passengers) || 1

    const input: AppsoluBookingInput = {
      from: { lat: Number(from.lat), lng: Number(from.lng), street: from.street || '', city: from.city || '', label: from.label || from.address || '' },
      to: { lat: Number(to.lat), lng: Number(to.lng), street: to.street || '', city: to.city || '', label: to.label || to.address || '' },
      bookedDate,
      firstName,
      lastName,
      phone,
      email,
      passengers,
      baggages: Number(body.baggages) || 0,
      comment: body.comment || '',
    }

    // 1. Estimation AppSolu (sert à renseigner le prix dans la course)
    let estimate: AppsoluEstimate | null = null
    try {
      estimate = await getEstimate(input.from, input.to, bookedDate, passengers)
    } catch (e) {
      console.error('AppSolu estimate (non bloquant) a échoué:', e)
    }

    // 2. Création de la course dans AppSolu (bloquant)
    const { cid } = await createCourse(input, estimate)

    // 3. Email de confirmation/notification en parallèle (backup, non bloquant)
    try {
      const emailData: BookingData = {
        firstName,
        lastName,
        email,
        phone,
        pickup: body.pickup || input.from.label,
        destination: body.destination || input.to.label,
        date: body.date || '',
        time: body.time || '',
        passengers: String(passengers),
        vehicle: body.vehicle || 'electrique',
        isRoundTrip: Boolean(body.isRoundTrip),
        returnPickup: body.returnPickup,
        returnDestination: body.returnDestination,
        returnDate: body.returnDate,
        returnTime: body.returnTime,
        priceMin: estimate ? Math.round(estimate.estimatedPriceInCents / 100) : Number(body.priceMin) || 0,
        priceMax: estimate ? Math.round(estimate.estimatedPriceInCentsHigh / 100) : Number(body.priceMax) || 0,
        distanceKm: estimate ? Math.round(estimate.distanceMeters / 1000) : Number(body.distanceKm) || 0,
      }
      await sendBookingEmails(emailData)
    } catch (e) {
      console.error('Email backup (non bloquant) a échoué:', e)
    }

    return NextResponse.json({ success: true, cid })
  } catch (error) {
    console.error('AppSolu booking error:', error)
    return NextResponse.json({ error: 'Erreur lors de l\'envoi de la réservation' }, { status: 502 })
  }
}
