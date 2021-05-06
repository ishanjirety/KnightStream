import React,{useEffect} from 'react'
import axios from 'axios'

import {Toast,Videodescription,ProfileButton} from '../Comonents'

import {useToast,useLike} from '../Context'

import Like from '../Common-Assets/Like.svg'

import { getToken } from '../Token'

import './styles.css'
import './Responsive-pages.css'

export function Liked() {

    const {setToastContent,setToast,toast} = useToast()

    const {likedState,likedDispatch} = useLike()
    const { token } = getToken()

    useEffect(()=>{
        (async function fetchData(){
        try{
        const response_liked = await axios.get(`https://KnightStream.ishanjirety.repl.co/api/liked/${token}`)
        const Liked = response_liked.data.liked   
        likedDispatch({type:"REFRESH-LIKED",payload:Liked})
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
                <img src={Like} alt="Like"/><p>Liked Videos</p>
                <ProfileButton/>
            </div>
                <div className="card-wrapper">
                    <div className="video-home">
                    {likedState.likedvideos.length>0 ? likedState.likedvideos.map((item,key)=>{
                    return <Videodescription key={key} keyValue={key} data={item}/>
                    }): <p className="empty-heading">No liked videos</p>}
                    </div>
                </div>
                { toast && <Toast/>}
            </div>
    )
}


