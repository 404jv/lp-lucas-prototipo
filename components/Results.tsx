"use client";
import { useState } from "react";
import styles from "./Results.module.css";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

interface ResultType {
  name: string;
  photos: string[];
  result: string;
}

const results: ResultType[] = [
  {
    name: "Giovanna - Atleta Bikini",
    photos: [
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=400&q=80",
    ],
    result: "Redução de 15% de gordura corporal",
  },
  {
    name: "Rosangela",
    photos: [
      "https://images.unsplash.com/photo-1598970434795-0c54fe7c0642?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=400&q=80",
    ],
    result: "Aumento de massa muscular",
  },
  {
    name: "Denis",
    photos: [
      "https://images.unsplash.com/photo-1506801310323-534be5e7f6a3?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1508672019048-805c876b67e2?auto=format&fit=crop&w=400&q=80",
    ],
    result: "Melhora na postura e definição",
  },
];

export default function Carousel() {
  const [photoIndexes, setPhotoIndexes] = useState<number[]>(results.map(() => 0));
  const [startX, setStartX] = useState<number | null>(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleNext = (idx: number) => {
    setPhotoIndexes((prev) =>
      prev.map((p, i) => (i === idx ? (p + 1) % results[idx].photos.length : p))
    );
  };

  const handlePrev = (idx: number) => {
    setPhotoIndexes((prev) =>
      prev.map((p, i) =>
        i === idx ? (p - 1 + results[idx].photos.length) % results[idx].photos.length : p
      )
    );
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setStartX(e.touches[0].clientX);
    setIsDragging(true);
  };

  const handleTouchMove = (e: React.TouchEvent, idx: number) => {
    if (!isDragging || startX === null) return;
    const diff = startX - e.touches[0].clientX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) handleNext(idx);
      else handlePrev(idx);
      setIsDragging(false);
      setStartX(null);
    }
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
    setStartX(null);
  };

  return (
    <section className={styles.wrapper}>
      <div className={styles.cardphoto}>
        <div className={styles.header}>
          <h2>Resultados Reais</h2>
          <p>Veja as transformações incríveis dos alunos GDTeam</p>
        </div>

        <div className={styles.container}>
          {results.map((result, idx) => (
            <div key={idx} className={styles.card}>
              <div
                className={styles.imageWrapper}
                onTouchStart={handleTouchStart}
                onTouchMove={(e) => handleTouchMove(e, idx)}
                onTouchEnd={handleTouchEnd}
              >
                <button className={styles.arrowLeft} onClick={() => handlePrev(idx)}>
                  <BsArrowLeft />
                </button>

                <div
                  className={styles.imageTrack}
                  style={{ transform: `translateX(-${photoIndexes[idx] * 100}%)` }}
                >
                  {result.photos.map((photo, i) => (
                    <div key={i} className={styles.imageSlide}>
                      <img src={photo} alt={`${result.name} ${i + 1}`} className={styles.image} />
                    </div>
                  ))}
                </div>

                <button className={styles.arrowRight} onClick={() => handleNext(idx)}>
                  <BsArrowRight />
                </button>
              </div>

              <div className={styles.info}>
                <h3>{result.name}</h3>
                <p>{result.result}</p>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.cta}>
          <h2>Pronto para ser o próximo a se transformar?</h2>
          <ul>
            <li>Antes e Depois Reais</li>
            <li>Resultados Comprovados</li>
            <li>Metodologia Testada</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
