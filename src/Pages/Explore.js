import React,{useEffect,useState} from 'react'
import axios from 'axios'

// @desc common image assets
import home from '../Common-Assets/Home.svg'
import search from '../Common-Assets/Search.svg'

// @desc importing components
import {Videocard,Videodescription} from '../Comonents'

// @desc importing styles
import './styles.css'
import './Responsive-pages.css'

export function Explore() {

    const[videoList,setVideoList] = useState([])
    
    useEffect(async ()=>{
       const response_videolist = await axios.get('http://127.0.0.1:4444/api/videolist')
       const video_list = response_videolist.data.videos
       console.log(video_list)
       setVideoList(video_list)
    },[])
    return (
            <div className="main-body">
            <div className="heading">
                KnightStream
            </div>
            <div className="search-bar">
                <img src={search} className="search-icon"/>
                <input className="search-input" placeholder="Search"></input>
            </div>
            <div className="card-wrapper">
                <div className="video-home">
                {videoList.map((data=>{
                    return <Videodescription data={data}/>
                    }))
                }
                </div>
            </div>
        </div>  
    )
}


