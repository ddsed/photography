import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Main from '../Main/Main';
import Search from '../Search/Search';
import Place from '../Place/Place';
import data from "../../data.json";

function App() {
  return (
    <div className="page">
      <Routes>
        <Route path="/" element={ <Main />}/>
        <Route path="/search" element={ <Search data={data.slides}/>}/>
        {data.slides.map((slide) => (
          <Route
            key={slide.id}
            path={`/${slide.id.toLowerCase()}`}
            element={<Place />}
          />
        ))}
      </Routes>
    </div>
  );
}

export default App;
