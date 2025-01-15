import { useState } from 'react'
import {auth,  googleProvider } from '../config/firebase-config'
import {createUserWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth'


export const Auth = () => {


    const [email, setEmail] = useState('')
    const [password, setPassword] = useState()

    console.log(auth?.currentUser?.email)

    const signIn = async () => {
        try {
        await createUserWithEmailAndPassword(auth,email,password)
        } catch (err) {
            console.error(err)
        }
    }

    const signInWithGoogle = async () =>{
        try {
            await signInWithPopup(auth, googleProvider)
        } catch (err1) {
            console.error(err1)
        }
    }

    const logout = async () =>{
        try {
            await signOut(auth)
        } catch (err) {
            console.error(err)
        }
    }

    return (
        <div>
            <input placeholder="email" onChange={(e) => setEmail(e.target.value)}/>
            <input placeholder="password" onChange={(e) => setPassword(e.target.value)} type='password'/>
            <button onClick={signIn}>
                Sign in
            </button>

            <button onClick={signInWithGoogle}>Sign In With Google</button>
            <button onClick={logout}>Logout</button>
        </div>
    )
} 