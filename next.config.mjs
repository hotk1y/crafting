/** @type {import('next').NextConfig} */
const nextConfig = {
   // output: 'export',
   images: {
      // loader: 'custom',
      // loaderFile: './my-loader.ts',
      remotePatterns: [
         {
            protocol: "https",
            hostname: "avatars.mds.yandex.net",
         },
      ],
   },
};

export default nextConfig;
