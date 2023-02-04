import React from 'react';
import {
  MobileAuthNavigation,
  AuthWrapper,
  MobileAuthItem,
  MobileAuthLink,
} from './MobileAuth.styled';
import { useMenu } from 'components/Header/Context/menuContext';
export default function MobileAuth() {
  const { close } = useMenu();
  return (
    <AuthWrapper>
      <MobileAuthNavigation>
        <MobileAuthItem color="inherit" variant="outlined">
          <MobileAuthLink to="/login" onClick={close}>
            Login
          </MobileAuthLink>
        </MobileAuthItem>
        <MobileAuthItem color="inherit" variant="outlined">
          <MobileAuthLink to="register" onClick={close}>
            Registration
          </MobileAuthLink>
        </MobileAuthItem>
      </MobileAuthNavigation>
    </AuthWrapper>
  );
}
