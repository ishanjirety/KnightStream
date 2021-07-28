import React,{useContext,createContext,useReducer} from 'react'
import {LikedReducer} from '../Reducer'
const LikeContext = createContext()

export function Liked({children}) {
    const [likedState,likedDispatch] = useReducer(LikedReducer,liked)
    return (
        <LikeContext.Provider value={{likedState,likedDispatch}}>
            {children}
        </LikeContext.Provider>
    )
}
let liked={
    count:0,
    likedvideos:[],
}

export function useLike(){
    return useContext(LikeContext)
}


