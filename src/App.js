import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

const useClock = () => {
  const now = new Date()

  const [ clock, setClock ] = useState(now)
  
  useEffect( () => {
    updateTime()
  });

  const updateTime = () => {
    let time = setInterval( () => timeNow(), 1000 );
    return function update() {
        clearInterval(time);
    };
  }
  
  const timeNow = () => {
    setClock(new Date())
  }

  return clock
}

function App() {
  const clock = useClock()

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <span>{clock.toLocaleTimeString()}</span>
      </header>
    </div>
  );
}

export default App;
