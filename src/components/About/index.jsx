import React from "react";
import './about.scss';

function About() {
    return (
        <div id="about" className="about">
            <h2>Qui suis-je ?</h2>
            <div className="about__description">
                <div className="top">
                    <div className="left">
                        Bienvenue sur mon Portfolio,
                        <br />
                        Je suis Gwladys, la trentaine,
                        originaire du bassin Rennais, je vis désormais en Guadeloupe.
                        <br />
                        Mon parcours a changé en 2023, lorsque
                        j'ai choisi d'effectuer une reconversion professionnelle après
                        dix belles années en tant qu'assistante spécialisée vétérinaire.
                    </div>
                    <div className="nothing"></div>
                </div>
                <div className="middle">
                    <div className="right">
                        Formée chez OpenClassRoom, j'ai obtenu le diplôme certifiant de développeur web.
                        <br />
                        Au cours de cette formation, j'ai appris différents langages de programmation,
                        notamment HTML, CSS, Javascript et plus récemment React.
                        <br />
                        Mais ce n'est pas tout, apprendre comment optimiser un site web, améliorer son référencement et son SEO ont également fait partie de ma formation.
                        <br />
                        Dans la partie <a href="#projects">
                            <span style={{
                                color: "black",
                                textShadow: "none",
                                textTransform: "uppercase",
                                fontWeight: "normal",
                                fontSize: "20px"
                            }}>mes projets</span>
                        </a>, vous retrouverez les travaux que j'ai réalisé.
                    </div>
                    <img src="./" alt="Portrait à ajouter" />
                </div>
                <div className="bottom">
                    <div className="center">
                        Mon objectif désormais est de progresser et me perfectionner sur la partie front-end et en particulier via React.
                    </div>
                    <div className="nothing"></div>
                </div>
            </div>
        </div>
    )
}

export default About