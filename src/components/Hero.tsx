import { Phone, Star, Clock, Shield } from 'lucide-react'
import Image from 'next/image'
import BookingForm from './BookingForm'

export default function Hero() {
  return (
    <section id="accueil">
      {/* Bandeau téléphone - masqué sur mobile */}
      <div className="hidden sm:block bg-yellow-400 py-2">
        <div className="container mx-auto px-4">
          <a href="tel:+33680036463" className="flex items-center justify-center gap-2 text-center">
            <Phone className="w-5 h-5 text-black" />
            <span className="text-black font-bold text-xl">06 80 03 64 63</span>
          </a>
        </div>
      </div>

      {/* Hero avec image de fond */}
      <div className="relative min-h-[calc(100vh-60px)] sm:min-h-[calc(100vh-120px)] flex items-center">
        {/* Image de fond */}
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/images/hero-bg.webp"
            alt="Taxi Premium Essonne"
            fill
            sizes="100vw"
            className="object-cover object-center"
            priority
            quality={85}
          />
          {/* Overlay sombre */}
          <div className="absolute inset-0 bg-black/60" />
        </div>

        {/* Contenu */}
        <div className="container mx-auto px-3 sm:px-4 relative z-10 py-4 sm:py-8 lg:py-12">
          <div className="grid lg:grid-cols-2 gap-5 sm:gap-8 lg:gap-16 items-center">
            {/* Colonne gauche - Texte */}
            <div className="text-white">
              <div className="flex items-center gap-1.5 sm:gap-2 mb-2 sm:mb-4">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 sm:w-5 sm:h-5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <span className="text-gray-300 text-xs sm:text-base">4.9/5 Google</span>
              </div>

              <h1 className="text-[2.5rem] sm:text-5xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4 lg:mb-6 leading-tight">
                <span className="text-yellow-400">TAXI</span> Pro 91
              </h1>

              <p className="text-sm sm:text-xl md:text-2xl text-gray-200 mb-4 sm:mb-6 lg:mb-8 max-w-lg">
                Service de taxi haut de gamme <strong className="text-white">24h/24</strong> dans le 91.
              </p>

              {/* Valeurs */}
              <div className="space-y-2 sm:space-y-3 lg:space-y-4 mb-4 sm:mb-6 lg:mb-8">
                <div className="flex items-center gap-2 sm:gap-4">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-yellow-400/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-yellow-400" />
                  </div>
                  <div>
                    <p className="font-medium text-xs sm:text-base lg:text-lg">Disponible 24h/24, 7j/7</p>
                    <p className="text-gray-400 text-xs sm:text-sm hidden sm:block">Réservation immédiate ou à l'avance</p>
                  </div>
                </div>

                <div className="flex items-center gap-2 sm:gap-4">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-yellow-400/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Shield className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-yellow-400" />
                  </div>
                  <div>
                    <p className="font-medium text-xs sm:text-base lg:text-lg">Chauffeurs professionnels</p>
                    <p className="text-gray-400 text-xs sm:text-sm hidden sm:block">Formés, expérimentés et ponctuels</p>
                  </div>
                </div>
              </div>

              {/* Villes desservies */}
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {['Massy', 'Palaiseau', 'Longjumeau', 'Antony', 'Ballainvilliers'].map((city) => (
                  <span key={city} className="bg-white/10 backdrop-blur-sm text-white px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-xs sm:text-sm border border-white/20">
                    {city}
                  </span>
                ))}
              </div>
            </div>

            {/* Colonne droite - Formulaire */}
            <div>
              <BookingForm compact />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
