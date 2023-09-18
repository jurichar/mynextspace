import { prisma } from "@/lib/prisma";
import { Metadata } from "next";

interface Post {
  id: string;
  title: string;
  content: string | null;
  published: boolean;
  createdAt: Date;
  updatedAt: Date;
  authorId: string;
}

interface Props {
  params: {
    id: string;
  };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = await prisma.blogPost.findUnique({
    where: { id: params.id },
  });
  return { title: `Blog Post: ${post?.title}` };
}

export default async function BlogPostPage({ params }: Props) {
  const post = await prisma.blogPost.findUnique({
    where: { id: params.id },
  });

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
}