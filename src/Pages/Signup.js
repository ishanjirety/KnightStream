import React,{useReducer,useState} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import {Redirect} from '../Comonents'
export function Signup() {
    const [textInputState,textInputDispatcher] = useReducer(inputDispatcher,{username:"",password:"",rePassword:"",answer:""})
    const [visibilityErr,setErrVisibility] = useState("hidden")
    const [visibilitySuccess,setSuccessVisibility] = useState("hidden")
    const [content,setContent] = useState("")
    async function userSignup(){
        try{
            if(textInputState.password === textInputState.rePassword){
            const response_signup = await axios.post("https://KnightStream.ishanjirety.repl.co/api/signup",textInputState)
            console.log(response_signup.data)
            if(response_signup.data.status===200){
                setContent("User created successfully")
                setSuccessVisibility("visible")
                setErrVisibility("hidden")
            }
            else{
                setContent("Could not create user")
                setSuccessVisibility("hidden")
                setErrVisibility("visible")
            }
            }else{
                setErrVisibility("visible")
                setContent("Password does not match")
                setSuccessVisibility("hidden")
            }
        }catch(e){
            console.log(e)
        }
    } 
    return (
        <div className="login">
            <div className="login-logo">
                <span class="login-underline">
                    <p className="login-border">KnightStream</p>
                </span>
            </div>  
            <section className="login-card signup-card">
                <p className="login-greeting">WELCOME</p>
                <p className="login-heading">Create Account</p>
                <div className="alert" style={{visibility:visibilitySuccess}}><i class="fa fa-check-circle-o"/>{content}</div>
                <div className="alert danger" style={{visibility:visibilityErr}}><i class="fa fa-exclamation"/><p>{content}</p></div>
                <div className="input-fields">   
                   <input  className="input" required onChange={(e)=>textInputDispatcher({type:"ADD-USERNAME",payload:e.target.value})}/><label>Username</label>
                </div>
                <div className="question signup-question">Q. What is your cat's name</div>
                <div className="input-fields">    
                   <input  className="input" required onChange={(e)=>textInputDispatcher({type:"ADD-ANSWER",payload:e.target.value})}/><label>Answer</label>
                </div>
                <div className="input-fields">
                        <input className="input" required type="password" onChange={(e)=>textInputDispatcher({type:"ADD-PASSWORD",payload:e.target.value})}/>
                        <label>Password</label>
                </div>
                <div className="input-fields">    
                   <input className="input" required type="password" onChange={(e)=>textInputDispatcher({type:"ADD-RE-PASSWORD",payload:e.target.value})}/><label>Re-enter Password</label>
                </div>
                <div className="forgot-password-field">
               {/* { error && <p className="error-login">Invalid Credentials</p>} */}
                </div>
                <button className="login-btn" type="submit" onClick={userSignup}>Sign up</button>
                <Link to="/login" className="forgot-password signup">Alredy registered? <span className="inverted">Sign in &rarr; </span>
                </Link>
            </section>
        </div>
    )
}


function inputDispatcher(state,action){
    switch(action.type){
        case "ADD-USERNAME":
            return {...state,username:action.payload}
        case "ADD-PASSWORD":
            return {...state,password:action.payload}
        case "ADD-RE-PASSWORD":
            return {...state,rePassword:action.payload}
        case "ADD-ANSWER":
            return {...state,answer:action.payload}
    }
}


