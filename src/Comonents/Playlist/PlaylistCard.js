import React,{Fragment} from 'react'
import './PlaylistCard.css'
export function Playlistcard(props) {
    const {source,text} =props
    return (
        <Fragment>
        <div className="playlist-card">
            <img className="plalist-thumbnail" src={source}></img>
            <div className="playlist-info">
             <p className="playlist-text">{text}</p>
             <small className="date">Created on • 31 Mar 2021</small>
             </div>
             <i className="fa fa-ellipsis-v"></i>
        </div>
        </Fragment>
    )
}

