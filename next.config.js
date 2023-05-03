/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["images.unsplash.com", "cdn.shopify.com"],
  },
  eslint: true,
  experimental: {
    appDir: true,
  },
  // compiler: {
  // removeConsole: {
  //   exclude: ["error"],
  // },
  // },
};
