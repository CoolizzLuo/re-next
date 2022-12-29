/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false, // do not change to true, if in true, the useEffect will be called twice.
  env: {
    stg: {
      apiKey: 'aaa',
    }
  },
  images: {
    domains: ["fakestoreapi.com"],
  },
}

module.exports = nextConfig
