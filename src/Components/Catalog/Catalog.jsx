import React from "react";
import styles from "./Catalog.module.css";
import spiderMan from "../../Assets/images/spider-man.webp";
import BB from "../../Assets/images/breaking-bad.webp";
import Deadpool from "../../Assets/images/deadpool.webp";
import HP from "../../Assets/images/harry-potter.webp";
import Batman from "../../Assets/images/batman.webp";
import RM from "../../Assets/images/rick-and-morty.webp";
import PK from "../../Assets/images/peaky-blinders.webp";
import ST from "../../Assets/images/stranger-things.webp";
// COMPONENTS
import CatalogMovies from "./CatalogMovies";

const Catalog = () => {
  const photos1 = [spiderMan, Batman, Deadpool, HP];
  const photos2 = [BB, RM, PK, ST];

  return (
    <section id="catalog" className={`${styles.catalog}`}>
      <div className="container">
        <h1>O catálogo mais completo!</h1>
        <p>Com os melhores filmes</p>
        <CatalogMovies photos={photos1} />
        <p>E as melhores séries</p>
        <CatalogMovies photos={photos2} />
      </div>
    </section>
  );
};

export default Catalog;
