/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    MONGO_URI: 'mongodb+srv://en-naddam:Uqik9284..@cluster0.ilcuwci.mongodb.net/pcfy?retryWrites=true&w=majority'
  }
}

module.exports = nextConfig
