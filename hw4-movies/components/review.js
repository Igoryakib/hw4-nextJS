import { useState, useEffect } from "react";
import styles from "../styles/Review.module.css";
import * as fetchOptions from "../utils/fetchMovies";
const { endPoints, getDataMovie } = fetchOptions;

const Review = ({ id }) => {
  const [reviews, setReviews] = useState(null);
  useEffect(() => {
    // endPoints.getMoreDetailsMoviePoint = `/movie/${movieId}/${type}`
    getDataMovie(endPoints.setId(id, "reviews")).then((data) => {
      setReviews(data.results);
    });
  }, []);
  return (
    <ul>
      {reviews?.map((item) => {
        return (
          <li className={styles.itemLi} key={item.id}>
            <h3 className={styles.title}>{item?.author}</h3>
            <p className={styles.text}>{item?.content}</p>
          </li>
        );
      })}
    </ul>
  );
};

export default Review;
