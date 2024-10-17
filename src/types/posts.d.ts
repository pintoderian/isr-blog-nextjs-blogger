export interface Post {
  id: string;
  slug: string;
  title: string;
  summary: string;
  published: string;
  updated: string;
  author: Author;
  image?: string;
}

export interface Author {
  name: string;
  image: Image;
}

export interface Image {
  width: string;
  height: string;
  src: string;
}

export interface Tag {
  scheme: string;
  term: string;
}
