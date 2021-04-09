import React,{useEffect,useState} from 'react'
import {useParams} from 'react-router-dom'

import {usePlaylist} from '../Context'


import {Videodescription} from '../Comonents'


import playlist from '../Common-Assets/Playlist.svg'
import './styles.css'
import './Responsive-pages.css'

export function PlaylistDisplay(props) {
    const {PlaylistState} = usePlaylist()
    const [Foundplaylist,setFoundPlaylist] = useState()
    const {playlistId} = useParams()
    useEffect(()=>{
        console.log(PlaylistState)
        const PLAYLIST = PlaylistState.playlist.find(playlist=> playlist.name === playlistId )
        setFoundPlaylist(PLAYLIST)
        console.log(PLAYLIST)
    },[])
    console.log(playlistId)
    return (
        <div className="main-body">
            {console.log(Foundplaylist)}
            <div className="heading">
                <img src={playlist} alt="Playlist"/>{playlistId}
            </div>
                <div className="card-wrapper">
                    <ul className="list-playlist">
                    {Foundplaylist !== undefined && Foundplaylist.videos.map((item)=>{
                        return <li className="list-item-inline"><Videodescription data={item}/></li>
                       
                    })}
                    </ul>
                </div>
            </div>
    )
}


