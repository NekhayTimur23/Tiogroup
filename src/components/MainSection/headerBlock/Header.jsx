import Image from "next/image";
import styles from "./Header.module.sass";

export default function Header() {
  return (
    <div className={styles.header}>
      <div>
        <Image
          layout="responsive"
          src="/headerImg/logo.svg"
          width={93}
          height={62}
        />
      </div>
      <div className={styles.hederStyleAll}>
        <div className={styles.mr20}>
          <Image src="/headerImg/watch.svg" width={22} height={22} />
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
      <div className={styles.hederStyleAll}>
        <div className={styles.hederStyleAll}>
          <div className={styles.borCol + " " + styles.mr20}>
            <Image src="/headerImg/vk.svg" width={15} height={15} />
          </div>
          <p
            className={
              styles.mr20 +
              " " +
              styles.colorWhite +
              " " +
              styles.fontRobotoBold16
            }
          >
            ВКонтакте
          </p>
        </div>
        <div className={styles.hederStyleAll}>
          <div className={styles.borCol + " " + styles.mr20}>
            <Image src="/headerImg/telegram.svg" width={15} height={15} />
          </div>
          <p className={styles.colorWhite + " " + styles.fontRobotoBold16}>
            Telegram
          </p>
        </div>
      </div>
      <div className={styles.hederStyleAll}>
        <div>
          <Image
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
        <div>
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
          <Image
            src="/headerImg/phone.svg"
            width={22}
            height={22}
          />
        </div>
      </div>
    </div>
  );
}
