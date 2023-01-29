import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { getAuth } from 'redux/auth/authSelectors';

export function PublicRoute() {
  const { isLoggedIn } = useSelector(getAuth);

  return isLoggedIn ? <Navigate to="notices" /> : <Outlet />;
}


export function PrivateRoute() {
  const { isLoggedIn } = useSelector(getAuth);

  return !isLoggedIn ? <Navigate to="/login" /> : <Outlet />;
}
