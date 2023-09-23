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
  return (
    <div className={styles.card}>
      <Link href={`/blog/${id}`}>
        <div className={styles.cardContent}>
          <h3>{title}</h3>
          <p>{content}</p>
          <p>last update: {updatedAt.toString()}</p>
          <p>author: {author}</p>
        </div>
      </Link>
    </div>
  );
}
