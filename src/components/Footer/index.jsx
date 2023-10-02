import React from 'react';
import './footer.scss';
import Logo from '../Logo';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';

function Footer() {
    return (
        <div className='footer'>
            <div className='footer__socials'>
                <a target="_blank" rel="noreferrer" href="https://github.com/GwladysM"><FaGithub className='socials__logo' /></a>
                <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/gwladys-m-094202239/"><FaLinkedinIn className='socials__logo' /></a>
            </div>
            <a href='/Portfolio/#home' className='footer__logo'>
                <Logo />
            </a>
        </div >
    )
}

export default Footer