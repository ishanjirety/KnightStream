import React from 'react'
import {Playlistcard} from '../Comonents'
import playlist from '../Common-Assets/Playlist.svg'
import './styles.css'
import './Responsive-pages.css'

export function Playlist(props) {
    const {value} = props
    return (
        <div className="main-body">
            <div className="heading">
                <img src={playlist}/>Playlists
            </div>
                <div className="card-wrapper">
                    <ul className="list-playlist">
                    {value.map((item)=>{
                       return <li className="list-item-inline"><Playlistcard source="https://i.ytimg.com/vi/KGMEhdaZ6ZY/maxresdefault.jpg" text="Lectures"/></li>
                    })}
                    </ul>
                </div>
            </div>
    )
}


