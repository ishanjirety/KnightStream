import React from 'react'
import './styles.css'
export function Login() {
    return (
        <div className="login">
            <section className="login-card">
                <span className="login-border"><p>KnightStream</p></span>
                <div className="input-fields">    
                   <input  className="input" required/><span className="input-span"></span><label>Username</label>
                </div>
                <div className="input-fields">    
                   <input className="input" required/><span className="input-span"></span><label>Password</label>
                </div>
                <button className="login-btn">Login</button>
            </section>
            
        </div>
    )
}

