import React from "react";
import Requests from "../../Requests";
import styles from "./Movies.module.css";

// COMPONENTS
import Row from "./Row";
import BannerMovie from "./BannerMovie";

const Movies = () => {
  return (
    <section className={styles.moviesSection}>
      <BannerMovie />
      <div className={`${styles.rows} ${styles.moviesContainer}`}>
        <Row title="Originais Muflix" fetchUrl={Requests.fetchActionMovies} />
        <Row title="Populares na Muflix" fetchUrl={Requests.fetchTopRated} />
        <Row title="Lançamentos" fetchUrl={Requests.fetchTrending} />
        <Row title="Ação" fetchUrl={Requests.fetchNetflixOriginals} />
        <Row title="Comédia" fetchUrl={Requests.fetchComedyMovies} />
        <Row title="Terror" fetchUrl={Requests.fetchHorrorMovies} />
        <Row title="Documentários" fetchUrl={Requests.fetchDocumentaries} />
        <Row title="Romance" fetchUrl={Requests.fetchRomanceMovies} />
      </div>
    </section>
  );
};

export default Movies;
