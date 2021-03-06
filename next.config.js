/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  env: {
    MY_SECRET_TOKEN: process.env.MY_SECRET_TOKEN,
    APITOKEN: process.env.APITOKEN,
    APIPATH: process.env.APIPATH,
    CLOUDAPITOKEN: process.env.CLOUDAPITOKEN,
    CLOUDAPIPATH: process.env.CLOUDAPIPATH,
  },
};

module.exports = nextConfig;
