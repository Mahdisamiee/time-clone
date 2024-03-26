const createNextIntlPlugin = require("next-intl/plugin");

const withNextIntl = createNextIntlPlugin("./i18n.ts");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["lh3.googleusercontent.com", "whatever.plus"],
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

module.exports = withNextIntl(nextConfig);
