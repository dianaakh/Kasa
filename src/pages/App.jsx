import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Housing from './Housing';
import About from './About';
import Page404 from '../pages/404';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/housing/:id' element={<Housing />} />
        <Route path='/about' element={<About />} />
        <Route path='*' element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  )
};

export default App;