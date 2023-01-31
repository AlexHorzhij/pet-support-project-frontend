import React from 'react';
import { AuthNavigation, AuthItem, AuthLink } from './AuthNav.styled';
export default function AuthNav() {
  return (
    <AuthNavigation>
      <AuthItem color="inherit" variant="outlined">
        <AuthLink to="/login">Login</AuthLink>
      </AuthItem>
      <AuthItem color="inherit" variant="outlined">
        <AuthLink to="register">Registration</AuthLink>
      </AuthItem>
    </AuthNavigation>
  );
}
