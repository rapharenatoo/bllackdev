/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: [
      "media.graphassets.com",
      "www.github.com",
      "avatars.githubusercontent.com",
    ],
  },
};

module.exports = nextConfig;
