/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    turbopackClientSideNestedAsyncChunking: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
