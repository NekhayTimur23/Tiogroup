import { forwardRef } from "react";
import ButtonComp from "@/components/ButtonSection/ButtonComp";
import styles from "./MainSectionPhone.module.sass";

const MainSectionPhone = forwardRef(({ onClickAdd }, ref) => {
  return (
    <div className={styles.mainPhone}>
      <div className={styles.mainPhoneContainer}>
        <div ref={ref} className={styles.mainPhoneContent}>
          <div className={styles.mainPhoneTopBlock}>
            <div className={styles.mainPhoneTopBlockText}>
              <p className={styles.textOne}>ПОЛНЫЙ КОМПЛЕКС</p>
              <p className={styles.textTwo}>СТРОИТЕЛЬНЫХ</p>
              <p className={styles.textFree}>УСЛУГ</p>
              <p className={styles.textFour}>С ГАРАНТИЕЙ В МОСКВЕ</p>
            </div>
            <div className={styles.mainPhoneBottom}>
              <ButtonComp onClickAdd={onClickAdd} mainPhone={true} />
            </div>
          </div>
          <div className={styles.mainPhoneTextBlock}>
            <div className={styles.textBlockSecond}>
              <p>
                <span>МЫ</span> способны реализовать проект любого объекта от
                разработки его концепции до ввода в эксплуатацию. В процессе
                работы с нами вы получите все необходимые консультации
                специалистов и «авторский надзор» за строительством.
              </p>
              <div className={styles.gbBlackImg}></div>
            </div>
            <div className={styles.textBlockFirst}>
              <img src="/mainimg/cran.svg" alt="#" />
              <p>
                Наши преимущества - это профессионализм, опыт, ответственность и
                оперативность. Мы гарантируем качественное выполнение работ,
                соблюдение сроков и учет всех пожеланий заказчика.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});


MainSectionPhone.displayName = 'MainSectionPhone';
export default MainSectionPhone;
