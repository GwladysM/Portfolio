import React, { useState, useEffect } from "react";
import './projects.scss';


function Projects() {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetch("/projects.json")
            .then(res => (res.json()))
            .then(res => setProjects(res))
            .catch((error) => console.log(error))
    }, []);

    return (
        <section id="projects" className="projects">
            <h2>Projects</h2>
            <div className="projects__gallery">
                {projects.map((project) => (
                    <div key={project.id} className="card">
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <ul>
                            {project.skills.map((skill, index) => (
                                <li key={index}>{skill}</li>
                            ))}
                        </ul>
                        <a href={project.tags[0]} target="_blank" rel="noreferrer">Lien GitHub</a>
                        <a href={project.tags[1]} target="_blank" rel="noreferrer">Démo</a>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Projects