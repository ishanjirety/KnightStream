import React from 'react'
import './Assets/css/Splashscreen.css'
import chess from './Assets/images/chessbackground.png'
import chess1 from './Assets/images/chessbackground1.png'
import splashscreen from './Assets/images/Splashscreen.svg'
import splashscreen1 from './Assets/images/Splashscreen1.png'
export function Splashscreen( prop ) {
    let SplashName=`splashscreen ${prop.animation}`
    return (
        <div className={SplashName}>
            <img src={chess1} className="chess-background"></img>
            <img src={splashscreen1} className="cover"></img>
            <img src="https://images.chesscomfiles.com/chess-themes/pieces/neo/150/wn.png" className="logo-image"></img>
            <div className="logo-area"><div>KnightStream<div className="loading">is loading<div className="spinner"></div></div></div></div>       
        </div>
    )
}

