/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'sheakh.org',
      },
    ],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    domains: ['localhost', 'sheakh.org'],
    minimumCacheTTL: 60,
    unoptimized: true, // For static export
  },
  output: 'export',
  // The following are needed when deploying to GitHub Pages
  // Comment these out for local development
  // basePath: '/kavari-kapture-website',
  // assetPrefix: '/kavari-kapture-website',
};

module.exports = nextConfig; 