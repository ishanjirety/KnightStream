import React,{Fragment} from 'react'
import {Link} from 'react-router-dom'
import './Assets/css/PlaylistCard.css'
import './Assets/css/PlaylistResponsive.css'
export function Playlistcard(props) {
    const {data} =props 
    const {name} = data
    console.log(data.videos[0])
    const thumbnail_hq = data.videos[0] !== undefined ? "https://img.youtube.com/vi/"+data.videos[0].id+"/hqdefault.jpg" : "https://images.wallpaperscraft.com/image/chess_figures_horse_black_white_8790_1366x768.jpg"
    return (
        <Fragment>
        <div className="playlist-card">
            <img className="plalist-thumbnail" src={thumbnail_hq}></img>
            <div className="playlist-info">
                <Link to={`/playlist/${name}`} className="playlist-text">{name}</Link>
                <small className="date">Created on • 31 Mar 2021</small>
             </div>
             <i className="fa fa-ellipsis-v"></i>
        </div>
        </Fragment>
    )
}

