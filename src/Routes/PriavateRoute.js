import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import Loader from '../Components/Loader/Loader';
import { AuthContext } from '../Context/UseContext';

const PrivateRoute = ({children}) => {
    
    const {user,loader}=useContext(AuthContext)
    const location= useLocation()

    if(loader){
    return<Loader></Loader>
    }

    if (!user) {
        return <Navigate to='/login'state={{from:location}} replace></Navigate>
    }
    return children
};

export default PrivateRoute;