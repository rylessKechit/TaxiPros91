import { Metadata } from 'next'
import Header from '@/components/Header'
import Breadcrumb from '@/components/Breadcrumb'
import Footer from '@/components/Footer'
import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Contact TAXI Pro 91 | Réservation Taxi Essonne - 24h/24',
  description: 'Contactez TAXI Pro 91 pour réserver votre taxi en Essonne. Disponible 24h/24, 7j/7. Téléphone, email, formulaire. Massy, Palaiseau, Longjumeau, Antony.',
  keywords: ['contact taxi essonne', 'réservation taxi 91', 'téléphone taxi massy', 'taxi pro 91 contact'],
  openGraph: {
    title: 'Contact TAXI Pro 91',
    description: 'Réservez votre taxi en Essonne. Disponible 24h/24.',
    url: 'https://taxipros91.fr/contact',
  },
  alternates: {
    canonical: 'https://taxipros91.fr/contact',
  },
}

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Comment réserver un taxi ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Vous pouvez réserver par téléphone au 06 80 03 64 63 (disponible 24h/24) ou via notre formulaire en ligne. Pour une course immédiate, nous vous recommandons l\'appel téléphonique.'
      }
    },
    {
      '@type': 'Question',
      name: 'Quels sont vos modes de paiement ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Nous acceptons les paiements en espèces, par carte bancaire et par virement pour les entreprises. Le paiement s\'effectue à bord du véhicule.'
      }
    },
    {
      '@type': 'Question',
      name: 'Proposez-vous le transport médical ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Oui, nous sommes agréés par la CPAM pour le transport médical conventionné. Contactez-nous pour plus d\'informations sur la prise en charge.'
      }
    },
    {
      '@type': 'Question',
      name: 'Quelle est votre zone d\'intervention ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Nous intervenons dans toute l\'Essonne (91) et les communes limitrophes des Hauts-de-Seine (92). Nos zones principales sont Massy, Palaiseau, Ballainvilliers, Longjumeau, Antony, Verrières-le-Buisson, Les Ulis et Saclay.'
      }
    }
  ]
}

export default function Contact() {
  return (
    <>
      <Header />
      <Breadcrumb items={[{ name: 'Contact' }]} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <main>
        {/* Hero */}
        <section className="bg-yellow-400 py-4">
          <div className="container mx-auto px-4 text-center">
            <p className="text-black font-medium">
              Besoin d'un taxi ? Appelez-nous :{' '}
              <a href="tel:+33680036463" className="font-bold text-xl hover:underline">06 80 03 64 63</a>
            </p>
          </div>
        </section>

        <section className="bg-gray-50 py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                Contactez-nous
              </h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Notre équipe est disponible 24h/24 et 7j/7 pour répondre à vos demandes
                et réserver votre taxi en Essonne.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Info */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Nos coordonnées
                </h2>

                <div className="space-y-6">
                  {/* Phone */}
                  <div className="bg-white rounded-xl p-6 border border-gray-200">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-yellow-400 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Phone className="w-6 h-6 text-black" />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 text-lg mb-1">Téléphone</h3>
                        <a href="tel:+33680036463" className="text-2xl font-bold text-yellow-600 hover:text-yellow-700">
                          06 80 03 64 63
                        </a>
                        <p className="text-gray-600 mt-1">Disponible 24h/24, 7j/7</p>
                      </div>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="bg-white rounded-xl p-6 border border-gray-200">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-yellow-400 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Mail className="w-6 h-6 text-black" />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 text-lg mb-1">Email</h3>
                        <a href="mailto:contact@taxipros91.fr" className="text-lg text-yellow-600 hover:text-yellow-700">
                          contact@taxipros91.fr
                        </a>
                        <p className="text-gray-600 mt-1">Réponse sous 24h</p>
                      </div>
                    </div>
                  </div>

                  {/* Address */}
                  <div className="bg-white rounded-xl p-6 border border-gray-200">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-yellow-400 rounded-lg flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-6 h-6 text-black" />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 text-lg mb-1">Zone d'intervention</h3>
                        <p className="text-gray-700">Essonne (91) et Hauts-de-Seine (92)</p>
                        <p className="text-gray-600 mt-1">Massy, Palaiseau, Longjumeau, Antony, Les Ulis, Verrières-le-Buisson, Saclay...</p>
                      </div>
                    </div>
                  </div>

                  {/* Hours */}
                  <div className="bg-white rounded-xl p-6 border border-gray-200">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-yellow-400 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Clock className="w-6 h-6 text-black" />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 text-lg mb-1">Disponibilité</h3>
                        <p className="text-gray-700 font-medium">24 heures sur 24</p>
                        <p className="text-gray-600 mt-1">7 jours sur 7, jours fériés inclus</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Envoyez-nous un message
                </h2>

                <form className="bg-white rounded-xl p-6 border border-gray-200">
                  <div className="space-y-5">
                    <div>
                      <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                        Votre nom *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="w-full border-2 border-gray-200 rounded-lg px-4 py-3 text-gray-900 focus:border-yellow-400 focus:outline-none"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                        Votre email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="w-full border-2 border-gray-200 rounded-lg px-4 py-3 text-gray-900 focus:border-yellow-400 focus:outline-none"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
                        Votre téléphone
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        className="w-full border-2 border-gray-200 rounded-lg px-4 py-3 text-gray-900 focus:border-yellow-400 focus:outline-none"
                      />
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">
                        Sujet *
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        className="w-full border-2 border-gray-200 rounded-lg px-4 py-3 text-gray-900 focus:border-yellow-400 focus:outline-none bg-white"
                        required
                      >
                        <option value="">Choisissez un sujet</option>
                        <option value="reservation">Demande de réservation</option>
                        <option value="devis">Demande de devis</option>
                        <option value="info">Demande d'information</option>
                        <option value="reclamation">Réclamation</option>
                        <option value="autre">Autre</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                        Votre message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        className="w-full border-2 border-gray-200 rounded-lg px-4 py-3 text-gray-900 focus:border-yellow-400 focus:outline-none resize-none"
                        required
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-bold text-lg py-4 px-6 rounded-lg transition-colors"
                    >
                      Envoyer le message
                    </button>
                  </div>
                </form>

                <p className="text-gray-500 text-sm mt-4 text-center">
                  Pour une réservation urgente, privilégiez l'appel téléphonique.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
              Questions fréquentes
            </h2>

            <div className="max-w-3xl mx-auto space-y-4">
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                <h3 className="font-bold text-gray-900 mb-2">Comment réserver un taxi ?</h3>
                <p className="text-gray-600">
                  Vous pouvez réserver par téléphone au 06 80 03 64 63 (disponible 24h/24) ou via notre formulaire en ligne.
                  Pour une course immédiate, nous vous recommandons l'appel téléphonique.
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                <h3 className="font-bold text-gray-900 mb-2">Quels sont vos modes de paiement ?</h3>
                <p className="text-gray-600">
                  Nous acceptons les paiements en espèces, par carte bancaire et par virement pour les entreprises.
                  Le paiement s'effectue à bord du véhicule.
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                <h3 className="font-bold text-gray-900 mb-2">Proposez-vous le transport médical ?</h3>
                <p className="text-gray-600">
                  Oui, nous sommes agréés par la CPAM pour le transport médical conventionné.
                  Contactez-nous pour plus d'informations sur la prise en charge.
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                <h3 className="font-bold text-gray-900 mb-2">Quelle est votre zone d'intervention ?</h3>
                <p className="text-gray-600">
                  Nous intervenons dans toute l'Essonne (91) et les communes limitrophes des Hauts-de-Seine (92).
                  Nos zones principales sont Massy, Palaiseau, Ballainvilliers, Longjumeau, Antony, Verrières-le-Buisson, Les Ulis et Saclay.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
