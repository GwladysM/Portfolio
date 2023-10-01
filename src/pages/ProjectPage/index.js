import React from "react";
import { useParams } from "react-router-dom";
import './projectPage.scss';
import projects from '../../projects.json';
import Error from '../../components/Error';

function ProjectPage() {
    //Récupération de l'ID :
    const { id } = useParams()

    //Utilisation du find() pour cibler l'ID du projet sélectionné :
    const project = projects.find((project) => project.id === id);

    if (!project) {
        return <Error />
    }

    return (
        <div className="card__container">
            <h3>{project.title}</h3>
            <p className="card__description">{project.description}</p>
            <h4>Skills :</h4>
            <div className="card__skills">
                {project.skills.map((skill, index) => (
                    <p className="skill" key={index}>{skill}</p>
                ))}
            </div>
            <div className="card__link">
                <a href={project.gitHub} target="_blank" rel="noreferrer">GitHub</a>
                <a className={project.demo ? "appear" : "hidden"} href={project.demo} target="_blank" rel="noreferrer">Démo</a>
            </div>
        </div>
    )
}

export default ProjectPage

