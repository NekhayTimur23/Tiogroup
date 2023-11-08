import Header from "./headerBlock/Header";
import NavBlock from "./navBlock/NavBlock";
import Image from "next/image";
import styles from "./MainSection.module.sass";
import ButtonComp from "../ButtonSection/ButtonComp";

export default function MainSection() {
  return (
    <div className={styles.mainSection}>
      <Header />
      <NavBlock />
      <div className={styles.content}>
        <div className={styles.leftBlock}>
          <div className={styles.pozitionBox}>
            <p className={styles.textOne}>ПОЛНЫЙ КОМПЛЕКС</p>
            <p className={styles.textTwo}>СТРОИТЕЛЬНЫХ</p>
            <p className={styles.textThree}>УСЛУГ</p>
            <p className={styles.textFour}>С ГАРАНТИЕЙ В МОСКВЕ</p>
          </div>
        </div>
        <div className={styles.rightBlock}>
          <div className={styles.rightBlockText}>
            <p>
              Наши преимущества - это профессионализм, опыт, ответственность и
              оперативность. Мы гарантируем качественное выполнение работ,
              соблюдение сроков и учет всех пожеланий заказчика.
            </p>
          </div>
          <ButtonComp />
        </div>
      </div>
    </div>
  );
}
