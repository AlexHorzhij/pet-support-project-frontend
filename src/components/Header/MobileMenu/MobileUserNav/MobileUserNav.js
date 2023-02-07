import React from 'react';
import {
  MobileAuthNavigation,
  AuthWrapper,
  MobileAuthLink,
} from '../MobileAuth/MobileAuth.styled';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useMenu } from 'components/Header/Context/menuContext';
import { Button } from '@mui/material';

export default function MobileUserNav() {
  const { close } = useMenu();
  return (
    <AuthWrapper>
      <MobileAuthNavigation>
        <Button variant="contained">
          <AccountCircleIcon />
          <MobileAuthLink to="/login" onClick={close}>
            Account
          </MobileAuthLink>
        </Button>
      </MobileAuthNavigation>
    </AuthWrapper>
  );
}
