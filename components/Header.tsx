"use client";
import React, { useState, useEffect } from "react";
import styles from "./Header.module.css";

// Botão simples
const Button: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = ({
  children,
  className = "",
  ...props
}) => {
  return (
    <button className={`${styles.button} ${className}`} {...props}>
      {children}
    </button>
  );
};

// Header com scroll e menu mobile
const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ""}`}>
      <div className={styles.headerContainer}>
        <div className={styles.logo}>LUCAS ANDRADE</div>

        {/* Desktop Navigation */}
        <nav className={styles.navDesktop}>
          {["sobre", "como-funciona", "resultados", "planos"].map((sec) => (
            <button key={sec} onClick={() => scrollToSection(sec)}>
              {sec.replace("-", " ").toUpperCase()}
            </button>
          ))}
          <Button onClick={() => scrollToSection("planos")}>Começar Agora</Button>
        </nav>

        {/* Mobile Toggle */}
        <button
          className={styles.mobileToggle}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <nav className={styles.navMobile}>
          {["sobre", "como-funciona", "resultados", "planos"].map((sec) => (
            <button key={sec} onClick={() => scrollToSection(sec)}>
              {sec.replace("-", " ").toUpperCase()}
            </button>
          ))}
          <Button onClick={() => scrollToSection("planos")}>Começar Agora</Button>
        </nav>
      )}
    </header>
  );
};

export default Header;
export { Button };
