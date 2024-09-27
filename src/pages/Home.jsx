import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import Button from '../components/button/button'
import Banner from '../components/banner/Banner'
import Hero from '../components/hero/Hero'

function Home() {

    return(

        <>
            <Header/>
            <div className='container'>
                <Hero></Hero>
            </div>
            <Footer/>
        </>

    )
}

export default Home
