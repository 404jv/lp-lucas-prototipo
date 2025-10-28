"use client";

import React from "react";
import styles from "./Feedback.module.css";
import { MessageCircle } from "lucide-react";

const feedbacks = [
  {
    name: "Maria S.",
    message:
      "1 Adorei Lucas Muito obrigado por explicar tudo Realmente nunca fizeram uma avaliação dessa, adorei, realmente os locais que vc pontuou são os que mais me incomodam principalmente tríceps, adorei mesmo 🔥",
    time: "há 2 dias",
  },
  {
    name: "Pedro M.",
    message:
      " Está indo bem!! Estou até na academia agora treinando E ontem minhas amigas estavam falando que minha bunda cresceu, fiquei até feliz com isso kkkk 💪",
    time: "há 1 semana",
  },
  {
    name: "Juliana R.",
    message:
      "Eu gostei muito que após cada avaliação vc adapta pra gente melhorar onde não está evoluindo bem. Cada mês q psssa a gente consegue ver nitidamente os resultados! Adoroando seu trabalho ❤️",
    time: "há 3 dias",
  },
  {
    name: "Roberto Carlos",
    message:
      "Futebol pra Cima"
      ,
    time: "há 3 dias",
  },
  {
    name: "Bruno Monteiro",
    message:
      "Vamos boraa! Valeuu"
      ,
    time: "há 3 dias",
  },
  {
    name: "João Ramalho",
    message:
      "To curtindo os resultados, Ta vindo bem rapido"
      ,
    time: "há 5 dias",
  },
] as const;

const Feedback: React.FC = () => {
  return (
    <section className={styles.feedbackSection}>
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <div className={styles.badge}>Depoimentos</div>
          <h2 className={styles.title}>O que meus alunos dizem</h2>
          <p className={styles.subtitle}>
            Feedback real de pessoas que estão vivendo suas transformações
          </p>
        </div>

        {/* Cards */}
        <div className={styles.feedbackGrid}>
          {feedbacks.map((feedback, index) => (
            <div key={index} className={styles.feedbackCard}>
              <div className={styles.feedbackHeader}>
                <div className={styles.avatar}>
                  <MessageCircle className={styles.icon} />
                </div>
                <div>
                  <div className={styles.name}>{feedback.name}</div>
                  <div className={styles.time}>{feedback.time}</div>
                </div>
              </div>
              <div className={styles.feedbackMessage}>
                <p>{feedback.message}</p>
                <div className={styles.tail}></div>
              </div>
            </div>
          ))}
        </div>
        {/* Social Proof */}
        <div className={styles.socialProof}>
          <div className={styles.avatarGroup}>
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className={styles.avatarSmall}></div>
            ))}
          </div>
          <span>
            <strong>+200 alunos</strong> já transformaram suas vidas
          </span>
        </div>
      
        {/* Botão */}
        <div className={styles.ctaContainer}>
          <button className={styles.ctaButton} onClick={() => window.open("https://wa.me/554499999999?text=Oi, vim pelo site!","_blank")}>Entrar no Time</button>
        </div>
      </div>
    </section>
  );
};;

export default Feedback;
