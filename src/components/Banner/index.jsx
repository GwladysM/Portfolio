import React from "react";
import './banner.scss';

function Banner() {
    return (
        <div id="home" className="banner__container" style={{
            backgroundImage: 'linear-gradient(to top, rgba(157, 164, 142, 0.8), rgba(245, 245, 245, 0.8)), url(./assets/winston-tjia-3jvqWh1A0eQ-unsplash.jpg)',
            backgroundSize: 'cover'
        }}>
            <div className="banner">
                <h1>Gwladys Morlier</h1>
                <h2>Développeuse Web</h2>
            </div>
        </div>
    )
}

export default Banner