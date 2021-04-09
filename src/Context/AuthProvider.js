import React,{useState,createContext,useContext} from 'react'

const AuthContext = createContext()

export function AuthProvider({children}) {
    const [loggedIn,setLoggedin] = useState(true)
    return (
        <AuthContext.Provider value={{loggedIn,setLoggedin}}>
            {children}
        </AuthContext.Provider>
    )
}

export function useAuth(){
    return useContext(AuthContext)
}
