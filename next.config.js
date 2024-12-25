/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      'img.freepik.com',
      'www.shutterstock.com',
      'encrypted-tbn0.gstatic.com',
      'media.istockphoto.com', // Add this domain
    ],
  },
};

module.exports = nextConfig;


