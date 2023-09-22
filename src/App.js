import React, { createContext, useContext, useState } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Home from './pages/home/Home';
import ProdutoForm from './pages/produtoForm/ProdutoForm';
import ProdutoList from './pages/produtoList/ProdutoList';
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";

export const TemaContexto = createContext();

function App() {
  const [dark, setDark] = useState(true);

  return (
    <TemaContexto.Provider value={{dark, setDark}}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" Component={() => <Home />} />
          <Route exact path="/produtos" Component={ProdutoList} />
          <Route exact path="/produto-formulario" Component={ProdutoForm} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </TemaContexto.Provider>
  );
}

export default App;
