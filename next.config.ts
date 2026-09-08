import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Allow parallel dev servers from the same checkout (each `next dev`
  // holds a lock under its distDir). Override with NEXT_DIST_DIR=.next-v3
  distDir: process.env.NEXT_DIST_DIR ?? ".next",
};

export default nextConfig;
