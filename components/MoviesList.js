import styles from '../styles/MoviesList.module.css';
import MovieItem from "./MovieItem";
const MoviesList = ({movieArray}) => {
    return(
        <ul className={styles.moviesList}>
            {movieArray.map(item => {
                return(
                    <MovieItem
                        key={item.id}
                        title={item.title}
                        id={item.id}
                        imageUrl={item.poster_path}
                    />
                );
            })}
        </ul>
    );
};

export default MoviesList;