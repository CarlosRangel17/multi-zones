const { ZONE_URLS } = require('./next-zone-urls')

module.exports = {
  images: {
    deviceSizes: [320, 420, 768, 991, 1024, 1200, 1500],
    path: '/_next/image'
  },
  async rewrites() {
    return ZONE_URLS
  }
}
