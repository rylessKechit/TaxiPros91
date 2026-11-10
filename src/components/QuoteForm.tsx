'use client'

import { useState, type FormEvent } from 'react'
import { CheckCircle, Phone, Send, AlertCircle } from 'lucide-react'
import { SITE } from '@/lib/site'

// Clés synchronisées avec QUOTE_NEED_LABELS / QUOTE_FREQUENCY_LABELS de src/lib/email.ts
const NEEDS = [
  { value: 'aeroport', label: 'Transferts aéroport (Orly, CDG)' },
  { value: 'massy-tgv', label: 'Gare Massy TGV' },
  { value: 'collaborateurs', label: 'Trajets réguliers de collaborateurs' },
  { value: 'visiteurs', label: 'Visiteurs, clients ou événements' },
  { value: 'autre', label: 'Autre besoin' },
] as const

const FREQUENCIES = [
  { value: 'ponctuel', label: 'Ponctuel' },
  { value: 'mensuel', label: 'Quelques trajets par mois' },
  { value: 'hebdo', label: 'Chaque semaine' },
  { value: 'quotidien', label: 'Tous les jours' },
] as const

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const PHONE_RE = /^\+?[\d\s.-]{9,19}$/

type FieldName = 'company' | 'contactName' | 'email' | 'phone' | 'need' | 'frequency' | 'message'
type Status = 'idle' | 'sending' | 'success' | 'error'

const EMPTY_FORM: Record<FieldName, string> = {
  company: '',
  contactName: '',
  email: '',
  phone: '',
  need: '',
  frequency: '',
  message: '',
}

const ERROR_MESSAGES: Partial<Record<FieldName, string>> = {
  company: 'Indiquez le nom de votre société.',
  contactName: 'Indiquez votre nom.',
  email: 'Adresse email invalide.',
  phone: 'Numéro de téléphone invalide.',
  need: 'Choisissez un type de besoin.',
  frequency: 'Choisissez une fréquence.',
}

/** Validation côté client, identique à celle de /api/devis */
function validate(form: Record<FieldName, string>): Partial<Record<FieldName, string>> {
  const errors: Partial<Record<FieldName, string>> = {}
  if (!form.company.trim()) errors.company = ERROR_MESSAGES.company
  if (!form.contactName.trim()) errors.contactName = ERROR_MESSAGES.contactName
  if (!EMAIL_RE.test(form.email.trim())) errors.email = ERROR_MESSAGES.email
  if (!PHONE_RE.test(form.phone.trim())) errors.phone = ERROR_MESSAGES.phone
  if (!form.need) errors.need = ERROR_MESSAGES.need
  if (!form.frequency) errors.frequency = ERROR_MESSAGES.frequency
  return errors
}

const inputClass =
  'w-full px-4 py-3 border rounded-lg text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400'

export default function QuoteForm() {
  const [form, setForm] = useState(EMPTY_FORM)
  const [honeypot, setHoneypot] = useState('')
  const [errors, setErrors] = useState<Partial<Record<FieldName, string>>>({})
  const [status, setStatus] = useState<Status>('idle')

  const update = (name: FieldName, value: string) => {
    setForm((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: undefined }))
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const found = validate(form)
    setErrors(found)
    if (Object.keys(found).length > 0) return

    setStatus('sending')
    try {
      const res = await fetch('/api/devis', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, website: honeypot }),
      })
      if (!res.ok) throw new Error('devis failed')
      setStatus('success')
      setForm(EMPTY_FORM)
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="bg-white rounded-xl border border-gray-200 p-8 text-center" role="status">
        <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-4" />
        <h3 className="text-xl font-bold text-gray-900 mb-2">Demande envoyée</h3>
        <p className="text-gray-600 mb-4">
          Merci. Nous revenons vers vous sous 24 h ouvrées avec une proposition adaptée.
          Un accusé de réception vient de partir sur votre adresse email.
        </p>
        <p className="text-gray-600">
          Pour un besoin urgent, appelez le{' '}
          <a href={SITE.phone.tel} className="font-bold text-yellow-600 hover:underline">
            {SITE.phone.display}
          </a>
          .
        </p>
      </div>
    )
  }

  const fieldError = (name: FieldName) =>
    errors[name] ? (
      <p id={`${name}-error`} className="text-red-600 text-sm mt-1">
        {errors[name]}
      </p>
    ) : null

  const borderFor = (name: FieldName) => (errors[name] ? 'border-red-400' : 'border-gray-300')

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="bg-white rounded-xl border border-gray-200 p-6 md:p-8 space-y-5"
    >
      <div className="grid md:grid-cols-2 gap-5">
        <div>
          <label htmlFor="quote-company" className="block text-sm font-medium text-gray-700 mb-1">
            Société *
          </label>
          <input
            id="quote-company"
            type="text"
            autoComplete="organization"
            value={form.company}
            onChange={(e) => update('company', e.target.value)}
            aria-invalid={Boolean(errors.company)}
            aria-describedby={errors.company ? 'company-error' : undefined}
            className={`${inputClass} ${borderFor('company')}`}
          />
          {fieldError('company')}
        </div>
        <div>
          <label htmlFor="quote-contact" className="block text-sm font-medium text-gray-700 mb-1">
            Nom du contact *
          </label>
          <input
            id="quote-contact"
            type="text"
            autoComplete="name"
            value={form.contactName}
            onChange={(e) => update('contactName', e.target.value)}
            aria-invalid={Boolean(errors.contactName)}
            aria-describedby={errors.contactName ? 'contactName-error' : undefined}
            className={`${inputClass} ${borderFor('contactName')}`}
          />
          {fieldError('contactName')}
        </div>
        <div>
          <label htmlFor="quote-email" className="block text-sm font-medium text-gray-700 mb-1">
            Email professionnel *
          </label>
          <input
            id="quote-email"
            type="email"
            autoComplete="email"
            inputMode="email"
            value={form.email}
            onChange={(e) => update('email', e.target.value)}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? 'email-error' : undefined}
            className={`${inputClass} ${borderFor('email')}`}
          />
          {fieldError('email')}
        </div>
        <div>
          <label htmlFor="quote-phone" className="block text-sm font-medium text-gray-700 mb-1">
            Téléphone *
          </label>
          <input
            id="quote-phone"
            type="tel"
            autoComplete="tel"
            inputMode="tel"
            value={form.phone}
            onChange={(e) => update('phone', e.target.value)}
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={errors.phone ? 'phone-error' : undefined}
            className={`${inputClass} ${borderFor('phone')}`}
          />
          {fieldError('phone')}
        </div>
        <div>
          <label htmlFor="quote-need" className="block text-sm font-medium text-gray-700 mb-1">
            Type de besoin *
          </label>
          <select
            id="quote-need"
            value={form.need}
            onChange={(e) => update('need', e.target.value)}
            aria-invalid={Boolean(errors.need)}
            aria-describedby={errors.need ? 'need-error' : undefined}
            className={`${inputClass} ${borderFor('need')}`}
          >
            <option value="">Choisir</option>
            {NEEDS.map((n) => (
              <option key={n.value} value={n.value}>
                {n.label}
              </option>
            ))}
          </select>
          {fieldError('need')}
        </div>
        <div>
          <label htmlFor="quote-frequency" className="block text-sm font-medium text-gray-700 mb-1">
            Fréquence estimée *
          </label>
          <select
            id="quote-frequency"
            value={form.frequency}
            onChange={(e) => update('frequency', e.target.value)}
            aria-invalid={Boolean(errors.frequency)}
            aria-describedby={errors.frequency ? 'frequency-error' : undefined}
            className={`${inputClass} ${borderFor('frequency')}`}
          >
            <option value="">Choisir</option>
            {FREQUENCIES.map((f) => (
              <option key={f.value} value={f.value}>
                {f.label}
              </option>
            ))}
          </select>
          {fieldError('frequency')}
        </div>
      </div>

      <div>
        <label htmlFor="quote-message" className="block text-sm font-medium text-gray-700 mb-1">
          Votre besoin en quelques mots
        </label>
        <textarea
          id="quote-message"
          rows={4}
          maxLength={2000}
          value={form.message}
          onChange={(e) => update('message', e.target.value)}
          placeholder="Trajets habituels, nombre de passagers, horaires, type de véhicule souhaité..."
          className={`${inputClass} border-gray-300`}
        />
      </div>

      {/* Honeypot anti-spam : invisible pour les humains, rempli par les robots */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="quote-website">Site web</label>
        <input
          id="quote-website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={honeypot}
          onChange={(e) => setHoneypot(e.target.value)}
        />
      </div>

      {status === 'error' && (
        <div className="flex items-start gap-3 bg-red-50 border border-red-200 rounded-lg p-4" role="alert">
          <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
          <p className="text-red-700 text-sm">
            L&apos;envoi n&apos;a pas fonctionné. Réessayez dans un instant ou appelez-nous au{' '}
            <a href={SITE.phone.tel} className="font-bold underline">
              {SITE.phone.display}
            </a>
            .
          </p>
        </div>
      )}

      <div className="flex flex-col sm:flex-row sm:items-center gap-4">
        <button
          type="submit"
          disabled={status === 'sending'}
          className="inline-flex items-center justify-center gap-2 bg-yellow-400 text-black font-bold text-lg py-3 px-6 rounded-lg hover:bg-yellow-500 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
        >
          <Send className="w-5 h-5" />
          {status === 'sending' ? 'Envoi en cours...' : 'Envoyer ma demande de devis'}
        </button>
        <a
          href={SITE.phone.tel}
          className="inline-flex items-center gap-2 text-gray-700 hover:text-yellow-600 font-medium"
        >
          <Phone className="w-4 h-4" />
          Ou appelez le {SITE.phone.display}
        </a>
      </div>

      <p className="text-xs text-gray-500">
        * Champs obligatoires. Vos coordonnées servent uniquement à répondre à votre demande.
      </p>
    </form>
  )
}
