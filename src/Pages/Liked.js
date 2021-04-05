import React,{useEffect} from 'react'
import axios from 'axios'

import {Playlistcard,Toast,Videodescription} from '../Comonents'

import {useToast,useLike} from '../Context'

import Like from '../Common-Assets/Like.svg'

import './styles.css'
import './Responsive-pages.css'

export function Liked(props) {
    const {value} = props

    const {setToastContent,setToast,toast} = useToast()

    const {likedState,likedDispatch} = useLike()

    useEffect(async ()=>{
        try{
        const response_liked = await axios.get('http://127.0.0.1:4444/api/liked')
        const Liked = response_liked.data.liked   
        likedDispatch({type:"REFRESH-LIKED",payload:Liked})
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
                    <div className="video-home">
                    {likedState.likedvideos.map((item)=>{
                    return <Videodescription data={item}/>
                    })}
                    </div>
                </div>
                { toast && <Toast/>}
            </div>
    )
}


