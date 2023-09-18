import { getServerSession } from "next-auth";
import styles from "./page.module.css";
import { redirect } from "next/navigation";

export default async function Home() {
  let session;
  try {
    session = await getServerSession();
  } catch (error) {
    console.log(`Error while loading server infos : ${error}`);
  }

  if (!session) {
    redirect("/api/auth/signin"); // redirection to signin page if not logged in
    // return <></>; // or return a page or something else
  }

  return (
    <main className={styles.main}>
    </main>
  );
}
