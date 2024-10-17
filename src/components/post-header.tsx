import Avatar from "./avatar";
import Date from "./date";
import CoverImage from "./cover-image";
import PostTitle from "./post-title";
import { Author } from "@/types/posts";

export default function PostHeader({
  title,
  coverImage,
  date,
  author,
}: {
  title: string;
  coverImage: string;
  date: string;
  author: Author;
}) {
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <div className="hidden md:block md:mb-12">
        <Avatar name={author.name} image={author.image} />
      </div>
      <div className="mb-8 md:mb-16 sm:mx-0">
        <CoverImage title={title} coverImage={coverImage} />
      </div>
      <div className="max-w-2xl mx-auto">
        <div className="block md:hidden mb-6">
          <Avatar name={author.name} image={author.image} />
        </div>
        <div className="mb-6 text-lg">
          Posted <Date dateString={date} />
        </div>
      </div>
    </>
  );
}
