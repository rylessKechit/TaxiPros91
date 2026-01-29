import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://taxipros91.fr'),
  title: {
    default: 'Taxi Essonne 91 | Réservation Taxi Massy, Palaiseau, Longjumeau, Antony',
    template: '%s | TAXI Pro 91 - Votre Taxi en Essonne'
  },
  description: 'Service de taxi professionnel en Essonne (91). Réservation facile et rapide à Massy, Palaiseau, Ballainvilliers, Longjumeau et Antony. Tarifs transparents, chauffeurs expérimentés. Disponible 24h/24 et 7j/7 pour tous vos trajets : gares, aéroports, hôpitaux, sorties.',
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
    url: 'https://taxipros91.fr',
    siteName: 'TAXI Pro 91',
    title: 'Taxi Essonne 91 | Réservation Rapide Massy, Palaiseau, Longjumeau',
    description: 'Votre service de taxi de confiance en Essonne. Réservez en ligne votre taxi à Massy, Palaiseau, Ballainvilliers, Longjumeau et Antony. Tarifs clairs, service 24h/24.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'TAXI Pro 91 - Service de taxi en Essonne',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TAXI Pro 91 | Réservation Taxi Essonne',
    description: 'Réservez votre taxi en Essonne. Service professionnel à Massy, Palaiseau, Longjumeau, Antony. Disponible 24h/24.',
    images: ['/og-image.jpg'],
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
    canonical: 'https://taxipros91.fr',
  },
  category: 'transportation',
}

// Schema.org JSON-LD pour le SEO local
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TaxiService',
  name: 'TAXI Pro 91',
  description: 'Service de taxi professionnel en Essonne (91). Réservation à Massy, Palaiseau, Ballainvilliers, Longjumeau, Antony, Verrières-le-Buisson, Les Ulis et Saclay.',
  url: 'https://taxipros91.fr',
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
      name: 'Longjumeau',
      containedInPlace: { '@type': 'AdministrativeArea', name: 'Essonne' }
    },
    {
      '@type': 'City',
      name: 'Antony',
      containedInPlace: { '@type': 'AdministrativeArea', name: 'Hauts-de-Seine' }
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
  ]
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
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#facc15" />
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
