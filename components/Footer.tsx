"use client";
import React from "react";
import styles from "./Footer.module.css";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Brand */}
          <div>
            <div className={styles.title}>LUCAS ANDRADE</div>
            <p className={styles.description}>
              Personal Trainer especializado em transformação física e reeducação corporal.
            </p>
            <div className={styles.cref}>CREF 123456-G/SP</div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className={styles.heading}>Links Rápidos</h3>
            <ul className={styles.linkList}>
              {["sobre", "como-funciona", "resultados", "planos"].map((id) => (
                <li key={id}>
                  <button
                    onClick={() => scrollToSection(id)}
                    className={styles.linkButton}
                  >
                    {id.replace("-", " ").replace(/\b\w/g, l => l.toUpperCase())}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Social & Contact */}
          <div>
            <h3 className={styles.heading}>Redes Sociais</h3>
            <div className={styles.socialIcons}>
              {/* Coloque seus SVGs ou imagens aqui */}
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
                aria-label="Instagram"
              >
                {/* SVG Instagram */}
                <span>IG</span>
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
                aria-label="TikTok"
              >
                {/* SVG TikTok */}
                <span>TT</span>
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
                aria-label="YouTube"
              >
                {/* SVG YouTube */}
                <span>YT</span>
              </a>
            </div>

            <div className={styles.contact}>
              {/* Coloque um SVG de relógio se quiser */}
              <span>⏰</span>
              <span>Atendimento: Seg - Sex, 8h às 20h</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className={styles.bottom}>
          <p>
            © {currentYear} Lucas Andrade - Personal Trainer. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
