import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "localhost",
      },
    ],
    domains: ["localhost"],
  },
};

export default nextConfig;