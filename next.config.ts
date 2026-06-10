import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  allowedDevOrigins: ["192.168.100.13", "192.168.100.13:3000", "localhost:3000"],
};

export default nextConfig;
