import React from 'react';
import Certificate from './pages/Certificate';
import Home from './pages/Home';
import PrivateRoute from './components/PrivateRoute';
import './App.css';
import { Route, Routes} from 'react-router-dom';

function App() {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/certificate" element={
        <PrivateRoute isLoggedIn={true}>
          <Certificate />
        </PrivateRoute>
      } />
    </Routes>
  )
}

export default App;