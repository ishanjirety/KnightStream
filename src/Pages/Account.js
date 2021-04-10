import React,{useReducer,useState} from 'react'
import axios from 'axios'
import account from '../Common-Assets/Account.svg'

export function Account() {
    const [inputState,inputDispatcher] = useReducer(inputReducer,state)
    const [error,setError] = useState(false)
    const [errorContent,setErrorContent] = useState("")
    async function UpdateHandler(){
        if(checkPassword()){
            const response = await axios.post('https://KnightStream.ishanjirety.repl.co/api/users/update',{username:inputState.username,password:inputState.password})
            console.log(response.data.status)
            const status = response.data.status
            if(status !== 200) {
                setError(true) 
                setErrorContent("Username not found")
            }
        }else{
            setErrorContent("Password does not match")
            setError(true)
        }
    }
    function checkPassword(){
        if(inputState.password === inputState.rePassword){
            return true
        }
        else{
            return false
        }
    }
    return (
        <div className="main-body">
            <div className="heading search">
                <p><img alt="Account" src={account}/> Account</p>
            </div>
            <div className="update-user account">
                {/* <p className="heading account-heading">Update Password</p> */}
                <span className="login-border account-heading"><p>Update Password</p></span>
                <div className="input-fields ">    
                   <input  className="input" required onChange={(e)=>inputDispatcher({type:"USERNAME",payload:e.target.value})}/><label>Username</label>
                </div>
                <div className="input-fields">    
                   <input  className="input" required onChange={(e)=>inputDispatcher({type:"PASSWORD",payload:e.target.value})}/><label>Password</label>
                </div>
                <div className="input-fields">    
                   <input  className="input" required onChange={(e)=>inputDispatcher({type:"RE-PASSWORD",payload:e.target.value})}/><label>Re-Enter Password</label>
                   
                </div>
                <div className="input-fields account-field">    
                { <p className="error-login account-error" style={{color:error && inputState.rePassword !== "" && checkPassword()? "red" : "transparent" ,color:!error && "green"}}>{errorContent}</p> }   
                </div>
                <button className="login-btn" type="submit" onClick={UpdateHandler}>Update</button>
                
            </div>
        </div>
    )
}
function inputReducer(state,action){
    switch (action.type) {
        case "USERNAME":
            return {...state,username:action.payload}        
        case "PASSWORD":
            return {...state,password:action.payload}        
        case "RE-PASSWORD":
            return {...state,rePassword:action.payload}        
        default:
            return state
    }

}
const state = {
    username:"",
    password:"",
    rePassword:""
}


