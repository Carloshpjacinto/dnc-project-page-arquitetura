import { Link } from "react-router-dom";
import { useState } from "react";

//CSS
import './Header.css'

//COMPONENTS
import Button from '../button/button'

//ASSETS
import Logo from '../../assets/dnc-logo.svg'

function Header() {

    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = () => setIsOpen(!isOpen)

    return(

        <header>
            <div className="container">
                <div className="al-center d-flex jc-space-between">
                    <Link to="/"><img src={Logo} alt="ERROR"/></Link>

                    <div className="mobile-menu">

                        <Button buttonStyle="secondary" onclick={() => setIsOpen(isOpen)} >Menu</Button>

                    </div>
   
                    <nav className={`nav ${isOpen} ? 'open' : ''}`}>
                        <ul className="d-flex">

                            <li><Link to="/">Home</Link></li>

                            <li><Link to="/about">About</Link></li>

                            <li><Link to="/project">Project</Link></li>

                            <li><Link to="/contact">Contact</Link></li>

                        </ul>

                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Header
