import React, { useContext, useEffect, useState } from 'react'
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { getFirestore, setDoc, doc } from "firebase/firestore";

const AuthContext = React.createContext()

export function useAuth() {
    return useContext(AuthContext)
} 

export function AuthProvider({children}) {
    const [currentUser, setCurrentUser] = useState()
    const [loading, setLoading] = useState(true)
    const auth = getAuth()
    const db = getFirestore()

    function signup(email, password, name, phoneNumber){
        createUserWithEmailAndPassword(auth, email, password).then((userCred) => {
            updateProfile(auth.currentUser, {
                displayName:name,
                phoneNumber:phoneNumber
            })
            setDoc(doc(db, "users", userCred.user.uid), {
                accessToken: userCred.user.accessToken,
                createdAt:userCred.user.metadata.createdAt,
                displayname:name,
                email:userCred.user.email,
                emailVerified:userCred.user.emailVerified,
                lastLoginAt:userCred.user.metadata.lastLoginAt,
                phoneNumber:phoneNumber,
                photoURL:userCred.user.photoURL,
            }).catch(e => {
                alert("Database Error")
            })
            setDoc(doc(db, "reports", userCred.user.uid), {
                solved : []
            }).catch(e => {
                alert("Database Error")
            })
        }).catch(e => {
            console.alert("Sign In Error")
        })
    }

    function login(email, password){
        console.log("I am here")
        signInWithEmailAndPassword(auth, email, password).then((userCred) => {
            setDoc(doc(db, "users", userCred.user.uid), {
                emailVerified:userCred.user.emailVerified,
                lastLoginAt:userCred.user.metadata.lastLoginAt
            }, {merge: true}).catch(e => {
                console.log("Database Error")
            })
        }).catch(e => {
            alert("Log In Error")
        })
    }

    function signout() {
        signOut(auth);
    }
    
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setCurrentUser(user)
        })
        setLoading(false)
        return unsubscribe
    }, [auth])

    const value = {
        currentUser,
        signup,
        login,
        signout
    }
  return (
    <AuthContext.Provider value={value}>
        {!loading && children}
    </AuthContext.Provider>
  )
}
