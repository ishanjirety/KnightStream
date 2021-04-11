import React,{useState,useEffect} from 'react'
import {Link,useLocation,useNavigate} from 'react-router-dom'
import './styles.css'
import {setToken} from '../Token'
import {useAuth} from '../Context'
import {Redirect} from '../Comonents'
import uuid from 'react-uuid'
import axios from 'axios'

export function Login() {

    const [username,setUsername] = useState("")
    const [password,setPassword] = useState("")
    const [error,setError] = useState(false)
    const [redirect, setRedirect] = useState(false)

    const {loggedIn,setLoggedin} = useAuth()
    const { state } = useLocation();
    const navigate = useNavigate();

    async function onSubmitHandler(){
        try{
            setRedirect(true)
            const response_login=await axios.post('https://KnightStream.ishanjirety.repl.co/api/login',{username:username,password:password})
            const result = response_login.data.status
            result===401 ? setError(true) : setError(false)
            if(result===200){
                const ID = uuid()
                
                const response=await axios.post('https://KnightStream.ishanjirety.repl.co/api/upDatetoken',{username:username,token:ID})
                const status = response.data.status
                status === 200 && setToken(ID,true)
                console.log("HERE")
                setLoggedin(true)
                setRedirect(false)
                navigate(state?.from ? state.from : "/")
            }   
    }catch(e){
        console.log(e)
    }
    }
    useEffect(()=>{
            if(loggedIn){
                navigate('/')
            }
    },[])
    return (
        <div className="login">
            <section className="login-card">
                <span className="login-border"><p>KnightStream</p></span>
                <div className="input-fields">    
                   <input  className="input" required onChange={(e)=>setUsername(e.target.value)}/><label>Username</label>
                </div>
                <div className="input-fields">    
                   <input className="input" required type="password" onChange={(e)=>setPassword(e.target.value)}/><label>Password</label>
                </div>
                
                <div className="forgot-password-field">
               { error && <p className="error-login">Invalid Credentials</p>}
                <Link to="/forgot-password" className="forgot-password">Forgot password?</Link>
                </div>
                <button className="login-btn" type="submit" onClick={onSubmitHandler}>Login</button>
                <Link to="/forgot-password" className="forgot-password signup">New? Sign up - it's FREE!
                </Link>
            </section>
            <Redirect display={redirect} to={state?.from === "/" ? "home" : state?.from.replace("/","")}/>
        </div>
    )
}

