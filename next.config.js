/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    compiler: {
        styledComponents: true,
    },
    env: {
        mongodburl:
            'mongodb+srv://nyanpham:<PASSWORD>@nyandashboard.qk7djhk.mongodb.net/?retryWrites=true&w=majority',
        mongopassword: 'nyanpham',
    },
}

module.exports = nextConfig
