const { NEXT_PUBLIC_ENV_BASE = 'production', BLOG_SITE_URL } = process.env
console.log('NEXT_PUBLIC_ENV_BASE', NEXT_PUBLIC_ENV_BASE)
// const base = NEXT_PUBLIC_ENV_BASE === 'production' ? 'www' : 'dev'

const getSiteUrl = (port, url) => {
  return  NEXT_PUBLIC_ENV_BASE === 'local' ? `http://localhost:${port}` : url
}

const BLOG_URL = getSiteUrl(port = 4000, BLOG_SITE_URL)

const ZONE_URLS = [
  {
    source: '/:path*',
    destination: `/:path*`,
  },
  {
    source: '/blog',
    destination: `${BLOG_URL}/blog`,
  },
  {
    source: '/blog/:path*',
    destination: `${BLOG_URL}/blog/:path*`,
  }
]

module.exports = {
  ZONE_URLS: ZONE_URLS
}
