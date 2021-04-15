import React,{Fragment} from 'react'
import {NavLink} from 'react-router-dom'

import home from './Assets/images/Home.svg'
import like from './Assets/images/Like.svg'
import playlist from './Assets/images/Playlist.svg'
import search from './Assets/images/Search.svg'
import account from '../../Common-Assets/Account.svg'



import './Assets/css/Nav.css'
import './Assets/css/Responsive.css'

export function Nav() {
    // const {setRoute} = useRoute()
    return (
        <Fragment>
            <nav className="nav">
                <ul className="list">
                <li className="list-item-inline">
                    <NavLink to="/home" className="nav-btn">
                        <img src={home} alt=""></img>
                   </NavLink> <span className="btn-description">Home</span>
                   </li>
                   <li className="list-item-inline">
                    <NavLink to="/" className="nav-btn">
                        <img src={search} alt=""></img>
                   </NavLink> <span className="btn-description">Search</span>
                   </li>
                   <li className="list-item-inline">
                    <NavLink to="/liked-videos" className="nav-btn">
                        <img src={like} alt=""></img>
                   </NavLink> <span className="btn-description">Liked Videos</span>
                   </li>
                   <li className="list-item-inline">
                    <NavLink to="/playlist" className="nav-btn">
                        <img src={playlist} alt=""></img>
                   </NavLink> <span className="btn-description">Playlist</span>
                   </li>
                </ul>
            </nav>
            <nav className="sidebar">
            <ul className="list sidebar-list">
                
                    <NavLink to="/home" className="nav-btn sidebar-btn">
                    <li className="list-item-inline sidebar-list-item">
                        <img src={home} alt=""></img>
                        <span className="btn-description">Home</span>
                        </li>
                   </NavLink> 
                    
                    
                    <NavLink to="/" className="nav-btn sidebar-btn">
                    <li className="list-item-inline sidebar-list-item" >
                        <img src={search} alt=""></img><span className="btn-description">Search</span>
                        </li>
                   </NavLink> 
                    
                   
                    <NavLink to="/liked-videos" className="nav-btn sidebar-btn">
                         <li className="list-item-inline sidebar-list-item">
                        <img src={like} alt=""></img>
                        <span className="btn-description">Liked Videos</span>
                        </li>
                   </NavLink> 
                    
                   
                    <NavLink to="/playlist" className="nav-btn sidebar-btn">
                         <li className="list-item-inline sidebar-list-item">
                        <img src={playlist} alt=""></img>
                        <span className="btn-description">Playlist</span>
                        </li>
                   </NavLink> 

                   <NavLink to="/account" className="nav-btn sidebar-btn">
                         <li className="list-item-inline sidebar-list-item">
                        <img src={account} alt=""></img>
                        <span className="btn-description">Account</span>
                        </li>
                   </NavLink>
                </ul>
            </nav>
        </Fragment>
    )
}


