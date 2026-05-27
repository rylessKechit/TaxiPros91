import { Metadata } from 'next'
import Header from '@/components/Header'
import Breadcrumb from '@/components/Breadcrumb'
import Footer from '@/components/Footer'
import { SITE } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Mentions légales',
  description: 'Mentions légales de TAXI Pro 91 : éditeur, hébergeur, propriété intellectuelle, droit applicable. Service de taxi en Essonne (91).',
  alternates: { canonical: `${SITE.url}/mentions-legales` },
  robots: { index: true, follow: true },
}

export default function MentionsLegalesPage() {
  return (
    <>
      <Header />
      <Breadcrumb items={[{ name: 'Mentions légales' }]} />

      <main className="bg-white">
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
                Mentions légales
              </h1>

              <p className="text-gray-600 leading-relaxed mb-10">
                Conformément aux dispositions des articles 6-III et 19 de la loi n° 2004-575 du 21 juin 2004
                pour la Confiance dans l&apos;économie numérique (LCEN), il est porté à la connaissance des
                utilisateurs du site <strong>{SITE.url}</strong> les présentes mentions légales.
              </p>

              {/* Éditeur */}
              <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Éditeur du site</h2>
                <p className="text-gray-600 leading-relaxed mb-3">
                  Le site <strong>{SITE.url}</strong> est édité par :
                </p>
                <div className="bg-gray-50 rounded-xl p-6 border border-gray-200 space-y-2 text-gray-700">
                  <p><strong>{SITE.legalName}</strong></p>
                  <p>{SITE.address.street}</p>
                  <p>{SITE.address.postalCode} {SITE.address.locality}, France</p>
                  <p>Téléphone : <a href={SITE.phone.tel} className="text-yellow-600 hover:underline font-medium">{SITE.phone.display}</a></p>
                  <p>Email : <a href={`mailto:${SITE.email}`} className="text-yellow-600 hover:underline font-medium">{SITE.email}</a></p>
                  {/* TODO: remplacer par les vraies valeurs client */}
                  <p>SIRET : <em className="text-gray-500">[À compléter par le client]</em></p>
                  {/* TODO: remplacer par les vraies valeurs client */}
                  <p>
                    Carte professionnelle de taxi n° <em className="text-gray-500">[À compléter par le client]</em>
                    , délivrée par la Préfecture de l&apos;Essonne.
                  </p>
                </div>
              </section>

              {/* Directeur de la publication */}
              <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Directeur de la publication</h2>
                <p className="text-gray-600 leading-relaxed">
                  {/* TODO: remplacer par les vraies valeurs client */}
                  Le directeur de la publication est <em className="text-gray-500">[Nom du dirigeant à compléter]</em>,
                  en qualité de représentant légal de {SITE.legalName}.
                </p>
              </section>

              {/* Hébergement */}
              <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Hébergement</h2>
                <p className="text-gray-600 leading-relaxed mb-3">
                  Le site est hébergé par :
                </p>
                <div className="bg-gray-50 rounded-xl p-6 border border-gray-200 space-y-2 text-gray-700">
                  <p><strong>Vercel Inc.</strong></p>
                  <p>340 S Lemon Ave #4133</p>
                  <p>Walnut, CA 91789</p>
                  <p>États-Unis</p>
                  <p>Site web : <a href="https://vercel.com" className="text-yellow-600 hover:underline">vercel.com</a></p>
                </div>
              </section>

              {/* Propriété intellectuelle */}
              <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Propriété intellectuelle</h2>
                <p className="text-gray-600 leading-relaxed mb-3">
                  L&apos;ensemble des éléments composant le site <strong>{SITE.url}</strong> (textes, images, photographies,
                  logos, icônes, vidéos, sons, plans, noms de domaine, structure de la base de données, mise en forme)
                  sont la propriété exclusive de {SITE.legalName} ou de ses partenaires et sont protégés par le droit
                  d&apos;auteur, le droit des marques et plus généralement par la législation française et internationale
                  relative à la propriété intellectuelle.
                </p>
                <p className="text-gray-600 leading-relaxed mb-3">
                  Toute reproduction, représentation, diffusion ou rediffusion, totale ou partielle, du contenu de ce
                  site, par quelque procédé que ce soit, sans l&apos;autorisation expresse et préalable de {SITE.legalName},
                  est strictement interdite et constituerait une contrefaçon sanctionnée par les articles L.335-2 et
                  suivants du Code de la propriété intellectuelle.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  La marque <strong>{SITE.name}</strong> ainsi que le logo associé sont des marques protégées.
                  Toute utilisation non autorisée est passible de poursuites judiciaires.
                </p>
              </section>

              {/* Droit applicable */}
              <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Droit applicable et juridiction compétente</h2>
                <p className="text-gray-600 leading-relaxed mb-3">
                  Les présentes mentions légales sont régies par le <strong>droit français</strong>. En cas de litige,
                  et après tentative de résolution amiable, les tribunaux français seront seuls compétents pour connaître
                  de ce litige.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Le tribunal compétent est celui d&apos;<strong>Évry-Courcouronnes</strong>, ressort du siège social
                  de la société.
                </p>
              </section>

              {/* Crédits photos */}
              <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Crédits photos</h2>
                <p className="text-gray-600 leading-relaxed">
                  Les photographies présentes sur ce site sont soit la propriété de {SITE.legalName}, soit issues de
                  banques d&apos;images libres de droits (Unsplash, Pexels, Pixabay), soit fournies par nos partenaires.
                  Pour toute question relative aux droits d&apos;une image, contactez-nous à{' '}
                  <a href={`mailto:${SITE.email}`} className="text-yellow-600 hover:underline">{SITE.email}</a>.
                </p>
              </section>

              {/* Contact */}
              <section className="bg-yellow-50 rounded-xl p-6 border border-yellow-200">
                <h2 className="text-xl font-bold text-gray-900 mb-3">Une question ?</h2>
                <p className="text-gray-700 mb-2">
                  Pour toute question relative au site ou à ces mentions légales, vous pouvez nous contacter :
                </p>
                <ul className="text-gray-700 space-y-1">
                  <li>Par téléphone : <a href={SITE.phone.tel} className="font-bold text-yellow-700 hover:underline">{SITE.phone.display}</a></li>
                  <li>Par email : <a href={`mailto:${SITE.email}`} className="font-bold text-yellow-700 hover:underline">{SITE.email}</a></li>
                </ul>
              </section>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
