import React,{useState,Fragment} from 'react'
import {useRoute} from '../../Context'


import Close from './Assets/images/Close.svg'
import home from './Assets/images/Home.svg'
import homeF from './Assets/images/Home-f.svg'
import like from './Assets/images/Like.svg'
import likeF from './Assets/images/Like-f.svg'
import playlist from './Assets/images/Playlist.svg'
import search from './Assets/images/Search.svg'


import './Assets/css/Nav.css'
import './Assets/css/Responsive.css'

export function Nav() {
    const {setRoute} = useRoute()
    return (
        <Fragment>
            <nav className="nav">
                <ul className="list">
                    <li className="list-item-inline">
                        <button className="nav-btn" onClick={()=>setRoute("home")} ><img src={home}></img></button> <span className="btn-description">Home</span>
                    </li>
                    <li className="list-item-inline">
                        <button className="nav-btn" onClick={()=>setRoute("explore")} ><img src={search}></img></button><span className="btn-description">Explore</span>
                    </li>
                    <li className="list-item-inline">
                        <button className="nav-btn" onClick={()=>setRoute("liked")} ><img src={like}></img></button> <span className="btn-description">Liked Videos</span>
                    </li>
                    <li className="list-item-inline">
                        <button className="nav-btn extra" onClick={()=>setRoute("playlist")} ><img src={playlist}></img></button><span className="btn-description">Playlist</span>
                    </li>
                </ul>
            </nav>
            <nav className="sidebar">
            <ul className="list sidebar-list">
                <li className="list-item-inline sidebar-list-item" onClick={()=>setRoute("home")}>
                        <button className="nav-btn sidebar-btn" ><img src={home}></img></button> <span className="btn-description">Home</span>
                    </li>
                    <li className="list-item-inline sidebar-list-item" onClick={()=>setRoute("explore")}>
                        <button className="nav-btn sidebar-btn" ><img src={search}></img></button><span className="btn-description">Explore</span>
                    </li>
                    <li className="list-item-inline sidebar-list-item" onClick={()=>setRoute("liked")}>
                        <button className="nav-btn sidebar-btn" ><img src={like}></img></button> <span className="btn-description">Liked Videos</span>
                    </li>
                    <li className="list-item-inline sidebar-list-item" onClick={()=>setRoute("playlist")}>
                        <button className="nav-btn sidebar-btn extra" ><img src={playlist}></img></button><span className="btn-description">Playlist</span>
                    </li>
                </ul>
            </nav>
        </Fragment>
    )
}


