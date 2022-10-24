import React, { createContext, useState } from 'react';
import { getAuth, GithubAuthProvider, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
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
   const authInfo= {user,loader,signinGoogle,signinGithub}
    return (
        <AuthContext.Provider value={authInfo}>
           {children}
        </AuthContext.Provider>
    );
};

export default UserContext;