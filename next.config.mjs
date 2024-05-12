/** @type {import('next').NextConfig} */
const nextConfig = {

    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'demo.themexbd.com',
            },
        ],
    },
};

export default nextConfig;
