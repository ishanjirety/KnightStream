import React,{useEffect,useState,Fragment} from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios'

// @desc importing Components
import {Videocard,PlaylistAction} from '../Comonents'

// importing hooks 
import {useVideo,useLike,useSaved} from '../Context'

// @desc common assets
import playlist from '../Common-Assets/Playlist.svg'


export function Videodisplay() {
    const {likedDispatch,likedState} = useLike()
    const {savedState,savedDispatch} = useSaved()

    const {videoId} = useParams()

    const [FoundVideo,setFoundVideo] = useState()
    const [liked,setLiked] = useState("")
    const [saved,setSaved] = useState("")
    const [saveToggle,setSaveToggle] = useState("")

    useEffect(async ()=>{
        const response_videolist = await axios.get('http://127.0.0.1:4444/api/videolist')
        const video_list = await response_videolist.data.videos
        console.log(video_list)
        const video = await video_list.find((item)=>item.id===videoId)
        setFoundVideo(video)
        console.log(video.isLiked)

        video.isLiked ? setLiked("LIKED") : setLiked("UNLIKED")

        video.isSaved ? setSaveToggle(true) : setSaveToggle(false)
    },[])
    
    useEffect(async ()=>{
        try{
        if(liked==="LIKED"){
            const response_liked = await axios.post('http://127.0.0.1:4444/api/liked/add',FoundVideo)
            likedDispatch({type:"ADD-TO-LIKED",payload:FoundVideo})
            setLiked("LIKED") 
        }
        if(liked==="UNLIKED"){
            const response_removed_like = await axios.post('http://127.0.0.1:4444/api/liked/remove',FoundVideo)
            likedDispatch({type:"REMOVE-FROM-LIKED",payload:FoundVideo})
            setLiked("UNLIKED")
        }
    }catch(e){
        console.error("ERROR : COULD NOT LIKE ",e)
    }
    },[liked])
    
    useEffect(async ()=>{
        try{
        if(saved === "SAVED"){
            const response_saved = await axios.post('http://127.0.0.1:4444/api/save/add',FoundVideo)
            savedDispatch({type:"ADD-TO-SAVED",payload:FoundVideo})
            setSaveToggle(true)
        }
        else{
            const response_removed_saved = await axios.post('http://127.0.0.1:4444/api/save/remove',FoundVideo)
            savedDispatch({type:"REMOVE-FROM-SAVED",payload:FoundVideo})
            setSaveToggle(false)
        }
        }
        catch(e){
            console.error("ERROR : COULD NOT SAVE", e)
        }
    },[saved])

    return (
        <div className="video-wrapper">
            <div className="video-holder">
             <Videocard id={videoId}/>
             {FoundVideo!=undefined && 
            <div className="description">
                <p className="video-title">{FoundVideo.title}</p>
                <div className="video-action-buttons">
                    <input type="checkbox" className="btn-video-action fa fa-heart" onChange={()=>liked==="UNLIKED" || liked==="" ? setLiked("LIKED") : setLiked("UNLIKED")} checked={liked === "LIKED" ? true : false}></input>
                    <button className="btn-video-action svg-btn"><img  className="action-icon" src={playlist}></img></button>
                    <input type="checkbox" className="btn-video-action fa fa-bookmark" onChange={()=>saved==="SAVED" || saved === "" ? setSaved("UNSAVED") : setSaved("SAVED")} checked={saveToggle}></input>
                    
                    
                    {/* <PlaylistAction/> */}
                </div>
                
                <div className="saved-display">
                    { saveToggle && <img src={`https://img.youtube.com/vi/${videoId}/mqdefault.jpg`} className="saved-image"></img>}
                </div>
            </div>
           }
           </div>
           <div className="take-notes">
                <div className="saved-heading">
                    <span><p>ADD NOTES</p></span>
                    
                </div>
                <textarea></textarea>
                <div className="note-controlls">
                <button className="trash"><i className="fa fa-trash-o"></i></button>
                <button className="save-btn">SAVE<i className="fa fa-bookmark-o"></i></button>
                </div>
           </div>
        </div>
    )
}

