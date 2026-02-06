/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/mustejab_pf',
  assetPrefix: '/mustejab_pf',
}

module.exports = nextConfig
