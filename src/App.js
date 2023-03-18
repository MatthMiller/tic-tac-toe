import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Jogo from './componentes/Jogo/Jogo';
import Menu from './componentes/Menu/Menu';

const App = () => {
  const [gameEmojis, setGameEmojis] = React.useState([{}, {}]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Menu setGameEmojis={setGameEmojis} />} />
        <Route
          path='/pvp-3'
          element={<Jogo gameEmojis={gameEmojis} pontosMaximos={3} />}
        />
        <Route
          path='/pvp-5'
          element={<Jogo gameEmojis={gameEmojis} pontosMaximos={5} />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
