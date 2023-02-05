import React from 'react';
// import { AuthNavigation, AuthItem, AuthLink } from './AuthNav.styled';
import { AuthNavigation, AuthLink } from './AuthNav.styled';
import { Button } from '@mui/material';

export default function AuthNav() {
  return (
    <AuthNavigation>
      <Button variant="outlined">
        <AuthLink to="/login">Login</AuthLink>
      </Button>
      <Button variant="outlined">
        <AuthLink to="register">Registration</AuthLink>
      </Button>
    </AuthNavigation>
  );
}
