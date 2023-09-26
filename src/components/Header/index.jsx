import React from 'react';
import './header.css';
import Logo from '../Logo';

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