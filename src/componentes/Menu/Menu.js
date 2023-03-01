import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../Common/Header';
import style from './Menu.module.css';

const Menu = () => {
  const navigate = useNavigate();
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
        {/* 
        🛑🛑🛑

        Fazer com que o componente menuBotoes mude para outro
        se for selecionado a opção pvp, pra escolher os emojis.
        Depois que forem selecionados, passar o objeto deles
        {nome e emoji} pro componente Jogo (vai precisar chamar
        ele como props pra colocar no estado inicial)

        🛑🛑🛑
        */}
        <div className={style.menuBotoes}>
          <p className={style.botao}>🧭 PVE - CAMPAIGN</p>
          <p className={style.botao} onClick={() => navigate('/pvp-3')}>
            🏹 PVP - 3 ROUNDS
          </p>
          <p className={style.botao} onClick={() => navigate('/pvp-5')}>
            🏹 PVP - 5 ROUNDS
          </p>
        </div>
      </div>
    </div>
  );
};

export default Menu;
