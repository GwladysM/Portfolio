import React, { useState, useEffect } from "react";
import './projectsList.scss';
import { Link } from "react-router-dom";


function ProjectsList() {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetch("/projects.json")
            .then(res => (res.json()))
            .then(res => setProjects(res))
            .catch((error) => console.log(error))
    }, []);

    return (
        <section id="projects" className="projects">
            <h2>Mes Projets</h2>
            <div className="projects__gallery">
                {projects.map((project) => (
                    <div className="card"
                        key={project.id}
                        id={project.id}
                        title={project.title}>
                        <Link to={`/mes-projets/${project.id}`}>
                            <h3>{project.title}</h3>
                        </Link>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default ProjectsList