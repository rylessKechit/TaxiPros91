import { Resend } from 'resend'

// Client Resend instancié à la première utilisation : le constructeur lève une
// erreur si RESEND_API_KEY manque, ce qui cassait le build local.
let resendClient: Resend | null = null
function getResend(): Resend {
  if (!resendClient) resendClient = new Resend(process.env.RESEND_API_KEY)
  return resendClient
}

// Expéditeur : doit appartenir à un domaine vérifié sur Resend (ex: reservation@taxipro91.com)
const FROM = process.env.RESEND_FROM || 'TAXI Pro 91 <onboarding@resend.dev>'
const REPLY_TO = process.env.CONTACT_EMAIL || 'contact@taxipro91.com'

/** Liste des adresses admin notifiées à chaque réservation (ADMIN_EMAILS séparées par des virgules) */
function getAdminEmails(): string[] {
  const raw = process.env.ADMIN_EMAILS || 'contact@taxipro91.com'
  return raw.split(',').map(e => e.trim()).filter(Boolean)
}

export interface BookingData {
  firstName: string
  lastName: string
  email: string
  phone: string
  pickup: string
  destination: string
  date: string
  time: string
  passengers: string
  vehicle: 'electrique' | 'van' | 'premium'
  isRoundTrip: boolean
  returnPickup?: string
  returnDestination?: string
  returnDate?: string
  returnTime?: string
  flightNumber?: string
  trainNumber?: string
  priceMin: number
  priceMax: number
  distanceKm: number
}

const VEHICLE_LABELS = {
  electrique: 'Électrique / Hybride',
  van: 'Van',
  premium: 'Premium',
}

function formatDate(dateStr: string): string {
  const [year, month, day] = dateStr.split('-')
  return `${day}/${month}/${year}`
}

function buildEmailHtml(data: BookingData, isAdmin: boolean): string {
  // Échappe toutes les saisies texte du client avant insertion dans le HTML
  data = Object.fromEntries(
    Object.entries(data).map(([k, v]) => [k, typeof v === 'string' ? escapeHtml(v) : v])
  ) as BookingData
  const roundTripBlock = data.isRoundTrip
    ? `
      <tr><td colspan="2" style="padding:16px 0 8px;font-weight:bold;font-size:16px;color:#facc15;border-top:1px solid #333;">🔄 Trajet Retour</td></tr>
      <tr><td style="padding:6px 0;color:#999;">Départ retour</td><td style="padding:6px 0;color:#fff;">${data.returnPickup || data.destination}</td></tr>
      <tr><td style="padding:6px 0;color:#999;">Arrivée retour</td><td style="padding:6px 0;color:#fff;">${data.returnDestination || data.pickup}</td></tr>
      <tr><td style="padding:6px 0;color:#999;">Date retour</td><td style="padding:6px 0;color:#fff;">${data.returnDate ? formatDate(data.returnDate) : '-'}</td></tr>
      <tr><td style="padding:6px 0;color:#999;">Heure retour</td><td style="padding:6px 0;color:#fff;">${data.returnTime || '-'}</td></tr>
    `
    : ''

  return `
    <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;background:#0a0a0a;color:#fff;border-radius:12px;overflow:hidden;">
      <div style="background:#facc15;padding:24px;text-align:center;">
        <h1 style="margin:0;color:#000;font-size:24px;">${isAdmin ? '🚖 Nouvelle Réservation' : '✅ Confirmation de réservation'}</h1>
      </div>
      <div style="padding:24px;">
        ${!isAdmin ? '<p style="color:#ccc;margin-bottom:20px;">Bonjour ' + data.firstName + ', votre réservation a bien été enregistrée.</p>' : ''}

        <table style="width:100%;border-collapse:collapse;">
          <tr><td colspan="2" style="padding:8px 0;font-weight:bold;font-size:16px;color:#facc15;">📍 Trajet Aller</td></tr>
          <tr><td style="padding:6px 0;color:#999;width:140px;">Départ</td><td style="padding:6px 0;color:#fff;">${data.pickup}</td></tr>
          <tr><td style="padding:6px 0;color:#999;">Arrivée</td><td style="padding:6px 0;color:#fff;">${data.destination}</td></tr>
          <tr><td style="padding:6px 0;color:#999;">Date</td><td style="padding:6px 0;color:#fff;">${formatDate(data.date)}</td></tr>
          <tr><td style="padding:6px 0;color:#999;">Heure</td><td style="padding:6px 0;color:#fff;">${data.time}</td></tr>
          ${data.flightNumber ? `<tr><td style="padding:6px 0;color:#999;">N° de vol</td><td style="padding:6px 0;color:#fff;">${data.flightNumber}</td></tr>` : ''}
          ${data.trainNumber ? `<tr><td style="padding:6px 0;color:#999;">N° de train</td><td style="padding:6px 0;color:#fff;">${data.trainNumber}</td></tr>` : ''}
          ${roundTripBlock}
          <tr><td colspan="2" style="padding:16px 0 8px;font-weight:bold;font-size:16px;color:#facc15;border-top:1px solid #333;">🚗 Véhicule</td></tr>
          <tr><td style="padding:6px 0;color:#999;">Catégorie</td><td style="padding:6px 0;color:#fff;">${VEHICLE_LABELS[data.vehicle]}</td></tr>
          <tr><td style="padding:6px 0;color:#999;">Distance</td><td style="padding:6px 0;color:#fff;">${data.distanceKm} km</td></tr>
          <tr><td style="padding:6px 0;color:#999;">Prix estimé</td><td style="padding:6px 0;color:#facc15;font-weight:bold;font-size:18px;">${data.priceMin}€ à ${data.priceMax}€</td></tr>
          <tr><td colspan="2" style="padding:16px 0 8px;font-weight:bold;font-size:16px;color:#facc15;border-top:1px solid #333;">👤 Client</td></tr>
          <tr><td style="padding:6px 0;color:#999;">Nom</td><td style="padding:6px 0;color:#fff;">${data.lastName} ${data.firstName}</td></tr>
          <tr><td style="padding:6px 0;color:#999;">Email</td><td style="padding:6px 0;color:#fff;">${data.email}</td></tr>
          <tr><td style="padding:6px 0;color:#999;">Téléphone</td><td style="padding:6px 0;color:#fff;">${data.phone}</td></tr>
        </table>

        ${!isAdmin ? `
        <div style="margin-top:24px;padding:16px;background:#171717;border-radius:8px;text-align:center;">
          <p style="color:#ccc;margin:0 0 8px;">Besoin de modifier votre réservation ?</p>
          <a href="tel:+33180859191" style="color:#facc15;text-decoration:none;font-weight:bold;">📞 01 80 85 91 91</a>
        </div>
        ` : ''}
      </div>
      <div style="background:#171717;padding:16px;text-align:center;color:#666;font-size:12px;">
        TAXI Pro 91, taxipro91.com
      </div>
    </div>
  `
}

export async function sendBookingEmails(data: BookingData): Promise<void> {
  const adminEmails = getAdminEmails()

  await Promise.all([
    // 1. Confirmation au client
    getResend().emails.send({
      from: FROM,
      to: data.email,
      replyTo: REPLY_TO,
      subject: `Confirmation de réservation : TAXI Pro 91`,
      html: buildEmailHtml(data, false),
    }),
    // 2. Notification aux adresses admin (1 envoi, plusieurs destinataires)
    getResend().emails.send({
      from: FROM,
      to: adminEmails,
      replyTo: data.email,
      subject: `Nouvelle réservation : ${data.lastName} ${data.firstName}, ${formatDate(data.date)} ${data.time}`,
      html: buildEmailHtml(data, true),
    }),
  ])
}

// ─── Demande de devis professionnel (page /taxi-entreprise) ───

/** Libellés des besoins : garder les clés synchronisées avec QuoteForm.tsx */
export const QUOTE_NEED_LABELS = {
  aeroport: 'Transferts aéroport (Orly, CDG)',
  'massy-tgv': 'Gare Massy TGV',
  collaborateurs: 'Trajets réguliers de collaborateurs',
  visiteurs: 'Visiteurs, clients ou événements',
  autre: 'Autre besoin',
} as const

/** Libellés des fréquences : garder les clés synchronisées avec QuoteForm.tsx */
export const QUOTE_FREQUENCY_LABELS = {
  ponctuel: 'Ponctuel',
  mensuel: 'Quelques trajets par mois',
  hebdo: 'Chaque semaine',
  quotidien: 'Tous les jours',
} as const

export interface QuoteData {
  company: string
  contactName: string
  email: string
  phone: string
  need: keyof typeof QUOTE_NEED_LABELS
  frequency: keyof typeof QUOTE_FREQUENCY_LABELS
  message: string
}

/** Échappe les saisies utilisateur avant insertion dans le HTML de l'email */
function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

function buildQuoteEmailHtml(data: QuoteData, isAdmin: boolean): string {
  const row = (label: string, value: string) =>
    `<tr><td style="padding:6px 0;color:#999;width:140px;vertical-align:top;">${label}</td><td style="padding:6px 0;color:#fff;">${value}</td></tr>`
  const message = data.message ? escapeHtml(data.message).replace(/\n/g, '<br>') : '-'

  return `
    <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;background:#0a0a0a;color:#fff;border-radius:12px;overflow:hidden;">
      <div style="background:#facc15;padding:24px;text-align:center;">
        <h1 style="margin:0;color:#000;font-size:24px;">${isAdmin ? 'Nouvelle demande de devis pro' : 'Demande de devis reçue'}</h1>
      </div>
      <div style="padding:24px;">
        ${!isAdmin ? `<p style="color:#ccc;margin-bottom:20px;">Bonjour ${escapeHtml(data.contactName)}, nous avons bien reçu votre demande. Nous revenons vers vous sous 24 h ouvrées.</p>` : ''}
        <table style="width:100%;border-collapse:collapse;">
          ${row('Société', escapeHtml(data.company))}
          ${row('Contact', escapeHtml(data.contactName))}
          ${row('Email', escapeHtml(data.email))}
          ${row('Téléphone', escapeHtml(data.phone))}
          ${row('Besoin', QUOTE_NEED_LABELS[data.need])}
          ${row('Fréquence', QUOTE_FREQUENCY_LABELS[data.frequency])}
          ${row('Message', message)}
        </table>
        ${!isAdmin ? `
        <div style="margin-top:24px;padding:16px;background:#171717;border-radius:8px;text-align:center;">
          <p style="color:#ccc;margin:0 0 8px;">Une question en attendant ?</p>
          <a href="tel:+33180859191" style="color:#facc15;text-decoration:none;font-weight:bold;">01 80 85 91 91</a>
        </div>
        ` : ''}
      </div>
      <div style="background:#171717;padding:16px;text-align:center;color:#666;font-size:12px;">
        TAXI Pro 91, taxipro91.com
      </div>
    </div>
  `
}

export async function sendQuoteEmail(data: QuoteData): Promise<void> {
  // 1. Notification aux adresses admin (bloquant : c'est l'envoi qui compte)
  const { error } = await getResend().emails.send({
    from: FROM,
    to: getAdminEmails(),
    replyTo: data.email,
    subject: `Demande de devis pro : ${data.company} (${data.contactName})`,
    html: buildQuoteEmailHtml(data, true),
  })
  // Resend renvoie ses erreurs dans { error } sans lever d'exception
  if (error) throw new Error(`Resend: ${error.message}`)

  // 2. Accusé de réception au client (non bloquant)
  try {
    await getResend().emails.send({
      from: FROM,
      to: data.email,
      replyTo: REPLY_TO,
      subject: 'Votre demande de devis : TAXI Pro 91',
      html: buildQuoteEmailHtml(data, false),
    })
  } catch (e) {
    console.error('Accusé de réception devis (non bloquant) a échoué:', e)
  }
}
