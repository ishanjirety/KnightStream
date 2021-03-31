import React,{Fragment} from 'react'
import {useRoute} from '../../Context'
import './Assets/css/Videodescription.css'

export function Videodescription(props) {
    const {setRoute} = useRoute()
    const {url,description}=props

    // https://img.youtube.com/vi/d6HSKQrLpns/hqdefault.jpg
    // https://youtu.be/m5oeKOYKJPU
    // Crafting thumbnail
    let thumbnail_mq=""
    let thumbnail_hq=""
    if(url!=undefined){ 
    thumbnail_mq = url.replace('https://youtu.be/','https://img.youtube.com/vi/') + "/mqdefault.jpg"
    thumbnail_hq = url.replace('https://youtu.be/','https://img.youtube.com/vi/') + "/hqdefault.jpg"
    }
    return (
        <Fragment>
        <div className="video-card">
            <img className="video-thumbnail" src={thumbnail_mq}></img>
            <div className="video-info">
             <p className="video-text" onClick={()=>setRoute("video")}>KVizzing With The Comedians Third Edition || QF 2 feat. Kanan, Kaneez, Shantanu & Sulagna</p>
             <small className="credits">By RB EDITS</small>
             <small className="date">2 Years Ago</small>
             </div>
             <i className="fa fa-ellipsis-v"></i>
        </div>
        <div className="video-card-desktop">
            <img className="video-thumbnail" src={thumbnail_hq}></img>
            <div className="video-info">
             <p className="video-text" onClick={()=>setRoute("video")}>KVizzing With The Comedians Third Edition || QF 2 feat. Kanan, Kaneez, Shantanu & Sulagna</p>
             <small className="credits">By RB EDITS</small>
             <small className="date">2 Years Ago</small>
             </div>
             <i className="fa fa-ellipsis-v"></i>
        </div>
    </Fragment>
    )
}


