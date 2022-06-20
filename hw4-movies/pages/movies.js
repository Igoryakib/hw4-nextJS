import { useState, useEffect } from "react";
import MainContainer from "../components/MainContainer";
import MoviesList from "../components/MoviesList";
import styles from "../styles/Movies.module.css";
import notFoundStyles from '../styles/404.module.css';
import * as fetchOptions from "../utils/fetchMovies";
const { endPoints, getDataMovie } = fetchOptions;

const Movies = ({ storageMovies }) => {
  const [value, setValue] = useState("");
  const [error, setError] = useState(null);
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const query = sessionStorage.getItem("query");
    if(query) {
      getDataMovie(endPoints.searchMoviePoint, query).then(data => setMovies(data.results)).catch(err => setError(err));
    }
  }, [])
  const handleSubmit = async (event) => {
    event.preventDefault();
    sessionStorage.setItem("query", value);
    const data = await getDataMovie(endPoints.searchMoviePoint, value);
    if(data.results.length === 0 ) {
      return setError('Not found');
    }
    setMovies(data.results);
    setValue('');
  };
  return (
    <MainContainer>
      <main className={styles.sectionMovies}>
        <form onSubmit={handleSubmit} className={styles.searchForm}>
          <input
            onChange={(event) => setValue(event.target.value)}
            value={value}
            className={styles.FormInput}
            type="text"
            name="query"
            placeholder="Search movies"
          />
          <button className={styles.submitBtn} type="submit">
            Search
          </button>
        </form>
        {error ? <h2 className={notFoundStyles.titleSection}>Error 404 not Found :(</h2> : <MoviesList movieArray={storageMovies ? storageMovies : movies} />}
      </main>
    </MainContainer>
  );
};

export default Movies;