"use client";

import React from "react";
import styles from "./Hero.module.css";

// Botão simples com variantes
const Button: React.FC<
  React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: "primary" | "outline" }
> = ({ children, variant = "primary", className = "", ...props }) => {
  const btnClass = variant === "primary" ? styles.primaryButton : styles.outlineButton;
  return (
    <button className={`${btnClass} ${className}`} {...props}>
      {children}
    </button>
  );
};

const Hero: React.FC = () => {
  const scrollToPlans = () => {
    const element = document.getElementById("planos");
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToSobre = () => {
    const element = document.getElementById("sobre");
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className={styles.section}>
      <div className={styles.backgroundPattern}></div>

      <div className={styles.container}>
        <div className={styles.heroContent}>
          <h1 className={styles.title}>
            Transforme sua rotina, <span className={styles.highlight}>supere seus limites</span> e alcance o físico que você sempre quis
          </h1>
          <p className={styles.subtitle}>
            Acompanhamento personalizado, resultados reais e uma metodologia comprovada para você conquistar seus objetivos.
          </p>

          <div className={styles.buttonGroup}>
            <Button variant="primary" onClick={scrollToPlans}>
              Comece agora
            </Button>
            <Button variant="outline" onClick={scrollToSobre}>
              Conheça meu trabalho
            </Button>
          </div>

          <div className={styles.stats}>
            <div>
              <div className={styles.statNumber}>6+</div>
              <div className={styles.statLabel}>Anos de experiência</div>
            </div>
            <div>
              <div className={styles.statNumber}>200+</div>
              <div className={styles.statLabel}>Alunos transformados</div>
            </div>
            <div>
              <div className={styles.statNumber}>100%</div>
              <div className={styles.statLabel}>Online e personalizado</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className={styles.scrollIndicator}>
        <div className={styles.scrollIndicatorOuter}>
          <div className={styles.scrollIndicatorInner}></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
