import React from 'react';
import {
  MobileAuthNavigation,
  AuthWrapper,
  MobileAuthItem,
  MobileAuthLink,
} from './MobileAuth.styled';
export default function MobileAuth() {
  return (
    <AuthWrapper>
      <MobileAuthNavigation>
        <MobileAuthItem color="inherit" variant="outlined">
          <MobileAuthLink to="/login">Login</MobileAuthLink>
        </MobileAuthItem>
        <MobileAuthItem color="inherit" variant="outlined">
          <MobileAuthLink to="register">Registration</MobileAuthLink>
        </MobileAuthItem>
      </MobileAuthNavigation>
    </AuthWrapper>
  );
}
