import type { NextConfig } from 'next';
import createMDX from '@next/mdx';

const nextConfig: NextConfig = {
  reactStrictMode: false,
  pageExtensions: ['tsx', 'mdx', 'ts', 'js'],
  images: {
    remotePatterns: [
      {
        hostname: 'i.scdn.co'
      },
      {
        hostname: 'i.imgur.com'
      },
      {
        protocol: 'https',
        hostname: 'cdn.discordapp.com',
        pathname: '/avatars/957840712404193290/*'
      }
    ]
  }
};

const withMDX = createMDX();

export default withMDX(nextConfig);