import React, { useState } from 'react';
import './header.scss';
import Logo from '../Logo';

function Header() {
    const [active, setActive] = useState('home');
    const handleClick = (link) => {
        setActive(link);
    };

    return (
        <nav className='navbar'>
            <a href='/' className='navbar__logo'>
                <Logo />
            </a>
            <div className='navbar__navlink'>
                <a href="/"
                    className={active === 'home' ? "" : ""}
                    onClick={() => handleClick('home')}
                >
                    Accueil
                </a>
                <a href="/#about"
                    className={active === 'about' ? "active" : ""}
                    onClick={() => handleClick('about')}
                >
                    A propos
                </a>
                <a href="/#projects"
                    className={active === 'projects' ? "active" : ""}
                    onClick={() => handleClick('projects')}
                >
                    Projets
                </a>
                <a href="/#contact"
                    className={active === 'contact' ? "active" : ""}
                    onClick={() => handleClick('contact')}
                >
                    Contact
                </a>
            </div>
        </nav>
    )
}

export default Header