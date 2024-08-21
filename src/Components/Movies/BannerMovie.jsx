import React from "react";
import styles from "./BannerMovie.module.css";
import axios from "axios";
import Requests from "../../Requests";
import useMedia from "../../Hooks/useMedia";

// COMPONENTS
import { ReactComponent as Play } from "../../Assets/icons/play.svg";
import Loading from "../Helper/Loading";

const BannerMovie = () => {
  const mobile = useMedia("(max-width: 700px)");
  const BASE_URL = "https://api.themoviedb.org/3";
  const poster_url = "https://image.tmdb.org/t/p/original/";
  const [movie, setMovie] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  // function truncate(string, n) {
  //   return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  // }

  async function fetchMovie() {
    setLoading(true);
    const res = await axios.get(`${BASE_URL}${Requests.fetchActionMovies}`);
    const number = Math.floor(Math.random() * (19 - 1 + 1)) + 1;
    setMovie(res.data.results[number]);
  }
  React.useEffect(() => {
    fetchMovie();
  }, []);

  function handleLoading() {
    setLoading(false);
  }

  return (
    <div className={`${styles.banner}`}>
      {loading && <Loading />}
      <img
        className={styles.bannerMovie}
        onLoad={handleLoading}
        src={`${poster_url}${movie.backdrop_path}`}
        alt="Banner"
      />
      <div className={styles.bannerText}>
        <h1>{movie.title}</h1>
        <div className={styles.detailsMovie}>
          {movie.release_date && (
            <p className={styles.date}>
              {`${movie.release_date[0]}${movie.release_date[1]}${movie.release_date[2]}${movie.release_date[3]}`}
            </p>
          )}
          <p>{movie.original_language}</p>
          <p>Ação</p>
          <p className={styles.rating}>
            <span>{movie.vote_average}</span>
          </p>
          <p className={styles.hd}>HD</p>
        </div>
        {mobile ? null : (
          <p className={styles.description}>{movie?.overview}</p>
        )}
        <button className={styles.btnBannerMovie}>
          Play <Play />
        </button>
      </div>
    </div>
  );
};

export default BannerMovie;
