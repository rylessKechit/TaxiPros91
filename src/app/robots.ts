import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/_next/', '/favicon.ico'],
      },
    ],
    sitemap: 'https://www.taxipro91.com/sitemap.xml',
    host: 'https://www.taxipro91.com',
  }
}
