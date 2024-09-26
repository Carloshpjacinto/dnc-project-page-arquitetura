import { Link } from "react-router-dom";

//CSS
import './Header.css'

//ASSETS
import Logo from '../../assets/dnc-logo.svg'

function Header() {

    return(

        <header>
            <div className="container">
                <div className="al-center d-flex jc-space-between">
                    <Link to="/"><img src={Logo} alt="ERROR"/></Link>
   
                    <nav>
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
