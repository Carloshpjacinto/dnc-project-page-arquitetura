import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer"
import Banner from "../components/Banner/Banner"
import AboutText from "../components/AboutText/AboutText"

function About(){

    return(

        <>
            <Header/>

            <Banner image="aboutUs.svg" title="About Us"/>

            <div>
                <AboutText/>
            </div>

            <Footer/>
        </>

    )
}

export default About
