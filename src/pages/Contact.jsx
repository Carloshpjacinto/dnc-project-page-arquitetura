import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import Banner from '../components/banner/Banner'
import ContactForm from '../components/contactForm/ContactForm'
import { useContext } from 'react'

//COMPONENT
import { AppContext } from '../contexts/AppContext'

function Contact() {

    const appContext = useContext(AppContext)

    return(

        <>
            <Header/>

            <Banner image="contact.svg" title={appContext.languages[appContext.language].menu.contact}/>

            <main className='container'>

                <ContactForm/>
                
            </main>
            
            <Footer/>
        </>
    )
}

export default Contact
