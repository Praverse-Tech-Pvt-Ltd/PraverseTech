import createMDX from '@next/mdx';

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'picsum.photos',
      },
    ],
  },
  experimental: {
    allowedDevOrigins: [
      '6000-firebase-studio-1762961632094.cluster-wurh6gchdjcjmwrw2tqtufvhss.cloudworkstations.dev',
    ],
  },
};

const withMDX = createMDX({});

export default withMDX(nextConfig);
