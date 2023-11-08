import Image from "next/image";
import styles from "./Footer.module.sass";
import ButtonComp from "../ButtonSection/ButtonComp";

export default function Footer() {
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
                  <Image src="/footer/whatsApp.svg" width={19} height={19} />
                </div>
              </div>
              <p>WhatsApp</p>
            </div>
            {/* телега */}
            <div className={styles.footerTelegrem}>
              <div className={styles.Telegram}>
                <div>
                  <Image src="/footer/telegram.svg" width={19} height={19} />
                </div>
              </div>
              <p>Telegram</p>
            </div>
            {/* вконтакте */}
            <div className={styles.footerVkontakte}>
              <div className={styles.Vkontakte}>
                <div>
                  <Image src="/footer/Vkontakte.svg" width={19} height={19} />
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
              <Image
                //   layout="responsive"
                src="/headerImg/logo.svg"
                width={385}
                height={257}
              />
            </div>
            <ButtonComp />
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
