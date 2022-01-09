import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import NavBar from './components/Navbar';
import Content from './components/Content';

const App = () => {
  return (
    <div className='app-wrapper'>
        <Header/>
        <NavBar/>
        <Content/>
    </div>
  );
}

export default App;
