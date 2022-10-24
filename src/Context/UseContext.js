import React, { createContext, useState } from 'react';
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import app from '../Firebase/Firebase.config'

export const auth = getAuth(app);
export const AuthContext= createContext()

const UserContext = ({children}) => {
  const [user,setUser]=useState(null)
  const [loader,useLoader]=useState('')
 const googleProvider=new GoogleAuthProvider()


 const signinGoogle=()=>{
   return signInWithPopup(auth,googleProvider)
 } 
   const authInfo= {user,loader,signinGoogle}
    return (
        <AuthContext.Provider value={authInfo}>
           {children}
        </AuthContext.Provider>
    );
};

export default UserContext;