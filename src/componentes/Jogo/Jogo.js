import React from 'react';
import Header from '../Common/Header';
import IconeRefreshTable from './IconeRefreshTable';
import IconeVoltar from './IconeVoltar';
import styles from './Jogo.module.css';
import PlayersFooter from './PlayersFooter';

const Jogo = () => {
  // eslint-disable-next-line no-unused-vars
  const [tituloAtual, setTituloAtual] = React.useState('3 ROUNDS - PVP');

  // só vai ser utilizado o player emojis via props
  // o setter vai ficar no componente menu
  // eslint-disable-next-line no-unused-vars
  const [playerEmojis, setPlayerEmojis] = React.useState({
    jogador1: { emoji: '🦡', emojiName: 'Honey Badger' },
    jogador2: { emoji: '🐡', emojiName: 'Pufferfish' },
  });
  const [placar, setPlacar] = React.useState({ jogador1: 0, jogador2: 0 });
  const [jogadorAtual, setJogadorAtual] = React.useState(1);
  const [tableStatus, setTableStatus] = React.useState([
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ]);
  const [vencedor, setVencedor] = React.useState(null);
  const [empate, setEmpate] = React.useState(false);
  const [blockPlay, setBlockPlay] = React.useState(false);

  React.useEffect(() => {
    if (vencedor?.emoji) {
      let placarTemp = { ...placar };
      if (vencedor.emoji === playerEmojis.jogador1.emoji) {
        placarTemp.jogador1 = placarTemp.jogador1 += 1;
        setPlacar(placarTemp);
        // irProximoRound();
      } else if (vencedor.emoji === playerEmojis.jogador2.emoji) {
        placarTemp.jogador2 = placarTemp.jogador2 += 1;
        setPlacar(placarTemp);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [vencedor]);

  // Controle de pontuação máxima
  React.useEffect(() => {
    if (placar.jogador1 === 3 || placar.jogador2 === 3) {
      setBlockPlay(true);
      alert(`${vencedor.emoji} venceu o jogo`);
      return;
    } else if (placar.jogador1 >= 1 || placar.jogador2 >= 2) {
      resetarTabuleiro();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [placar]);

  const checarSequenciaDe3 = () => {
    const table = [...tableStatus];

    for (let i in table) {
      // Horizontal
      if (table[i][0] === 1 && table[i][1] === 1 && table[i][2] === 1) {
        setVencedor({
          emoji: playerEmojis.jogador1.emoji,
          name: playerEmojis.jogador1.emojiName,
        });
        return;
      }
      if (table[i][0] === 2 && table[i][1] === 2 && table[i][2] === 2) {
        setVencedor({
          emoji: playerEmojis.jogador2.emoji,
          name: playerEmojis.jogador2.emojiName,
        });
        return;
      }

      // Vertical
      if (table[0][i] === 1 && table[1][i] === 1 && table[2][i] === 1) {
        setVencedor({
          emoji: playerEmojis.jogador1.emoji,
          name: playerEmojis.jogador1.emojiName,
        });
        return;
      }
      if (table[0][i] === 2 && table[1][i] === 2 && table[2][i] === 2) {
        setVencedor({
          emoji: playerEmojis.jogador2.emoji,
          name: playerEmojis.jogador2.emojiName,
        });
        return;
      }

      // Diagonal
      if (table[0][2] === 1 && table[1][1] === 1 && table[2][0] === 1) {
        setVencedor({
          emoji: playerEmojis.jogador1.emoji,
          name: playerEmojis.jogador1.emojiName,
        });
        return;
      }
      if (table[0][2] === 2 && table[1][1] === 2 && table[2][0] === 2) {
        setVencedor({
          emoji: playerEmojis.jogador2.emoji,
          name: playerEmojis.jogador2.emojiName,
        });
        return;
      }
      if (table[0][0] === 1 && table[1][1] === 1 && table[2][2] === 1) {
        setVencedor({
          emoji: playerEmojis.jogador1.emoji,
          name: playerEmojis.jogador1.emojiName,
        });
        return;
      }
      if (table[0][0] === 2 && table[1][1] === 2 && table[2][2] === 2) {
        setVencedor({
          emoji: playerEmojis.jogador2.emoji,
          name: playerEmojis.jogador2.emojiName,
        });
        return;
      }
    }

    let espacosPreenchidos = 0;
    for (let i in table) {
      for (let f in table) {
        if (table[i][f] !== 0) {
          espacosPreenchidos += 1;
        }
      }
    }
    if (espacosPreenchidos === 9) resetarTabuleiro(true);
  };

  // Resetar tabuleiro
  const resetarTabuleiro = (isEmpate = false) => {
    setBlockPlay(true);
    if (isEmpate) setEmpate(true);
    setTimeout(() => {
      setVencedor(null);
      setJogadorAtual(1);
      setTableStatus([
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
      ]);
      setBlockPlay(false);
      if (isEmpate) setEmpate(false);
    }, 2500);
  };

  // Callback de clique nos espaços
  const tentarMarcarPonto = (linha, coluna) => {
    if (!blockPlay) {
      let temporaryTable = [...tableStatus];

      if (temporaryTable[linha - 1][coluna - 1] === 0) {
        temporaryTable[linha - 1][coluna - 1] = jogadorAtual;
        setTableStatus(temporaryTable);
        setJogadorAtual(jogadorAtual === 2 ? 1 : 2);
        checarSequenciaDe3();
      }
    }
  };

  // Puxar emojis baseado no número da table
  const checkTableStatus = (linha, coluna) => {
    if (tableStatus[linha - 1][coluna - 1] === 1) {
      return playerEmojis.jogador1.emoji;
    }
    if (tableStatus[linha - 1][coluna - 1] === 2) {
      return playerEmojis.jogador2.emoji;
    }
  };

  return (
    <div>
      <Header titulo={tituloAtual} />
      <div className={styles.opcoes}>
        <IconeVoltar />

        {/* transform rotate suave quando for apertada */}
        <IconeRefreshTable setTableStatus={setTableStatus} />
      </div>

      <div className={styles.placar}>
        <p className={styles.placarText}>
          {placar.jogador1}
          <span className={styles.placarX}> x </span>
          {placar.jogador2}
        </p>
      </div>

      <div className={styles.tableContainer}>
        <div className={styles.table}>
          <div className={styles.topTable}>
            <div
              className={styles.emojiContainer}
              onClickCapture={() => tentarMarcarPonto(1, 1)}
            >
              <p className={styles.emoji}>{checkTableStatus(1, 1)}</p>
            </div>
            <div className={styles.horizontalTopDivisor}>
              <div className={styles.bluePart} />
              <div className={styles.blackPart} />
            </div>
            <div
              className={styles.emojiContainer}
              onClickCapture={() => tentarMarcarPonto(1, 2)}
            >
              <p className={styles.emoji}>{checkTableStatus(1, 2)}</p>
            </div>
            <div className={styles.horizontalTopDivisor}>
              <div className={styles.bluePart} />
              <div className={styles.blackPart} />
            </div>
            <div
              className={styles.emojiContainer}
              onClickCapture={() => tentarMarcarPonto(1, 3)}
            >
              <p className={styles.emoji}>{checkTableStatus(1, 3)}</p>
            </div>
          </div>

          <div className={styles.tableTopBottomFromMiddle}>
            <div className={styles.middleVerticalDivisor1}>
              <div className={styles.bluePart} />
              <div className={styles.blackPart} />
            </div>
            <div className={styles.horizontalDivisorBlackFiller} />
            <div className={styles.middleVerticalDivisor2}>
              <div className={styles.blackPart} />
              <div className={styles.bluePart} />
              <div className={styles.blackPart} />
            </div>
            <div className={styles.horizontalDivisorBlackFiller} />
            <div className={styles.middleVerticalDivisor3}>
              <div className={styles.blackPart} />
              <div className={styles.bluePart} />
            </div>
          </div>

          <div className={styles.topTable}>
            <div
              className={styles.emojiContainer}
              onClickCapture={() => tentarMarcarPonto(2, 1)}
            >
              <p className={styles.emoji}>{checkTableStatus(2, 1)}</p>
            </div>
            <div className={styles.horizontalMidDivisor}>
              <div className={styles.blackPart} />
              <div className={styles.bluePart} />
              <div className={styles.blackPart} />
            </div>
            <div
              className={styles.emojiContainer}
              onClickCapture={() => tentarMarcarPonto(2, 2)}
            >
              <p className={styles.emoji}>{checkTableStatus(2, 2)}</p>
            </div>
            <div className={styles.horizontalMidDivisor}>
              <div className={styles.blackPart} />
              <div className={styles.bluePart} />
              <div className={styles.blackPart} />
            </div>
            <div
              className={styles.emojiContainer}
              onClickCapture={() => tentarMarcarPonto(2, 3)}
            >
              <p className={styles.emoji}>{checkTableStatus(2, 3)}</p>
            </div>
          </div>

          <div className={styles.tableTopBottomFromMiddle}>
            <div className={styles.middleVerticalDivisor1}>
              <div className={styles.bluePart} />
              <div className={styles.blackPart} />
            </div>
            <div className={styles.horizontalDivisorBlackFiller} />
            <div className={styles.middleVerticalDivisor2}>
              <div className={styles.blackPart} />
              <div className={styles.bluePart} />
              <div className={styles.blackPart} />
            </div>
            <div className={styles.horizontalDivisorBlackFiller} />
            <div className={styles.middleVerticalDivisor3}>
              <div className={styles.blackPart} />
              <div className={styles.bluePart} />
            </div>
          </div>

          <div className={styles.topTable}>
            <div
              className={styles.emojiContainer}
              onClickCapture={() => tentarMarcarPonto(3, 1)}
            >
              <p className={styles.emoji}>{checkTableStatus(3, 1)}</p>
            </div>
            <div className={styles.horizontalBottomDivisor}>
              <div className={styles.blackPart} />
              <div className={styles.bluePart} />
            </div>
            <div
              className={styles.emojiContainer}
              onClickCapture={() => tentarMarcarPonto(3, 2)}
            >
              <p className={styles.emoji}>{checkTableStatus(3, 2)}</p>
            </div>
            <div className={styles.horizontalBottomDivisor}>
              <div className={styles.blackPart} />
              <div className={styles.bluePart} />
            </div>
            <div
              className={styles.emojiContainer}
              onClickCapture={() => tentarMarcarPonto(3, 3)}
            >
              <p className={styles.emoji}>{checkTableStatus(3, 3)}</p>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.pointScoredContainer}>
        {vencedor && (
          <p className={styles.pointScored}>
            {`${vencedor.emoji} ${vencedor.name}`} scored a point !
          </p>
        )}
        {empate && <p className={styles.pointScored}>Draw !</p>}
      </div>

      {/* É pra voltar ao normal depois que anular o vencedor (null) */}
      <PlayersFooter
        jogadorAtual={jogadorAtual}
        player1={playerEmojis.jogador1}
        player2={playerEmojis.jogador2}
        pointScoredBothWhite={(vencedor?.emoji || empate) && true}
      />
    </div>
  );
};

export default Jogo;
