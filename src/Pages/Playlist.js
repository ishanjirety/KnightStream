import React,{useEffect} from 'react'
import axios from 'axios'

import {usePlaylist,useToast} from '../Context'


import {Playlistcard,Toast,ProfileButton} from '../Comonents'


import playlist from '../Common-Assets/Playlist.svg'
import './styles.css'
import './Responsive-pages.css'

export function Playlist(props) {
    const {setToastContent,setToast,toast} = useToast()

    const {PlaylistDispatcher,PlaylistState} = usePlaylist()

    useEffect(()=>{
        (async function fetchData(){
        try{
        const response_playlist = await axios.get('https://KnightStream.ishanjirety.repl.co/api/playlist')
        const playlist = response_playlist.data.playlists   
        console.log(playlist)
        PlaylistDispatcher({type:"REFRESH-PLAYLIST",payload:playlist})
        }
        catch(e){
            setToast(true)
            setToastContent("An error occured")
        }
    })()
    },[])
    return (
        <div className="main-body">
            <div className="heading">
                <img src={playlist} alt="Playlists"/>Playlists
                <ProfileButton/>    
            </div>
                <div className="card-wrapper">
                    <ul className="list-playlist">
                    {PlaylistState.playlist.length > 0 ? PlaylistState.playlist.map((item)=>{
                        return <li className="list-item-inline"><Playlistcard source="https://i.ytimg.com/vi/KGMEhdaZ6ZY/maxresdefault.jpg" text={item.name} data={item}/></li>
                       
                    }): <p className="empty-heading">No playlist created</p>}
                    </ul>
                </div>
                { toast && <Toast/>}
            </div>
    )
}


