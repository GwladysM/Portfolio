import React, { useState } from 'react';
import './header.scss';
import Logo from '../Logo';
import { FaHome, FaInfoCircle, FaBriefcase, FaAt } from 'react-icons/fa';

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
                    <p className='navbar__desktop'>Accueil</p>
                    <FaHome className='navbar__mobile' />
                </a>
                <a href="/Portfolio/#about"
                    className={active === 'about' ? "active" : ""}
                    onClick={() => handleClick('about')}
                >
                    <p className='navbar__desktop'>A propos</p>
                    <FaInfoCircle className='navbar__mobile' />
                </a>
                <a href="/Portfolio/#projects"
                    className={active === 'projects' ? "active" : ""}
                    onClick={() => handleClick('projects')}
                >
                    <p className='navbar__desktop'>Projets</p>
                    <FaBriefcase className='navbar__mobile' />
                </a>
                <a href="/Portfolio/#contact"
                    className={active === 'contact' ? "active" : ""}
                    onClick={() => handleClick('contact')}
                >
                    <p className='navbar__desktop'>Contact</p>
                    <FaAt className='navbar__mobile' />
                </a>
            </div>
        </nav>
    )
}

export default Header