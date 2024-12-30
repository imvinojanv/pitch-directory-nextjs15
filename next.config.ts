import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    dangerouslyAllowSVG: true,    // Allow SVGs to be used in Image component
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*"
      }
    ]
  }
};

export default nextConfig;
