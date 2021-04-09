import React,{useContext,createContext,useReducer} from 'react'
import {PlaylistReducer} from '../Reducer'

const PlaylistContext = createContext()

export function Playlist({children}) {
    const [PlaylistState,PlaylistDispatcher] = useReducer(PlaylistReducer,playlists)
    return (
        <PlaylistContext.Provider value={{PlaylistState,PlaylistDispatcher}}>
            {children}
        </PlaylistContext.Provider>
    )
}

export function usePlaylist(){
    return useContext(PlaylistContext)
}

let playlists={
    count:0,
    playlist:[
        {
            name: "DEMO",
            count: 0,
            videos : [],
        }
    ],
}

