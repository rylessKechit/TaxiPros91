import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { LocalBusinessSchema } from '@/components/seo/Schemas'
import { SITE } from '@/lib/site'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: 'Taxi Essonne 91 — Réservation 24h/24 | TAXI Pro 91',
    template: '%s | TAXI Pro 91',
  },
  description: 'Taxi en Essonne (91) disponible 24h/24. Massy, Palaiseau, Saclay, Les Ulis. Transferts Orly & CDG, gare Massy TGV, transport médical CPAM. ☎ 01 80 85 91 91',
  authors: [{ name: SITE.name }],
  creator: SITE.name,
  publisher: SITE.name,
  formatDetection: { email: false, address: false, telephone: false },
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: SITE.url,
    siteName: SITE.name,
    title: 'Taxi Essonne 91 — Réservation 24h/24 Massy, Orly, Saclay',
    description: 'Votre taxi en Essonne disponible 24h/24. Transferts Orly & CDG, gare Massy TGV, conventionné CPAM. Note 4.9/5.',
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
    title: 'TAXI Pro 91 | Taxi Essonne 24h/24',
    description: 'Réservez votre taxi en Essonne. Massy, Palaiseau, Saclay, Orly & CDG. 24h/24.',
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
  alternates: { canonical: SITE.url },
  category: 'transportation',
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
        <meta name="geo.placename" content="Palaiseau" />
        <meta name="geo.position" content="48.7146;2.2454" />
        <meta name="ICBM" content="48.7146, 2.2454" />
        <LocalBusinessSchema />
      </head>
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  )
}
