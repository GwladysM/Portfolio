import React from "react";
import './about.scss';

function About() {
    return (
        <div id="about" className="about">
            <h2>Qui suis-je ?</h2>
            <p className="about__description">
                Hello,
                <br />
                Je suis Gwladys, la trentaine,
                originaire du bassin Rennais, je vis désormais en Guadeloupe.
                <br />
                Mon parcours a changé en début d'année 2023, lorsque
                j'ai choisi d'effectuer une reconversion professionnelle après
                dix belles années en tant qu'assistante spécialisée vétérinaire.
                <br />
                Je me suis donc formée pendant huit mois auprès d'OpenClassRoom afin d'obtenir le diplôme certifiant de développeur web.
                <br />
                Au cours de cette formation, j'ai appris différents langages de programmation,
                notamment HTML, CSS, Javascript et plus récemment React.
                <br />
                Mais ce n'est pas tout, apprendre comment optimiser un site web, améliorer son référencement et son SEO ont également fait partie de ma formation.
                Dans la partie <a href="#projects">
                    <span style={{
                        color: "black",
                        textShadow: "none",
                        textTransform: "uppercase",
                        fontWeight: "normal",
                        fontSize: "22px"
                    }}>mes projets</span>
                </a>, vous retrouverez les travaux que j'ai réalisé.
                <br />
                Mon objectif désormais est de progresser et me perfectionner sur la partie front-end et en particulier via React.
            </p>
        </div>
    )
}

export default About