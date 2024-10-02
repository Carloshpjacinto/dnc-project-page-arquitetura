import React from 'react'
import { useState, useEffect } from 'react'

//CSS
import './ProjectsList.css'

//ASSETS
import likeFilled from "../../assets/likeFilled.svg"
import like from "../../assets/like.svg"

//UTILS
import { getApiData } from '../../services/apiServices'

function ProjectsList() {

    const [projects, setProjects] = useState([])

    useEffect(() => {

        const fetchData = async () => {

            try{

                const projectsResponse = await getApiData('projects')

                setProjects(projectsResponse)

            }catch{

                setProjects([])

            }
        }

        fetchData()

    }, [])

    return(

        <section className="project-section">
            <div className="project-hero">

                <h2>Follow Our Projects</h2>

                <p>It is a long established fact that a reader will be distracted by the of readable content of page  lookings at its layouts  points.</p>
                
            </div>

            <div className="project-grid">
                {

                    projects.map((project) => (

                        <div className="project-card" key={project.id}>
                            <div className="thumbnail tertiary-background" style={{backgroundImage: `url(${project.thumb})`}}></div>
                            <h3>{project.title}</h3>
                            <p>{project.subtitle}</p>
                            <img src={like} />

                        </div>
                    ))
                }
            </div>
        </section>
    )
}

export default ProjectsList
