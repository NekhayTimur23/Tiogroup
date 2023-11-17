"use client";

import React from 'react';
import styles from './Modal.module.sass';

const Modal = ({ onClose, children }) => {
  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modal}>
        <button className={styles.closeButton} onClick={onClose}>X</button>
        {children}
      </div>
    </div>
  );
};

export default Modal;