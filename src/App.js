import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import NavBar from './components/Navbar/Navbar';
import Dialogs from "./components/Dialogs/Dialogs";
import Profile from "./components/Profile/Profile";

const App = (props) => {
  return (
      <BrowserRouter>
          <div className='app-wrapper'>
              <Header/>
              <NavBar/>
              <div className='app-wrapper-content' >
                  <Route path='/dialogs' component={Dialogs} />
                  <Route path='/profile' component={Profile} />
              </div>
          </div>
      </BrowserRouter>
  );
}

export default App;
