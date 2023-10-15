import BlogCard from "@/components/BlogCard/BlogCard";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { prisma } from "@/lib/prisma";
import { NewBlogForm } from "./NewBlogForm";
import styles from "./page.module.css";

export default async function About() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/api/auth/signin");
  }

  const currentUserEmail = session?.user?.email!;
  const user = await prisma.user.findUnique({
    where: { email: currentUserEmail },
  });

  const posts = await prisma.blogPost.findMany({
    include: { author: true },
    where: {
      authorId: user?.id,
    },
  });

  return (
    <div className={styles.main}>
      <h1>My Blogs</h1>
      <div>
        <NewBlogForm user={user} />
      </div>
      <div className={styles.grid}>
        {posts.slice(0).reverse().map((post: any) => {
          return <BlogCard key={post.id} {...post} author={post.author.name} />;
        })}
      </div>
    </div>
  );
}
