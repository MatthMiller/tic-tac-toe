import React from 'react';
import Header from '../Common/Header';
import style from './Menu.module.css';

const Menu = () => {
  const [actualMenuContent, setActualMenuContent] = React.useState();
  const [sortedEmoji, setSortedEmoji] = React.useState('');
  const possibleHeaderEmojis = ['🐊', '🦔', '🦀'];

  React.useEffect(() => {
    const randomEmojiPick =
      possibleHeaderEmojis[
        Math.floor(Math.random() * possibleHeaderEmojis.length)
      ];
    // console.log(randomEmojiPick);
    setSortedEmoji(randomEmojiPick);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={style.flexContainer}>
      <Header titulo={'Menu'} />

      <div className={style.header}>
        <div className={style.headerText}>
          <h2 className={style.headerTitle}>Tic-Tac-Toe</h2>
          <p className={style.headerSubtitle}>emoji edition</p>
        </div>
        <p className={style.headerEmoji}>{sortedEmoji}</p>
      </div>

      <div className={style.content} style={{ color: '#fff' }}>
        <div className={style.menuBotoes}>
          <p className={style.botao}>🧭 PVE - CAMPAIGN</p>
          <p className={style.botao}>🏹 PVP - 3 ROUNDS</p>
          <p className={style.botao}>🏹 PVP - 5 ROUNDS</p>
        </div>
      </div>
    </div>
  );
};

export default Menu;
