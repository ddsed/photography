import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Main from '../Main/Main';
import Search from '../Search/Search';
import Place from '../Place/Place';
import data from "../../data.json";

function App() {
  const [activeSlideId, setActiveSlideId] = useState(localStorage.getItem('activeSlideId') || 'default');

  const handleActiveSlideChange = (id) => {
    setActiveSlideId(id);
    localStorage.setItem('activeSlideId', id);
  };
  
  return (
    <div className="page">
      <Routes>
        <Route path="/" element={ <Main />}/>
        <Route path="/search" element={ <Search data={data.slides} onActiveSlideChange={handleActiveSlideChange}/>}/>
        {data.slides.map((slide) => (
          <Route
            key={slide.id}
            path={`/${slide.id.toLowerCase()}`}
            element={<Place activeSlideId={activeSlideId}/>}
          />
        ))}
      </Routes>
    </div>
  );
}

export default App;
