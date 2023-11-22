import styles from "./Phone.module.sass";

function Phone() {
  return (
    <div className={styles.phone}>
      <div className={styles.phoneContainer}>
        <div className={styles.phoneContent}>
          <div className={styles.mainSection}>
            <div className={styles.header}>
              <div className={styles.headerBlock}>
                <div className={styles.logo}>
                  <img id="logoSvg" src="/headerImg/logo.svg" alt="#"/>
                </div>
                <div className={styles.headerButton}>
                  <div className={styles.button}>
                    <img src="" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Phone;
