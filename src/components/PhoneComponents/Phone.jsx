import { useState } from "react";
import styles from "./Phone.module.sass";
import ModalNav from "./modal/ModalNav";

function Phone() {
  const [modalNavOn, setModalNavOn] = useState(false);

  const addModalNav = () => {
    setTimeout(function() {
        setModalNavOn(!modalNavOn);
      }, 300);
  };
  return (
    <div className={styles.phone}>
      <div className={styles.phoneContainer}>
        <div className={styles.phoneContent}>
          <div className={styles.mainSection}>
            <div className={styles.header}>
              <div className={styles.headerBlock}>
                <div className={styles.logo}>
                  <img id="logoSvg" src="/headerImg/logo.svg" alt="#" />
                </div>
                <div className={styles.headerButton} onClick={addModalNav}>
                  <div className={styles.button}>
                    <div className={styles.buttonBlock}></div>
                    <div className={styles.buttonBlock}></div>
                    <div className={styles.buttonBlock}></div>
                  </div>
                </div>
              </div>
            </div>
            {modalNavOn && <ModalNav onClose={addModalNav}/>}
            <div className="">frfrf</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Phone;
