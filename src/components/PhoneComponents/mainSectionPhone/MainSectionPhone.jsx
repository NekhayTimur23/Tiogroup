import styles from "./MainSectionPhone.module.sass";

function MainSectionPhone() {
  return (
    <div className={styles.mainPhone}>
      <div className={styles.mainPhoneContainer}>
        <div className={styles.mainPhoneContent}>
          <div className={styles.mainPhoneTopBlock}>
            <p className={styles.textOne}>ПОЛНЫЙ КОМПЛЕКС</p>
            <p className={styles.textTwo}>СТРОИТЕЛЬНЫХ</p>
            <p className={styles.textFree}>УСЛУГ</p>
            <p className={styles.textFour}>С ГАРАНТИЕЙ В МОСКВЕ</p>
          </div>
          <div className={styles.mainPhoneBottomBlock}>
            <div className={styles.bottomBlockFirst}>
              <img src="/mainimg/cran.svg" alt="#" />
              <p>
                Наши преимущества - это профессионализм, опыт, ответственность и
                оперативность. Мы гарантируем качественное выполнение работ,
                соблюдение сроков и учет всех пожеланий заказчика.
              </p>
            </div>
            <div className={styles.bottomBlockSecond}>
              <p>
                <span>МЫ</span> способны реализовать проект любого объекта от разработки его
                концепции до ввода в эксплуатацию. В процессе работы с нами вы
                получите все необходимые консультации специалистов и «авторский
                надзор» за строительством.
              </p>
              <div className={styles.gbBlackImg}></div>
            </div>
          </div>  
        </div>
      </div>
    </div>
  );
}

export default MainSectionPhone;
