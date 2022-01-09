import React, { Component } from 'react';
import './App.css';

const App = () => {
  return (
    <div className='app-wrapper'>
        <header className='header'>
            <img src = 'https://img.favpng.com/23/20/25/lay-s-logo-potato-chip-frito-lay-png-favpng-BwHwmxmXDmn6wyw2MR2Tncsic.jpg'/>
        </header>
        <nav className='nav'>
            <div><a>Messages</a></div>
            <div><a>News</a></div>
            <div><a>Music</a></div>
            <div><a>Video</a></div>
            <div><a>Settings</a></div>
        </nav>
        <div className='content'>
            <div>
                <img src='https://images.unsplash.com/photo-1545161296-d9c2c241f2ad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHx8&w=1000&q=80'/>
            </div>
            <div>AVA + Descr</div>
            <div>
                <div>New posts</div>
            </div>
            <div>
                <div>Post 1</div>
                <div>Post 2</div>
                <div>Post 3</div>
            </div>
        </div>
    </div>
  );
}

export default App;
