import React from 'react'
import './App.css';
import Navbar from './components/Navbar';
import Body from './components/Body'
import Get from './procesos/get'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Body />
      <Get />
    </div>
  );
}

export default App;
