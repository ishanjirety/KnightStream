import React,{useEffect,useState,Fragment} from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios'

// @desc importing Components
import {Videocard,PlaylistAction} from '../Comonents'

// importing hooks 
import {useVideo,useLike,useSaved,usePlaylist} from '../Context'

// @desc common assets
import playlist from '../Common-Assets/Playlist.svg'


export function Videodisplay() {
    const {likedDispatch,likedState} = useLike()
    const {savedState,savedDispatch} = useSaved()
    const{PlaylistState,PlaylistDispatcher}=usePlaylist()

    const {videoId} = useParams()

    const [FoundVideo,setFoundVideo] = useState()
    const [liked,setLiked] = useState("")
    const [saveToggle,setSaveToggle] = useState("")
    const [notes,setNotes] = useState("")
    const [OpenModal,setOpenModal] = useState(false)
    const [showPlaylist,setShowPlaylist] = useState(false)

    useEffect(async ()=>{

        // Finding Video From URL Param
        const response_videolist = await axios.get('http://127.0.0.1:4444/api/videolist')
        const video_list = await response_videolist.data.videos
        const video = await video_list.find((item)=>item.id===videoId)
        setFoundVideo(video)
        video.isLiked ? setLiked("LIKED") : setLiked("UNLIKED")

        // Getting Saved List
        const response_saved = await axios.get("http://127.0.0.1:4444/api/saved")
        const parsed_video = await response_saved.data.saved.savedvideos

        if(parsed_video !== undefined && parsed_video.length !== 0){
        const saved_video = await parsed_video.find((item)=>item.id===videoId)
        saved_video !== undefined ? setNotes(saved_video.notes) :setNotes("")
        }

        // Fetching Playlists
        const response_playlist = await axios.get("http://127.0.0.1:4444/api/playlist")
        const playlist = response_playlist.data.playlists
        PlaylistDispatcher({type:"REFRESH-PLAYLIST",payload:playlist})

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
    
   async function SaveHandler(action){
        try{
            switch(action){
                case "SAVE" :
                    setSaveToggle(true)
                    const TEXT = notes.replace(/\n/g,"[nl]")
                    console.log(TEXT)
                    const response_saved = await axios.post('http://127.0.0.1:4444/api/save/add',{...FoundVideo,notes:notes})
                    console.log("SAVED : ",response_saved)
                    savedDispatch({type:"ADD-TO-SAVED",payload:{...FoundVideo,notes:notes}})
                    setTimeout(()=>setSaveToggle(false),2000)
                    break
                case "DELETE" :
                console.log(FoundVideo)
                const response_removed_saved = await axios.post('http://127.0.0.1:4444/api/save/remove',FoundVideo)
                savedDispatch({type:"REMOVE-FROM-SAVED",payload:FoundVideo})
                setSaveToggle(false)
                setOpenModal(false)
                setNotes("")
                break;
            }
            
            }
        catch(e){
            console.error("ERROR : COULD NOT SAVE", e)
        }
    }
    return (
        <Fragment>
        <div className="video-wrapper" >
            <div className="video-holder">
             <Videocard id={videoId}/>
             {FoundVideo!=undefined && 
            <div className="description">
                <p className="video-title">{FoundVideo.title}</p>
                <div className="video-action-buttons">
                    <input type="checkbox" className="btn-video-action fa fa-heart" onChange={()=>liked==="UNLIKED" || liked==="" ? setLiked("LIKED") : setLiked("UNLIKED")} checked={liked === "LIKED" ? true : false}></input>
                    <button className="btn-video-action svg-btn" onClick={()=>setShowPlaylist(!showPlaylist)}><img  className="action-icon" src={playlist}></img></button>                  
                    
                    {/* <PlaylistAction/> */}
                </div>
            </div>
           }
           </div>
           <div className="take-notes">
                <div className="saved-heading">
                    <span><p>ADD NOTES</p></span>
                </div>
                <textarea onChange={(e)=>setNotes(e.target.value)} value={notes}></textarea>
                <div className="note-controlls" >

                <button className="trash" onClick={()=>setOpenModal(true)}><i className="fa fa-trash-o"></i></button>
                <button className="save-btn" onClick={()=>SaveHandler("SAVE")}>SAVE<i className="fa fa-bookmark-o"></i></button>     

                { OpenModal && <div className="warning-modal">
                        <div className="warning">
                        <span><p className="warning-heading">Delete Notes</p></span>
                        <p className="warning-text">This can’t be undone and it will be removed from your notes.</p>
                        <div className="warning-controls">
                            <button className="warning-btn warning-primary"  onClick={()=>SaveHandler("DELETE")}>Delete</button>
                            <button className="warning-btn" onClick={()=>setOpenModal(false)}>Cancel</button>
                        </div>
                    </div> 
                </div>}
                </div>
           </div>
           
        </div>
        <div className="saved-display">
                 { saveToggle && <img src={`https://img.youtube.com/vi/${videoId}/mqdefault.jpg`} className="saved-image"></img>}
        </div>
            <PlaylistAction styles={showPlaylist ? {height:'15rem'} : {height:"0"}} data={FoundVideo}/>
        </Fragment>
    )
} 