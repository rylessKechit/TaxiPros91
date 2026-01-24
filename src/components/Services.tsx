import { Plane, Train, Stethoscope, Briefcase, GraduationCap, PartyPopper, Phone } from 'lucide-react'

const services = [
  {
    icon: Plane,
    title: 'Transfert Aéroport',
    description: 'Navettes vers Orly et Roissy Charles de Gaulle. Nous suivons votre vol en temps réel et vous attendons en zone d\'arrivée avec panneau nominatif. Prise en charge de vos bagages.',
    destinations: ['Aéroport d\'Orly', 'Roissy CDG', 'Le Bourget'],
  },
  {
    icon: Train,
    title: 'Gares & Stations',
    description: 'Transport vers toutes les gares parisiennes et les stations RER de l\'Essonne. Nous vous déposons au plus près des quais pour votre confort.',
    destinations: ['Gare Massy TGV', 'Gare de Lyon', 'Gare Montparnasse'],
  },
  {
    icon: Stethoscope,
    title: 'Transport Médical',
    description: 'Taxi conventionné par la CPAM pour vos rendez-vous médicaux. Prise en charge des personnes à mobilité réduite. Accompagnement personnalisé.',
    destinations: ['Hôpitaux', 'Cliniques', 'Centres de soins'],
  },
  {
    icon: Briefcase,
    title: 'Déplacements Professionnels',
    description: 'Service dédié aux entreprises et professionnels. Facturation sur compte, disponibilité immédiate, confidentialité assurée.',
    destinations: ['Rendez-vous clients', 'Séminaires', 'Salons professionnels'],
  },
  {
    icon: GraduationCap,
    title: 'Trajets Scolaires',
    description: 'Transport sécurisé pour vos enfants. Accompagnement école-domicile, activités extra-scolaires. Chauffeurs de confiance.',
    destinations: ['Écoles', 'Collèges', 'Activités sportives'],
  },
  {
    icon: PartyPopper,
    title: 'Événements & Sorties',
    description: 'Pour vos soirées, mariages, concerts et événements. Profitez de votre soirée, nous nous occupons du transport retour en toute sécurité.',
    destinations: ['Mariages', 'Soirées', 'Restaurants'],
  },
]

export default function Services() {
  return (
    <section id="services" className="py-16 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Nos services de taxi en Essonne
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Que vous ayez besoin d'un transfert aéroport, d'un transport médical ou d'une course en ville,
            notre équipe de chauffeurs professionnels est à votre service 24h/24.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white rounded-xl p-6 border border-gray-200"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-14 h-14 bg-yellow-400 rounded-lg flex items-center justify-center flex-shrink-0">
                  <service.icon className="w-7 h-7 text-black" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{service.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {service.destinations.map((dest) => (
                      <span key={dest} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                        {dest}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="bg-yellow-400 rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold text-black mb-3">
            Besoin d'un taxi maintenant ?
          </h3>
          <p className="text-black/80 mb-6 max-w-xl mx-auto">
            Réservez votre course par téléphone ou en ligne.
            Nous intervenons dans toute l'Essonne en moins de 15 minutes.
          </p>
          <a
            href="tel:+33100000000"
            className="inline-flex items-center justify-center gap-3 bg-black text-white font-bold text-xl py-4 px-8 rounded-lg hover:bg-gray-800 transition-colors"
          >
            <Phone className="w-6 h-6" />
            01 XX XX XX XX
          </a>
        </div>
      </div>
    </section>
  )
}
