import React from "react";
import styles from "./BannerContent.module.css";
import CountUp from "react-countup";
import { TypeAnimation } from "react-type-animation";

// COMPONENTS
import { Link } from "react-router-dom";

const BannerContent = () => {
  return (
    <div className={styles.bannerContent} id="home">
      <div>
        <h1>
          <span>
            <TypeAnimation
              sequence={["Filmes", 2000, "Séries", 2000, "Desenhos", 2000]}
              repeat={Infinity}
            />{" "}
          </span>
          e muito mais. <br /> sem limites.
        </h1>
        <p>
          Assista onde quiser. <br /> Cancele quando quiser.
        </p>
        <Link to="/login/create"></Link>
      </div>
      <div className={`${styles.numbers} animeLeft`}>
        <div className={styles.count}>
          <div>
            <CountUp start={0} end={500} duration={2.4} /> K+
          </div>
          <span>Assinantes</span>
        </div>
        <div className={styles.count}>
          <div>
            <CountUp start={0} end={200} duration={2.4} /> K+
          </div>
          <span>Downloads</span>
        </div>
      </div>
    </div>
  );
};

export default BannerContent;
