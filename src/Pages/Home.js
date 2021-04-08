import React,{useEffect} from 'react'
import axios from 'axios'
import {Videodescription,Playlistcard} from '../Comonents'
import {Link} from 'react-router-dom'
import {usePlaylist,useLike} from '../Context'
const data={
    title:"aeadwwd",
    videoUrl:"awdwdawd",
    id:"MJC4wFdMMyc",
    channelName:"wdawdawdaw"
}
let count = 0 
export function Home() {
    const {PlaylistState,PlaylistDispatcher} = usePlaylist()
    const {likedState,likedDispatch} = useLike()
    useEffect(async ()=>{
        const response_playlist = await axios.get("http://127.0.0.1:4444/api/playlist")
        const Playlist = response_playlist.data.playlists
        PlaylistDispatcher({type:"REFRESH-PLAYLIST",payload:Playlist})

        const response_liked = await axios.get('http://127.0.0.1:4444/api/liked')
        const Liked = response_liked.data.liked   
        likedDispatch({type:"REFRESH-LIKED",payload:Liked})
    },[])
    return (
        <div className="main-body home">
            <div className="heading">
                <p>KnightStream</p>
            </div>
            <div className="nav-options">
                <p>Recommended </p>
                <div className="display-items">
                </div>
            </div>
            <div className="nav-options">
                <p>Playlist <Link className="nav-options-link" to="/playlist">View More</Link></p>
                <div className="display-items">
                {PlaylistState.playlist.map((item,key)=>key < 3 && <Playlistcard data={item}/>)}
                </div>
            </div>
            <div className="nav-options">
                <p>Liked Videos <Link className="nav-options-link" to="/liked-videos">View More</Link></p>
                <div className="display-items liked">
                    {likedState.likedvideos.map((item,key)=>key<3 && <Videodescription data={item}/>)}
                </div>
            </div>
        </div>
    )
}

