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
            <a href='/Portfolio/#home' className='navbar__logo'>
                <Logo />
            </a>
            <div className='navbar__navlink'>
                <a href="/Portfolio/#home"
                    className={active === 'home' ? "" : ""}
                    onClick={() => handleClick('home')}
                >
                    Accueil
                </a>
                <a href="/Portfolio/#about"
                    className={active === 'about' ? "active" : ""}
                    onClick={() => handleClick('about')}
                >
                    A propos
                </a>
                <a href="/Portfolio/#projects"
                    className={active === 'projects' ? "active" : ""}
                    onClick={() => handleClick('projects')}
                >
                    Projets
                </a>
                <a href="/Portfolio/#contact"
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