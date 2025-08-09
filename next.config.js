/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: false,
  swcMinify: true,
  experimental: {
    // Ensure proper client-side navigation in production
    esmExternals: false,
  },
  // Ensure proper routing behavior
  async redirects() {
    return [];
  },
  async rewrites() {
    return [];
  },
};

module.exports = nextConfig;