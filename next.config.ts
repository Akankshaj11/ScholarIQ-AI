import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  webpack: (config) => {
    config.resolve.fallback = {
      ...config.resolve.fallback,
      effect: false,
      sury: false,
      "@valibot/to-json-schema": false,
    };
    return config;
  },
};

export default nextConfig;
