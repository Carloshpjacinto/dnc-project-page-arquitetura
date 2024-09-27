import React from 'react'

//ASSETS
import whiteArrow from '../../assets/whiteSeta.svg'

//CSS
import './button.css'

function Button({arrow, buttonStyle, loading, children, ...props}) {

    return(

        <button className={`button ${buttonStyle}`} {...props}>
            {children} {arrow && <img src={whiteArrow} alt='Seta'/>}
        </button>
    )
}

export default Button
