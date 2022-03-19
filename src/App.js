import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';
import NavBar from './components/Navbar/Navbar';
import Content from './components/Content/Content';

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
