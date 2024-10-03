import React from 'react'
import { useState, useEffect, useContext } from 'react'

//CSS
import './ProjectsList.css'

//COMPONENTS
import Button from "../button/button"

//ASSETS
import likeFilled from "../../assets/likeFilled.svg"
import likeOutline from "../../assets/like.svg"

//UTILS
import { getApiData } from '../../services/apiServices'

//CONTEXT
import { AppContext } from "../../contexts/AppContext"

function ProjectsList() {

    const [favProjects, setFavProject] = useState([])

    const appContext = useContext(AppContext)

    const [projects, setProjects] = useState([])

    const handleSavedProjecs = (id) => {

        setFavProject((prevFavProjects) => {

            if(prevFavProjects.includes(id)){

                const filterArray = prevFavProjects.filter((projectId) => projectId !== id)

                sessionStorage.setItem("favProjects", JSON.stringify(filterArray))

                return prevFavProjects.filter((projectId) => projectId !== id)

            }else{

                sessionStorage.setItem("favProjects", JSON.stringify([...prevFavProjects, id]))

                return [...prevFavProjects, id]

            }
        })
    }

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

    useEffect(() => {

        const savedFavProjects = JSON.parse(sessionStorage.getItem("favProjects"))

        if(savedFavProjects){

            setFavProject(savedFavProjects)

        }
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

                            <div className="project-card d-flex jc-center al-center fd-column" key={project.id}>
                                <div className="thumbnail tertiary-background" style={{backgroundImage: `url(${project.thumb})`}}></div>
                                <h3>{project.title}</h3>
                                <p>{project.subtitle}</p>
                                <Button buttonStyle="unstyled" onClick={() => handleSavedProjecs(project.id)}>
                                    <img src={favProjects.includes(project.id) ? likeFilled : likeOutline} />
                                </Button>

                            </div>
                    ))

                    :null

                }
                
            </div>
        </section>

    )
}

export default ProjectsList
