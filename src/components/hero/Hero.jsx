import { Link } from 'react-router-dom'
import React from "react";
import Button from '../button/button'

//CSS
import './hero.css'

function Hero(){

    return(

        <div className="hero d-flex al-center">
            <div className="hero-text">

                <h1>Let Your Home Be Unique</h1>

                <p>There are many variations of the passages of lorem Ipsum fromavailable, majority</p>

                <Link to="/about">

                    <Button buttonStyle="secondary" arrow>Get Started</Button>

                </Link>
            </div>
        </div>
    )
}

export default Hero
