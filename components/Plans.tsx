"use client";
import { useState } from "react";
import { Check, CreditCard } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import styles from "./Plans.module.css";

type Plan = {
  name: string;
  description: string;
  prices: {
    monthly: number;
    quarterly: { total: number; installment: number };
    yearly: { total: number; installment: number };
  };
  features: string[];
  highlight?: boolean;
};

const plans: Plan[] = [
  {
    name: "START",
    description: "Perfeito para quem quer dar o primeiro passo e começar com o básico.",
    prices: {
      monthly: 190,
      quarterly: { total: 510, installment: 170 },
      yearly: { total: 1800, installment: 150 },
    },
    features: [
      "Treino personalizado",
      "Suporte via WhatsApp",
      "Ajustes mensais",
      "Acesso ao app exclusivo",
    ],
  },
  {
    name: "EVOLUTION",
    description: "Foco em resultados consistentes com acompanhamento detalhado.",
    prices: {
      monthly: 260,
      quarterly: { total: 690, installment: 230 },
      yearly: { total: 2400, installment: 200 },
    },
    features: [
      "Tudo do plano START",
      "Plano de nutrição básico",
      "Suporte prioritário",
      "Ajustes quinzenais",
      "Análise de progresso",
    ],
    highlight: true,
  },
  {
    name: "PERFORMANCE",
    description: "Ideal para atletas e quem busca performance máxima e suporte contínuo.",
    prices: {
      monthly: 330,
      quarterly: { total: 870, installment: 290 },
      yearly: { total: 3000, installment: 250 },
    },
    features: [
      "Tudo do plano EVOLUTION",
      "Plano nutricional completo",
      "Suporte 24/7",
      "Ajustes semanais",
      "Consultoria mensal ao vivo",
      "Grupo VIP exclusivo",
    ],
  },
];

type BillingCycle = "monthly" | "quarterly" | "yearly";

const Plans = () => {
  const [selectedCycle] = useState<BillingCycle>("monthly");

  const getPriceDisplay = (plan: Plan, cycle: BillingCycle) => {
    if (cycle === "monthly") {
      return { price: plan.prices.monthly, period: "/mês" };
    }
    if (cycle === "quarterly") {
      return {
        price: plan.prices.quarterly.installment,
        period: "/mês",
        total: plan.prices.quarterly.total,
      };
    }
    return {
      price: plan.prices.yearly.installment,
      period: "/mês",
      total: plan.prices.yearly.total,
    };
  };

  return (
    <section id="planos" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          
          <div className={styles.tagline}>Investimento</div>

          <h2 className={styles.title}>Planos e Assinaturas</h2>

          <p className={styles.subtitle}>
            Escolha o plano que melhor se encaixa nos seus objetivos.
            Todos incluem acompanhamento personalizado e suporte contínuo.
          </p>

          <div className={styles.paymentInfo}>
            <CreditCard size={20} />
            <span>PIX com desconto • Cartão até 12x sem juros</span>
          </div>
        </div>

        {/* GRID DESKTOP */}
        <div className={styles.grid}>
          {plans.map((plan, index) => {
            const priceInfo = getPriceDisplay(plan, selectedCycle);
            return (
              <div
                key={index}
                className={`${styles.card} ${plan.highlight ? styles.highlight : ""}`}
              >
                {plan.highlight && (
                  <div className={styles.popular}>MAIS POPULAR</div>
                )}

                <div className={styles.cardHeader}>
                  <h3 className={styles.planName}>{plan.name}</h3>
                  <p className={styles.planDesc}>{plan.description}</p>
                </div>

                <div className={styles.priceBox}>
                  <div className={styles.priceLine}>
                    <span className={styles.rs}>R$</span>
                    <span className={styles.price}>{priceInfo.price}</span>
                    <span className={styles.period}>{priceInfo.period}</span>
                  </div>
                  {priceInfo.total && (
                    <div className={styles.total}>
                      ou R$ {priceInfo.total} no total
                    </div>
                  )}
                </div>

                <ul className={styles.features}>
                  {plan.features.map((f, i) => (
                    <li key={i}>
                      <Check size={18} className={styles.checkIcon} />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                <button
                  className={`${styles.button} ${
                    plan.highlight ? styles.buttonPrimary : styles.buttonSecondary
                  }`}
                >
                  Começar agora
                </button>
              </div>
            );
          })}
        </div>

        {/* CARROSSEL MOBILE */}
        <div className={styles.carousel}>
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={20}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
          >
            {plans.map((plan, index) => {
              const priceInfo = getPriceDisplay(plan, selectedCycle);
              return (
                <SwiperSlide key={index}>
                  <div
                    className={`${styles.card} ${
                      plan.highlight ? styles.highlight : ""
                    }`}
                  >
                    {plan.highlight && (
                      <div className={styles.popular}>MAIS POPULAR</div>
                    )}

                    <div className={styles.cardHeader}>
                      <h3 className={styles.planName}>{plan.name}</h3>
                      <p className={styles.planDesc}>{plan.description}</p>
                    </div>

                    <div className={styles.priceBox}>
                      <div className={styles.priceLine}>
                        <span className={styles.rs}>R$</span>
                        <span className={styles.price}>{priceInfo.price}</span>
                        <span className={styles.period}>{priceInfo.period}</span>
                      </div>
                      {priceInfo.total && (
                        <div className={styles.total}>
                          ou R$ {priceInfo.total} no total
                        </div>
                      )}
                    </div>

                    <ul className={styles.features}>
                      {plan.features.map((f, i) => (
                        <li key={i}>
                          <Check size={18} className={styles.checkIcon} />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>

                    <button
                      className={`${styles.button} ${
                        plan.highlight
                          ? styles.buttonPrimary
                          : styles.buttonSecondary
                      }`}
                    >
                      Começar agora
                    </button>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>

        {/* GARANTIA */}
        <div className={styles.guarantee}>
          ✅ <strong>Garantia de 7 dias</strong> - Se não gostar, devolvemos 100% do seu investimento
        </div>
      </div>
    </section>
  );
};

export default Plans;
