import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useLocation,Navigate } from "react-router-dom";
import loadingSpinner from '../../assets/images/loadingSpinner2.gif';

const RequireAuth = ({ children }) => {
  const [user, loading, error] = useAuthState(auth);
  let location = useLocation();
  if(loading){
    return <div className="flex h-screen justify-center items-center"> <img src={loadingSpinner} alt="loading spinner" /> </div>
  }
  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return children;
};

export default RequireAuth;