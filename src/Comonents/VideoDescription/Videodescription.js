import React,{Fragment} from 'react'
import {Link} from 'react-router-dom'

import './Assets/css/Videodescription.css'

export function Videodescription(props) {

    const {data} = props
    const {id,title,name,videoUrl,channelName} = data

    // Crafting thumbnail
    let thumbnail_mq=""
    let thumbnail_hq=""
    if(videoUrl!==undefined){ 
     // @desc crafting medium(mq) and high(hq) quality thumbnails 
    thumbnail_mq = "https://img.youtube.com/vi/"+id+"/mqdefault.jpg"
    thumbnail_hq = "https://img.youtube.com/vi/"+id+"/hqdefault.jpg"
    }

    return (
        <Fragment>
        <div className="video-card-desktop" key={data.id}>
            <img className="video-thumbnail" src={thumbnail_hq}></img>
            <div className="video-info">
           <Link to={`/video/${data.id}`} className="video-text">{title===undefined ? name : title}</Link>
             <small className="credits">{channelName}</small>
             <small className="date">2 Years Ago</small>
             </div>
        </div>
    </Fragment>
    )
}


