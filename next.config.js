/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  env: {
    APITOKEN: process.env.APITOKEN,
  },
};

module.exports = nextConfig;
