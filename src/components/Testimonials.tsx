import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Marie L.',
    location: 'Massy',
    service: 'Transfert aéroport',
    text: 'Service impeccable pour mon transfert vers Orly à 5h du matin. Le chauffeur était à l\'heure, m\'a aidé avec mes bagages et le véhicule était très propre. Je recommande vivement pour tous vos trajets aéroport !',
    date: 'Janvier 2025',
  },
  {
    name: 'Thomas D.',
    location: 'Palaiseau',
    service: 'Déplacement professionnel',
    text: 'J\'utilise Taxi Pros 91 chaque semaine pour mes déplacements vers le plateau de Saclay. Ponctualité irréprochable, chauffeurs discrets et professionnels. La facturation entreprise est un vrai plus.',
    date: 'Décembre 2024',
  },
  {
    name: 'Sophie M.',
    location: 'Longjumeau',
    service: 'Transport médical',
    text: 'Excellent service pour mes rendez-vous médicaux hebdomadaires. Les chauffeurs sont patients, m\'aident à monter et descendre du véhicule, et me raccompagnent jusqu\'à ma porte. Un grand merci à toute l\'équipe !',
    date: 'Janvier 2025',
  },
  {
    name: 'Jean-Pierre R.',
    location: 'Antony',
    service: 'Course quotidienne',
    text: 'Depuis que j\'ai découvert ce service de taxi, je n\'utilise plus ma voiture pour aller à la gare. Toujours disponibles, tarifs corrects et chauffeurs sympathiques. Je recommande à tous mes voisins.',
    date: 'Novembre 2024',
  },
  {
    name: 'Catherine B.',
    location: 'Ballainvilliers',
    service: 'Événement',
    text: 'Nous avons fait appel à Taxi Pros 91 pour le mariage de notre fille. Transport des invités depuis la gare impeccable, coordination parfaite. Merci pour votre professionnalisme !',
    date: 'Octobre 2024',
  },
  {
    name: 'Ahmed K.',
    location: 'Massy',
    service: 'Transfert gare',
    text: 'Très satisfait du service. Mon train avait du retard et le chauffeur a attendu sans problème. Communication facile par téléphone, prix conforme à l\'estimation. Je ferai appel à eux à nouveau.',
    date: 'Décembre 2024',
  },
]

export default function Testimonials() {
  return (
    <section className="py-16 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Ce que disent nos clients
          </h2>
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="w-7 h-7 text-yellow-400 fill-current" />
              ))}
            </div>
            <span className="text-gray-900 font-bold text-2xl">4.9/5</span>
          </div>
          <p className="text-gray-600 text-lg">
            Note basée sur plus de 500 avis clients
          </p>
        </div>

        {/* Testimonials grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="bg-white rounded-xl p-6 border border-gray-200"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <Quote className="w-8 h-8 text-yellow-400/30" />
              </div>

              {/* Service tag */}
              <span className="inline-block text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded mb-3">
                {testimonial.service}
              </span>

              {/* Text */}
              <p className="text-gray-700 leading-relaxed mb-4">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                <div>
                  <p className="text-gray-900 font-semibold">{testimonial.name}</p>
                  <p className="text-gray-500 text-sm">{testimonial.location}</p>
                </div>
                <span className="text-gray-400 text-sm">{testimonial.date}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Trust indicators */}
        <div className="bg-white rounded-xl p-6 border border-gray-200">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <p className="text-3xl font-bold text-gray-900">500+</p>
              <p className="text-gray-600">Clients satisfaits</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-gray-900">4.9/5</p>
              <p className="text-gray-600">Note moyenne</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-gray-900">15 min</p>
              <p className="text-gray-600">Délai d'intervention</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-gray-900">24h/24</p>
              <p className="text-gray-600">Disponibilité</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
