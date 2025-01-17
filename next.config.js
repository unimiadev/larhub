/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  //output: "export",

  swcMinify: true,
  images: {
    domains: [
      "firebasestorage.googleapis.com",
      "img.freepik.com",
      // Add other domains you're loading images from
    ],
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
