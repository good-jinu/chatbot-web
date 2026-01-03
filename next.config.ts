import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  experimental: {
    // ppr has been merged into cacheComponents
    // ppr: true,
  },
  images: {
    remotePatterns: [
      {
        hostname: 'avatar.vercel.sh',
      },
    ],
  },
};

export default nextConfig;
