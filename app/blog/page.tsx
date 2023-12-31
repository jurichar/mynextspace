import BlogCard from "@/components/BlogCard/BlogCard";
import { prisma } from "@/lib/prisma";
import styles from "./page.module.css";

export default async function Blog() {
  const posts = await prisma.blogPost.findMany({
    include: { author: true },
  });

  return (
    <div className={styles.grid}>
      {posts.map((post: any) => {
        return <BlogCard key={post.id} {...post} author={post.author.name} />;
      })}
    </div>
  );
}
