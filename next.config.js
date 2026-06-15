/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
  images: {
    unoptimized: true,
  },
  basePath: isProd ? '/purdue-che-gso' : '',
  assetPrefix: isProd ? '/purdue-che-gso/' : '',
}

module.exports = nextConfig