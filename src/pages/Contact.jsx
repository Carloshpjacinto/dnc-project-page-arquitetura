import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import Banner from '../components/banner/Banner'
import ContactForm from '../components/contactForm/ContactForm'

function Contact() {

    return(

        <>
            <Header/>

            <Banner image="contact.svg" title="contact"/>

            <main className='container'>

                <ContactForm/>
                
            </main>
            
            <Footer/>
        </>

    )
}

export default Contact
