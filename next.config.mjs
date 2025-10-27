/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    wasm: false,
  },
  output: "standalone",
  optimizeFonts: true,
  swcMinify: true,

  async headers() {
    return [
      {
        source: "/(.*)", // Apply to all pages
        headers: [
          {
            key: "X-Frame-Options",
            value: "ALLOWALL", // Allow embedding in iframes
          },
          {
            key: "Content-Security-Policy",
            value: "frame-ancestors *;", // Allow all sites to embed
          },
        ],
      },
    ];
  },
};

export default nextConfig;
