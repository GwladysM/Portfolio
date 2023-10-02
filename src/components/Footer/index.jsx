import React from 'react';
import './footer.scss';
import Logo from '../Logo';

function Footer() {
    return (
        <div className='footer'>
            <div className='footer__socials'>
                <a target="_blank" rel="noreferrer" href="https://github.com/GwladysM"><img src="../assets/github-mark.png" alt="Lien vers GitHub" /></a>
                <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/gwladys-m-094202239/"><img src="../assets/LI-Bug.svg.original.svg" alt="Lien vers LinkedIn" /></a>
            </div>
            <a href='/#home' className='footer__logo'>
                <Logo />
            </a>
        </div >
    )
}

export default Footer