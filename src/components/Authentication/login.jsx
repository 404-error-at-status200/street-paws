import React, { useRef, useState } from 'react'
import { useAuth } from '../../contexts/AuthContext'

export default function Login() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const { login } = useAuth()
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)

    function handleSubmit(e){
        e.preventDefault();
        setLoading(true)
        try {
            setError("")
            login(emailRef.current.value, passwordRef.current.value)
        }catch(e){
            setError("Failed to create an account")
            console.log(error)
        }
        setLoading(false)
    }
  return (
        <form onSubmit={handleSubmit}>
            <label>Email :</label> <input type='email' ref={emailRef} required/>
            <label>Password :</label> <input type='password' ref={passwordRef} required autoComplete='on'/>
            <button type='submit' disabled={loading}>Submit</button>
        </form>
  )
}
