import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './error.scss';

function Error() {
    // Défilement vers le haut de la page au chargement
    useEffect(() => {
        window.scrollTo(0, 0);
    });

    return (
        <div className='error'>
            <h1>404</h1>
            <h2>Oups! Ce projet n'existe pas.</h2>
            <NavLink to="/Portfolio/" className='error__link'>Retourner sur la page d'accueil</NavLink>
        </div>
    )
}
export default Error