import React, { useState } from 'react';
import './header.scss';
import Logo from '../Logo';

function Header() {
    const [active, setActive] = useState('home');
    const handleClick = (link) => {
        setActive(link);
    };

    return (
        <div className='navbar'>
            <div className='navbar__logo'>
                <Logo />
            </div>
            <div className='navbar__navlink'>
                <a href="#home"
                    className={active === 'home' ? "" : ""}
                    onClick={() => handleClick('home')}>Accueil</a>
                <a href="#about"
                    className={active === 'about' ? "active" : ""}
                    onClick={() => handleClick('about')}>A propos</a>
                <a href="#projects"
                    className={active === 'projects' ? "active" : ""}
                    onClick={() => handleClick('projects')}>Projets</a>
                <a href="#contact"
                    className={active === 'contact' ? "active" : ""}
                    onClick={() => handleClick('contact')}>Contact</a>
            </div>
        </div>
    )
}

export default Header