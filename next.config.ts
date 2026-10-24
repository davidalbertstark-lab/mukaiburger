import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "mukaiburger.vercel.app",
          },
        ],
        destination: "https://www.mukaiburger.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
