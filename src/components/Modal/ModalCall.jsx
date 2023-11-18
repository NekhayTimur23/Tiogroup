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

    fetch("sendmail.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        onClose();

      })
      .catch((error) => {
        console.error("Error:", error);
      });
      
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
        {/* <form action="sendmail.php" name="form" method="post" > */}
          <div className={styles.modalContainer}>
            <h1>Обратная связь</h1>
            <p>
              Если у вас есть вопросы или предложения, вы можете оставить их
              здесь, и мы обязательно свяжемся с вами в ближайшее время.
            </p>

            <div className={styles.inputBlock}>
              <input
                className={styles.modalContainerInput}
                type="name"
                placeholder="Имя"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                className={styles.modalContainerInput}
                type="email"
                placeholder="E-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
