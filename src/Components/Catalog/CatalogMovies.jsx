import React from "react";
import styles from "./CatalogMovies.module.css";

const CatalogMovies = ({ photos }) => {
  return (
    <ul className={styles.movies}>
      {photos.map((img) => (
        <li key={img}>
          <img className={styles.img} src={img} alt="" />
        </li>
      ))}
    </ul>
  );
};

export default CatalogMovies;
