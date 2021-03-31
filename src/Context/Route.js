import React,{useContext,createContext,useState} from 'react'

export const RouteContext = createContext()

export function Router({children}) {
    const [route,setRoute] = useState('home')
    return (
        <RouteContext.Provider value={{route,setRoute}}>
            {children}
        </RouteContext.Provider>
    )
}


export function useRoute(){
    return useContext(RouteContext)
}