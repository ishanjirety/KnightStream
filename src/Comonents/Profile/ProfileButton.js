import React,{Fragment} from 'react'
import {Link} from 'react-router-dom'

import './Assets/Profile.css'
import account from '../../Common-Assets/Account.svg'

export function ProfileButton() {
    return (
            <Link to="/account" className="profile-btn"><img src={account}/></Link>
    )
}

