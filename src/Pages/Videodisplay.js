import React,{Fragment} from 'react'
import {Videocard} from '../Comonents'
import like from '../Common-Assets/Like.svg'
import playlist from '../Common-Assets/Playlist.svg'

export function Videodisplay() {
    return (
        <div className="video-wrapper">
            <Videocard/>
            <div className="description">
                <p className="video-title">Day 1/21: Improve your chess with IM Sagar Shah | How to analyze your games</p>
                <div className="video-action-buttons">
                    <input type="checkbox" className="btn-video-action fa fa-heart"></input>
                    <button className="btn-video-action"><img  className="action-icon" src={playlist}></img></button>
                </div>
                <div className="channel-info">
                <img src="https://yt3.ggpht.com/ytc/AAUvwnjMTiT0X7nqy--RoTGLr6GLRQzd1XxTkzdaTSqq=s88-c-k-c0x00ffffff-no-rj" className="channel-avatar"></img>
                    <div className="channel-other-info">
                        <div className="channel-name">
                            ChessBase India
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


