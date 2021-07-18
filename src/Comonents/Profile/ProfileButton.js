import React from 'react'
import { Link } from 'react-router-dom'

import './Assets/Profile.css'
import account from '../../Common-Assets/Account.svg'
import login from '../../Common-Assets/Login.svg'
import { useAuth } from '../../Context'

export function ProfileButton() {
    const { loggedIn } = useAuth()
    if (loggedIn) {
        return <Link to="/account" className="profile-btn"><img alt="" src={account} /></Link>
    } else {
        return <Link to="/login" className="profile-btn"><img alt="" src={login} /></Link>
    }

}

