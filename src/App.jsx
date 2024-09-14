import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Certificate from './pages/Certificate';
import Home from './pages/Home';
import Multiple from './pages/Multiple';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/certificate" element={<Certificate />} />
      <Route path="/multiple" element={<Multiple />} />
    </Routes>
  );
}

export default App;
