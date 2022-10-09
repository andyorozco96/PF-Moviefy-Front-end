import React, { useContext, useEffect, useState } from 'react'
import { auth } from '../../firebase'
import axios from 'axios'
import {getAuth, GoogleAuthProvider,signInWithPopup, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, signInWithRedirect, updateProfile} from 'firebase/auth'

const AuthContext = React.createContext()

export function useAuth(){
    return useContext(AuthContext)
}


export function AuthProvider({children}) {

    const [currentUser, setCurrentUser] = useState()
    const [loading, setLoading] = useState(true)


    function signInWithGoogle(){
        const provider = new GoogleAuthProvider();
        signInWithRedirect(auth, provider)

    }

    async function signUp(email, password, username){

        createUserWithEmailAndPassword(auth, email, password)

        onAuthStateChanged(auth, (user)=>{

            updateProfile(user, {
                displayName: username 
            })
        })

        try{

            await axios.post('https://pf-henry-back.herokuapp.com/user/register', currentUser)
        }
        catch(e){

            console.log(e)
        }

    }

    function logIn(email, password){

        signInWithEmailAndPassword(auth, email, password)
        
    }

    
    function logOut(){

        return signOut(auth)

    }

    useEffect(()=>{

        const unsubscribe = onAuthStateChanged( auth, (user) =>{
            setCurrentUser(user)
            setLoading(false)
        })
    
        return unsubscribe

    }, [])

    useEffect(()=>{

        console.log(currentUser)

    }, [currentUser])

    
    let value={
        currentUser,
        signUp,
        logIn,
        signInWithGoogle,
        logOut
    }


    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}