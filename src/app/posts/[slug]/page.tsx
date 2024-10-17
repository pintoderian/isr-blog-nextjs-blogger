import Container from "@/components/container";
import Header from "@/components/header";
import Layout from "@/components/layout";
import PostBody from "@/components/post-body";
import PostHeader from "@/components/post-header";
import SectionSeparator from "@/components/section-separator";
import Tags from "@/components/tags";
import { getAllPosts, getPostBySlug } from "@/lib/api";
import { IS_NOINDEX } from "@/lib/constans";
import { Post } from "@/types/posts";
import { Metadata } from "next";
import { notFound } from "next/navigation";

export const revalidate = 60;

export const dynamicParams = true;

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const post = await getPostBySlug(params.slug);
  if (!post) {
    return {
      title: "Page not found",
      description: "Page not found",
    };
  }
  const { title, summary } = post;
  return {
    title,
    description: summary,
    robots: {
      index: !IS_NOINDEX,
      follow: !IS_NOINDEX,
      googleBot: {
        index: !IS_NOINDEX,
        follow: !IS_NOINDEX,
      },
    },
  };
}

export async function generateStaticParams() {
  const posts = (await getAllPosts()) ?? [];

  return posts.map((post: Post) => ({
    slug: post.slug,
  }));
}

export default async function Page({ params }: { params: { slug: string } }) {
  const post = await getPostBySlug(params.slug);
  if (!post) {
    notFound();
  }

  return (
    <Layout>
      <Container>
        <Header />
        <article>
          <PostHeader
            title={post.title}
            coverImage={post.image}
            date={post.published}
            author={post.author}
          />
          <PostBody content={post.content} />
          <footer>{post.tags.length > 0 && <Tags tags={post.tags} />}</footer>
        </article>
        <SectionSeparator />
      </Container>
    </Layout>
  );
}
