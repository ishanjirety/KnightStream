import React,{useState,useEffect,useReducer} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
export function Forgotpassword() {

    const [textInputState,textInputDispatcher] = useReducer(inputDispatcher,{username:"",password:"",rePassword:"",answer:""})
    const [visibilityErr,setErrVisibility] = useState("hidden")
    const [Alertclass,setAlertClass] = useState("alert")
    const [faClass,setFaClass] = useState("fa-check-circle-o")
    const [content,setContent] = useState("")

    const [signupContent,setSignupContent] = useState("Reset")
    async function forgotPassword(){
        try{
            if(textInputState.password === textInputState.rePassword){
                setSignupContent("Resetting...")
            const response_signup = await axios.post("https://KnightStream.ishanjirety.repl.co/api/password/recovery",textInputState)
            if(response_signup.data.status===204){
                setContent("Password reset successfully")
                setAlertClass("alert animate")
                setErrVisibility("visible")
                setFaClass("fa-check-circle-o")
                setSignupContent("Reset")
            }
            else{
                setContent("User not found")
                setAlertClass("alert danger animate")
                setErrVisibility("visible")
                setFaClass("fa-exclamation")
                setSignupContent("Reset")
            }
            }else{
                setErrVisibility("visible")
                setContent("Password does not match")
                setAlertClass("alert danger animate")
                setFaClass("fa-exclamation")
            }
        }catch(e){
            setContent("Uh no! 500 Internal server error")
            setAlertClass("alert danger animate")
            setErrVisibility("visible")
            setFaClass("fa-exclamation")
            setSignupContent("Reset")
        }
    } 

    useEffect(()=>{
        setTimeout(()=>{
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
            <p className="login-greeting">Forgot Password ? </p>
                <div className="input-fields">    
                   <input className="input" required type="text" onChange={(e)=>textInputDispatcher({type:"ADD-USERNAME",payload:e.target.value})}/><label>Username</label>
                </div>

                <div className="question signup-question">Q. What is your cat's name</div>
                
                <div className="input-fields">    
                   <input className="input" required type="text" onChange={(e)=>textInputDispatcher({type:"ADD-ANSWER",payload:e.target.value})}/><label>Answer</label>
                </div>
                <div className="input-fields">
                        <input className="input" required type="password" onChange={(e)=>textInputDispatcher({type:"ADD-PASSWORD",payload:e.target.value})}/>
                        <label>Password</label>
                </div>
                <div className="input-fields">
                        <input className="input" required type="password" onChange={(e)=>textInputDispatcher({type:"ADD-RE-PASSWORD",payload:e.target.value})}/>
                        <label>Re-Enter Password</label>
                </div>
                <div className="forgot-password-field">
                </div>
                <button className="login-btn" type="submit" onClick={forgotPassword}>{signupContent}</button>
                <Link to="/login" className="forgot-password signup"><span className="inverted"> &#8592; Back</span>
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
