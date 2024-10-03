import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import Hero from '../components/hero/Hero'
import ProjectsList from '../components/projectsList/ProjectsList'

function Home() {

    return(

        <>
            <Header/>

            <main>

                <div className='container'>

                    <Hero></Hero>

                    <ProjectsList/>

                </div>

            </main>
            
            <Footer/>
        </>
    )
}

export default Home
