
import styles from "./ButtonComp.module.sass";

export default function ButtonComp({ colorText, onClickAdd, mainPhone }) {

  return (
      <div className={mainPhone ? [styles.buttonBox,styles.mainPhoneSection].join(' ') : styles.buttonBox}>
        <div onClick={onClickAdd} className={styles.buttonCall}>
          <p className={styles.textOne}>ЗАКАЗАТЬ ЗВОНОК </p>
        </div>
        <p className={colorText ? styles.textTwoAbout : styles.textTwo}>
          годы безупречной репутации
        </p>
      </div>
  );
}
