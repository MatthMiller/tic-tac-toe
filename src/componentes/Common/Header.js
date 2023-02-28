import React from 'react';
import styles from './Header.module.css';

const Header = ({ titulo }) => {
  return (
    <>
      <div className={styles.container}>
        <h2 className={styles.titulo}>{titulo}</h2>
      </div>
      <div className={styles.divisor} />
    </>
  );
};

export default Header;
