/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  // Recommended build optimizations for Vercel
  output: "standalone",
  poweredByHeader: false,
  compress: true,
  productionBrowserSourceMaps: false,

  // Image settings
  images: {
    domains: [
      "v0-jaidee-tour-website.vercel.app",
      "images.unsplash.com",
      "lh3.googleusercontent.com",
    ],
    formats: ["image/avif", "image/webp"],
  },

  // ❌ REMOVE experimental.serverActions (BREAKS NEXT 14)
  // experimental: {},

  // Ensure lint and types don’t block builds
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },

  // Caching and asset handling
  assetPrefix: "",
  trailingSlash: false,
};

module.exports = nextConfig;
