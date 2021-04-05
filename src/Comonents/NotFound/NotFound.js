import React from 'react'
import errorImg from './Assets/images/Ghost.svg'

import './Assets/css/NotFound.css'

export function NotFound() {
    return (
        <div className="error">
            <p className="error-description">ERROR</p>
           <span className="error-text">4</span> <img src={errorImg} className="error-img"></img><span className="error-text">4</span>
           <p className="error-description">Oops! the page you are looking for is not available! </p>
        </div>
    )
}


