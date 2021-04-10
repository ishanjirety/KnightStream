import React,{useEffect} from 'react'
import axios from 'axios'
import {Videodescription,Playlistcard,ProfileButton} from '../Comonents'
import {Link} from 'react-router-dom'
import {usePlaylist,useLike} from '../Context'

export function Home() {
    const {PlaylistState,PlaylistDispatcher} = usePlaylist()
    const {likedState,likedDispatch} = useLike()
    useEffect(()=>{
        (async function fetchData(){
        const response_playlist = await axios.get("https://KnightStream.ishanjirety.repl.co/api/playlist")
        const Playlist = response_playlist.data.playlists
        PlaylistDispatcher({type:"REFRESH-PLAYLIST",payload:Playlist})

        const response_liked = await axios.get('https://KnightStream.ishanjirety.repl.co/api/liked')
        const Liked = response_liked.data.liked   
        likedDispatch({type:"REFRESH-LIKED",payload:Liked})
        })()
    },[])
    return (
        <div className="main-body home">
            <div className="heading logo">
                <p>KnightStream</p>
                <ProfileButton/>    
            </div>
            <div className="nav-options">
                <p>Playlist {PlaylistState.playlist.length !== 0 ? <Link className="nav-options-link" to="/playlist">View More</Link>: <Link className="nav-options-link" to="/explore">Explore</Link> }</p>
                <div className="display-items">
                {PlaylistState.playlist.length !== 0 ? PlaylistState.playlist.map((item,key)=>key < 3 && <Playlistcard data={item}/>): <p className="empty-heading">No playlist created</p>}
                </div>
            </div>
            <div className="nav-options">
                <p>Liked Videos {likedState.likedvideos.length !==0 ? <Link className="nav-options-link" to="/liked-videos">View More</Link>: <Link className="nav-options-link" to="/explore">Explore</Link> }</p>
                <div className="display-items liked">
                    {likedState.likedvideos.length !==0 ? likedState.likedvideos.map((item,key)=>key<3 && <Videodescription data={item}/>) : <p className="empty-heading">No liked videos</p>}
                </div>
            </div>
        </div>
    )
}

