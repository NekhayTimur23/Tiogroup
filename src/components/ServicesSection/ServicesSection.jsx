import styles from "./ServicesSection.module.sass";

export default function ServicesSection() {
  return (
    <div className={styles.servicesSection}>
      <div class={styles.servicesContainer}>
        <h2>Наши услуги</h2>
        <div class={styles.servicesGrid}>
          <div class={styles.serviceCard}>
            <div className={styles.cardImg}>
              <img src="/servicesSection/01.svg" alt="Инженерные работы" />
            </div>
            <h3>ИНЖЕНЕРНЫЕ работы</h3>
            <button class={styles.button}>Подробнее</button>
          </div>
          <div class={styles.serviceCard}>
            <div className={styles.cardImg}>
              <img src="/servicesSection/02.svg" alt="Инженерные работы" />
            </div>
            <h3>ИНЖЕНЕРНЫЕ работы</h3>
            <button class={styles.button}>Подробнее</button>
          </div>
          <div class={styles.serviceCard}>
            <div className={styles.cardImg}>
              <img src="/servicesSection/03.svg" alt="Инженерные работы" />
            </div>
            <h3>ИНЖЕНЕРНЫЕ работы</h3>
            <button class={styles.button}>Подробнее</button>
          </div>
          <div class={styles.serviceCard}>
            <div className={styles.cardImg}>
              <img src="/servicesSection/04.svg" alt="Инженерные работы" />
            </div>
            <h3>ИНЖЕНЕРНЫЕ работы</h3>
            <button class={styles.button}>Подробнее</button>
          </div>
          <div class={styles.serviceCard}>
            <div className={styles.cardImg}>
              <img src="/servicesSection/05.svg" alt="Инженерные работы" />
            </div>
            <h3>ИНЖЕНЕРНЫЕ работы</h3>
            <button class={styles.button}>Подробнее</button>
          </div>
          <div class={styles.serviceCard}>
            <div className={styles.cardImg}>
              <img src="/servicesSection/06.svg" alt="Инженерные работы" />
            </div>
            <h3>ИНЖЕНЕРНЫЕ работы</h3>
            <button class={styles.button}>Подробнее</button>
          </div>
        </div>
      </div>
    </div>
  );
}
