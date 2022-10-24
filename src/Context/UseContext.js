import React, { createContext, useState } from 'react';

export const AuthContext= createContext()
const UserContext = ({children}) => {
  const [user,setUser]=useState(null)
  const [loader,useLoader]=useState('')

   const authInfo= {user,loader}

    return (
        <AuthContext.Provider value={authInfo}>
           {children}
        </AuthContext.Provider>
    );
};

export default UserContext;