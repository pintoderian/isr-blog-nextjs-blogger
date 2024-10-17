# Incremental Static Regeneration Blog Example Using Next.js and Blogger

This project showcases how to use [Next.js](https://nextjs.org) with [Blogger](https://www.blogger.com) as the data source, implementing **Incremental Static Regeneration** (ISR). The blog allows pages to be statically generated and automatically regenerated with updated content from the server, making it ideal for blogs and sites that rely on dynamic content.

## Features

- **Next.js with ISR**: Utilizes Next.js's incremental static regeneration for real-time content updates.
- **Blogger Feeds**: The blog content is generated based on [Blogger's Atom or RSS feeds](https://support.google.com/blogger/answer/97933?hl=en). Make sure to enable and set your Blogger feed to "Full" to ensure all the content is available for the Next.js site.
- **SEO-friendly**: Easy configuration to control meta tags, such as `robots`, to allow or block content indexing.
- **Prevent Duplicate Content**: It's recommended to disable your Blogger blog from search engine indexing to avoid duplicate content in Google and focus indexing efforts on the Next.js site.
- **Easy deployment on Vercel**: Perfect for deploying on platforms like [Vercel](https://vercel.com).

## Blogger Setup

### 1. Enable and Configure Blogger Feeds

To use this setup, you must enable the feed of your Blogger blog and set it to **Full** to provide complete article data.

- Go to your Blogger dashboard.
- Navigate to **Settings** > **Other**.
- Under **Site Feed**, ensure the feed is set to **Full**.

### 2. Disable Blogger from Search Engine Indexing

To prevent duplicate content from appearing on Google (both from Blogger and Next.js), it's highly recommended to disable the Blogger blog from being indexed by search engines:

- Go to **Settings** > **Search preferences**.
- Under **Crawlers and indexing**, turn **Custom robots.txt** on and provide a simple robots.txt that disallows all bots from indexing the Blogger site:

  ```
  User-agent: *
  Disallow: /
  ```

This will ensure that only your Next.js site will be indexed, focusing traffic on your static site.

## Configuration

To run this project locally, you will need to set up some environment variables. Here’s an example of the variables required for production:

### Environment Variables

Create a `.env.local` file in the root of the project with the following content:

```bash
# URL of your Blogger blog's feed (Atom or RSS)
BLOGGER_URL=https://www.miblogexample.com

# Control whether to index pages by search engines
ROBOT_NOINDEX=false
```

- **`BLOGGER_URL`**: The URL of your blog’s feed (you can use either the Atom feed or RSS feed).
- **`ROBOT_NOINDEX`**: Controls whether pages should be indexed by search engines. Set to `true` to prevent indexing, or `false` to allow indexing.

## How to Run the Project

1. Clone this repository:

   ```bash
   git clone https://github.com/pintoderian/isr-blog-nextjs-blogger.git
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Configure the environment variables as indicated above.

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) to view the blog locally.

## Demo

You can see a live demo here:

### [https://next-blog-blogger.vercel.app](https://next-blog-blogger.vercel.app)

## Deploy to Production

To deploy in production, you can use platforms like [Vercel](https://vercel.com):

1. Connect your repository to Vercel.
2. Set up the production environment variables in Vercel's settings.
3. Deploy, and your site will be live within minutes.

## Resources

- [Next.js Documentation on ISR](https://nextjs.org/docs/basic-features/data-fetching/incremental-static-regeneration)
- [Blogger API](https://developers.google.com/blogger)
- [Blogger Feeds Support](https://support.google.com/blogger/answer/97933?hl=en)
