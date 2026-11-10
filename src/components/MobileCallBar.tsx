'use client'

import { Phone, CalendarCheck } from 'lucide-react'
import { SITE } from '@/lib/site'

// Barre fixe en bas d'écran sur mobile : appel en un tap + accès direct au formulaire.
export default function MobileCallBar() {
  const goToBooking = () => {
    const form = document.querySelector('[data-booking-form]')
    if (form) {
      form.scrollIntoView({ behavior: 'smooth', block: 'start' })
    } else {
      window.location.href = '/#reservation'
    }
  }

  return (
    <>
      {/* Espace réservé pour que la barre ne masque pas le bas du footer */}
      <div className="h-16 lg:hidden" aria-hidden="true" />
      <div className="lg:hidden fixed bottom-0 inset-x-0 z-40 bg-white border-t border-gray-200 shadow-[0_-2px_8px_rgba(0,0,0,0.08)] pb-[env(safe-area-inset-bottom)]">
        <div className="grid grid-cols-2 gap-2 p-2">
          <a
            href={SITE.phone.tel}
            className="flex items-center justify-center gap-2 bg-gray-900 text-white font-bold rounded-lg py-3"
            aria-label={`Appeler TAXI Pro 91 au ${SITE.phone.display}`}
          >
            <Phone className="w-5 h-5" />
            Appeler
          </a>
          <button
            type="button"
            onClick={goToBooking}
            className="flex items-center justify-center gap-2 bg-yellow-400 text-black font-bold rounded-lg py-3"
          >
            <CalendarCheck className="w-5 h-5" />
            Réserver
          </button>
        </div>
      </div>
    </>
  )
}
