if (!process.env.BLOGGER_URL) {
  throw new Error(`
    Please provide a valid Blogger instance URL.
    Add to your environment variables BLOGGER_URL.
  `)
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      process.env.BLOGGER_URL.match(/(?!(w+)\.)\w*(?:\w+\.)+\w+/)[0],
      'googleusercontent.com',
      'blogger.googleusercontent.com',
      'img1.blogblog.com'
    ],
  },
};

export default nextConfig;
