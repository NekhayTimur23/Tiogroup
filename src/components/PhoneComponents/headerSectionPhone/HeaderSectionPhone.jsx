import { useState, useEffect } from "react";
import ModalNav from "../modal/ModalNav";
import styles from "./HeaderSectionPhone.module.sass";

export default function HeaderSectionPhone({ modalNavOn, addModalNav }) {

  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 0
  );

  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }

    // Добавить слушателя событий изменения размера окна
    window.addEventListener("resize", handleResize);

    // Убрать слушателя событий при размонтировании компонента
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const telegramChannelUrl = "https://t.me/+79189255217";
  const whatsAppChannelUrl = "https://wa.me/+79189255217";

  return (
    <div className={styles.headerPhone}>
      <div className={styles.headerPhoneContainer}>
        <div className={styles.headerPhoneContent}>
          <div className={styles.headerPhoneLogo}>
            <img src="/headerimg/logoBlack.svg" alt="#" />
            <p>СТРОИТЕЛЬНАЯ КОМПАНИЯ</p>
          </div>
          <div className={styles.headerPhoneEmail}>
            <img src="/headerimg/mail.svg" alt="3" />
            <div className={styles.headerPhoneEmailText}>
              <p>Email:{windowWidth}px</p>
              <p>grupp.trio@bk.ru</p>
            </div>
          </div>
          <div className={styles.headerPhoneCall}>
            <img src="/headerimg/call.svg" alt="" />
            <div className={styles.headerPhoneCallText}>
              <p>+7(000) 000-00-00</p>
              <p>+7(000) 000-00-00</p>
            </div>
          </div>
        </div>
        <div className={styles.headerPhoneButtonModal}>
          <div className={styles.headerButton}></div>
          <div className={styles.headerButton}></div>
          <div className={styles.headerButton}></div>
        </div>
        <ModalNav modalNavOn={modalNavOn} onClose={addModalNav} />
      </div>
    </div>
  );
}