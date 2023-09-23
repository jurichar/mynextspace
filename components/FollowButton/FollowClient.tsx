"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface Props {
  targetUserId: string;
  isFollowing: boolean;
}

export default function FollowClient({ targetUserId, isFollowing }: Props) {
  const router = useRouter();
  const [isFetching, setIsFetching] = useState(false);

  const follow = async () => {
    setIsFetching(true);

    const res = await fetch("/api/follow", {
      method: "POST",
      body: JSON.stringify({ targetUserId }),
      headers: {
        "Content-type": "application/json",
      },
    });

    setIsFetching(false);
    router.refresh();
  };

  const unfollow = async () => {
    setIsFetching(true);

    const res = await fetch(`/api/follow?targetUserId=${targetUserId}`, {
      method: "DELETE",
    });

    setIsFetching(false);
    router.refresh();
  };

  return (
    <button onClick={isFollowing ? unfollow : follow}>
      {!isFetching ? (isFollowing ? "Unfollow" : "Follow") : "..."}
    </button>
  );
}
