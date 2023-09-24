import { prisma } from "@/lib/prisma";
import { Metadata } from "next";
import styles from "./page.module.css";

// interface for the Post object
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

  // TODO: improve css for this page
  return (
    <div className={styles.blog}>
      <div className={styles.title}>
        <h1>{post.title}</h1>
        <p>By Jean Michel</p>
      </div>
      <div className={styles.content}>
        <p>{post.content}</p>
      </div>
    </div>
  );
}
