import axios from 'axios';

const endPoints = {
    trendingPoint: "/trending/movie/week",
    searchMoviePoint: "/search/movie",
    getMovieDetailsPoint: "/movie",
    setId(movieId, type) {
      return type
        ? (this.getMoreDetailsMoviePoint = `/movie/${movieId}/${type}`)
        : (this.getMoreDetailsMoviePoint = `/movie/${movieId}`);
    },
  };
// required: query, api_key, person_id, movieId
axios.defaults.baseURL = "https://api.themoviedb.org/3/";

const getDataMovie = (endPoint, query = null) => {
    return axios
    .get(`${endPoint}?query=${query}&api_key=bfa52d7e3cb8b977a558f7a3657e1861`)
    .then(res => res.data)
    .catch(err => console.log(err))
};

export {endPoints, getDataMovie};