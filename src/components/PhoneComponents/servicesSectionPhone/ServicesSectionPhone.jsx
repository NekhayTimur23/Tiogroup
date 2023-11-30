import styles from "./ServicesSectionPhone.module.sass";
import { forwardRef } from "react";


const ServicesSectionPhone = forwardRef((props, ref) =>{
  return (
    <div className={styles.servicesSection}>
      <div className={styles.servicesContainer}>
        <div ref={ref} className={styles.servicesContent}>
          <h1>Мы предлогаем</h1>
          <div className={styles.servicesCards}>

            {/* КАРТЫ */}
            <div className={styles.servicesCard}>
              <div className={styles.servicesCardImg}></div>
              <h4>штукатурные</h4>
              <p>роботы</p>
              <div className={styles.servicesCardBottom}>
                <p>ЗАКАЗАТЬ ЗВОНОК</p>
              </div>
            </div>

            <div className={styles.servicesCard}>
              <div className={styles.servicesCardImg}></div>
              <h4>штукатурные</h4>
              <p>роботы</p>
              <div className={styles.servicesCardBottom}>
                <p>ЗАКАЗАТЬ ЗВОНОК</p>
              </div>
            </div>

            <div className={styles.servicesCard}>
              <div className={styles.servicesCardImg}></div>
              <h4>штукатурные</h4>
              <p>роботы</p>
              <div className={styles.servicesCardBottom}>
                <p>ЗАКАЗАТЬ ЗВОНОК</p>
              </div>
            </div>

            <div className={styles.servicesCard}>
              <div className={styles.servicesCardImg}></div>
              <h4>штукатурные</h4>
              <p>роботы</p>
              <div className={styles.servicesCardBottom}>
                <p>ЗАКАЗАТЬ ЗВОНОК</p>
              </div>
            </div>

            <div className={styles.servicesCard}>
              <div className={styles.servicesCardImg}></div>
              <h4>штукатурные</h4>
              <p>роботы</p>
              <div className={styles.servicesCardBottom}>
                <p>ЗАКАЗАТЬ ЗВОНОК</p>
              </div>
            </div>

            <div className={styles.servicesCard}>
              <div className={styles.servicesCardImg}></div>
              <h4>штукатурные</h4>
              <p>роботы</p>
              <div className={styles.servicesCardBottom}>
                <p>ЗАКАЗАТЬ ЗВОНОК</p>
              </div>
            </div>

            <div className={styles.servicesCard}>
              <div className={styles.servicesCardImg}></div>
              <h4>штукатурные</h4>
              <p>роботы</p>
              <div className={styles.servicesCardBottom}>
                <p>ЗАКАЗАТЬ ЗВОНОК</p>
              </div>
            </div>

            <div className={styles.servicesCard}>
              <div className={styles.servicesCardImg}></div>
              <h4>штукатурные</h4>
              <p>роботы</p>
              <div className={styles.servicesCardBottom}>
                <p>ЗАКАЗАТЬ ЗВОНОК</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
})

export default ServicesSectionPhone;
