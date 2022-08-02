import React, { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { useAuth } from "../Context/Auth-Context"

const PrivateRoute = () => {

    const { currentUser } = useAuth()
    const navigate = useNavigate()
    console.log(!currentUser)

    useEffect(() => {
        if(!currentUser) {
            navigate('/', {replace: true})
        }
    }, [])

    return (
        <>
            <Outlet />
        </>
    )
}

export default PrivateRoute