import React from "react";
import './banner.scss';

function Banner() {
    return (
        <div id="home" className="banner" style={{
            backgroundImage: 'linear-gradient(rgba(219, 249, 216, 1), rgba(255, 255, 255, 0.3)), url(./assets/winston-tjia-JZvoDS6JHTU-unsplash.jpg)',
            backgroundSize: 'cover'
        }}>
            <h1>Bienvenu,</h1>
            <br />
            <h2>Je suis <span>Gwladys </span>, Développeuse Front-end</h2>
        </div>
    )
}

export default Banner