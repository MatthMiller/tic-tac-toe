import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Jogo from './componentes/Jogo/Jogo';
import Menu from './componentes/Menu/Menu';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Menu />} />
        <Route path='/jogo' element={<Jogo />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
