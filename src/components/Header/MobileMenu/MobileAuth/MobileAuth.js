import React from 'react';
import {
  MobileAuthNavigation,
  AuthWrapper,
  MobileAuthItem,
  MobileAuthLink,
} from './MobileAuth.styled';
export default function MobileAuth({ onClose }) {
  return (
    <AuthWrapper>
      <MobileAuthNavigation>
        <MobileAuthItem color="inherit" variant="outlined">
          <MobileAuthLink to="/login" onClick={onClose}>
            Login
          </MobileAuthLink>
        </MobileAuthItem>
        <MobileAuthItem color="inherit" variant="outlined">
          <MobileAuthLink to="register" onClick={onClose}>
            Registration
          </MobileAuthLink>
        </MobileAuthItem>
      </MobileAuthNavigation>
    </AuthWrapper>
  );
}
