import React from 'react'
import {Link} from 'react-router-dom'
import {Redirect} from '../Comonents'

export function Forgotpassword() {
    return (
        <div className="login">
            <div className="login-logo">
                <span class="login-underline">
                    <p className="login-border">KnightStream</p>
                </span>
            </div>  
            <section className="login-card signup-card">
            <p className="login-greeting">Forgot Password ? </p>
                <div className="question">Q. What is your cat's name</div>
                <div className="input-fields">    
                   <input className="input" required type="text" /><label>Answer</label>
                </div>
                <div className="input-fields">
                        <input className="input" required type="password" />
                        <label>Password</label>
                </div>
                <div className="input-fields">
                        <input className="input" required type="password" />
                        <label>Re-Enter Password</label>
                </div>
              
                <div className="forgot-password-field">
               {/* { error && <p className="error-login">Invalid Credentials</p>} */}
                </div>
                <button className="login-btn" type="submit">Reset</button>
                <Link to="/login" className="forgot-password signup"><span className="inverted"> &#8592; Back</span>
                </Link>
            </section>
        </div>
    )
}


