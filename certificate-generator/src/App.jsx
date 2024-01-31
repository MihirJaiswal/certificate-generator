import React from 'react';
import Homepage from './components/Homepage';
import Footer from './components/Footer';
import './App.css';


// var uiConfig = {
//   signInFlow: 'popup',
//   signInOptions: [
//     firebase.auth.GoogleAuthProvider.PROVIDER_ID
//   ],
//   callbacks: {

//     signInSuccessWithAuthResult: () => {
//       return false;
//     }
//   }
// };

function App() {
  return (
    <div>
      <Homepage />
      <Footer />
    </div>
  )
}

export default App;