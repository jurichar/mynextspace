"use client";

import { useSession, signIn, signOut } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import styles from "./button.module.css";

export function SignInButton() {
  const { data: session, status } = useSession();
  console.log("STATUS :", session, status);

  if (status === "loading") {
    return <>...</>;
  }

  if (status === "authenticated") {
    return (
      <div className={styles.div}>
        <Link href={`/dashboard`}>
          <Image
            src={session.user?.image ?? "./meme.jpg"}
            width={32}
            height={32}
            alt="Your Name"
          />
        </Link>
        <SignOutButton />
      </div>
    );
  }

  return (
    <button className={styles.button} onClick={() => signIn()}>
      Sign in
    </button>
  );
}

export function SignOutButton() {
  return (
    <button className={styles.button} onClick={() => signOut()}>
      Sign out
    </button>
  );
}
