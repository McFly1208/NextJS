/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        
        remotePatterns: [
            {
                protocol: "https",
                hostname: "images.unsplash.com"
            }
        ],
        domains: ['raw.githubusercontent.com'],
        
    }
}

module.exports = nextConfig