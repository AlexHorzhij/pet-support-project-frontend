import React from 'react';
import {
  MobileAuthNavigation,
  AuthWrapper,
  MobileAuthItem,
} from './MobileAuth.styled';
import { AuthLink } from '../../AuthNav/AuthNav.styled';
export default function MobileAuth() {
  return (
    <AuthWrapper>
      <MobileAuthNavigation>
        <MobileAuthItem color="inherit" variant="outlined">
          <AuthLink href="">Login</AuthLink>
        </MobileAuthItem>
        <MobileAuthItem color="inherit" variant="outlined">
          <AuthLink href="">Registration</AuthLink>
        </MobileAuthItem>
      </MobileAuthNavigation>
    </AuthWrapper>
  );
}
