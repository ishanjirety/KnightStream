import React,{useEffect,useState} from 'react'
import {useParams} from 'react-router-dom'

import {usePlaylist} from '../Context'


import {Videodescription,ProfileButton} from '../Comonents'


import playlist from '../Common-Assets/Playlist.svg'
import './styles.css'
import './Responsive-pages.css'

export function PlaylistDisplay(){
    const {PlaylistState} = usePlaylist()
    const [Foundplaylist,setFoundPlaylist] = useState()
    const {playlistId} = useParams()
    useEffect(()=>{
        const PLAYLIST = PlaylistState.playlist.find(playlist=> playlist.name === playlistId )
        setFoundPlaylist(PLAYLIST)
    },[])
    return (
        <div className="main-body">
            <div className="heading">
                <img src={playlist} alt="Playlist"/>{playlistId}
                <ProfileButton/>    
            </div>
                <div className="card-wrapper">
                    <ul className="list-playlist">
                    {Foundplaylist !== undefined && Foundplaylist.videos.map((item,key)=>{
                        return <li className="list-item-inline" key={key}><Videodescription data={item}/></li>
                       
                    })}
                    </ul>
                </div>
            </div>
    )
}


