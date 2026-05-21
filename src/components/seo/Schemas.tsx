import { SITE } from '@/lib/site'
import { cities } from '@/lib/cities'

const ORG_ID = `${SITE.url}/#business`

export function LocalBusinessSchema() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'TaxiService',
    '@id': ORG_ID,
    name: SITE.name,
    description: 'Service de taxi professionnel en Essonne (91), 24h/24 et 7j/7. Transferts aéroport Orly et Roissy CDG, gare Massy TGV, transport médical conventionné CPAM.',
    url: SITE.url,
    telephone: SITE.phone.e164,
    email: SITE.email,
    image: `${SITE.url}/og-image.webp`,
    logo: `${SITE.url}/logo.webp`,
    priceRange: '€€',
    currenciesAccepted: 'EUR',
    paymentAccepted: 'Cash, Credit Card, Debit Card, Invoice',
    address: {
      '@type': 'PostalAddress',
      streetAddress: SITE.address.street,
      addressLocality: SITE.address.locality,
      postalCode: SITE.address.postalCode,
      addressRegion: SITE.address.region,
      addressCountry: SITE.address.country,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: SITE.geo.headquarters.lat,
      longitude: SITE.geo.headquarters.lng,
    },
    serviceArea: {
      '@type': 'GeoCircle',
      geoMidpoint: {
        '@type': 'GeoCoordinates',
        latitude: SITE.geo.serviceCenter.lat,
        longitude: SITE.geo.serviceCenter.lng,
      },
      geoRadius: String(SITE.geo.serviceRadiusMeters),
    },
    areaServed: [
      ...cities.map(c => ({
        '@type': 'City',
        name: c.name,
        containedInPlace: { '@type': 'AdministrativeArea', name: c.region },
      })),
      { '@type': 'AdministrativeArea', name: 'Essonne' },
    ],
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '00:00',
      closes: '23:59',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: SITE.rating.value,
      reviewCount: SITE.rating.count,
      bestRating: '5',
      worstRating: '1',
    },
    sameAs: [SITE.social.facebook, SITE.social.instagram],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Services de taxi',
      itemListElement: [
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Transfert Aéroport Orly & CDG' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Taxi conventionné CPAM' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Transport professionnel et entreprise' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Transfert gare Massy TGV' } },
      ],
    },
  }
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
}

export function FAQSchema({ faqs }: { faqs: { q: string; a: string }[] }) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(f => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  }
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
}

export function ServiceSchema({
  name,
  description,
  url,
  areaServed,
}: {
  name: string
  description: string
  url: string
  areaServed?: string[]
}) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    url,
    provider: { '@id': ORG_ID },
    areaServed: areaServed?.map(a => ({ '@type': 'City', name: a })) ?? { '@type': 'AdministrativeArea', name: 'Essonne' },
    serviceType: name,
    offers: { '@type': 'Offer', availability: 'https://schema.org/InStock', priceCurrency: 'EUR' },
  }
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
}
