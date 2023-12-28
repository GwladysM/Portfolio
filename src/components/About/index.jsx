import React from "react";
import './about.scss';
import { FaArrowDown } from "react-icons/fa";

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
                Mais ce n'est pas tout, apprendre comment optimiser un site web, améliorer son référencement et son SEO ont également fait partie de ma formation.
                <br />
                Mon objectif désormais est de progresser et me perfectionner sur la partie front-end et en particulier via React.
            </p>
            <p className="about__more">
                Besoin de créer votre site web ?
                <br />
                Rendez-vous dans la partie contact afin de discuter de votre projet !
            </p>
            <a href="/Portfolio/#contact">
                <FaArrowDown className="arrow" />
            </a>
        </div>
    )
}

export default About