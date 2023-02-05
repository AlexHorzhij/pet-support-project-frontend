import React from 'react';
import {
  MobileAuthNavigation,
  AuthWrapper,
  MobileAuthLink,
} from './MobileAuth.styled';
import { useMenu } from 'components/Header/Context/menuContext';
import { Button } from '@mui/material';

export default function MobileAuth() {
  const { close } = useMenu();
  return (
    <AuthWrapper>
      <MobileAuthNavigation>
        <Button variant="outlined">
          <MobileAuthLink to="/login" onClick={close}>
            Login
          </MobileAuthLink>
        </Button>
        <Button variant="outlined">
          <MobileAuthLink to="register" onClick={close}>
            Registration
          </MobileAuthLink>
        </Button>
      </MobileAuthNavigation>
    </AuthWrapper>
  );
}
