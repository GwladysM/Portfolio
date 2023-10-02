import React from "react";
import './projectsList.scss';
import projects from '../../projects.json';
import { Link } from "react-router-dom";


function ProjectsList() {
    return (
        <div id="projects" className="projects">
            <h2>Mes Projets</h2>
            <div className="projects__list">
                {projects.map((project) => (
                    <Link to={`/Portfolio/mes-projets/${project.id}`} className="card"
                        key={project.id}
                        id={project.id}>
                        <h3>Projet {project.id}</h3>
                        <span></span>
                        <img src={project.cover} alt={project.title} />
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default ProjectsList