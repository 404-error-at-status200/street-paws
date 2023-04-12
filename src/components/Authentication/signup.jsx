import React, { useRef, useState } from 'react'
import { useAuth } from '../../contexts/AuthContext'

export default function Signup() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const confirmPasswordRef = useRef()
    const nameRef = useRef()
    const phoneRef = useRef()
    const { signup } = useAuth()
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)

    function handleSubmit(e){
        e.preventDefault();
        setLoading(true)
        if(passwordRef.current.value !== confirmPasswordRef.current.value){
            setLoading(false)
            return setError("Passwords do not match")
        }
        try {
            setError("")
            signup(emailRef.current.value, passwordRef.current.value, nameRef.current.value, phoneRef.current.value)
        }catch(e){
            setError("Failed to create an account")
            console.log(error)
        }
        setLoading(false)
    }
  return (
        <form onSubmit={handleSubmit}>
            <label>User Name :</label> <input type='text' ref={nameRef} required/>
            <label>Email :</label> <input type='email' ref={emailRef} required/>
            <label>Phone :</label><input type="tel" pattern="[0-9]{10}" required ref={phoneRef}/>
            <label>Password :</label> <input type='password' ref={passwordRef} required autoComplete='on'/>
            <label>Confirm Password :</label> <input type='password' ref={confirmPasswordRef}  autoComplete='on'/>
            <button type='submit' disabled={loading}>Submit</button>
        </form>
  )
}
