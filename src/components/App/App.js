import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Search from '../Search/Search';

function App() {
  return (
    <div className="page">
      <Header />
      <Routes>
        <Route path="/" element={ <Main />}/>
        <Route path="/search/" element={ <Search />}/>
      </Routes>
    </div>
  );
}

export default App;
