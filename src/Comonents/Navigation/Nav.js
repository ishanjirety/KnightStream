import React,{useState} from 'react'


import Close from './Assets/images/Close.svg'
import home from './Assets/images/Home.svg'
import homeF from './Assets/images/Home-f.svg'
import like from './Assets/images/Like.svg'
import likeF from './Assets/images/Like-f.svg'
import playlist from './Assets/images/Playlist.svg'
import search from './Assets/images/Search.svg'


import './Nav.css'
export function Nav() {
    const [hamburger,setHamburger] = useState(false)
    return (
        <div className="nav">
            <ul className="list">
                <li className="list-item-inline"><button onClick={()=>setHamburger(!hamburger)} className="nav-btn"><img src={home}></img></button> <span className="btn-description">Home</span></li>
                <li className="list-item-inline"><button onClick={()=>setHamburger(!hamburger)} className="nav-btn"><img src={search}></img></button><span className="btn-description">Search</span></li>
                <li className="list-item-inline"><button onClick={()=>setHamburger(!hamburger)} className="nav-btn"><img src={like}></img></button> <span className="btn-description">Liked Videos</span></li>
                <li className="list-item-inline"><button onClick={()=>setHamburger(!hamburger)} className="nav-btn extra"><img src={playlist}></img></button><span className="btn-description">Playlist</span></li>
            </ul>
        </div>
    )
}


