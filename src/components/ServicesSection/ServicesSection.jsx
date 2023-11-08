import styles from "./ServicesSection.module.sass";

export default function ServicesSection() {
  return (
    <div className={styles.servicesSection}>
      <div class={styles.servicesContainer}>
        <h2>Наши услуги</h2>
        <div class={styles.servicesGrid}>
          <div class={styles.serviceCard}>
            <img src="path_to_engineering_icon" alt="Инженерные работы" />
            <h3>ИНЖЕНЕРНЫЕ работы</h3>
            <button class={styles.button}>Подробнее</button>
          </div>
          <div class={styles.serviceCard}>
            <img src="path_to_engineering_icon" alt="Инженерные работы" />
            <h3>ИНЖЕНЕРНЫЕ работы</h3>
            <button class={styles.button}>Подробнее</button>
          </div>
          <div class={styles.serviceCard}>
            <img src="path_to_engineering_icon" alt="Инженерные работы" />
            <h3>ИНЖЕНЕРНЫЕ работы</h3>
            <button class={styles.button}>Подробнее</button>
          </div>
          <div class={styles.serviceCard}>
            <img src="path_to_engineering_icon" alt="Инженерные работы" />
            <h3>ИНЖЕНЕРНЫЕ работы</h3>
            <button class={styles.button}>Подробнее</button>
          </div>
          <div class={styles.serviceCard}>
            <img src="path_to_engineering_icon" alt="Инженерные работы" />
            <h3>ИНЖЕНЕРНЫЕ работы</h3>
            <button class={styles.button}>Подробнее</button>
          </div>
          <div class={styles.serviceCard}>
            <img src="path_to_engineering_icon" alt="Инженерные работы" />
            <h3>ИНЖЕНЕРНЫЕ работы</h3>
            <button class={styles.button}>Подробнее</button>
          </div>
        </div>
      </div>
    </div>
  );
}
