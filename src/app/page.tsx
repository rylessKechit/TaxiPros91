import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import Fleet from '@/components/Fleet'
import Zones from '@/components/Zones'
import Testimonials from '@/components/Testimonials'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <Fleet />
      <Zones />
      <Testimonials />
      <Footer />

      {/* Bouton appel flottant sur mobile - petit rond */}
      <a
        href="tel:+33680036463"
        className="fixed bottom-4 right-4 sm:hidden z-50 w-14 h-14 bg-yellow-400 hover:bg-yellow-500 rounded-full flex items-center justify-center shadow-lg"
        aria-label="Appeler"
      >
        <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      </a>
    </main>
  )
}
