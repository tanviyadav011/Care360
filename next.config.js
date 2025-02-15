/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  reactStrictMode: true,
};

module.exports = nextConfig;  // ✅ Fix: Use module.exports (CommonJS)
