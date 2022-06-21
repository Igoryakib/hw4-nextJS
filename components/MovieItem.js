import Link from "next/dist/client/link";
import styles from "../styles/MovieItem.module.css";

const MovieItem = ({ title, id, imageUrl }) => {
  return (
    <Link href={`/movies/${id}`}>
      <li>
      <div className={styles.card}>
        {imageUrl ? (
          <img
            className={styles.cardImg}
            src={`https://image.tmdb.org/t/p/w300${imageUrl}`}
          />
        ) : (
          <div className={styles.imgNotfound}>
            <h2 className={styles.cardTitle}>404 image not found&#128554;</h2>
          </div>
        )}
        <h4 className={styles.cardTitle}>{title}</h4>
        </div>
      </li>
    </Link>
  );
};

export default MovieItem;
