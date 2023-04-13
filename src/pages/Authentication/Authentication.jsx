import React from 'react'
import Signup from "../../components/Authentication/signup"
import Login from '../../components/Authentication/login'
import Signout from '../../components/Authentication/signout'

export default function Authentication(props){
    return (
        <>
            <Signup />
            <Login />
            <Signout />
        </>
    )
}

