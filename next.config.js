/** @type {import('next').NextConfig} */

const config = {
  reactStrictMode: false,

  eslint: {
    ignoreDuringBuilds: true
  },
  experimental: { taint: true },
  images: {
    remotePatterns: [{ protocol: 'https', hostname: 'cdn.sanity.io' }]
  }
};

module.exports = config;
