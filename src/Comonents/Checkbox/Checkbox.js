import React,{useState} from 'react'
import axios from 'axios'

import {usePlaylist} from '../../Context'

export function Checkbox(props) {
    const {checked,name,data} = props
    const {PlaylistState,PlaylistDispatcher} = usePlaylist()

    const [CheckedState,setCheckedState] = useState(checked)
    async function AddToPlaylist(type,event,data){
        if(type === "ADD-TO-PLAYLIST"){
            if(!CheckedState){
              const response_playlist_add = await axios.post("https://KnightStream.ishanjirety.repl.co/api/playlist/item/add",{name:event.target.value,video:data})
              PlaylistDispatcher({type:"ADD-TO-PLAYLIST",payload:{data:data,name:event.target.value}})
              setCheckedState(true)
            }
            else if(CheckedState){
                const response_playlist_remove = await axios.post("https://KnightStream.ishanjirety.repl.co/api/playlist/item/remove",{name:event.target.value,video:data})
                PlaylistDispatcher({type:"REMOVE-FROM-PLAYLIST",payload:{data:data,name:event.target.value}})
                setCheckedState(false)
            }
        }
    }

    return (
        <div>
            <input type="checkbox" className="checkbox" checked={CheckedState} onChange={(e)=>AddToPlaylist("ADD-TO-PLAYLIST",e,data)} value={name}/>{name}
            </div>
    )
}

