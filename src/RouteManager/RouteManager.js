import React from 'react';
// import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
// import { selectorIsLoggedIn } from 'redux/auth/authSelectors';

export function PublicRoute() {
  // const isLoggedIn = useSelector(selectorIsLoggedIn);
  const isLoggedIn = false // заглушка

  return isLoggedIn ? <Navigate to="notices" /> : <Outlet />;
}


export function PrivateRoute() {
  // const isLoggedIn = useSelector(selectorIsLoggedIn);
  const isLoggedIn = false // заглушка


  return !isLoggedIn ? <Navigate to="/login" /> : <Outlet />;
}
