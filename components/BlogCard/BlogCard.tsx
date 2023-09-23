import Link from "next/link";
import styles from "./BlogCard.module.css";

// interface for the Post object
interface Props {
  id: string;
  title: string;
  content: string | null;
  updatedAt: Date;
  author: string;
}

export default function BlogCard({
  id,
  title,
  content,
  updatedAt,
  author,
}: Props) {
  const lastPostFormatedDate = (date: Date) => {
    const day = date.getDate().toString();
    const month = date.getMonth().toString();
    const year = date.getFullYear().toString();

    const hour = date.getHours().toString();
    const minutes = date.getMinutes().toString();

    return `last update at ${hour}:${minutes} ${day}/${month}/${year}`;
  };

  return (
    <div className={styles.card}>
      <Link href={`/blog/${id}`}>
        <div className={styles.cardContent}>
          <h3>{title}</h3>
          <p>{content?.slice(0, 300)}...</p>
          <p>{lastPostFormatedDate(updatedAt)}</p>
          <p>by {author}</p>
        </div>
      </Link>
    </div>
  );
}
