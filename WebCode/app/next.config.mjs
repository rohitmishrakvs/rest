/** @type {import('next').NextConfig} */
const nextConfig = {
  // Image optimization
  images: {
    domains: ["images.pexels.com", "localhost"],
    formats: ["image/webp", "image/avif"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  
  // Enable compression
  compress: true,
  
  // Optimize build output
  swcMinify: true,
  
  // Enable experimental features for better performance
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ["react", "react-dom"],
  },
  
  // Bundle analyzer (uncomment to analyze bundle size)
  // bundleAnalyzer: {
  //   enabled: process.env.ANALYZE === 'true',
  // },
  
  // Headers for better caching and security
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "X-XSS-Protection",
            value: "1; mode=block",
          },
        ],
      },
      {
        source: "/(.*)\\.(js|css|woff|woff2|eot|ttf|otf|png|jpg|jpeg|gif|svg|ico|webp|avif|mp4)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
