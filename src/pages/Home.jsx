import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import Button from '../components/button/button'
import Banner from '../components/banner/Banner'

function Home() {

    return(

        <>
            <Header/>
            <Banner image="/about.svg" title="About Us"/>
            <Button buttonStyle={"outline"} arrow>clique aqui</Button>
            <Footer/>
        </>

    )
}

export default Home
