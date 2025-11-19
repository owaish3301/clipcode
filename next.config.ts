import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  experimental: {
    inlineCss: true,
  },
  async redirects() {
    return [
      {
        source: "/owner",
        destination: "https://github.com/owaish3301",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
