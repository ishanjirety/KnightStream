import React,{useState} from 'react'
import './Toast.css'
import {useToast} from '../../Context'

export function Toast() {
    const [toastClass ,setToastClass] = useState("toast")
    const {toastContent} = useToast()
    setTimeout(()=>setToastClass("toast toast-fadeout"),3000)
    return (
        <div className={toastClass}>
            <p>{toastContent}</p>
        </div>
    )
}


