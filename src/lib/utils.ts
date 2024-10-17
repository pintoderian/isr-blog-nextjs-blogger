/* eslint-disable @typescript-eslint/no-explicit-any */
export const extractPostId = (input: string): string | null => {
  const regex = /post-(\d+)$/;
  const match = input.match(regex);
  return match ? match[1] : null;
};

export const extractSlug = (url: string): string | null => {
  const regex = /\/([\w-]+)\.html$/;
  const match = url.match(regex);
  return match ? match[1] : null;
};

export const replaceImageSize = (
  url: string,
  newSize: string = "s1600"
): string => {
  return url.replace(/=.*$/, `=${newSize}`).replace("s72-c", newSize);
};

export const formatedEntryPosts = (post: any) => {
  const absoluteLink = post.link.find(
    (postLink: { title: any }) => postLink.title === post.title.$t
  );
  return {
    id: extractPostId(post.id.$t),
    slug: extractSlug(absoluteLink.href),
    title: post.title.$t,
    summary: post.summary.$t,
    published: post.published.$t,
    updated: post.updated.$t,
    image: post["media$thumbnail"]
      ? replaceImageSize(post["media$thumbnail"].url)
      : "",
    author: {
      name: post.author[0].name.$t,
      image: {
        width: post.author[0]["gd$image"].width,
        height: post.author[0]["gd$image"].height,
        src: post.author[0]["gd$image"].src.includes("http")
          ? post.author[0]["gd$image"].src
          : post.author[0]["gd$image"].src.replace("//", "https://"),
      },
    },
  };
};
