import React,{useEffect,useState,Fragment} from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios'
// @desc importing Components
import {Videocard} from '../Comonents'

// importing hooks 
import {useVideo} from '../Context'
// @desc common assets
import like from '../Common-Assets/Like.svg'
import playlist from '../Common-Assets/Playlist.svg'




export function Videodisplay() {
    const [video,setVideo]= useState()
    const {videoId} = useParams()
    console.log(videoId)
    const [FoundVideo,setFoundVideo] = useState()
    useEffect(async ()=>{
        const response_videolist = await axios.get('http://127.0.0.1:4444/api/videolist')
        const video_list = await response_videolist.data.videos
        console.log(video_list)
        const video = await video_list.find((item)=>item.id===videoId)
        setFoundVideo(video)
    })
    
    
    
    
    return (
        <div className="video-wrapper">
             <Videocard id={videoId}/>
             {FoundVideo!=undefined && 
            <div className="description">
                <p className="video-title">{FoundVideo.title}</p>
                <div className="video-action-buttons">
                    <input type="checkbox" className="btn-video-action fa fa-heart"></input>
                    <button className="btn-video-action"><img  className="action-icon" src={playlist}></img></button>
                </div>
                <div className="channel-info">
                <img src={FoundVideo.channelImage} className="channel-avatar"></img>
                    <div className="channel-other-info">
                        <div className="channel-name">
                           {FoundVideo.channelName}
                        </div>
                        <div className="channel-subscribers">
                            594K subscribers
                        </div>
                    </div>
                </div>
            </div>}
        </div>
    )
}

