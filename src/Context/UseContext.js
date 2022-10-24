import React, { createContext, useEffect, useState } from 'react';
import { getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import app from '../Firebase/Firebase.config'

export const auth = getAuth(app);
export const AuthContext= createContext()

const UserContext = ({children}) => {
  const [user,setUser]=useState(null)
  const [loader,useLoader]=useState('')
 const googleProvider=new GoogleAuthProvider();
 const githubProvider= new GithubAuthProvider();


 const signinGoogle=()=>{
   return signInWithPopup(auth,googleProvider)
 } 
 const signinGithub=()=>{
    return signInWithPopup(auth,githubProvider)
 }
 useEffect(()=>{
const unsubscribe = onAuthStateChanged(auth,currentUser=>{
   setUser(currentUser)
 })
 return ()=> unsubscribe()
 },[])

 const logOut=()=>{
    return signOut(auth)
 }
   const authInfo= {user,loader,signinGoogle,signinGithub,logOut}
    return (
        <AuthContext.Provider value={authInfo}>
           {children}
        </AuthContext.Provider>
    );
};

export default UserContext;