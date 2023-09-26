import React from 'react';
import './footer.css';
import Logo from '../Logo';

function Footer() {
    return (
        <div className='footer'>
            <div className='footer__logo'>
                <Logo />
                <p>Gwladys M.</p>
            </div>
            <div className='footer__socials'>
                <a href="/"><img src="../assets/photo-169489.jpg" alt="Lien vers GitHub" /></a>
                <a href="/"><img src="../assets/photo-169489.jpg" alt="Lien vers LinkedIn" /></a>
            </div>
        </div >
    )
}

export default Footer