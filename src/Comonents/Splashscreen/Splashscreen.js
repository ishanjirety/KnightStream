import React from 'react'
import './Assets/css/Splashscreen.css'
import chess1 from './Assets/images/chessbackground1.png'
import splashscreen1 from './Assets/images/Splashscreen2.png'
export function Splashscreen( prop ) {
    let SplashName=`splashscreen ${prop.animation}`
    return (
        <div className={SplashName}>
            {/* <img alt="" src={chess1} className="chess-background"></img> */}
            <img alt="" src={splashscreen1} className="cover"></img>
            
            <div className="logo-area"><div>KnightStream<div className="loading">is loading<div className="spinner"></div></div></div></div>       
        </div>
    )
}

