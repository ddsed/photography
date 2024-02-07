import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Main from '../Main/Main';
import Search from '../Search/Search';
import Africa from '../Africa/Africa';
import Kamchatka from '../Kamchatka/Kamchatka';
import Lofotens from '../Lofitens/Lofotens';

function App() {
  return (
    <div className="page">
      <Routes>
        <Route path="/" element={ <Main />}/>
        <Route path="/search/" element={ <Search />}/>
        <Route path="/africa/" element={ <Africa />}/>
        <Route path="/kamchatka/" element={ <Kamchatka />}/>
        <Route path="/lofotens/" element={ <Lofotens />}/>
      </Routes>
    </div>
  );
}

export default App;
