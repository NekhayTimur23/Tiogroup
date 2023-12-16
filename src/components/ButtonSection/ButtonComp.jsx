import styles from "./ButtonComp.module.sass";

export default function ButtonComp({
  colorText,
  onClickAdd,
  mainPhone,
  footerPhone,
  servicesSection
}) {
  return (
    <div
      className={ 
        `${styles.buttonBox} ${mainPhone ? styles.mainPhoneSection : ""} ${ footerPhone ? styles.footerPhoneSection : ""} ${servicesSection ? styles.servicesSection : "" }`
      }
    >
      <div onClick={onClickAdd} className={styles.buttonCall}>
        <p className={styles.textOne}>ЗАКАЗАТЬ ЗВОНОК </p>
      </div>
      <p className={colorText ? styles.textTwoAbout : styles.textTwo}>
        годы безупречной репутации
      </p>
    </div>
  );
}
