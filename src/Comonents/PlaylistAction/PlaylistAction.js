import React,{useState} from 'react'
import axios from 'axios'

import './Assets/css/PlaylistAction.css'
import './Assets/css/Responsive.css'

import {Checkbox} from '../Checkbox/Checkbox'

import {usePlaylist} from '../../Context'

export function PlaylistAction(props) {
    const {styles,data} = props
    const {PlaylistState,PlaylistDispatcher} = usePlaylist()
    const [playlistName,setPlaylistName] = useState("")
    const [checked,setChecked] = useState([])
    async function AddPlaylist(){
        if(playlistName !== ""){
            const response_playlist = await axios.post("http://127.0.0.1:4444/api/playlist/add", {name:playlistName,count:0,videos:[]} )
            console.log(response_playlist)
            PlaylistDispatcher({type:"ADD-PLAYLIST",payload:{name:playlistName,count:0,videos:[]}})
        }
    }
    return (
    <div className="wrapper">
       <div className="save-to-playlist" style={styles}>
           <div className="playlist-heading">
                <span className="playlist-heading"><p> Add To Playlist</p></span>
            </div>
            <div className="playlist-items">
                {PlaylistState.playlist.map((content)=>{
                console.log(content)
                if(data !== undefined){
                    return <Checkbox checked={content.videos.filter(video=>video.title === data.title).length > 0 ? true : false} name={content.name} data={data} />
                }
            })}
            </div>
            {/*  */}
            <div className="playlist-action">
                <input placeholder="Playlist" className="add-playlist" onChange={(e)=>setPlaylistName(e.target.value)}></input>
                <button className="playlist-add-action" onClick={()=>AddPlaylist("ADD-TO-PLAYLIST")}>ADD</button>
            </div>
       </div>
    </div>
    )
}


