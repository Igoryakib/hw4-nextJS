import styles from "../styles/Home.module.css";
import MainContainer from "../components/MainContainer";
import MoviesList from "../components/MoviesList";
import * as fetchOptions from '../utils/fetchMovies';
const {endPoints, getDataMovie} = fetchOptions;

const Index = ({movies}) => {
  return (
    <MainContainer>
      <main className={styles.sectionHome}>
        <h3 className={styles.titleSection}>Trending today</h3>
        <MoviesList movieArray={movies}/>
      </main>
    </MainContainer>
  );
};

export default Index;

export async function getStaticProps() {
  const data = await getDataMovie(endPoints.trendingPoint);
  const movies = data.results;
  return {
    props: {movies}, // will be passed to the page component as props
  }
}