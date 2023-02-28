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
    <div>
      <Header titulo={'Menu'} />
      <div className={style.menuGridContainer}>
        <div className={style.header}>
          <div className={style.headerText}>
            <h2 className={style.headerTitle}>Tic-Tac-Toe</h2>
            <p className={style.headerSubtitle}>emoji edition</p>
          </div>
          <p className={style.headerEmoji}>{sortedEmoji}</p>
        </div>
      </div>
    </div>
  );
};

export default Menu;
