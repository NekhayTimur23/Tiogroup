import styles from "./ServicesSection.module.sass";
import { forwardRef } from "react";
import ButtonComp from "@/components/ButtonSection/ButtonComp";

const ServicesSection = forwardRef(({ onClickAdd }, ref) => {
  const cards = [
    {
      title: "Строительно-монтажные",
      textWork: "роботы",
      namberClass: "servicesCardOne",
      style:
        "linear-gradient(rgba(0, 0, 0, 0.65),rgba(0, 0, 0, 0.455),rgb(0, 0, 0)), url('/servicesSection/scott-blake-x-ghf9LjrVg-unsplash.webp') center/cover",
      texts: [
        "Земляные работы.",
        "Каменные работы.",
        "Бетонные работы.",
        "Свайные работы.",
        "Штукатурные работы.",
        "Кровельные работы.",
        "Отделочные работы.",
      ],
    },
    {
      title: "Благоустройство",
      textWork: "территорий",
      namberClass: "servicesCardTwo",
      style:
        "linear-gradient(rgba(0, 0, 0, 0.65),rgba(0, 0, 0, 0.455),rgb(0, 0, 0)), url('/servicesSection/mark-raptapolus-lXtVJ6nP9lc-unsplash.webp') center/cover",
      texts: [
        "Земляные работы.",
        "Установка элементов малой архитектуры.",
        "Озеленение.",
        "Устройство дорожек и площадок.",
        "Установка освещения.",
        "Устройство ирригационных систем.",
      ],
    },
    {
      title: "Электро-монтажные",
      textWork: "роботы",
      namberClass: "servicesCardFree",
      style:
        "linear-gradient(rgba(0, 0, 0, 0.65),rgba(0, 0, 0, 0.455),rgb(0, 0, 0)), url('/servicesSection/hobi-industri-NLBJ2I0lNr4-unsplash.webp') center/cover",
      texts: [
        "Кабельные линии.",
        "Электроустановки.",
        "Молния и заземление.",
        "Распределительные щиты, шкафы и распределительные щиты.",
        "Измерения защиты от поражения током, сопротивления заземления и изоляции, а также интенсивности освещения.",
      ],
    },
  ];

  return (
    <div className={styles.servicesSection}>
      <div className={styles.servicesContainer}>
        <div ref={ref} className={styles.servicesContent}>
          <h1>Наши услуги</h1>
          <div className={styles.servicesCards}>
            {/* КАРТЫ */}
            {cards.map((card, i) => (
              <div
                key={i}
                style={{ background: `${card.style}` }}
                className={styles.servicesCard}
              >
                <div className={styles.titleBlock}>
                  <h4>{card.title}</h4>
                  <p className={styles.servicesCardTextWork}>{card.textWork}</p>
                </div>
                <div className={styles.tetxBlock}>
                  {card.texts.map((text, textIndex) => (
                    <p key={textIndex}>{text}</p>
                  ))}
                </div>
                <ButtonComp servicesSection={true} onClickAdd={onClickAdd} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
});

ServicesSection.displayName = "ServicesSection";

export default ServicesSection;
