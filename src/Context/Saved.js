import React,{useContext,createContext,useReducer} from 'react'
import {SavedReducer} from '../Reducer'

const SavedContext = createContext()

export function Saved({children}) {
    const [savedState,savedDispatch] = useReducer(SavedReducer,saved)
    return (
        <SavedContext.Provider value={{savedState,savedDispatch}}>
            {children}
        </SavedContext.Provider>
    )
}

export function useSaved(){
    return useContext(SavedContext)
}

const saved={
    count:0,
    savedvideos:[],
}