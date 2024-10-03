import React from 'react'
import { useState, useEffect, useContext } from 'react'

//CSS
import './ProjectsList.css'

//ASSETS
import likeFilled from "../../assets/likeFilled.svg"
import like from "../../assets/like.svg"

//UTILS
import { getApiData } from '../../services/apiServices'

//CONTEXT
import { AppContext } from "../../contexts/AppContext"

function ProjectsList() {

    const appContext = useContext(AppContext)

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

                <h2>{appContext.languages[appContext.language].projects.title}</h2>

                <p>{appContext.languages[appContext.language].projects.subtitle}</p>
                
            </div>

            <div className="project-grid">
                {
                    projects ? 
                        projects.map((project) => (

                            <div className="project-card" key={project.id}>
                                <div className="thumbnail tertiary-background" style={{backgroundImage: `url(${project.thumb})`}}></div>
                                <h3>{project.title}</h3>
                                <p>{project.subtitle}</p>
                                <img src={like} />

                            </div>
                    ))

                    :null

                }
                
            </div>
        </section>
    )
}

export default ProjectsList
