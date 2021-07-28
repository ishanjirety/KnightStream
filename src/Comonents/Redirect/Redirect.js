import React from 'react'
import './Assets/Redirect.css'
export function Redirect({display,to}) {
if(display){
    return (
        <div className="redirect-screen">
            <div className="redirect-spinner"></div>
            <div className="redirecting-text">Redirecting to {to}</div>
        </div>
    )
}
    return null
}


