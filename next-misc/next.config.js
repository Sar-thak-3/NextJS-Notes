/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  redirects: async()=>{
    return [
      {
        source: '/about',
        destination: '/',
        permanent: false,
      },
      // {
      //   source: 'old-blog/:id',
      //   destination: '/new-blog/:id',
      //   permanent: true,
      // }
    ]
  }
}

// Permanent: false :307 error of temporary redirecting

module.exports = nextConfig
