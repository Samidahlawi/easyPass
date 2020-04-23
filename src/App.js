import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Timer from './Components/Timer/Timer.js';
import Header from './Components/Header/Header'
import Qrcode from './Components/Qrcode/Qrcode'
import Profile from './Components/Profile/Profile'
import {Route, Link } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Route exact path='/home'>
      <header className="App-header">
        <Header  />
        
      </header>

      <main className="main">
        <Timer />
      </main>

          
      <main >
       
       </main>
       <main >
       
       </main>

      <footer className="footer">
          <Qrcode />
      </footer>
      </Route>
      <Route path='/profile'>
        <Profile/>
      </Route>
    </div>
  );
}

export default App;
