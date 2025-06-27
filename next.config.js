/** @type {import('next').NextConfig} */
const nextConfig = {
  // Ignore linting during build for deployment
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },

  output: 'export',
  images: {
    unoptimized: true
  },
  distDir: 'out',
  trailingSlash: true,
  // Force fresh build to clear Netlify cache
  generateBuildId: () => 'build-' + Date.now(),
}

module.exports = nextConfig
