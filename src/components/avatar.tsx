import { Author } from "@/types/posts";
import Image from "next/image";

export default function Avatar({ name, image }: Author) {
  return (
    <div className="flex items-center">
      <div className="w-12 h-12 relative mr-4">
        <Image
          src={image.src}
          layout="fill"
          className="rounded-full"
          alt={name}
        />
      </div>
      <div className="text-xl font-bold">{name}</div>
    </div>
  );
}
