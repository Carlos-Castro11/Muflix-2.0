import React from "react";
import styles from "./Footer.module.css";
// COMPONENTS
import { ReactComponent as Logo } from "../../Assets/icons/Muflix.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Logo />
      <nav>
        <ul className={styles.navFooter}>
          <li>
            <Link>FAQ</Link>
          </li>
          <li>
            <Link>Catálogo</Link>
          </li>
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;
