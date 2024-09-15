import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Multiple from './pages/Generate';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/generate" element={<Multiple />} />
    </Routes>
  );
}

export default App;
