import React from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import {usePlaylist} from '../../Context'
import './Assets/css/PlaylistCard.css'
import './Assets/css/PlaylistResponsive.css'

import {getToken} from '../../Token'
export function Playlistcard(props) {
    const {data,keyValue} =props 
    const {name} = data
    console.log(name)
    const {token} = getToken()
    const {PlaylistDispatcher} = usePlaylist() 
    const thumbnail_hq = data.videos[0] !== undefined ? "https://img.youtube.com/vi/"+data.videos[0].id+"/mqdefault.jpg" : "https://images.wallpaperscraft.com/image/chess_figures_horse_black_white_8790_1366x768.jpg"

    async function DeleteHandler(){
        await axios.delete(`https://KnightStream.ishanjirety.repl.co/api/playlist/remove/${token}`,{data:{name:name}})
        PlaylistDispatcher({type:"REMOVE-PLAYLIST",payload:{name:name}})
    }

    return (

        <div className="playlist-card" key={keyValue}>
            <img className="plalist-thumbnail" src={thumbnail_hq}></img>
            <div className="playlist-info">
                <Link to={`/playlist/${name}`} className="playlist-text">{name}</Link>
                <small className="date">Created on • {data.date}</small>
             </div>
             <button className="btn-delete" onClick={DeleteHandler}><i className="fa fa-trash"></i></button>
        </div>
    )
}

