import React from "react";
import styles from "./Ad.module.css";
import tablet from "../../Assets/images/tabletMuflix.png";

const Ad = () => {
  return (
    <section className={styles.ad}>
      <div className={`container ${styles.adContents}`}>
        <div className={styles.adText}>
          <h2>
            Assista quando <br />
            quiser.
          </h2>
          <p>
            Assista no celular, tablet, Smart TV ou notebook sem pagar a mais
            por isso.
          </p>
        </div>
        <div className={styles.img}>
          <img src={tablet} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Ad;
