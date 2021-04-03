import React,{useContext,createContext,useState} from 'react'

const ToastContext = createContext()

export function Toast({children}) {
    const [toast,setToast] = useState(false)
    const [toastContent,setToastContent] = useState("An error occured")
    return (
        <ToastContext.Provider value={{toast,setToast,toastContent,setToastContent}}>
            {children}
        </ToastContext.Provider>
    )
    
}
export function useToast(){
    return useContext(ToastContext)
}


