import React from "react";
import styles from "./NotFound.module.css";

const NotFound = () => {
  return (
    <section className={styles.notFound}>
      <h1 className="title">Erro: 404</h1>
      <p>Página não encontrada.</p>
    </section>
  );
};

export default NotFound;
