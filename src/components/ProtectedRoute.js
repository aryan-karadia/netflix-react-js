import React from 'react';
import { Navigate } from 'react-router-dom';
import { UserAuth } from '../Context/AuthContext';

const ProtectedRoute = ({children}) => {
    const { currentUser } = UserAuth();

    if( !currentUser) {
        return <Navigate to="/login" />
    } else {
        return children;
    }
}

export default ProtectedRoute