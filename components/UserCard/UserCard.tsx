import Link from "next/link";
import styles from "./UserCard.module.css";

interface Props {
  id: string;
  name: string | null;
  age: number | null;
  image: string | null;
}

export default function UserCard({ id, name, age, image }: Props) {
  return (
    <div className={styles.card}>
      <Link href={`/users/${id}`}>
        <div
          className={styles.imageUser}
          style={{
            backgroundImage: `url(${image ?? "/mememan.webp"})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className={styles.cardContent}>
          <h3>{name}</h3>
          <p>age: {age}</p>
        </div>
      </Link>
    </div>
  );
}
