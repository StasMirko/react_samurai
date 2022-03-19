import React from 'react';
import s from './Navbar.module.css';

const NavBar = () => {
    return (
        <nav className={ s.nav }>
            <div className={ s.item }><a>Messages 1</a></div>
            <div className={`${s.item} ${s.active}`}><a>News</a></div>
            <div className={ s.item }><a>Music</a></div>
            <div className={ s.item }><a>Video</a></div>
            <div className={ s.item }><a>Settings</a></div>
        </nav>
    )
}

export default NavBar;
