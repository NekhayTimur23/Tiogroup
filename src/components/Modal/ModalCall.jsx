"use client";

import { useState } from "react";
import styles from "./ModalCall.module.sass";

const ModalCall = ({ onClose }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = { name, email, phone };
    

    try {
      const response = await fetch(
        `${window.location.protocol}//${window.location.hostname}/api/send-email`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "POST,PATCH,OPTIONS",
          },
          body: JSON.stringify(formData),
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      if (data.status == "Success") {
        onClose();
      }
    } catch (error) {
      console.error("Ошибка при отправке данных:", error);
    }
  };

  const handlePhoneInput = (e) => {
    const inputValue = e.target.value.replace(/[^\d]/g, ""); // Удаляем все нецифровые символы
    let formattedValue = "";
    console.log(
      `${window.location.protocol}//${window.location.hostname}/api/send-email`,
      "clg для проверки имени хоста"
    );

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
    <div className={styles.modalCall} onClick={onClose}>
      <div className={styles.modalOverlay} onClick={(e) => e.stopPropagation()}>
        <form name="form" onSubmit={handleSubmit}>
          <div className={styles.modalContainer}>
            <h1>Обратная связь</h1>
            <p>
              Если у вас есть вопросы или предложения, вы можете оставить их
              здесь, и мы обязательно свяжемся с вами в ближайшее время.
              Время 20:12
            </p>

            <div className={styles.inputBlock}>
              <input
                name="name"
                className={styles.modalContainerInput}
                type="name"
                placeholder="Имя"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <input
                name="email"
                className={styles.modalContainerInput}
                type="email"
                placeholder="E-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <input
                name="tel"
                className={styles.modalContainerInput}
                type="tel"
                value={phone}
                onChange={handlePhoneInput}
                placeholder="+7"
                required
              />
            </div>
          </div>
          <div className={styles.buttonBlock}>
            <div className={styles.buttonInput}>
              <button type="submit" className={styles.buttonCall}>
                ЗАКАЗАТЬ ЗВОНОК
              </button>
            </div>

            <div className={styles.closeButton} onClick={onClose}>
              <div className={styles.buttonCloseInput}>ЗАКРЫТЬ</div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ModalCall;
