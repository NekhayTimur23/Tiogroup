import Image from "next/image";
import styles from "./Header.module.sass";

export default function Header() {
  return (
    <div className={styles.header}>
      <div>
        <img
          alt="#"
          className={styles.headerLogo}
          src="/headerImg/logo.svg"
          width={93}
          height={62}
        />
      </div>
      <div className={styles.hederStyleAll}>
        <div className={styles.mr20}>
          <img alt="#" src="/headerImg/watch.svg" width={22} height={22} />
        </div>
        <p
          className={
            styles.mr20 +
            " " +
            styles.orangeColor +
            " " +
            styles.fontRobotoBold16
          }
        >
          Работаем ежедневно:
        </p>
        <p className={styles.colorWhite + " " + styles.fontOswaldBold20}>
          с 09:00 до 19:00
        </p>
      </div>
      <div className={styles.hederStyleAll + " " + styles.hederSocNetBlock}>
        <div className={styles.hederStyleAll}>
          <div className={styles.hederSocNet}>
            <div className={styles.borCol}>
              <img alt="#" src="/headerImg/vk.svg" width={15} height={15} />
            </div>
            <p className={styles.fontRobotoBold16}>ВКонтакте</p>
          </div>
        </div>
        <div className={styles.hederStyleAll}>
          <div className={styles.hederSocNet}>
            <div className={styles.borCol}>
              <img
                alt="#"
                src="/headerImg/telegram.svg"
                width={15}
                height={15}
              />
            </div>
            <p className={styles.colorWhite + " " + styles.fontRobotoBold16}>
              Telegram
            </p>
          </div>
        </div>
      </div>
      <div className={styles.hederStyleAll}>
        <div>
          <img
            alt="#"
            className={styles.mr20}
            src="/headerImg/adress.svg"
            width={22}
            height={22}
          />
        </div>
        <p
          className={
            styles.mr20 +
            " " +
            styles.orangeColor +
            " " +
            styles.fontRobotoBold16
          }
        >
          Наш адрес:
        </p>
        <p className={styles.colorWhite + " " + styles.fontOswaldBold20}>
          мо п.зареье ул. тихая д.13
        </p>
      </div>
      <div className={styles.hederStyleAll}>
        <div className={styles.hederNomber}>
          <div className={styles.mr20}>
            <p className={styles.colorWhite + " " + styles.fontOswaldBold25}>
              8 800 700-00-00
            </p>
            <p className={styles.colorWhite + " " + styles.fontOswaldBold25}>
              8 800 700-00-00
            </p>
          </div>
        </div>
        <div className={styles.bgColorPhone}>
          <img alt="#" src="/headerImg/phone.svg" />
        </div>
      </div>
    </div>
  );
}
