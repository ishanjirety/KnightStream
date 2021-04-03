import React,{useEffect} from 'react'
import axios from 'axios'

import {Playlistcard,Toast} from '../Comonents'

import {useToast} from '../Context'

import Like from '../Common-Assets/Like.svg'

import './styles.css'
import './Responsive-pages.css'

export function Liked(props) {
    const {value} = props

    const {setToastContent,setToast,toast} = useToast()


    useEffect(async ()=>{
        try{
        const response_liked = await axios.get('http://127.0.0.1:4444/api/liked')
        const Liked = response_liked.data.likedvideos   
        }
        catch(e){
            setToast(true)
            setToastContent("An error occured")
        }
    },[])
    return (
        <div className="main-body">
            <div className="heading">
                <img src={Like}/>Liked Videos
            </div>
                <div className="card-wrapper">
                    <ul className="list-playlist">
                    {/* {PlaylistState.playlist.map((item)=>{
                       return <li className="list-item-inline"><Playlistcard source="https://i.ytimg.com/vi/KGMEhdaZ6ZY/maxresdefault.jpg" text="Lectures"/></li>
                    })} */}
                    </ul>
                </div>
                { toast && <Toast/>}
            </div>
    )
}


