
import styles from "./ButtonComp.module.sass";

export default function ButtonComp({ colorText, onClick }) {

  return (
      <div className={styles.buttonBox}>
        <div onClick={onClick} className={styles.buttonCall}>
          <p className={styles.textOne}>ЗАКАЗАТЬ ЗВОНОК </p>
        </div>
        <p className={colorText ? styles.textTwoAbout : styles.textTwo}>
          годы безупречной репутации
        </p>
      </div>
  );
}
