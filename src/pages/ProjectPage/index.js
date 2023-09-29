import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import './projectPage.scss'

function ProjectPage() {
    //Récupération de l'ID :
    const { id } = useParams()

    //Création des constantes pour state des données et du chargement de la page :
    const [projectsData, setprojectsData] = useState([]);

    //Appel à fetch pour récup des données du fichier json :
    useEffect(() => {
        const timeout = setTimeout(() => {
            fetch(`/projects.json`)
                .then(res => res.json())
                .then(data => {
                    setprojectsData(data);
                })
                .catch((error) => console.log(error),
                )
        }, 1000);
        return () => clearTimeout(timeout);
    }, [id]);

    //Utilisation du find() pour cibler l'ID du logement sélectionné :
    const project = projectsData.find((projectsData) => projectsData.id === id)

    return (
        <div className="card__container">
            <h3>project.title</h3>
            <p>project.description</p>
        </div>
    )
}

export default ProjectPage


//<div className="card__skills">
//{project.skills.map((skill, index) => (
//    <p className="skill" key={index}>{skill}</p>
//))}
//</div>
//<div className="card__link">
//<a href={id.gitHub} target="_blank" rel="noreferrer">GitHub</a>
//<a className={id.demo ? "appear" : "hidden"} href={id.demo} target="_blank" rel="noreferrer">Démo</a>
//</div>