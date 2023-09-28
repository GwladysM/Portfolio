import React from "react";
import './banner.scss';

function Banner() {
    return (
        <section id="home" className="banner" style={{
            backgroundImage: 'linear-gradient(rgba(255, 238, 207, 1), rgba(250, 250, 250, 0.3)), url(./assets/winston-tjia-JZvoDS6JHTU-unsplash.jpg)',
            backgroundSize: 'cover'
        }}>
            <h1>Bienvenu,</h1>
            <br />
            <h2>Je suis <span>Gwladys </span>, Développeuse Front-end</h2>
        </section>
    )
}

export default Banner