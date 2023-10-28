import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProviders';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user,loading}= useContext(AuthContext);
    const location = useLocation();

    if(loading){
        return <progress className="progress w-56"></progress>
    }

    if(user?.email){
        return children;
    }

    return <Navigate state={{form: location}} to="/login" replace></Navigate>
};

export default PrivateRoute;