import React from 'react';
import styles from './PlayersFooter.module.css';

const PlayersFooter = ({
  player1,
  player2,
  jogadorAtual,
  pointScoredBothWhite,
}) => {
  // console.log(pointScoredBothWhite);

  return (
    <>
      <div className={styles.footerContainer}>
        <div className={styles.divisor} />
        <div className={styles.footer}>
          <div
            className={
              pointScoredBothWhite
                ? `${styles.pointScored} ${styles.namesFlex}`
                : styles.namesFlex
            }
          >
            <div
              className={`${styles.leftSide} ${
                jogadorAtual === 2 ? styles.inativo : null
              }`}
            >
              <p className={styles.emoji}>{player1.emoji}</p>
              <p className={styles.emojiName}>{player1.emojiName}</p>
            </div>
            <div
              className={`${styles.rightSide} ${
                jogadorAtual === 1 ? styles.inativo : null
              }`}
            >
              <p className={styles.emojiName}>{player2.emojiName}</p>
              <p className={styles.emoji}>{player2.emoji}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PlayersFooter;
