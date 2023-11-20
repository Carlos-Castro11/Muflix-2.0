import React from "react";
import styles from "./Row.module.css";
import axios from "axios";
// COMPONENTS
import { ReactComponent as Play } from "../../Assets/icons/play.svg";

const Row = ({ title, fetchUrl }) => {
  const BASE_URL = "https://api.themoviedb.org/3";
  const [movies, setMovies] = React.useState([]);
  const poster_url = "https://image.tmdb.org/t/p/original/";

  React.useEffect(() => {
    async function FetchMovies() {
      const res = await axios.get(`${BASE_URL}${fetchUrl}`);
      setMovies(res.data.results);
      return res;
    }
    FetchMovies();
  }, [fetchUrl]);

  return (
    <div>
      <h1 className={styles.titleRow}>{title}</h1>
      <div className={styles.row}>
        {movies.map((item) => (
          <div key={item.id} className={styles.posterMovie}>
            <img
              className={styles.poster}
              src={`${poster_url}${item.poster_path}`}
              alt=""
            />
            <div className={styles.posterContents}>
              <h1>{item.title}</h1>
              <div className={styles.details}>
                <p>
                  <span>{item.vote_average}</span>
                </p>
                <p className={styles.hd}>HD</p>
                {item.release_date && (
                  <p className={styles.date}>
                    {`${item.release_date[0]}${item.release_date[1]}${item.release_date[2]}${item.release_date[3]}`}
                  </p>
                )}
              </div>
              <button className={styles.btnPoster}>
                Play <Play />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Row;
