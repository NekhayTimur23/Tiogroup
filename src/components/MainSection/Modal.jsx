"use client";

import { useState } from "react";
import styles from "./Modal.module.sass";

const Modal = ({ onClose }) => {
  const [phone, setPhone] = useState("");

  const handlePhoneInput = (e) => {
    const inputValue = e.target.value.replace(/[^\d]/g, ""); // Удаляем все нецифровые символы
    let formattedValue = "";

    if (inputValue) {
      if (inputValue.startsWith("7") || inputValue.startsWith("8")) {
        // Если начинается с 7 или 8, добавляем +7
        formattedValue = `+7${inputValue.substring(1, 11)}`;
      } else if (inputValue.startsWith("9")) {
        // Если начинается с 9, добавляем +7 и 9
        formattedValue = `+7${inputValue.substring(0, 10)}`;
      } else {
        // В остальных случаях начинаем с +
        formattedValue = `+${inputValue.substring(0, 18)}`;
      }
    } else {
      // Если поле ввода полностью очищено, устанавливаем пустую строку
      formattedValue = "";
    }

    setPhone(formattedValue);
  };

  return (
    <div className={styles.modal}>
      <div className={styles.modalOverlay}>
        <div className={styles.modalContainer}>
          <h1>Обратная связь</h1>
          <p>
            Если у вас есть вопросы или предложения, вы можете оставить их
            здесь, и мы обязательно свяжемся с вами в ближайшее время.
          </p>
          <div className={styles.inputBlock}>
            <input
              className={styles.modalContainerInput}
              type="text"
              placeholder="Имя"
            />
            <input
              className={styles.modalContainerInput}
              type="email"
              placeholder="E-mail"
            />
            <input
              className={styles.modalContainerInput}
              type="tel"
              value={phone}
              onChange={handlePhoneInput}
              placeholder="+7"
            />
          </div>
        </div>
        <div className={styles.buttonBlock}>
          <div className={styles.button + " " + styles.buttonInput}>
            <p>Заказать звонок</p>
          </div>
          <div className={styles.button + " " + styles.closeButton} onClick={onClose}>
            <p>Закрыть</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
