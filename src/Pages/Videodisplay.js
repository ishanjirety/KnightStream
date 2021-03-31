import React,{Fragment} from 'react'

// @desc importing Components
import {Videocard} from '../Comonents'

// importing hooks 
import {useVideo} from '../Context'
// @desc common assets
import like from '../Common-Assets/Like.svg'
import playlist from '../Common-Assets/Playlist.svg'




export function Videodisplay() {
    const {video} = useVideo()
    console.log(video)
    const {title,description,channelName,channelImage,videoUrl,id} = video
    
    return (
        <div className="video-wrapper">
            <Videocard id={id}/>
            <div className="description">
                <p className="video-title">{title}</p>
                <div className="video-action-buttons">
                    <input type="checkbox" className="btn-video-action fa fa-heart"></input>
                    <button className="btn-video-action"><img  className="action-icon" src={playlist}></img></button>
                </div>
                <div className="channel-info">
                <img src={channelImage} className="channel-avatar"></img>
                    <div className="channel-other-info">
                        <div className="channel-name">
                           {channelName}
                        </div>
                        <div className="channel-subscribers">
                            594K subscribers
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

