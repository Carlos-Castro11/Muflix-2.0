import React from "react";
import styles from "./Question.module.css";
import arrow from "../../Assets/icons/arrow-down.png";

const Question = ({ question, response }) => {
  const [show, setShow] = React.useState(false);

  function handleClick() {
    setShow(!show);
  }

  return (
    <>
      <div
        onClick={handleClick}
        className={`${styles.question} ${show && styles.questionActive}`}
      >
        <div className={styles.text}>
          <p>{question}</p>
        </div>
        <img src={arrow} alt="" />
      </div>
      {show ? (
        <div className={`${styles.response} animeUp`}>
          <p>{response}</p>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Question;
