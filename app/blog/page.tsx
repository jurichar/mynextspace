import { prisma } from "@/lib/prisma";
import Link from "next/link";

export default async function Blog() {
  const posts = await prisma.blogPost.findMany({
    include: {
      author: true,
    },
  });

  return (
    <div>
      <h1>Welcome to our Blog</h1>
      <ul>
        {posts.map((post: any) => (
          <li key={post.id}>
            <Link href={`/blog/${post.id}`}>{post.title}</Link>
            <p> by {post.author.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
