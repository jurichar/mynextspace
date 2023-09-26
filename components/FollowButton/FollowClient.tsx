"use client";
import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";
import styles from "./FollowClient.module.css";

interface Props {
  targetUserId: string;
  isFollowing: boolean;
}

export default function FollowClient({ targetUserId, isFollowing }: Props) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [isFetching, setIsFetching] = useState(false);
  const isMutating = isFetching || isPending;

  const follow = async () => {
    setIsFetching(true);

    const res = await fetch("/api/follow", {
      method: "POST",
      body: JSON.stringify({ targetUserId }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    setIsFetching(false);

    console.log(res);

    startTransition(() => {
      router.refresh();
    });
  };

  const unfollow = async () => {
    setIsFetching(true);

    const res = await fetch(`/api/follow?targetUserId=${targetUserId}`, {
      method: "DELETE",
    });

    setIsFetching(false);
    startTransition(() => router.refresh());
  };

  if (isFollowing) {
    return (
      <div className={styles.followButton}>
        <button onClick={unfollow}>{!isMutating ? "Unfollow" : "..."}</button>
      </div>
    );
  } else {
    return (
      <div className={styles.unfollowButton}>
        <button onClick={follow}>{!isMutating ? "Follow" : "..."}</button>
      </div>
    );
  }
}
