import React,{useState} from 'react'
import axios from 'axios'

import {usePlaylist} from '../../Context'

export function Checkbox(props) {
    const {checked,name,data} = props
    const {PlaylistState,PlaylistDispatcher} = usePlaylist()

    const [CheckedState,setCheckedState] = useState(checked)
    console.log(checked)
    async function AddToPlaylist(type,event,data){
        if(type === "ADD-TO-PLAYLIST"){
            if(!CheckedState){
             console.log(event.target.value)
              const response_playlist_add = await axios.post("http://127.0.0.1:4444/api/playlist/item/add",{name:event.target.value,video:data})
              console.log(response_playlist_add.data)
              PlaylistDispatcher({type:"ADD-TO-PLAYLIST",payload:{data:data,name:event.target.value}})
              setCheckedState(true)
              setTimeout(()=>console.log(PlaylistState),2000)
            }
            else if(CheckedState){
                console.log(event.target.value)
                const response_playlist_remove = await axios.post("http://127.0.0.1:4444/api/playlist/item/remove",{name:event.target.value,video:data})
                console.log(response_playlist_remove)
                PlaylistDispatcher({type:"REMOVE-FROM-PLAYLIST",payload:{data:data,name:event.target.value}})
                setTimeout(()=>console.log(PlaylistState),2000)
                setCheckedState(false)
            }
        }
    }

    return (
        <div>
            <input type="checkbox" class="checkbox" checked={CheckedState} onClick={(e)=>AddToPlaylist("ADD-TO-PLAYLIST",e,data)} value={name}/>{name}
            </div>
    )
}

