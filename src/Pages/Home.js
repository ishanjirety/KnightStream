import React from 'react'
import home from '../Common-Assets/Home.svg'
import search from '../Common-Assets/Search.svg'
import {Videocard,Videodescription} from '../Comonents'
import './styles.css'
import './Responsive-pages.css'

export function Home() {
    const arr =["https://youtu.be/Zp8a0IskmkE","https://youtu.be/RovI5tVPfvw","https://youtu.be/BTOHpoC-XsE","https://youtu.be/bs6Ov2mAfxU",]
    // const arr =["https://youtu.be/Zp8a0IskmkE","https://youtu.be/RovI5tVPfvw"]
    return (
            <div className="main-body">
            <div className="heading">
                KnightStream
            </div>
            <div className="search-bar">
                <img src={search} className="search-icon"/>
                <input className="search-input" placeholder="Search"></input>
            </div>
            <div className="card-wrapper">
                <div className="video-home">
                { arr.map((items=>{
                    return <Videodescription url={items}/>
                    }))
                }
                </div>
            </div>
        </div>  
    )
}


