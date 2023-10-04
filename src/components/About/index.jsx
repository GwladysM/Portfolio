import React from "react";
import './about.scss';

function About() {
    return (
        <div id="about" className="about">
            <h2>Qui suis-je ?</h2>
            <p className="about__descrption">
                Hello,
                <br />
                Je suis Gwladys, la trentaine,
                originaire du bassin Rennais, je vis désormais en Guadeloupe.
                <br />
                Mon parcours a changé de direction récemment, lorsque
                j'ai choisi d'effectuer une reconversion professionnelle après
                dix belles années en tant qu'assistante spécialisée vétérinaire.
                <br />
                Je me forme donc auprès d'OpenClassRoom afin d'obtenir le diplôme certifiant de développeur web.
                <br />
                Au cours des huit derniers mois, j'ai appris différents langages de programmation,
                notamment HTML, CSS, Javascript et plus récemment React.
                Mais ce n'est pas tout, apprendre comment optimiser un site web, améliorer son référencement et son SEO font également partie de ma formation.
                <br />
                Mon objectif désormais est de progresser et me perfectionner sur la partie front-end et en particulier via React.
            </p>
        </div>
    )
}

export default About