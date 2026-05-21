import { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import Header from '@/components/Header'
import Breadcrumb from '@/components/Breadcrumb'
import Footer from '@/components/Footer'
import { FAQSchema } from '@/components/seo/Schemas'
import BookingForm from '@/components/BookingForm'
import { Calendar, Clock, Phone, ArrowRight, HelpCircle, BookOpen } from 'lucide-react'
import { SITE } from '@/lib/site'
import { posts, getPost, getRelatedPosts } from '@/lib/blog'

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const post = getPost(slug)
  if (!post) return { title: 'Article introuvable' }

  const url = `${SITE.url}/blog/${post.slug}`
  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: url },
    openGraph: {
      title: post.title,
      description: post.description,
      url,
      type: 'article',
      publishedTime: post.date,
      authors: [SITE.name],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
    },
  }
}

const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })

// ============================================================================
// Mini markdown renderer (titres, paragraphes, listes, tables)
// ============================================================================
function renderMarkdown(content: string): React.ReactNode[] {
  const lines = content.split('\n')
  const blocks: React.ReactNode[] = []
  let i = 0
  let key = 0

  const renderInline = (text: string): React.ReactNode => {
    // Gestion **bold** simple
    const parts: React.ReactNode[] = []
    const regex = /\*\*(.+?)\*\*/g
    let lastIndex = 0
    let match: RegExpExecArray | null
    let partKey = 0
    while ((match = regex.exec(text)) !== null) {
      if (match.index > lastIndex) {
        parts.push(text.slice(lastIndex, match.index))
      }
      parts.push(<strong key={partKey++}>{match[1]}</strong>)
      lastIndex = match.index + match[0].length
    }
    if (lastIndex < text.length) {
      parts.push(text.slice(lastIndex))
    }
    return parts.length > 0 ? parts : text
  }

  while (i < lines.length) {
    const line = lines[i]
    const trimmed = line.trim()

    // Saut de ligne vide
    if (trimmed === '') {
      i++
      continue
    }

    // H3
    if (trimmed.startsWith('### ')) {
      blocks.push(
        <h3 key={key++} className="text-xl md:text-2xl font-bold text-gray-900 mt-8 mb-3">
          {renderInline(trimmed.slice(4))}
        </h3>
      )
      i++
      continue
    }

    // H2
    if (trimmed.startsWith('## ')) {
      blocks.push(
        <h2 key={key++} className="text-2xl md:text-3xl font-bold text-gray-900 mt-10 mb-4 pb-2 border-b border-gray-200">
          {renderInline(trimmed.slice(3))}
        </h2>
      )
      i++
      continue
    }

    // Table (commence par |)
    if (trimmed.startsWith('|')) {
      const tableLines: string[] = []
      while (i < lines.length && lines[i].trim().startsWith('|')) {
        tableLines.push(lines[i].trim())
        i++
      }
      if (tableLines.length >= 2) {
        const headers = tableLines[0].split('|').slice(1, -1).map((c) => c.trim())
        // tableLines[1] = séparateur (---)
        const rows = tableLines.slice(2).map((row) =>
          row.split('|').slice(1, -1).map((c) => c.trim())
        )
        blocks.push(
          <div key={key++} className="overflow-x-auto my-6">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-50 border-b-2 border-gray-200">
                  {headers.map((h, idx) => (
                    <th key={idx} className="text-left py-3 px-4 font-bold text-gray-900 text-sm">
                      {renderInline(h)}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {rows.map((row, idx) => (
                  <tr key={idx} className="border-b border-gray-200">
                    {row.map((cell, cIdx) => (
                      <td key={cIdx} className="py-3 px-4 text-gray-700 text-sm">
                        {renderInline(cell)}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )
      }
      continue
    }

    // Liste à puces
    if (trimmed.startsWith('- ')) {
      const items: string[] = []
      while (i < lines.length && lines[i].trim().startsWith('- ')) {
        items.push(lines[i].trim().slice(2))
        i++
      }
      blocks.push(
        <ul key={key++} className="list-disc pl-6 space-y-2 my-4 text-gray-700">
          {items.map((item, idx) => (
            <li key={idx} className="leading-relaxed">{renderInline(item)}</li>
          ))}
        </ul>
      )
      continue
    }

    // Paragraphe
    blocks.push(
      <p key={key++} className="text-gray-700 leading-relaxed mb-4">
        {renderInline(trimmed)}
      </p>
    )
    i++
  }

  return blocks
}

// ============================================================================
// PAGE
// ============================================================================
export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params
  const post = getPost(slug)
  if (!post) notFound()

  const related = getRelatedPosts(post.slug, 3)
  const url = `${SITE.url}/blog/${post.slug}`

  // Schema BlogPosting
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.date,
    author: { '@type': 'Organization', name: SITE.name, url: SITE.url },
    publisher: {
      '@type': 'Organization',
      name: SITE.name,
      logo: { '@type': 'ImageObject', url: `${SITE.url}/logo.webp` },
    },
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
    articleSection: post.category,
    wordCount: post.content.split(/\s+/).length,
  }

  return (
    <>
      <Header />
      <Breadcrumb items={[{ name: 'Blog', href: '/blog' }, { name: post.title }]} />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      {post.faqs && post.faqs.length > 0 && <FAQSchema faqs={post.faqs} />}

      <main>
        {/* Hero article */}
        <section className="bg-gray-50 py-10 md:py-14">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <span className="inline-block bg-yellow-400 text-black text-xs font-bold px-3 py-1 rounded-full mb-4">
                {post.category}
              </span>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                {post.title}
              </h1>
              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-6">
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-4 h-4" />
                  {formatDate(post.date)}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4" />
                  {post.readingMinutes} min de lecture
                </span>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed">{post.excerpt}</p>
            </div>
          </div>
        </section>

        {/* Contenu */}
        <section className="py-10 md:py-14 bg-white">
          <div className="container mx-auto px-4">
            <article className="max-w-3xl mx-auto">
              {renderMarkdown(post.content)}

              {/* CTA milieu d'article */}
              <div className="my-12 p-6 md:p-8 bg-yellow-400 rounded-2xl">
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:justify-between">
                  <div>
                    <p className="font-bold text-black text-lg md:text-xl mb-1">
                      Besoin d&apos;un taxi en Essonne ?
                    </p>
                    <p className="text-gray-800 text-sm">
                      Réservez 24h/24, paiement CB, espèces, CPAM.
                    </p>
                  </div>
                  <a
                    href={SITE.phone.tel}
                    className="inline-flex items-center gap-2 bg-black text-white font-bold py-3 px-6 rounded-lg hover:bg-gray-900 transition-colors whitespace-nowrap"
                  >
                    <Phone className="w-5 h-5" />
                    {SITE.phone.display}
                  </a>
                </div>
              </div>
            </article>
          </div>
        </section>

        {/* FAQ */}
        {post.faqs && post.faqs.length > 0 && (
          <section className="py-12 bg-gray-50">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
                  Questions fréquentes
                </h2>
                <div className="space-y-3">
                  {post.faqs.map((faq, idx) => (
                    <details
                      key={idx}
                      className="bg-white rounded-xl border border-gray-200 overflow-hidden group"
                    >
                      <summary className="flex items-center justify-between p-5 cursor-pointer hover:bg-gray-50">
                        <div className="flex items-center gap-3">
                          <HelpCircle className="w-5 h-5 text-yellow-500 flex-shrink-0" />
                          <span className="font-medium text-gray-900">{faq.q}</span>
                        </div>
                        <span className="text-yellow-500 group-open:rotate-180 transition-transform shrink-0">
                          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </span>
                      </summary>
                      <div className="px-5 pb-5 pt-0 pl-14">
                        <p className="text-gray-600 leading-relaxed">{faq.a}</p>
                      </div>
                    </details>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Articles liés */}
        {related.length > 0 && (
          <section className="py-12 md:py-16 bg-white">
            <div className="container mx-auto px-4">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
                À lire également
              </h2>
              <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                {related.map((p) => (
                  <Link
                    key={p.slug}
                    href={`/blog/${p.slug}`}
                    className="group flex flex-col bg-white rounded-2xl border border-gray-200 overflow-hidden hover:border-yellow-400 hover:shadow-lg transition-all"
                  >
                    <div className="aspect-[16/9] bg-gradient-to-br from-yellow-100 to-gray-100 flex items-center justify-center">
                      <BookOpen className="w-12 h-12 text-yellow-400 opacity-40" />
                    </div>
                    <div className="p-5 flex flex-col flex-1">
                      <span className="text-xs font-bold text-yellow-600 mb-2">{p.category}</span>
                      <h3 className="font-bold text-gray-900 mb-2 group-hover:text-yellow-600 transition-colors leading-snug">
                        {p.title}
                      </h3>
                      <p className="text-sm text-gray-600 mb-3 line-clamp-2 flex-1">{p.excerpt}</p>
                      <span className="inline-flex items-center gap-1.5 text-yellow-600 font-medium text-sm group-hover:gap-2 transition-all">
                        Lire <ArrowRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* CTA final + BookingForm */}
        <section className="py-12 md:py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-10 items-center max-w-5xl mx-auto">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  Réservez votre taxi en quelques clics
                </h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Service disponible 24h/24 et 7j/7 dans toute l&apos;Essonne. Tarifs transparents, chauffeurs
                  professionnels, paiement CB ou espèces.
                </p>
                <a
                  href={SITE.phone.tel}
                  className="inline-flex items-center gap-3 bg-gray-900 text-white font-bold text-lg py-4 px-7 rounded-lg hover:bg-gray-800 transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  {SITE.phone.display}
                </a>
              </div>
              <div>
                <BookingForm />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
