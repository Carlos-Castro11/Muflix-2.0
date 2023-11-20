import React from "react";
import styles from "./Profile.module.css";
import { UserContext } from "../../UserContext";
import stylesBtn from "../Form/Button.module.css";

// COMPONENTS
import Banner from "../Banner/Banner";

const Profile = () => {
  const { data } = React.useContext(UserContext);
  const [plane1, setPlane1] = React.useState(true);
  const [plane2, setPlane2] = React.useState(false);
  const [plane3, setPlane3] = React.useState(false);

  function setActive1() {
    setPlane1(true);
    setPlane2(false);
    setPlane3(false);
  }
  function setActive2() {
    setPlane1(false);
    setPlane2(true);
    setPlane3(false);
  }
  function setActive3() {
    setPlane1(false);
    setPlane2(false);
    setPlane3(true);
  }

  React.useEffect(() => {
    const plane = window.localStorage.getItem("plane");
    if (plane) {
      if (plane === "1") {
        setActive1();
      } else if (plane === "2") {
        setActive2();
      } else {
        setActive3();
      }
    }
  }, []);

  function handleSave() {
    window.localStorage.removeItem("plane");
    if (plane1) {
      window.localStorage.setItem("plane", 1);
    } else if (plane2) {
      window.localStorage.setItem("plane", 2);
    } else if (plane3) {
      window.localStorage.setItem("plane", 3);
    }
  }
  return (
    <>
      <Banner>
        <div className={styles.profile}>
          <h1>Olá, {data}!</h1>
          <p>Planos</p>
          <div className={styles.divider}></div>
          <ul>
            <li
              onClick={setActive1}
              className={`${plane1 ? styles.planeActive : styles.plane}`}
            >
              Básico
            </li>
            <li
              onClick={setActive2}
              className={`${plane2 ? styles.planeActive : styles.plane}`}
            >
              Premium
            </li>
            <li
              onClick={setActive3}
              className={`${plane3 ? styles.planeActive : styles.plane}`}
            >
              Muflix +
            </li>
          </ul>
          <button className={stylesBtn.button} onClick={handleSave}>
            SALVAR
          </button>
        </div>
      </Banner>
    </>
  );
};

export default Profile;
