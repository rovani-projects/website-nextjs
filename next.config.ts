import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: "export", // Enable static export
  images: {
    unoptimized: true, // Set to false to use Next.js image optimization
  },
  // This helps with deployment to different static hosting environments
  basePath: process.env.NODE_ENV === "production" ? "" : "",
  trailingSlash: true, // Append trailing slashes to URLs
  turbopack: {
    root: process.cwd(), // Use dynamic project root instead of hardcoded path
  },
};

export default nextConfig;
