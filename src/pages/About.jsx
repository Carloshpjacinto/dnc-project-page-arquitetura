import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer"
import Banner from "../components/banner/Banner"
import AboutText from "../components/AboutText/AboutText"
import { useContext } from "react"

//CONTEXT
import { AppContext } from "../contexts/AppContext"

function About(){

    const appContext = useContext(AppContext)

    return(

        <>
            <Header/>

            <Banner image="aboutUs.svg" title={appContext.languages[appContext.language].menu.about}/>

            <div>
                <AboutText/>
            </div>

            <Footer/>
        </>
    )
}

export default About
