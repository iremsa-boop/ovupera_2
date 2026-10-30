import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Tarayıcı destekliyorsa AVIF, değilse WebP sunulur (JPEG'e göre %30-50 daha küçük)
    formats: ["image/avif", "image/webp"],
    // Optimize edilmiş görseller 30 gün önbellekte tutulur
    minimumCacheTTL: 60 * 60 * 24 * 30,
  },
  async headers() {
    return [
      {
        source: "/images/:path*",
        headers: [{ key: "Cache-Control", value: "public, max-age=2592000, stale-while-revalidate=86400" }],
      },
    ];
  },
};

export default nextConfig;
