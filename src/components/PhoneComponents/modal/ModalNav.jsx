import styles from "./ModalNav.module.sass";

function ModalNav({ addModalNav, modalNavOn, onClickAdd, onNavigate}) {

  const telegramChannelUrl = "https://t.me/+79189255217";
  const whatsAppChannelUrl = "https://wa.me/+79189255217";

  return (
    <div onClick={ (e) => e.stopPropagation()}
      className={
        modalNavOn
          ? styles.modelNav
          : styles.modelNav + " " + styles.modelNavOff
      }
    >
      <div className={styles.modelNavContent}>
        <div onClick={() => {
            onNavigate("section6");
            addModalNav()
          }}
          >
          <span>ГЛАВНАЯ</span>
        </div>
        <div onClick={() => {
            onNavigate("section7");
            addModalNav()
          }}>
          <span>О НАС</span>
        </div>
        <div onClick={() => {
            onNavigate("section8");
            addModalNav()
          }}>
          <span>УСЛУГИ</span>
        </div>
        <div onClick={() => {
            onNavigate("section9");
            addModalNav()
          }}>
          <span>КОНТАКТЫ</span>
        </div>
        <div onClick={() => {
            onNavigate("section10");
            addModalNav()
          }} 
          >
          <span>ГАЛЕРЕЯ</span>
        </div>
      </div>
      <div onClick={onClickAdd} className={styles.bottomCallBox}>
        <div className={styles.buttonCall}>
          <span>ЗАКАЗАТЬ ЗВОНОК</span>
        </div>
      </div>
      <div className={styles.socialNetworkBlock}>
        <div className={styles.bottomSocBox}>
          <a  href={whatsAppChannelUrl}>
            <div className={styles.bottomImg}>
              <img
                className={styles.img}
                src="/headerImg/SocialMedia/Whatsapp2.svg"
                alt="#"
              />
            </div>
          </a>
        </div>
        <div className={styles.bottomSocBox}>
          <a href={telegramChannelUrl}>
            <div className={styles.bottomImg}>
              <img
                className={styles.img}
                src="/headerImg/SocialMedia/Telegram2.svg"
                alt="#"
              />
            </div>
          </a>
        </div>
      </div>
      <div className={styles.bottomCloseBox}>
        <div className={styles.buttonClose} onClick={addModalNav}>
          <span>ЗАКРЫТЬ</span>
        </div>
      </div>
    </div>
  );
}

export default ModalNav;
