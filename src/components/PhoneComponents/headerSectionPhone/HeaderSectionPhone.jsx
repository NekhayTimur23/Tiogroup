"use client";

import { useState, useEffect } from "react";
import ModalNav from "../modal/ModalNav";
import styles from "./HeaderSectionPhone.module.sass";
import { LuMail } from "react-icons/lu";

export default function HeaderSectionPhone() {
  const [modalNavOn, setModalNavOn] = useState(false);

  const addModalNav = () => {
    setTimeout(function () {
      setModalNavOn(!modalNavOn);
    }, 300);
  };

  const telegramChannelUrl = "https://t.me/+79189255217";
  const whatsAppChannelUrl = "https://wa.me/+79189255217";

  return (
    <div className={styles.headerPhone}>
      <div className={styles.headerPhoneContainer}>
        <div className={styles.headerPhoneContent}>
          <div className={styles.headerPhoneLogo}>
            <img src="/headerimg/logoSecond.svg" alt="#" />
            <p>СТРОИТЕЛЬНАЯ КОМПАНИЯ</p>
          </div>
          <div className={styles.headerPhoneEmail}>
            <div className={styles.headerPhoneEmailImg}>
              <LuMail width={55} />
            </div>
            <div className={styles.headerPhoneEmailText}>
              <p>Email:</p>
              <p>grupp.trio@bk.ru</p>
            </div>
          </div>
          <div className={styles.headerPhoneCall}>
            <img src="/headerimg/phoneSecond.svg" alt="#" />
            <div className={styles.headerPhoneCallText}>
              <p>+7(000) 000-00-00</p>
              <p>+7(000) 000-00-00</p>
            </div>
          </div>
        </div>
        <div onClick={addModalNav} className={styles.headerPhoneButtonModal}>
          <div className={styles.headerButton}></div>
          <div className={styles.headerButton}></div>
          <div className={styles.headerButton}></div>
        </div>
        <ModalNav modalNavOn={modalNavOn} onClose={addModalNav} />
      </div>
    </div>
  );
}
