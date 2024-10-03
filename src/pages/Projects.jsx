import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import Button from '../components/button/button'
import Banner from '../components/banner/Banner'
import ProjectsList from '../components/projectsList/ProjectsList'
import { useContext } from 'react'

//COMPONENT
import { AppContext } from '../contexts/AppContext'

function Projects() {

    const appContext = useContext(AppContext)

    return(

        <>
            <Header/>

            <Banner image="projects.svg" title={appContext.languages[appContext.language].menu.projects}/>

            <main className='container'>

                <ProjectsList/>
                
            </main>
            
            <Footer/>
        </>
    )
}

export default Projects
