import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: "/shengya-demo",
  trailingSlash: true,
  output: "standalone",
  images: {
    unoptimized: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
