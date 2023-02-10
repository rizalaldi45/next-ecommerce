/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['loremflickr.com']
  },
  i18n: {
    locales: ['en', 'id'],
    defaultLocale: 'en'
  }
}

module.exports = nextConfig
