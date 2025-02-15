/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  reactStrictMode: true,
  images: {
    domains: ['your-image-source.com'], // Allow images from external sources if needed
  },
};

module.exports = nextConfig;
