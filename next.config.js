/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  env: {
    APITOKEN: process.env.APITOKEN,
    APIPATH: process.env.APIPATH,
  },
};

module.exports = nextConfig;
