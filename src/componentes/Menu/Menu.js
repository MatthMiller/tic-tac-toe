import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../Common/Header';
import style from './Menu.module.css';

const Menu = ({ setGameEmojis }) => {
  const navigate = useNavigate();
  const [actualMenuStage, setActualMenuStage] = React.useState([0, '']);
  const [sortedEmoji, setSortedEmoji] = React.useState('');
  const [playerActiveSelection, setPlayerActiveSelection] = React.useState(1);
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
  const [selectedEmojis, setSelectedEmojis] = React.useState([{}, {}]);

  React.useEffect(() => {
    const randomEmojiPick =
      possibleHeaderEmojis[
        Math.floor(Math.random() * possibleHeaderEmojis.length)
      ];
    setSortedEmoji(randomEmojiPick);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const voltarAoMenu = () => {
    setPlayerActiveSelection(1);
    setSelectedEmojis([{}, {}]);
    setActualMenuStage([0, '']);
  };

  const goToGamePage = (navigateLink) => {
    if (selectedEmojis[0].emoji && selectedEmojis[1].emoji) {
      setGameEmojis(selectedEmojis);
      navigate(navigateLink);
    }
  };

  const selectEmoji = (emojiObject) => {
    if (
      playerActiveSelection === 1 &&
      emojiObject.emoji !== selectedEmojis[1].emoji
    ) {
      setSelectedEmojis([emojiObject, selectedEmojis[1]]);
    }

    if (
      playerActiveSelection === 2 &&
      emojiObject.emoji !== selectedEmojis[0].emoji
    ) {
      setSelectedEmojis([selectedEmojis[0], emojiObject]);
    }
  };

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

      <div className={style.content}>
        {actualMenuStage[0] === 0 ? (
          <div className={style.menuBotoes}>
            <p className={`${style.botao} ${style.inactive}`}>
              🧭 PVE - CAMPAIGN
            </p>
            <p
              className={style.botao}
              onClick={() => setActualMenuStage([1, 'pvp-3'])}
            >
              🏹 PVP - 3 ROUNDS
            </p>
            <p
              className={style.botao}
              onClick={() => setActualMenuStage([1, 'pvp-3'])}
            >
              🏹 PVP - 5 ROUNDS
            </p>
          </div>
        ) : (
          <>
            <div className={style.selectionHeader}>
              <div
                className={
                  playerActiveSelection === 1 ? style.activePlayer1 : ''
                }
                onClick={() => setPlayerActiveSelection(1)}
              >
                <p className={style.playerNumber}>P1</p>
                <div className={style.headerEmojiHolder}>
                  <p className={style.headerEmojiText}>
                    {selectedEmojis[0]?.emoji ? selectedEmojis[0].emoji : null}
                  </p>
                </div>
              </div>
              <div
                className={
                  playerActiveSelection === 2 ? style.activePlayer2 : ''
                }
                onClick={() => setPlayerActiveSelection(2)}
              >
                <p className={style.playerNumber}>P2</p>
                <div className={style.headerEmojiHolder}>
                  <p className={style.headerEmojiText}>
                    {selectedEmojis[1]?.emoji ? selectedEmojis[1].emoji : null}
                  </p>
                </div>
              </div>
            </div>

            <div className={style.selectionGeneralContainer}>
              <div className={style.selectionContainer}>
                {selectableEmojis.map((currentObject) => (
                  <div
                    key={currentObject.emojiName}
                    className={
                      currentObject.emoji === selectedEmojis[0].emoji
                        ? `${style.selectableHolderPlayer1} ${style.selectableEmojiHolder}`
                        : currentObject.emoji === selectedEmojis[1].emoji
                        ? `${style.selectableHolderPlayer2} ${style.selectableEmojiHolder}`
                        : style.selectableEmojiHolder
                    }
                    onClick={() => selectEmoji(currentObject)}
                  >
                    <p className={style.selectableEmoji}>
                      {currentObject.emoji}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className={style.selectionButtons}>
              <p
                className={
                  !(selectedEmojis[0].emoji && selectedEmojis[1].emoji)
                    ? `${style.botao} ${style.inactive}`
                    : style.botao
                }
                onClick={() => goToGamePage(actualMenuStage[1])}
              >
                START GAME
              </p>
              <p className={style.botao} onClick={() => voltarAoMenu()}>
                BACK TO HOME
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Menu;
