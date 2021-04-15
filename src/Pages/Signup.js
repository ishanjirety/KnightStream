import React,{useReducer,useState,useEffect} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

export function Signup() {
    const [textInputState,textInputDispatcher] = useReducer(inputDispatcher,{username:"",password:"",rePassword:"",answer:""})
    
    
    const [visibilityErr,setErrVisibility] = useState("hidden")
    const [Alertclass,setAlertClass] = useState("alert")
    const [faClass,setFaClass] = useState("fa-check-circle-o")
    const [content,setContent] = useState("")

    const [signupContent,setSignupContent] = useState("Sign up")
    async function userSignup(){
        try{
        if(textInputState.username !== "" && textInputState.password !== "" && textInputState.answer !== ""){
            if(textInputState.password === textInputState.rePassword){
                setSignupContent("Signing up...")
            const response_signup = await axios.post("https://KnightStream.ishanjirety.repl.co/api/signup",textInputState)
            if(response_signup.data.status===200){
                setContent("User created successfully")
                setAlertClass("alert animate")
                setErrVisibility("visible")
                setFaClass("fa-check-circle-o")
                setSignupContent("Sign up")
            }
            else{
                setContent("Could not create user")
                setAlertClass("alert danger animate")
                setErrVisibility("visible")
                setFaClass("fa-exclamation")
            }
            }else{
                setErrVisibility("visible")
                setContent("Password does not match")
                setAlertClass("alert danger animate")
                setFaClass("fa-exclamation")
            }
        }
        else{
                setErrVisibility("visible")
                setContent("Fields cannot be empty")
                setAlertClass("alert danger animate")
                setFaClass("fa-exclamation")
        }
        }catch(e){
            console.log(e)
            setContent("Uh no! 500 Internal server error")
            setAlertClass("alert danger animate")
            setErrVisibility("visible")
            setFaClass("fa-exclamation")
            setSignupContent("Sign up")
        }
    } 

    useEffect(()=>{setTimeout(()=>{
            setAlertClass("alert fade")
            setErrVisibility("hidden")
        },4000)
    },[visibilityErr])
    return (
        <div className="login">
            <div className="login-logo">
                <span className="login-underline">
                    <p className="login-border">KnightStream</p>
                </span>
            </div>  
            <section className="login-card signup-card">
                <p className="login-greeting">WELCOME</p>
                <p className="login-heading">Create Account</p>
                
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
                <button className="login-btn" type="submit" onClick={userSignup}>{signupContent}</button>
                <Link to="/login" className="forgot-password signup">Alredy registered? <span className="inverted">Sign in &rarr; </span>
                </Link>
            </section>
            <div className={Alertclass} style={{visibility:visibilityErr}}><i className={`fa ${faClass}`}/><p>{content}</p></div>
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
        default : 
            return state
    }
}


