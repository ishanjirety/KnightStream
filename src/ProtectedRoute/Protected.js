import React from 'react'
import {Route,Navigate} from 'react-router-dom'

import {useAuth} from '../Context'

export function Protected({path,...props}) {
    const {loggedIn} = useAuth()
    return (
         loggedIn ? <Route {...props} path={path} /> : <Navigate state={{ from: path }} replace to="/login" />
    )
}

