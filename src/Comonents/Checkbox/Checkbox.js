import React,{useState} from 'react'
import axios from 'axios'

import {usePlaylist} from '../../Context'

import {getToken} from '../../Token'

export function Checkbox(props) {
    const {checked,name,data,keyValue} = props
    const {PlaylistDispatcher} = usePlaylist()

    const [CheckedState,setCheckedState] = useState(checked)

    const {token} = getToken()
    async function AddToPlaylist(type,event,data){
        if(type === "ADD-TO-PLAYLIST"){
            if(!CheckedState){
              await axios.post("https://KnightStream.ishanjirety.repl.co/api/playlist/item/add",{token:token,name:event.target.value,video:data})
              PlaylistDispatcher({type:"ADD-TO-PLAYLIST",payload:{data:data,name:event.target.value}})
              setCheckedState(true)
            }
            else if(CheckedState){
                await axios.post("https://KnightStream.ishanjirety.repl.co/api/playlist/item/remove",{token:token,name:event.target.value,video:data})
                PlaylistDispatcher({type:"REMOVE-FROM-PLAYLIST",payload:{data:data,name:event.target.value}})
                setCheckedState(false)
            }
        }
    }

    return (
            <span key={keyValue}><input type="checkbox" className="checkbox" checked={CheckedState} onChange={(e)=>AddToPlaylist("ADD-TO-PLAYLIST",e,data)} value={name} />{name}</span>

    )
}

