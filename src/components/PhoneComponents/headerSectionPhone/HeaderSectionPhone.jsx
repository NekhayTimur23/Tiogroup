

import styles from "./HeaderSectionPhone.module.sass";
import { LuMail } from "react-icons/lu";

export default function HeaderSectionPhone({onNavigate, modalNavOn, addModalNav,onClickAdd}) {

  const telegramChannelUrl = "https://t.me/+79189255217";
  const whatsAppChannelUrl = "https://wa.me/+79189255217";

  return (
    <div className={styles.headerPhone}>
      <div className={styles.headerPhoneContainer} >
        <div className={styles.headerPhoneContent}>
          <div className={styles.headerPhoneLogo}>
            <img src="/headerimg/logoSecond2.svg" alt="#" />
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
            <img src="/headerimg/phoneSecond2.svg" alt="#" />
            <div className={styles.headerPhoneCallText}>
              <p>+7(000) 000-00-00</p>
              <p>+7(000) 000-00-00</p>
            </div>
          </div>
        </div>
        {/* <ModalNav onNavigate={onNavigate} onClickAdd={onClickAdd} modalNavOn={modalNavOn} addModalNav={addModalNav} /> */}
      </div>
    </div>
  );
}
