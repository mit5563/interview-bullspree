/** @type {import('next').NextConfig} */
const nextConfig = {
    redirects: async () => {
        return [
            {
                source: "/",
                destination: "/blogs",
                permanent: true,
            },
        ];
    }
};

export default nextConfig;
