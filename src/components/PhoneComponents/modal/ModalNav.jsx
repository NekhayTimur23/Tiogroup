import styles from "./ModalNav.module.sass";

function ModalNav({ onClose }) {
  return (
      <div className={styles.modelNav}>
        <div className={styles.modelNavContent}>
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
        <div className={styles.buttonCall + ' ' + styles.button}>
          <span>Заказать звонок</span>
        </div>
        <div className={styles.buttonClose + ' ' + styles.button} onClick={onClose}>
          <span>ЗАКРЫТЬ</span>
        </div>
    </div>
  );
}

export default ModalNav;
