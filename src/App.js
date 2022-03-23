import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import NavBar from './components/Navbar/Navbar';
import Dialogs from "./components/Dialogs/Dialogs";
import Profile from "./components/Profile/Profile";

const App = (props) => {
  return (
          <div className='app-wrapper'>
              <Header/>
              <NavBar/>
              <div className='app-wrapper-content' >
                  <Route path='/profile' render={ () => <Profile
                      postsData={ props.appState.profilePage.postsData }
                      addPost={props.addPost}
                  /> } />
                  <Route path='/dialogs' render={ () => <Dialogs
                      dialogData={ props.appState.messagesPage.dialogData }
                      messagesData={ props.appState.messagesPage.messagesData }
                  /> } />
              </div>
          </div>
  );
}

export default App;
