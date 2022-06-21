import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../../../styles/[id].module.css";
import * as fetchOptions from "../../../utils/fetchMovies";
const { endPoints, getDataMovie } = fetchOptions;
import Cast from "../../../components/cast";
import Review from "../../../components/review";

const MoviePage = ({ movie }) => {
  const router = useRouter();
  const handleOnclick = () => {
    router.back();
  };
  return (
    <main className={styles.sectionDetails}>
      {/* go back btn */}
      <button
        onClick={handleOnclick}
        className={styles.btnGoBack}
        type="button"
      >
        Go Back
      </button>
      <div className={styles.contentPage}>
        {/* poster */}
        {movie?.poster_path && (
          <img
            className={styles.imgPage}
            src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
            alt="poster"
          />
        )}
        <div className={styles.wrapperText}>
          {/* title */}
          <h3 className={styles.titlePage}>{movie?.title}</h3>
          <p className={styles.subText}>User Score {movie?.vote_average}</p>
          {/* overview */}
          <h3 className={styles.subTitlePage}>Overview</h3>
          <p className={styles.textPage}>{movie?.overview}</p>
          {/* genres */}
          <h3 className={styles.subTitlePage}>Genres</h3>
          <ul>
            {movie.genres.map((item) => {
              return (
                <li key={item.id}>
                  <p className={styles.subText}>{item.name}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      {/* additional */}
      <h4 className={styles.subTitlePage}>Additional Information</h4>
      <ul className={styles.wrapperBtnLoadMore}>
        <Link href={`/movies/${movie.id}/cast`}>
          <li className={styles.btnLoadMore}>Cast</li>
        </Link>
        <Link href={`/movies/${movie.id}/reviews`}>
          <li className={styles.btnLoadMore}>Reviews</li>
        </Link>
      </ul>
      {router.query?.path?.length >= 0 && (
        <>
          {router.query.path[0] === "cast" && <Cast id={movie.id} />}
          {router?.query.path[0] === "reviews" && <Review id={movie.id} />}
        </>
      )}
    </main>
  );
};

export default MoviePage;

export async function getServerSideProps({ params }) {
  const result = await getDataMovie(endPoints.setId(params.id));
  const movie = result;
  return {
    props: { movie }, // will be passed to the page component as props
  };
}
