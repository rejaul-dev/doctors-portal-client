import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';

// private route always have an children
const PrivateRoute = ({children}) => {
    const {user, loading}= useContext(AuthContext);
    const location = useLocation()

    if(loading){
        return <progress className='progress w-56'></progress>
    }

    if(user){
        return children;
    }

    return <Navigate to='/login' state={{from: location}} replace/>
};

export default PrivateRoute;