import Link from 'next/link'

interface BreadcrumbItem {
  name: string
  href?: string
}

export default function Breadcrumb({ items }: { items: BreadcrumbItem[] }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://www.taxipro91.com' },
      ...items.map((item, i) => ({
        '@type': 'ListItem',
        position: i + 2,
        name: item.name,
        ...(item.href ? { item: `https://www.taxipro91.com${item.href}` } : {}),
      })),
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <nav aria-label="Fil d'Ariane" className="container mx-auto px-4 py-3">
        <ol className="flex items-center gap-2 text-sm text-gray-500">
          <li>
            <Link href="/" className="hover:text-yellow-600">Accueil</Link>
          </li>
          {items.map((item, i) => (
            <li key={i} className="flex items-center gap-2">
              <span>/</span>
              {item.href ? (
                <Link href={item.href} className="hover:text-yellow-600">{item.name}</Link>
              ) : (
                <span className="text-gray-900 font-medium">{item.name}</span>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  )
}
