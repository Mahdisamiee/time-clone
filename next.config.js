/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["lh3.googleusercontent.com", "harchi.app"],
  },
  async redirects() {
    return [
      {
        source: "/github",
        destination: "https://github.com/",
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;
