/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
        return [
          {
            source: '/privacy',
            destination: '/static/privacy.html',
          },
          {
            source: '/terms',
            destination: '/static/terms.html',
          },
          {
            source: '/returns',
            destination: '/static/returns.html',
          },
        ];
      },
};

export default nextConfig;
