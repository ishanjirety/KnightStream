import React,{useContext,createContext,useState} from 'react'

export const VideoContext = createContext()

export function Video({children}) {
    const [video,setVideo] = useState([])
    return (
        <VideoContext.Provider value={{video,setVideo}}>
            {children}
        </VideoContext.Provider>
        
    )
}

export function useVideo(){
    return useContext(VideoContext)
}

let videoList = []