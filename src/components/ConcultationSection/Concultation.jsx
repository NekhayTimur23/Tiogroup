import styles from "./Concultation.module.sass";
import ButtonComp from "../ButtonSection/ButtonComp";
import { forwardRef } from "react";

const ConcultationSection = forwardRef(({ onClickAdd, sectionPhone }, ref) => {
  return (
    <div
      ref={ref}
      className={
        sectionPhone
          ? styles.concultation + " " + styles.concultationPhone
          : styles.concultation
      }
    >
      <div className={styles.upperConteiner}>
        <div className={styles.upperConteinerRight}>
          <p className={styles.textOne}>ПОЛУЧИТЕ БЕСПЛАТНУЮ</p>
          <h1 className={styles.textTwo}>КОНСУТАЦИЮ</h1>
          <p className={styles.textThree}>СПЕЦИАЛИСТА В ТЕЧЕНИЕ 30 МИНУТ</p>
          <ButtonComp onClickAdd={onClickAdd} />
        </div>
        <div className={styles.upperConteinerlef}>
          <p className={styles.textOne}>РАБОТАЕМ С</p>
          <p className={styles.textTwo}>20</p>
          <p className={styles.textThree}>06</p>
          <p className={styles.textFour}>ГОДА</p>
        </div>
      </div>
      <div className={styles.lowerConteiner}>
        <div className={styles.lowerConteinerBox}>
          <div className={styles.lowerConteinerImg}>
            <img alt="#" src="./consultation/01.svg" />
          </div>
          <div className={styles.lowerConteinerText}>
            <h4>звонок или заявка на сайте</h4>
            <p>оперативно ответим и подадим заявку</p>
          </div>
        </div>
        <div className={styles.lowerConteinerBox}>
          <div className={styles.lowerConteinerImg}>
            <img alt="#" src="./consultation/02.svg" />
          </div>
          <div className={styles.lowerConteinerText}>
            <h4>выезд на обьект, консультация</h4>
            <p>выедем к вам и сделаем замены</p>
          </div>
        </div>
        <div className={styles.lowerConteinerBox}>
          <div className={styles.lowerConteinerImg}>
            <img alt="#" src="./consultation/03.svg" />
          </div>
          <div className={styles.lowerConteinerText}>
            <h4>производство и сдача проекта</h4>
            <p>сдадим все вовремя и качественно</p>
          </div>
        </div>
      </div>
    </div>
  );
});

ConcultationSection.displayName = "ConcultationSection";

export default ConcultationSection;
