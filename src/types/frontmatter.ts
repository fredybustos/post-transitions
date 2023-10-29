export interface FrontmatterProps {
  frontmatter: Frontmatter
  url: string
}

type Frontmatter = {
  title: string;
  description: string
  category: string
  author: string
  date: Date
  image: Image
}

type Image = {
  src: string
  alt: string
}