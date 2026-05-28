/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    qualities: [75, 85, 100],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  // Canonicalisation SEO : non-www -> www (301).
  // Vercel force HTTPS automatiquement ; on ne gère que le host.
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'taxipro91.com' }],
        destination: 'https://www.taxipro91.com/:path*',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
