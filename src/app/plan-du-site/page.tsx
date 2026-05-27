import { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/Header'
import Breadcrumb from '@/components/Breadcrumb'
import Footer from '@/components/Footer'
import { SITE } from '@/lib/site'
import { cities } from '@/lib/cities'
import { popularRoutes } from '@/lib/routes'

export const metadata: Metadata = {
  title: 'Plan du site',
  description: 'Plan du site TAXI Pro 91 : retrouvez toutes nos pages de services taxi en Essonne, villes desservies, aéroports, trajets et informations légales.',
  alternates: { canonical: `${SITE.url}/plan-du-site` },
  robots: { index: true, follow: true },
}

// Villes existantes avec page dédiée
const cityPagesExisting = [
  'massy', 'palaiseau', 'antony', 'longjumeau', 'les-ulis',
  'saclay', 'ballainvilliers', 'verrieres-le-buisson', 'evry-courcouronnes',
]
const citiesWithPages = cities.filter(c => cityPagesExisting.includes(c.slug))

const services = [
  { href: '/taxi-conventionne-cpam-91', label: 'Taxi conventionné CPAM 91' },
  { href: '/taxi-gare-massy-tgv', label: 'Taxi gare Massy TGV' },
  { href: '/taxi-entreprise', label: 'Taxi entreprise' },
  { href: '/taxi-ecole-polytechnique', label: 'Taxi École Polytechnique' },
  { href: '/taxi-paris-saclay', label: 'Taxi Paris-Saclay' },
  { href: '/taxi-pmr-mobilite-reduite', label: 'Taxi PMR mobilité réduite' },
]

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <section className="mb-10">
    <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-yellow-400">
      {title}
    </h2>
    {children}
  </section>
)

const LinkList = ({ items }: { items: { href: string; label: string }[] }) => (
  <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-2">
    {items.map((item) => (
      <li key={item.href}>
        <Link
          href={item.href}
          className="block py-2 px-3 text-gray-700 rounded-lg hover:bg-yellow-50 hover:text-yellow-700 transition-colors"
        >
          → {item.label}
        </Link>
      </li>
    ))}
  </ul>
)

export default function PlanDuSitePage() {
  return (
    <>
      <Header />
      <Breadcrumb items={[{ name: 'Plan du site' }]} />

      <main className="bg-white">
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Plan du site</h1>
              <p className="text-gray-600 leading-relaxed mb-10">
                Retrouvez ici l&apos;ensemble des pages du site <strong>{SITE.name}</strong>, organisées par thématique
                pour vous aider à trouver rapidement l&apos;information ou le service de taxi qui vous intéresse en
                Essonne (91).
              </p>

              <Section title="Accueil & contact">
                <LinkList items={[
                  { href: '/', label: 'Accueil Taxi Essonne 24h/24' },
                  { href: '/contact', label: 'Contact' },
                  { href: '/tarifs', label: 'Tarifs' },
                ]} />
              </Section>

              <Section title="Villes desservies">
                <LinkList items={citiesWithPages.map(c => ({
                  href: `/taxi-${c.slug}`,
                  label: `Taxi ${c.name}`,
                }))} />
              </Section>

              <Section title="Aéroports">
                <LinkList items={[
                  { href: '/taxi-aeroport', label: 'Taxi aéroport (vue d\'ensemble)' },
                  { href: '/taxi-orly', label: 'Taxi aéroport Orly' },
                  { href: '/taxi-cdg', label: 'Taxi aéroport Roissy CDG' },
                ]} />
              </Section>

              <Section title="Trajets populaires">
                <LinkList items={popularRoutes.map(r => ({
                  href: `/${r.slug}`,
                  label: `Taxi ${r.from} → ${r.to}`,
                }))} />
              </Section>

              <Section title="Services spécialisés">
                <LinkList items={services} />
              </Section>

              <Section title="Blog">
                <LinkList items={[
                  { href: '/blog', label: 'Blog Conseils & guides taxi en Essonne' },
                ]} />
              </Section>

              <Section title="Informations légales">
                <LinkList items={[
                  { href: '/mentions-legales', label: 'Mentions légales' },
                  { href: '/cgv', label: 'Conditions Générales de Vente' },
                  { href: '/politique-confidentialite', label: 'Politique de confidentialité' },
                ]} />
              </Section>

              <div className="mt-12 p-6 bg-yellow-50 border border-yellow-200 rounded-xl">
                <p className="text-gray-700">
                  Vous ne trouvez pas ce que vous cherchez ? Appelez-nous directement au{' '}
                  <a href={SITE.phone.tel} className="font-bold text-yellow-700 hover:underline">
                    {SITE.phone.display}
                  </a>{' '}
                  ou écrivez-nous à{' '}
                  <a href={`mailto:${SITE.email}`} className="font-bold text-yellow-700 hover:underline">
                    {SITE.email}
                  </a>.
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
