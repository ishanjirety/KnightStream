import React, { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import './styles.css'
import { setToken } from '../Token'
import { useAuth } from '../Context'
import uuid from 'react-uuid'
import axios from 'axios'

export function Login() {

    const [username, setUsername] = useState("admin")
    const [password, setPassword] = useState("admin")
    const [error, setError] = useState(false)
    const [errContent, setErrorContent] = useState("Invalid Credentials")
    const [LoginText, setLoginText] = useState("Sign in")

    const { loggedIn, setLoggedin } = useAuth()
    const { state } = useLocation();
    const navigate = useNavigate();

    async function onSubmitHandler() {
        if (username !== "" && password !== "") {
            try {
                setLoginText("Signing in...")
                const response_login = await axios.post('https://KnightStream.ishanjirety.repl.co/api/login', { username: username, password: password })
                const { token } = response_login.data
                console.log(response_login.data)
                setError(false)
                setToken(token, true)
                setLoggedin(true)
                setLoginText("Sign in")
                navigate(state?.from ? state.from : "/")
            }
            catch (e) {
                setError(true)
                setErrorContent("Invalid Credentials")
                setLoginText("Sign in")
            }
        }
        else {
            setErrorContent("Mandatory fields cannot be empty")
        }
    }
    useEffect(() => {
        if (loggedIn) {
            navigate('/')
        }
        else {
            navigate('/login')
        }
    }, [])
    return (
        <div className="login">
            <div className="login-logo">
                <span className="login-underline">
                    <p className="login-border">KnightStream</p>
                </span>
            </div>
            <section className="login-card">
                <p className="login-greeting">WELCOME BACK</p>
                <p className="login-heading">Login to your account</p>
                <div className="input-fields">
                    <input value={username} className="input" required onChange={(e) => setUsername(e.target.value)} /><label>Username</label>
                </div>
                <div className="input-fields">
                    <input value={password} className="input" required type="password" onChange={(e) => setPassword(e.target.value)} /><label>Password</label>
                </div>
                <button className="login-btn" type="submit" onClick={onSubmitHandler}>{LoginText}</button>
                <Link to="/signup" className="forgot-password signup">Not registered yet? <span className="inverted">Register &rarr; </span>
                </Link>
                <div className="test-credentials">
                <h4 className="m-0">Test credentials</h4>
                <p className="m-0">Username : admin</p>
                <p className="m-0">Password : admin</p>
                </div>
            </section>
        </div>
    )
}

