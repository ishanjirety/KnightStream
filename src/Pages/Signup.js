import React from 'react'
import {Link} from 'react-router-dom'
import {Redirect} from '../Comonents'
export function Signup() {
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
                <div className="input-fields">    
                   <input  className="input" required /><label>Username</label>
                </div>
                <div className="input-fields">
                        <input className="input" required type="password" />
                        <label>Password</label>

                </div>
                <div className="input-fields">    
                   <input className="input" required type="password" /><label>Re-Password</label>
                </div>
                <div className="forgot-password-field">
               {/* { error && <p className="error-login">Invalid Credentials</p>} */}
                </div>
                <button className="login-btn" type="submit">Sign up</button>
                <Link to="/login" className="forgot-password signup">Alredy registered? <span className="inverted">Sign in &rarr; </span>
                </Link>
            </section>
        </div>
    )
}


