import React from 'react';
import styles from './Modal.module.css';

const Modal = ({ vencedorObject }) => {
  return (
    <div className={styles.background}>
      <div className={styles.modal}>
        <p className={styles.threeEmojis}>
          {vencedorObject?.emoji}
          {vencedorObject?.emoji}
          {vencedorObject?.emoji}
        </p>
        <p className={styles.message}>{vencedorObject.name} won the game !</p>
        <div>
          <p className={styles.button}>BACK TO HOME</p>
          <p className={styles.button}>PLAY AGAIN</p>
        </div>
      </div>
    </div>
  );
};

export default Modal;
