/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
   images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.ibb.co.com',
      },
    ],
  },
  reactCompiler: true,
};
// module.exports = nextConfig;
export default nextConfig;
