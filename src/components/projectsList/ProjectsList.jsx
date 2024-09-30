import React from 'react'

//CSS
import './ProjectsList.css'

//ASSETS
import likeFilled from "../../assets/likeFilled.svg"
import like from "../../assets/like.svg"

function ProjectsList() {

    return(

        <section className="project-section">
            <div className="project-hero">

                <h2>Follow Our Projects</h2>

                <p>It is a long established fact that a reader will be distracted by the of readable content of page  lookings at its layouts  points.</p>
                
            </div>

            <div className="project-grid">
                <div className="project-card d-flex jc-center al-center fd-column">
                    <div className="thumbnail tertiary-background">

                    </div>

                    <h3>Nome do projeto</h3>

                    <p>Localização</p>

                    <img src={like} alt="Like" className="like-icon"/>

                </div>

                <div className="project-card d-flex jc-center al-center fd-column">
                    <div className="thumbnail tertiary-background">
                        
                    </div>

                    <h3>Nome do projeto</h3>

                    <p>Localização</p>

                    <img src={likeFilled} alt="Like" className="like-icon"/>

                </div>

                <div className="project-card d-flex jc-center al-center fd-column">
                    <div className="thumbnail tertiary-background">
                        
                    </div>

                    <h3>Nome do projeto</h3>

                    <p>Localização</p>

                    <img src={like} alt="Like" className="like-icon"/>

                </div>

                <div className="project-card d-flex jc-center al-center fd-column">
                    <div className="thumbnail tertiary-background">
                        
                    </div>

                    <h3>Nome do projeto</h3>

                    <p>Localização</p>

                    <img src={likeFilled} alt="Like" className="like-icon"/>

                </div>

                <div className="project-card d-flex jc-center al-center fd-column">
                    <div className="thumbnail tertiary-background">
                        
                    </div>

                    <h3>Nome do projeto</h3>

                    <p>Localização</p>

                    <img src={like} alt="Like" className="like-icon"/>

                </div>

                <div className="project-card d-flex jc-center al-center fd-column">
                    <div className="thumbnail tertiary-background">
                        
                    </div>

                    <h3>Nome do projeto</h3>

                    <p>Localização</p>

                    <img src={likeFilled} alt="Like" className="like-icon"/>

                </div>

                <div className="project-card d-flex jc-center al-center fd-column">
                    <div className="thumbnail tertiary-background">
                        
                    </div>

                    <h3>Nome do projeto</h3>

                    <p>Localização</p>

                    <img src={like} alt="Like" className="like-icon"/>

                </div>

                <div className="project-card d-flex jc-center al-center fd-column">
                    <div className="thumbnail tertiary-background">
                        
                    </div>

                    <h3>Nome do projeto</h3>

                    <p>Localização</p>

                    <img src={likeFilled} alt="Like" className="like-icon"/>

                </div>
            </div>
        </section>
    )
}

export default ProjectsList
