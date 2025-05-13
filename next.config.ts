/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '', // vide car tu déploies à la racine
  images: {
    unoptimized: true
  }
}

module.exports = nextConfig
