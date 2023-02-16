/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains:['https://gunmarket.fra1.digitaloceanspaces.com']
  },
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig
