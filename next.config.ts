import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/texas-dmv-practice-tests",
        destination: "/texas-dmv-practice-test",
        permanent: true,
      },
      {
        source: "/florida-dmv-practice-tests",
        destination: "/florida-dmv-practice-test",
        permanent: true,
      },
      {
        source: "/new-york-dmv-practice-tests",
        destination: "/new-york-dmv-practice-test",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
