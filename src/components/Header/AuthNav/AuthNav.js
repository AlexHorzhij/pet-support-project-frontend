import React from 'react';
import { AuthNavigation, AuthItem, AuthLink } from './AuthNav.styled';
export default function AuthNav() {
  return (
    <AuthNavigation>
      <AuthItem color="inherit" variant="outlined">
        <AuthLink href="">Login</AuthLink>
      </AuthItem>
      <AuthItem color="inherit" variant="outlined">
        <AuthLink href="">Registration</AuthLink>
      </AuthItem>
    </AuthNavigation>
  );
}
