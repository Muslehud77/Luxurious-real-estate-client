import React from 'react';
import useUser from '../Hooks/useUser';
import { Navigate } from 'react-router-dom';

const PrivateRouteForDashboard = ({children}) => {
    const user = useUser()

    if(!user){
        return <Navigate to='/login'/>
    }

    return children
};

export default PrivateRouteForDashboard;