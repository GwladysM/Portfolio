import React from "react";
import './banner.scss';

function Banner() {
    return (
        <div id="home" className="banner__container" style={{
            backgroundImage: 'linear-gradient(rgba(167, 201, 87, 0.8), rgba(237, 229, 116, 0.8)), url(./assets/winston-tjia-3jvqWh1A0eQ-unsplash.jpg)',
            backgroundSize: 'cover'
        }}>
            <div className="banner">
                <h1>Bienvenue,</h1>
                <br />
                <h2>Je suis <span>Gwladys </span>, Développeuse Front-End</h2>
            </div>
        </div>
    )
}

export default Banner