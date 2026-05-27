import { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/Header'
import Breadcrumb from '@/components/Breadcrumb'
import Footer from '@/components/Footer'
import { Calendar, Clock, ArrowRight, BookOpen } from 'lucide-react'
import { SITE } from '@/lib/site'
import { posts } from '@/lib/blog'

export const metadata: Metadata = {
  title: 'Blog : Conseils & guides taxi en Essonne',
  description:
    "Tous nos articles, guides et conseils sur le taxi en Essonne : tarifs, aéroports Orly et CDG, gare Massy TGV, transport de nuit, et plus encore.",
  alternates: { canonical: `${SITE.url}/blog` },
  openGraph: {
    title: 'Blog TAXI Pro 91 : Conseils & guides taxi en Essonne',
    description:
      "Articles et guides pratiques sur le taxi en Essonne : tarifs, trajets aéroport, gares, conseils voyageurs.",
    url: `${SITE.url}/blog`,
    type: 'website',
  },
}

const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })

export default function BlogHubPage() {
  // tri par date desc
  const sorted = [...posts].sort((a, b) => (a.date < b.date ? 1 : -1))

  return (
    <>
      <Header />
      <Breadcrumb items={[{ name: 'Blog' }]} />

      <main>
        {/* Hero */}
        <section className="bg-gray-50 py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-yellow-400 text-black font-bold px-4 py-2 rounded-full text-sm mb-6">
                <BookOpen className="w-4 h-4" />
                Blog TAXI Pro 91
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                Conseils & guides taxi en Essonne
              </h1>
              <p className="text-lg text-gray-600">
                Tout ce qu&apos;il faut savoir pour vos déplacements en Essonne : tarifs, aéroports, gares,
                transport de nuit, transport médical… Nos chauffeurs partagent leur expertise pour vous aider à
                voyager mieux.
              </p>
            </div>
          </div>
        </section>

        {/* Grid d'articles */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {sorted.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group flex flex-col bg-white rounded-2xl border border-gray-200 overflow-hidden hover:border-yellow-400 hover:shadow-lg transition-all"
                >
                  {/* Image placeholder */}
                  <div className="aspect-[16/9] bg-gradient-to-br from-yellow-100 to-gray-100 flex items-center justify-center relative overflow-hidden">
                    <BookOpen className="w-16 h-16 text-yellow-400 opacity-40 group-hover:scale-110 transition-transform" />
                    <span className="absolute top-3 left-3 bg-yellow-400 text-black text-xs font-bold px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="flex flex-col flex-1 p-6">
                    <div className="flex items-center gap-4 text-xs text-gray-500 mb-3">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" />
                        {formatDate(post.date)}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        {post.readingMinutes} min
                      </span>
                    </div>

                    <h2 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-yellow-600 transition-colors leading-snug">
                      {post.title}
                    </h2>

                    <p className="text-gray-600 text-sm leading-relaxed flex-1 mb-4">
                      {post.excerpt}
                    </p>

                    <span className="inline-flex items-center gap-2 text-yellow-600 font-medium text-sm group-hover:gap-3 transition-all">
                      Lire l&apos;article
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-12 md:py-16 bg-gray-900 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Besoin d&apos;un taxi en Essonne ?
            </h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Service disponible 24h/24, 7j/7. Réservation rapide par téléphone ou en ligne.
            </p>
            <a
              href={SITE.phone.tel}
              className="inline-flex items-center gap-3 bg-yellow-400 text-black font-bold text-lg py-4 px-8 rounded-lg hover:bg-yellow-500 transition-colors"
            >
              Appeler le {SITE.phone.display}
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
