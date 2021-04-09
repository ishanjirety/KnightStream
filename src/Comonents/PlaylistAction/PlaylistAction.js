import React,{useState,useEffect,Fragment} from 'react'
import axios from 'axios'

import './Assets/css/PlaylistAction.css'
import './Assets/css/Responsive.css'

import close from '../../Common-Assets/Close.svg'
import {Checkbox} from '../Checkbox/Checkbox'

import {usePlaylist} from '../../Context'

export function PlaylistAction(props) {
    const {styles,data,display,state} = props
    const {PlaylistState,PlaylistDispatcher} = usePlaylist()
    const [playlistName,setPlaylistName] = useState("")
    const [date,setDate] = useState()

    
    async function AddPlaylist(){
        if(playlistName !== ""){
            const response_playlist = await axios.post("http://127.0.0.1:4444/api/playlist/add", {name:playlistName,count:0,videos:[],date:date} )
            console.log(response_playlist)
            PlaylistDispatcher({type:"ADD-PLAYLIST",payload:{name:playlistName,count:0,videos:[]}})
        }
    }
    useEffect(()=>{
        const current = new Date()
        const date = current.getDate()
        const month = current.getMonth()
        const year = current.getFullYear()
        const FINAL_DATE = `${date}-${month}-${year}`
        setDate(FINAL_DATE)
    },[])
    return (
    <Fragment>
    <div className="wrapper">
       <div className="save-to-playlist" style={styles}>
           <div className="playlist-heading">
                <span className="playlist-heading"><p> Add To Playlist</p></span>
            </div>
            <div className="playlist-items">
                {PlaylistState.playlist.map((content)=>{
                if(data !== undefined){
                    return <Checkbox checked={content.videos.filter(video=>video.title === data.title).length > 0 ? true : false} name={content.name} data={data} />
                }
            })}
            </div>
            <div className="playlist-action">
                <input placeholder="Enter playlist name..." className="add-playlist" onChange={(e)=>setPlaylistName(e.target.value)}></input>
                <button className="playlist-add-action" onClick={()=>AddPlaylist("ADD-TO-PLAYLIST")}>ADD</button>
            </div>
       </div>
    </div>
    <div className="wrapper-desktop" style={display}>
       <div className="save-to-playlist-desktop" style={styles}>
           <div className="playlist-heading">
                <span className="playlist-heading"><p> Add To Playlist</p>  </span>
             <button class="close" onClick={()=>state(false)}><img src={close}></img></button>
            </div>
            <div className="playlist-items-desktop">
                {PlaylistState.playlist.map((content)=>{
                if(data !== undefined){
                    return <Checkbox checked={content.videos.filter(video=>video.title === data.title).length > 0 ? true : false} name={content.name} data={data} />
                }
            })}
            </div>
            <div className="playlist-action-desktop">
                <input placeholder="Enter playlist name..." className="add-playlist" onChange={(e)=>setPlaylistName(e.target.value)}></input>
                <button className="playlist-add-action" onClick={()=>AddPlaylist("ADD-TO-PLAYLIST")}>CREATE</button>
            </div>
       </div>
    </div>
    </Fragment>
    )
}


