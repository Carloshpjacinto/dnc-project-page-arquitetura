import { useContext } from 'react'
import React from 'react'

//CSS
import './Banner.css'

//CONTEXT
import { AppContext } from "../../contexts/AppContext"

function Banner(props) {

    const appContext = useContext(AppContext)

    return(

        <div className="banner d-flex al-end" style={{backgroundImage: `url(${props.image})`}}>

            <div className="container">

                <div className='titlePanel d-flex al-center jc-center'>

                    <h1>{props.title}</h1>

                </div>

            </div>

        </div>
    )
}

export default Banner
