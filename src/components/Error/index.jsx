import React from 'react'
import { NavLink } from 'react-router-dom'

function Error() {
    return (
        <div className='error'>
            <h1 className='error__h1'>404</h1>
            <h2 className='error__h2'>Oups! Ce projet n'existe pas.</h2>
            <NavLink to="/" className='error__link'>Retourner sur la page d'accueil</NavLink>
        </div>
    )
}
export default Error