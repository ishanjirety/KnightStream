import React from 'react'
import {Link} from 'react-router-dom'

import './Assets/css/Videodescription.css'

export function Videodescription(props) {

    const {data,keyValue} = props
    const {id,title,name,videoUrl,channelName} = data

    // Crafting thumbnail
    let thumbnail_hq=""
    if(videoUrl!==undefined){ 
     // @desc crafting medium(mq) and high(hq) quality thumbnails 
    thumbnail_hq = "https://img.youtube.com/vi/"+id+"/hqdefault.jpg"
    }

    return (

        <div className="video-card-desktop" key={keyValue} >
            <img alt="" className="video-thumbnail" src={thumbnail_hq}></img>
            <div className="video-info">
                <Link to={`/video/${data.id}`} className="video-text" key={keyValue}>{title===undefined ? name : title}</Link>
                <small className="credits">{channelName}</small>
                <small className="date">2 Years Ago</small>
             </div>
        </div>
    )
}


