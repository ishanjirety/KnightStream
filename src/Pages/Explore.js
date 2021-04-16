import React,{useEffect} from 'react'
import axios from 'axios'

// @desc common image assets
import search from '../Common-Assets/Search.svg'
import search_white from '../Common-Assets/Search-white.svg'

import {useVideo} from '../Context'

// @desc importing components
import {Videodescription,ProfileButton} from '../Comonents'

// @desc importing styles
import './styles.css'
import './Responsive-pages.css'

let savedVideoListt = ""
export function Explore() {
    
    const {setVideo,video} = useVideo()
    useEffect(()=>{
        (async function fetchData(){
       const response_videolist = await axios.get('https://KnightStream.ishanjirety.repl.co/api/videolist')
       const video_list = response_videolist.data.videos
       savedVideoListt = video_list
       setVideo(video_list)
        })()
    },[])

    function onEnterPress(e){
        if(e!==""){    
            setVideo((item)=>item.filter((video)=>video.title.toLowerCase().includes(e.toLowerCase())))
            }
        }

        function onChangeHandler(e){
                setVideo(savedVideoListt)
                onEnterPress(e.target.value) //
        }
    return (
            <div className="main-body">
                
                <div className="heading search">
                <ProfileButton/>    
                <p><img src={search_white} alt="Explore"/>Explore</p>
                    <div className="search-bar">
                    <img src={search} className="search-icon" alt="search"/>
                    <input className="search-input" onChange={onChangeHandler} placeholder="Search"></input>
                </div>
            </div>
            <div className="card-wrapper">
                <div className="video-home">
                {video.map((data,key)=>{
                    return <Videodescription data={data} key={key} keyValue={key}/>
                    })
                }
                </div>
            </div>
        </div>  
    )
}


