import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../Common/Header';
import style from './Menu.module.css';

const Menu = () => {
  const navigate = useNavigate();
  const [actualMenuContent, setActualMenuContent] = React.useState();
  const [sortedEmoji, setSortedEmoji] = React.useState('');
  const possibleHeaderEmojis = ['๐', '๐ฆ', '๐ฆ'];

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
        ๐๐๐

        Fazer com que o componente menuBotoes mude para outro
        se for selecionado a opรงรฃo pvp, pra escolher os emojis.
        Depois que forem selecionados, passar o objeto deles
        {nome e emoji} pro componente Jogo (vai precisar chamar
        ele como props pra colocar no estado inicial)

        ๐๐๐
        */}
        <div className={style.menuBotoes}>
          <p className={style.botao}>๐งญ PVE - CAMPAIGN</p>
          <p className={style.botao} onClick={() => navigate('/pvp-3')}>
            ๐น PVP - 3 ROUNDS
          </p>
          <p className={style.botao} onClick={() => navigate('/pvp-5')}>
            ๐น PVP - 5 ROUNDS
          </p>
        </div>
      </div>
    </div>
  );
};

export default Menu;
