import styles from "./AsphaltSection.module.sass";
import { GoArrowRight } from "react-icons/go";


const AsphaltSection = () => {
  return (
    <div className={styles.asphaltSection}>
      <div className={styles.asphaltCantainer}>
        <div className={styles.asphaltCantent}>
          <div className={styles.asphaltCantentLeft}>
            <p>Асфальтирование дорог <br/> от компании <span>А1</span></p>
            <div className={styles.servicesList}>
              <ul>
                <img className={styles.servicesListImg} src="/asphalt//garante.svg" alt="#" />
                <li>
                  <span>Собственный парк техники</span>
                </li>
                <li>
                  <span>Асфальт собственного производства</span>
                </li>
                <li>
                  <span>Пришлем предложение в течение 30 минут!</span>
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.asphaltCantentRight}>
            <p  className={styles.textFirst}>Закажите бесплатный выезд на объект сейчас и получите скидку 10% перейдя по ссылке ниже</p>
            <a href="https://www.a1asfaltirovanie.ru" className={styles.asphaltCantentRightButton}>
              <p className={styles.textFontSizeOne}>www.a1asfaltirovanie.ru</p>
              <p className={styles.textFontSizeTwo}><GoArrowRight /></p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

// ConcultationSection.displayName = "ConcultationSection";

export default AsphaltSection;