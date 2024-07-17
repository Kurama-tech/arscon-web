/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
        return [
          {
            source: '/privacy',
            destination: '/static/privacy.html',
          },
        ];
      },
};

export default nextConfig;
