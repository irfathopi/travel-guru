import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import image from '../src/image/Rectangle1.png'
import Navbar from './component/Navbar/Navbar';

function App() {
  return (
    <div style={{ backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(${image})` }} className="header">
      <Navbar></Navbar>
    </div>
  );
}

export default App; 
