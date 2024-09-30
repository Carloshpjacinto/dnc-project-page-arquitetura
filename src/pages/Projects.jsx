import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import Button from '../components/button/button'
import Banner from '../components/banner/Banner'
import ProjectsList from '../components/projectsList/ProjectsList'

function Projects() {

    return(

        <>
            <Header/>

            <Banner image="projects.svg" title="Projects"/>

            <main className='container'>

                <ProjectsList/>
                
            </main>
            
            <Footer/>
        </>

    )
}

export default Projects
