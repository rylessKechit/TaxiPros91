import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.taxipro91.com'

  const cities = [
    'taxi-massy',
    'taxi-palaiseau',
    'taxi-ballainvilliers',
    'taxi-verrieres-le-buisson',
    'taxi-les-ulis',
    'taxi-saclay',
    'taxi-longjumeau',
    'taxi-antony',
  ]

  const cityPages = cities.map((city) => ({
    url: `${baseUrl}/${city}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    ...cityPages,
  ]
}
