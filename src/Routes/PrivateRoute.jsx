import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        return <span className='text-blue-500 font-bold font-serif'>Loading...</span>;
        // return <progress className="progress w-36"></progress>;
    }
    if (user?.email) {
        return children;
    }

    return <Navigate to="/login" replace state={{ from: location }}></Navigate >;
};

export default PrivateRoute;