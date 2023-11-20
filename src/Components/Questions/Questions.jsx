import React from "react";
import styles from "./Questions.module.css";

// COMPONENTS
import Question from "./Question";

const Questions = () => {
  return (
    <section id="questions" className={styles.questions}>
      <div className="container">
        <h2>Perguntas Frequentes</h2>
        <Question
          question="O que é a Muflix?"
          response="Uma plataforma com milhares de filmes e séries para você e sua família!"
        />
        <Question
          question="Quanto custa a Muflix?"
          response="Apenas R$29,90 por mês, primeiro mês é de graça!"
        />
        <Question
          question="Onde posso assistir?"
          response="Em qualquer dispositivo que tenha acesso á internet!"
        />
        <Question
          question="Como cancelar?"
          response="Em qualquer dispositivo com apenas um click, a qualquer momento!"
        />
      </div>
    </section>
  );
};

export default Questions;
