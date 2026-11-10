import { NextRequest, NextResponse } from 'next/server'
import {
  sendQuoteEmail,
  QUOTE_NEED_LABELS,
  QUOTE_FREQUENCY_LABELS,
  type QuoteData,
} from '@/lib/email'

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
// Chiffres, espaces, points, tirets, + initial : 10 à 20 caractères
const PHONE_RE = /^\+?[\d\s.-]{9,19}$/

/** Lit un champ texte, le nettoie et le tronque */
function readText(value: unknown, max: number): string {
  return typeof value === 'string' ? value.trim().slice(0, max) : ''
}

export async function POST(request: NextRequest) {
  let body: Record<string, unknown>
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: 'Requête invalide' }, { status: 400 })
  }

  // Honeypot : un humain ne voit pas ce champ. S'il est rempli, on répond OK sans rien envoyer.
  if (readText(body.website, 200) !== '') {
    return NextResponse.json({ success: true })
  }

  const need = readText(body.need, 40)
  const frequency = readText(body.frequency, 40)

  const data: QuoteData = {
    company: readText(body.company, 120),
    contactName: readText(body.contactName, 120),
    email: readText(body.email, 160),
    phone: readText(body.phone, 30),
    need: need as QuoteData['need'],
    frequency: frequency as QuoteData['frequency'],
    message: readText(body.message, 2000),
  }

  // Validation serveur (la validation client peut être contournée)
  const errors: string[] = []
  if (!data.company) errors.push('company')
  if (!data.contactName) errors.push('contactName')
  if (!EMAIL_RE.test(data.email)) errors.push('email')
  if (!PHONE_RE.test(data.phone)) errors.push('phone')
  if (!(need in QUOTE_NEED_LABELS)) errors.push('need')
  if (!(frequency in QUOTE_FREQUENCY_LABELS)) errors.push('frequency')

  if (errors.length > 0) {
    return NextResponse.json({ error: 'Champs invalides', fields: errors }, { status: 400 })
  }

  try {
    await sendQuoteEmail(data)
  } catch (error) {
    console.error('Envoi demande de devis échoué:', error)
    return NextResponse.json({ error: 'Envoi impossible pour le moment' }, { status: 502 })
  }

  return NextResponse.json({ success: true })
}
