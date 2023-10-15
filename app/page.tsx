import { getServerSession } from "next-auth";
import styles from "./page.module.css";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";
import UserCard from "@/components/UserCard/UserCard";
import BlogCard from "@/components/BlogCard/BlogCard";

export default async function Home() {
  let session;

  try {
    session = await getServerSession();
  } catch (error) {
    console.log(`Error while loading server infos : ${error}`);
  }

  if (!session) {
    redirect("/api/auth/signin"); // redirection to signin page if not logged in
  }

  const currentUserEmail = session?.user?.email!;

  const user = await prisma.user.findUnique({
    where: { email: currentUserEmail },
  });

  if (!user) {
    console.log("User not found");
    return;
  }

  // get all followed users
  const followedUsers = await prisma.follows.findMany({
    where: {
      followerId: user.id,
    },
    include: {
      following: true,
    },
  });

  const followedBlogPosts = await prisma.blogPost.findMany({
    where: {
      authorId: {
        in: followedUsers.map((follow) => follow.following.id),
      },
    },
    include: {
      author: true,
    },
  });

  const users = followedUsers.map((follow) => follow.following);

  return (
    <main className={styles.main}>
      <h1>
        Hello, <span className={styles.name}>{user.name}</span>!
      </h1>
      <div>
        <h2>Followed users</h2>
        <div className={styles.grid}>
          {users.map((user) => {
            return <UserCard key={user.id} {...user} />;
          })}
        </div>
        <h2>Followed blog posts</h2>
        <div className={styles.grid_blog}>
          {followedBlogPosts.map((post) => {
            return (
              <BlogCard key={post.id} {...post} author={post.author.name!} />
            );
          })}
        </div>
      </div>
    </main>
  );
}
