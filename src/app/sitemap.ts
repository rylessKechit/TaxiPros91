import { MetadataRoute } from 'next'
import { cities } from '@/lib/cities'
import { popularRoutes } from '@/lib/routes'
import { SITE } from '@/lib/site'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  const staticPages: MetadataRoute.Sitemap = [
    { url: SITE.url, lastModified: now, changeFrequency: 'weekly', priority: 1 },
    { url: `${SITE.url}/tarifs`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${SITE.url}/taxi-orly`, lastModified: now, changeFrequency: 'monthly', priority: 1.0 },
    { url: `${SITE.url}/taxi-cdg`, lastModified: now, changeFrequency: 'monthly', priority: 1.0 },
    { url: `${SITE.url}/taxi-aeroport`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${SITE.url}/taxi-gare-massy-tgv`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${SITE.url}/taxi-conventionne-cpam-91`, lastModified: now, changeFrequency: 'monthly', priority: 1.0 },
    { url: `${SITE.url}/taxi-pmr-mobilite-reduite`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${SITE.url}/taxi-entreprise`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${SITE.url}/taxi-ecole-polytechnique`, lastModified: now, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${SITE.url}/taxi-paris-saclay`, lastModified: now, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${SITE.url}/contact`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${SITE.url}/blog`, lastModified: now, changeFrequency: 'weekly', priority: 0.7 },
    { url: `${SITE.url}/mentions-legales`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${SITE.url}/cgv`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${SITE.url}/politique-confidentialite`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
  ]

  const cityPages: MetadataRoute.Sitemap = cities.map(c => ({
    url: `${SITE.url}/taxi-${c.slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: c.slug === 'massy' ? 1.0 : 0.85,
  }))

  const routePages: MetadataRoute.Sitemap = popularRoutes.map(r => ({
    url: `${SITE.url}/${r.slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.9,
  }))

  const blogSlugs = ['comment-aller-orly-depuis-massy', 'prix-taxi-massy-orly-2026', 'guide-gare-massy-tgv', 'taxi-de-nuit-essonne']
  const blogPages: MetadataRoute.Sitemap = blogSlugs.map(slug => ({
    url: `${SITE.url}/blog/${slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.6,
  }))

  return [...staticPages, ...cityPages, ...routePages, ...blogPages]
}
