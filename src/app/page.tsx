import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import PopularRoutes from '@/components/PopularRoutes'
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
      <PopularRoutes />
      <Fleet />
      <Zones />
      <Testimonials />
      <Footer />
    </main>
  )
}
