import Image from "next/image";
import styles from "./Footer.module.sass";
import ButtonComp from "../ButtonSection/ButtonComp";

export default function Footer({onClick}) {
  return (
    <div className={styles.footer}>
      <div className={styles.footerSection}>
        <div className={styles.footerNav}>
          <div>
            <span>ГЛАВНАЯ</span>
          </div>
          <div>
            <span>О НАС</span>
          </div>
          <div>
            <span>УСЛУГИ</span>
          </div>
          <div>
            <span>КОНТАКТЫ</span>
          </div>
          <div>
            <span>ГАЛЕРЕЯ</span>
          </div>
        </div>
        <div className={styles.footerCocialNetwork}>
          <div className={styles.footerCNBlock}>
            {/* вацап */}
            <div className={styles.footerWhatsApp}>
              <div className={styles.WhatsApp}>
                <div>
                  <img alt="#" src="/footer/whatsApp.svg" />
                </div>
              </div>
              <p>WhatsApp</p>
            </div>
            {/* телега */}
            <div className={styles.footerTelegrem}>
              <div className={styles.Telegram}>
                <div>
                  <img alt="#" src="/footer/telegram.svg" />
                </div>
              </div>
              <p>Telegram</p>
            </div>
            {/* вконтакте */}
            <div className={styles.footerVkontakte}>
              <div className={styles.Vkontakte}>
                <div>
                  <img alt="#" src="/footer/Vkontakte.svg" />
                </div>
              </div>
              <p>Вконтакте</p>
            </div>
          </div>
        </div>
        <div className={styles.footerCall}>
          <p>График работы:</p>
          <span>9.00-19.00 ПН-ПТ</span>
          <p>Наши телефоны:</p>
          <div className={styles.call}>
            <span>8 (800) 888-88-88</span>
            <span>8 (800) 888-88-88</span>
          </div>
        </div>
        <div className={styles.footerButton}>
          <div className={styles.footerButtonLogo}>
            <div className={styles.logo}>
              <img alt="#" src="/headerImg/logo.svg" />
            </div>
            <div className={styles.button}>
              <div className={styles.buttonContainer}>
                <ButtonComp onClick={onClick}/>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.Info}>
        <p>Copyright © 2023 TrioGroup</p>
        <p>ИНН: 123456789111</p>
        <p>ОГРНИП: 1110987654321</p>
      </div>
    </div>
  );
}
