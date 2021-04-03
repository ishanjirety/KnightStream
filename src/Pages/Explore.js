import React,{useEffect,useState} from 'react'
import axios from 'axios'

// @desc common image assets
import home from '../Common-Assets/Home.svg'
import search from '../Common-Assets/Search.svg'

import {useToast,useVideo} from '../Context'

// @desc importing components
import {Videocard,Videodescription} from '../Comonents'

// @desc importing styles
import './styles.css'
import './Responsive-pages.css'

let savedVideoListt = ""
export function Explore() {
    
    const {setToastContent,setToast} = useToast()

    const {setVideo,video} = useVideo()

    const [searchQuery,setSearchQuery] = useState()

    useEffect(async ()=>{
       const response_videolist = await axios.get('http://127.0.0.1:4444/api/videolist')
       const video_list = response_videolist.data.videos
       savedVideoListt = video_list
       setVideo(video_list)
    },[])

    function onChangeHandler(e){
        if(e!=""){    
            setVideo((item)=>item.filter((video)=>video.title.toLowerCase().includes(e.toLowerCase())))
        }
        else{
            setVideo(savedVideoListt)
        }
        }

    return (
            <div className="main-body">
                <div className="heading search">
                    <p>Explore</p>
                    <div className="search-bar">
                    <img src={search} className="search-icon"/>
                    <input className="search-input" onChange={(e)=>onChangeHandler(e.target.value)} placeholder="Search"></input>
                </div>
            </div>

            <div class="genres-area">
                <div className="genre-wrapper">
                <div className="genres">
                    <p>Fun & Learn</p>
                </div>
                <div className="genres">
                    <p>Fun & Learn</p>
                </div>
                <div className="genres">
                    <p>Fun & Learn</p>
                </div>
                <div className="genres">
                    <p>Fun & Learn</p>
                </div>
                </div>
            </div>

            <div className="card-wrapper">
                <div className="video-home">
                {video.map((data=>{
                    return <Videodescription data={data}/>
                    }))
                }
                </div>
            </div>
        </div>  
    )
}


