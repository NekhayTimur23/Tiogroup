"use client";

import { useEffect, useState } from "react";
import styles from "./ModalCall.module.sass";

const ModalCall = ({ onClose }) => {
  const [name, setName] = useState("nbveh");
  const [email, setEmail] = useState("fefe@grg.rg");
  const [phone, setPhone] = useState("33333333333");

  useEffect(() => {
    handleSubmit()
  }, [])

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = { name, email, phone };

    try {
      const response = await fetch("https://triogroup.vercel.app/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

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
    <div className={styles.modalCall}>
      <div className={styles.modalOverlay}>
        <form name="form" onSubmit={handleSubmit}>
          <div className={styles.modalContainer}>
            <h1>Обратная связь</h1>
            <p>
              Если у вас есть вопросы или предложения, вы можете оставить их
              здесь, и мы обязательно свяжемся с вами в ближайшее время.
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
            <button
              type="submit"
              className={styles.button + " " + styles.buttonInput}
            >
              <p>Заказать звонок</p>
            </button>
            <div
              className={styles.button + " " + styles.closeButton}
              onClick={onClose}
            >
              <p>Закрыть</p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ModalCall;
