import React, { useState } from 'react'
import { useAuth } from '../../contexts/AuthContext'

export default function Signout() {
    const { signout } = useAuth()
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)

    function handleSubmit(e){
        e.preventDefault();
        setLoading(true)
        try {
            setError("")
            signout()
        }catch(e){
            setError("Failed to create an account")
            console.log(error)
        }
        setLoading(false)
    }
  return (
        <form onSubmit={handleSubmit}>
            <button type='submit' disabled={loading}>Sign Out</button>
        </form>
  )
}
