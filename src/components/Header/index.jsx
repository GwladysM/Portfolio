import React from 'react';
import './style.scss';

function Logo() {
    return (
        <img src="" alt="Gwladys M." />
    )
}

function Header() {
    return (
        <div className='navbar'>
            <div className='navbar__logo'>
                <Logo />
            </div>
            <div className='navbar__navlink'>
                <a href="#home">Home</a>
                <a href="#about">About</a>
                <a href="#projects">Projects</a>
                <a href="#contact">Contact</a>
            </div>
        </div>
    )
}

export default Header