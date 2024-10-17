import { Tag } from "@/types/posts";

export default function Tags({ tags }: { tags: Tag[] }) {
  return (
    <div className="max-w-2xl mx-auto">
      <p className="mt-8 text-lg font-bold">
        Tagged
        {tags.map((tag: Tag, index: number) => (
          <span key={index} className="ml-4 font-normal">
            {tag.term}
          </span>
        ))}
      </p>
    </div>
  );
}
