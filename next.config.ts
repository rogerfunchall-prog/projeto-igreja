import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Este projeto é a raiz — evita o Next inferir um lockfile de nível superior
  outputFileTracingRoot: import.meta.dirname,
  images: {
    // Placeholders de fotografia (substituir por imagens reais da igreja)
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "i.ytimg.com" },
    ],
  },
};

export default nextConfig;
