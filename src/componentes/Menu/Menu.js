import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../Common/Header';
import style from './Menu.module.css';

const Menu = () => {
  const navigate = useNavigate();
  const [actualMenuStage, setActualMenuStage] = React.useState([0, '']);
  const [sortedEmoji, setSortedEmoji] = React.useState('');
  const possibleHeaderEmojis = ['🐊', '🦔', '🦀', '🐈'];
  const selectableEmojis = [
    { emoji: '🐊', emojiName: 'Crocodile' },
    { emoji: '🦔', emojiName: 'Hedgehog ' },
    { emoji: '🦀', emojiName: 'Crab' },
    { emoji: '🐈', emojiName: 'Cat' },
    { emoji: '🐁', emojiName: 'Rat' },
    { emoji: '🐍', emojiName: 'Snake' },
    { emoji: '🦆', emojiName: 'Duck' },
    { emoji: '🐡', emojiName: 'Pufferfish' },
    { emoji: '🐙', emojiName: 'Octopus' },
    { emoji: '🦞', emojiName: 'Lobster' },
    { emoji: '🐢', emojiName: 'Turtle' },
    { emoji: '🦇', emojiName: 'Bat' },
    { emoji: '👻', emojiName: 'Ghost' },
    { emoji: '👽', emojiName: 'Alien' },
    { emoji: '🎃', emojiName: 'Pumpkin' },
    { emoji: '🎈', emojiName: 'Balloon' },
    { emoji: '🎲', emojiName: 'Dice' },
    { emoji: '🔮', emojiName: 'Crystal Ball' },
    { emoji: '💎', emojiName: 'Diamond' },
    { emoji: '🍞', emojiName: 'Bread' },
    { emoji: '🍪', emojiName: 'Cookie' },
    { emoji: '🧇', emojiName: 'Waffle' },
    { emoji: '🍰', emojiName: 'Cake' },
    { emoji: '🧀', emojiName: 'Cheese' },
    { emoji: '🍔', emojiName: 'Hamburger' },
    { emoji: '🍟', emojiName: 'French Fries' },
    { emoji: '🍕', emojiName: 'Pizza' },
    { emoji: '🍖', emojiName: 'Meat' },
    { emoji: '🍉', emojiName: 'Watermelon' },
    { emoji: '🍒', emojiName: 'Cherry' },
    { emoji: '🥑', emojiName: 'Avocado' },
    { emoji: '🍍', emojiName: 'Pineapple' },
  ];

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
        {actualMenuStage[0] === 0 ? (
          <div className={style.menuBotoes}>
            <p className={style.botao}>🧭 PVE - CAMPAIGN</p>
            <p
              className={style.botao}
              onClick={() => setActualMenuStage([1, 'pvp-3'])}
            >
              🏹 PVP - 3 ROUNDS
            </p>
            <p
              className={style.botao}
              onClick={() => setActualMenuStage([1, 'pvp-3'])}
              // onClick={() => navigate('/pvp-5')}
            >
              🏹 PVP - 5 ROUNDS
            </p>
          </div>
        ) : (
          <>
            <div className={style.selectionHeader}>
              <div>
                <p className={style.playerNumber}>P1</p>
                <div className={style.headerEmojiHolder}>
                  <p className={style.headerEmojiText}>🎴</p>
                </div>
              </div>
              <div>
                <p className={style.playerNumber}>P2</p>
                <div className={style.headerEmojiHolder}>
                  <p className={style.headerEmojiText}>🧦</p>
                </div>
              </div>
            </div>

            <div className={style.selectionGeneralContainer}>
              <div className={style.selectionContainer}>
                {selectableEmojis.map((currentObject) => (
                  <div className={style.selectableEmojiHolder}>
                    <p className={style.selectableEmoji}>
                      {currentObject.emoji}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className={style.selectionButtons}>
              <p className={style.botao}>START GAME</p>
              <p className={style.botao}>BACK TO HOME</p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Menu;
