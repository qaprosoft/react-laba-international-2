/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'imagedelivery.net',
        port: '',
        pathname: '/NuIlS-icgS-GBz54pfagaw/**',
      },
    ],
  },
};

module.exports = nextConfig;
