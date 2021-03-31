import React,{Fragment} from 'react'
import {useRoute,useVideo} from '../../Context'
import './Assets/css/Videodescription.css'

export function Videodescription(props) {
    const {setRoute} = useRoute()
    const {setVideo,video} = useVideo()

    const {data} = props
    const {id,title,videoUrl,channelName} = data

    // Crafting thumbnail
    let thumbnail_mq=""
    let thumbnail_hq=""
    if(videoUrl!=undefined){ 
     // @desc crafting medium(mq) and high(hq) quality thumbnails 
    thumbnail_mq = "https://img.youtube.com/vi/"+id+"/mqdefault.jpg"
    thumbnail_hq = "https://img.youtube.com/vi/"+id+"/hqdefault.jpg"
    }

    function TitleOnClick(data){
        setVideo(data)
        setRoute("video")
    }

    return (
        <Fragment>
        <div className="video-card">
            <img className="video-thumbnail" src={thumbnail_mq}></img>
            <div className="video-info">
             <p className="video-text" onClick={()=>TitleOnClick(data)}>{title}</p>
             <small className="credits">{channelName}</small>
             <small className="date">2 Years Ago</small>
             </div>
             <i className="fa fa-ellipsis-v"></i>
        </div>
        <div className="video-card-desktop">
            <img className="video-thumbnail" src={thumbnail_hq}></img>
            <div className="video-info">
             <p className="video-text" onClick={()=>TitleOnClick(data)}>{title}</p>
             <small className="credits">{channelName}</small>
             <small className="date">2 Years Ago</small>
             </div>
             <i className="fa fa-ellipsis-v"></i>
        </div>
    </Fragment>
    )
}


