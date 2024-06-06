/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "image.tmdb.org",
      },
      {
        protocol: "https",
        hostname: "millimetre-bucket.s3.amazonaws.com",
      },
    ],
  },
};

export default nextConfig;
