import React,{Fragment} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import {usePlaylist} from '../../Context'
import './Assets/css/PlaylistCard.css'
import './Assets/css/PlaylistResponsive.css'
export function Playlistcard(props) {
    const {data} =props 
    const {name} = data
    
    const {PlaylistDispatcher} = usePlaylist() 
    const thumbnail_hq = data.videos[0] !== undefined ? "https://img.youtube.com/vi/"+data.videos[0].id+"/mqdefault.jpg" : "https://images.wallpaperscraft.com/image/chess_figures_horse_black_white_8790_1366x768.jpg"

    async function DeleteHandler(){
        await axios.post('http://127.0.0.1:4444/api/playlist/remove',{name})
        PlaylistDispatcher({type:"REMOVE-PLAYLIST",payload:{name:name}})
    }

    return (
        <Fragment>
        <div className="playlist-card">
            <img className="plalist-thumbnail" src={thumbnail_hq}></img>
            <div className="playlist-info">
                <Link to={`/playlist/${name}`} className="playlist-text">{name}</Link>
                <small className="date">Created on • {data.date}</small>
             </div>
             <button className="btn-delete" onClick={DeleteHandler}><i className="fa fa-trash"></i></button>
        </div>
        </Fragment>
    )
}

