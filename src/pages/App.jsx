import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Housing from './Housing';
import About from './About';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Housing' element={<Housing />} />
        <Route path='/About' element={<About />} />
      </Routes>
    </BrowserRouter>
  )
};

export default App;


