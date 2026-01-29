import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://taxipro91.com'),
  title: {
    default: 'Taxi Essonne 91 | Réservation Taxi Massy, Palaiseau, Les Ulis, Saclay, Longjumeau, Antony',
    template: '%s | TAXI Pro 91 - Votre Taxi en Essonne'
  },
  description: 'Service de taxi professionnel en Essonne (91). Réservation rapide à Massy, Palaiseau, Ballainvilliers, Verrières-le-Buisson, Les Ulis, Saclay, Longjumeau et Antony. Tarifs transparents, chauffeurs expérimentés. Disponible 24h/24 et 7j/7.',
  keywords: [
    // Mots-clés principaux
    'taxi essonne', 'taxi 91', 'taxi massy', 'taxi palaiseau', 'taxi longjumeau',
    'taxi antony', 'taxi ballainvilliers', 'taxi verrières-le-buisson', 'taxi les ulis',
    'taxi saclay', 'taxi courtaboeuf', 'réservation taxi 91',
    // Mots-clés longue traîne
    'taxi pas cher essonne', 'taxi aéroport orly massy', 'taxi gare massy palaiseau',
    'taxi conventionné essonne', 'taxi médical 91', 'taxi aéroport cdg essonne',
    'réserver taxi massy', 'taxi longjumeau gare', 'vtc essonne',
    'taxi palaiseau polytechnique', 'taxi saclay', 'taxi orsay',
    // Mots-clés géolocalisés
    'chauffeur taxi massy', 'compagnie taxi palaiseau', 'centrale taxi longjumeau',
    'taxi antony gare rer', 'taxi ballainvilliers 91160'
  ],
  authors: [{ name: 'TAXI Pro 91' }],
  creator: 'TAXI Pro 91',
  publisher: 'TAXI Pro 91',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://taxipro91.com',
    siteName: 'TAXI Pro 91',
    title: 'Taxi Essonne 91 | Réservation Rapide Massy, Palaiseau, Les Ulis, Saclay, Longjumeau, Antony',
    description: 'Votre service de taxi de confiance en Essonne. Réservez votre taxi à Massy, Palaiseau, Ballainvilliers, Verrières-le-Buisson, Les Ulis, Saclay, Longjumeau et Antony. Service 24h/24.',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'TAXI Pro 91 - Service de taxi en Essonne',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TAXI Pro 91 | Réservation Taxi Essonne',
    description: 'Réservez votre taxi en Essonne. Service professionnel à Massy, Palaiseau, Verrières-le-Buisson, Les Ulis, Saclay, Longjumeau et Antony. 24h/24.',
    images: ['/og-image.webp'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://taxipro91.com',
  },
  category: 'transportation',
}

// Schema.org JSON-LD pour le SEO local
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': ['TaxiService', 'LocalBusiness'],
  name: 'TAXI Pro 91',
  description: 'Service de taxi professionnel en Essonne (91). Réservation à Massy, Palaiseau, Ballainvilliers, Longjumeau, Antony, Verrières-le-Buisson, Les Ulis et Saclay.',
  url: 'https://taxipro91.com',
  telephone: '+33680036463',
  priceRange: '€€',
  areaServed: [
    {
      '@type': 'City',
      name: 'Massy',
      containedInPlace: { '@type': 'AdministrativeArea', name: 'Essonne' }
    },
    {
      '@type': 'City',
      name: 'Palaiseau',
      containedInPlace: { '@type': 'AdministrativeArea', name: 'Essonne' }
    },
    {
      '@type': 'City',
      name: 'Ballainvilliers',
      containedInPlace: { '@type': 'AdministrativeArea', name: 'Essonne' }
    },
    {
      '@type': 'City',
      name: 'Verrières-le-Buisson',
      containedInPlace: { '@type': 'AdministrativeArea', name: 'Essonne' }
    },
    {
      '@type': 'City',
      name: 'Les Ulis',
      containedInPlace: { '@type': 'AdministrativeArea', name: 'Essonne' }
    },
    {
      '@type': 'City',
      name: 'Saclay',
      containedInPlace: { '@type': 'AdministrativeArea', name: 'Essonne' }
    },
    {
      '@type': 'City',
      name: 'Longjumeau',
      containedInPlace: { '@type': 'AdministrativeArea', name: 'Essonne' }
    },
    {
      '@type': 'City',
      name: 'Antony',
      containedInPlace: { '@type': 'AdministrativeArea', name: 'Hauts-de-Seine' }
    }
  ],
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Massy',
    postalCode: '91300',
    addressRegion: 'Essonne',
    addressCountry: 'FR'
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 48.7253,
    longitude: 2.2714
  },
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    opens: '00:00',
    closes: '23:59'
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '500',
    bestRating: '5',
    worstRating: '1'
  },
  sameAs: [
    'https://www.facebook.com/taxipros91',
    'https://www.instagram.com/taxipros91'
  ],
  image: 'https://taxipro91.com/og-image.webp',
  logo: 'https://taxipro91.com/logo.webp',
  currenciesAccepted: 'EUR',
  paymentAccepted: 'Cash, Credit Card',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Services de taxi',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Transfert Aéroport', description: 'Navettes vers Orly et Roissy CDG' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Transport Médical', description: 'Transport conventionné CPAM' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Transport Professionnel', description: 'Déplacements d\'affaires et facturation entreprise' } },
    ]
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.webp" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#facc15" />
        <meta name="google-site-verification" content="ByaFEimKJQnVVkNTUb36uq6ROgEPc7tBSgzTE-J9RqU" />
        <meta name="geo.region" content="FR-91" />
        <meta name="geo.placename" content="Essonne" />
        <meta name="geo.position" content="48.7253;2.2714" />
        <meta name="ICBM" content="48.7253, 2.2714" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  )
}
