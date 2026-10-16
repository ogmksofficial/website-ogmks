import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    dangerouslyAllowSVG: true,
    remotePatterns: [],
    qualities: [25, 50, 75, 85, 90, 100],
  },
};

export default nextConfig;
