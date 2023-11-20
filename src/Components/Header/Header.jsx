import React from "react";
import styles from "./header.module.css";
import { Link, useLocation } from "react-router-dom";
import { UserContext } from "../../UserContext";

// HOOKS
import useMedia from "../../Hooks/useMedia";

// COMPONENTS
import { ReactComponent as Logo } from "../../Assets/icons/Muflix.svg";
import { ReactComponent as User } from "../../Assets/icons/userHeader.svg";
import { ReactComponent as Home } from "../../Assets/icons/house.svg";
import { ReactComponent as Question } from "../../Assets/icons/question.svg";
import { ReactComponent as Logout } from "../../Assets/icons/logout.svg";
import { ReactComponent as Movies } from "../../Assets/icons/movie.svg";

const Header = () => {
  const mobile = useMedia("(max-width: 700px)");
  const [mobileActive, setMobileActive] = React.useState(false);
  const [home, setHome] = React.useState();
  const [movieUrl, setmovieUrl] = React.useState();
  const { login, userLogout, data } = React.useContext(UserContext);
  const { pathname } = useLocation();

  React.useEffect(() => {
    if (pathname === "/") {
      setHome(true);
    } else {
      setHome(false);
    }
  }, [pathname]);

  React.useEffect(() => {
    if (pathname === "/movies") {
      setmovieUrl(true);
    } else {
      setmovieUrl(false);
    }
  }, [pathname]);

  return (
    <header className={styles.header}>
      <Link to="/">
        <Logo />
      </Link>
      <div>
        {mobile && (
          <button
            aria-label="menu"
            onClick={() => setMobileActive(!mobileActive)}
            className={`${styles.buttonMobile} ${
              mobileActive && styles.buttonMobileActive
            }`}
          ></button>
        )}
        <ul
          className={`${mobile ? styles.navMobile : styles.nav} ${
            mobileActive && styles.navMobileActive
          }`}
        >
          {login ? null : (
            <li className={mobile ? styles.navItem : styles.navItemDesktop}>
              {home ? (
                <a
                  href="#home"
                  className={styles.navItemMobile}
                  onClick={() => setMobileActive(false)}
                >
                  {mobile ? <Home /> : null}
                  Início
                </a>
              ) : (
                <Link
                  to="/"
                  className={styles.navItemMobile}
                  onClick={() => setMobileActive(false)}
                >
                  {mobile ? <Home /> : null}
                  Início
                </Link>
              )}
            </li>
          )}
          <li className={mobile ? styles.navItem : styles.navItemDesktop}>
            {login ? (
              <Link
                className={`${styles.navItemMobile} ${styles.username}`}
                onClick={() => setMobileActive(false)}
                to="/profile"
              >
                {mobile ? <User /> : null}
                {data}
              </Link>
            ) : (
              <Link
                className={styles.navItemMobile}
                onClick={() => setMobileActive(false)}
                to="/login"
              >
                {mobile ? <User /> : null}
                Fazer Login
              </Link>
            )}
          </li>
          {movieUrl ? null : (
            <li className={mobile ? styles.navItem : styles.navItemDesktop}>
              <Link
                className={styles.navItemMobile}
                onClick={() => setMobileActive(false)}
                to="/movies"
              >
                {mobile ? <Movies /> : null}
                Filmes
              </Link>
            </li>
          )}
          <li className={mobile ? styles.navItem : styles.navItemDesktop}>
            {home ? (
              <a
                className={styles.navItemMobile}
                onClick={() => setMobileActive(false)}
                href="#questions"
              >
                {mobile ? <Question /> : null}
                Perguntas
              </a>
            ) : null}
          </li>
          {login && (
            <button className={styles.btnLogout} onClick={userLogout}>
              {mobile && <Logout />}
              Sair
            </button>
          )}
        </ul>
      </div>
    </header>
  );
};

export default Header;
