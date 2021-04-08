import React,{Fragment} from 'react'
import {Link} from 'react-router-dom'

import {useVideo} from '../../Context'
import './Assets/css/Videodescription.css'

export function Videodescription(props) {
    const {setVideo,video} = useVideo()

    const {data,keyValue} = props
    const {id,title,name,videoUrl,channelName,videos} = data

    // Crafting thumbnail
    let thumbnail_mq=""
    let thumbnail_hq=""
    if(videoUrl!=undefined){ 
     // @desc crafting medium(mq) and high(hq) quality thumbnails 
    thumbnail_mq = "https://img.youtube.com/vi/"+id+"/mqdefault.jpg"
    thumbnail_hq = "https://img.youtube.com/vi/"+id+"/hqdefault.jpg"
    }

    return (
        <Fragment>
        <div className="video-card" key={data.id}>
            <img className="video-thumbnail" src={thumbnail_mq}></img>
            <div className="video-info">
             <Link to={`/video/${data.id}`} className="video-text">{title===undefined ? name : title}</Link>
             <small className="credits">{channelName}</small>
             <small className="date">2 Years Ago</small>
             </div>
        </div>
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


