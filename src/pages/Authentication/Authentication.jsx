import React from 'react'
import Signup from "../../components/Authentication/signup"
import Login from '../../components/Authentication/login'
import Signout from '../../components/Authentication/signout'

export default function Authentication(){
    return (
        <>
            <Signup />
            <Login />
            <Signout />
        </>
    )
}

