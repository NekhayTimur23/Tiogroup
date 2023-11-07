import styles from "./NavBlock.module.sass";

export default function NavBlock() {
  return (
    <div className={styles.nav}>
      <div>
        <span>ГЛАВНАЯ</span>
      </div>
      <div className="">
        <span>О НАС</span>
      </div>
      <div className="">
        <span>УСЛУГИ</span>
      </div>
      <div className="">
        <span>КОНТАКТЫ</span>
      </div>
      <div className="">
        <span>ГАЛЕРЕЯ</span>
      </div>
    </div>
  );
}
