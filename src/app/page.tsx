import Container from "@/components/container";
import HeroPost from "@/components/hero-post";
import Intro from "@/components/intro";
import Layout from "@/components/layout";
import MoreStories from "@/components/more-stories";
import { getAllPostsForHome } from "@/lib/api";
import { Post } from "@/types/posts";

export default async function Home() {
  const allPosts = await getAllPostsForHome();
  const heroPost = allPosts[0] as Post;
  const morePosts = allPosts.slice(1);

  return (
    <Layout>
      <Container>
        <Intro />
        {heroPost && (
          <HeroPost
            title={heroPost.title}
            coverImage={heroPost.image}
            date={heroPost.published}
            author={heroPost.author}
            slug={heroPost.slug}
            excerpt={heroPost.summary}
          />
        )}
        {morePosts.length > 0 && <MoreStories posts={morePosts} />}
      </Container>
    </Layout>
  );
}
