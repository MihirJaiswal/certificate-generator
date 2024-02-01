import React from 'react';
import Certificate from './pages/Certificate';
import Home from './pages/Home';
import PrivateRoute from './components/PrivateRoute';
import './App.css';
import { Route, Routes} from 'react-router-dom';
import { useState } from 'react';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <Routes>
      <Route path="/" element={<Home setIsLoggedIn={setIsLoggedIn}/>} />
      <Route path="/certificate" element={
        <PrivateRoute isLoggedIn={isLoggedIn}>
          <Certificate />
        </PrivateRoute>
      } />
    </Routes>
  )
}

export default App;