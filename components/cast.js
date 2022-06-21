import { useState, useEffect } from "react";
import styles from "../styles/Cast.module.css";
import * as fetchOptions from "../utils/fetchMovies";
const { endPoints, getDataMovie } = fetchOptions;
const Cast = ({ id }) => {
  const [movieCast, setMovieCast] = useState("");
  useEffect(() => {
    getDataMovie(endPoints.setId(id, "credits"))
      .then((data) => setMovieCast(data.cast))
      .catch((err) => console.log(err));
  }, []);
  return (
    <ul className={styles.moviesList}>
      {movieCast &&
        movieCast.map((item) => {
          return (
            <li className={styles.card} key={item.id}>
              {item?.profile_path ? (
                <img
                  className={styles.cardImage}
                  src={`https://image.tmdb.org/t/p/w300/${item?.profile_path}`}
                  alt="actor_poster"
                />
              ) : (
                <div className={styles.wrapperNoIMg}>
                  <h3 className={styles.cardSubtitle}>404 No image</h3>
                </div>
              )}
              <h3 className={styles.cardTitle}>{item?.name}</h3>
              <h4 className={styles.cardSubtitle}>{item?.character}</h4>
            </li>
          );
        })}
    </ul>
  );
};

export default Cast;
