import React from 'react';
import {
  MobileAuthNavigation,
  AuthWrapper,
  MobileAuthLink,
} from '../MobileAuth/MobileAuth.styled';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { MobileAccounItem } from './MobileUserNav.styled';
import { useMenu } from 'components/Header/Context/menuContext';

export default function MobileUserNav() {
  const { close } = useMenu();
  return (
    <AuthWrapper>
      <MobileAuthNavigation>
        <MobileAccounItem color="inherit" variant="outlined">
          <AccountCircleIcon />
          <MobileAuthLink to="/login" onClick={close}>
            Account
          </MobileAuthLink>
        </MobileAccounItem>
      </MobileAuthNavigation>
    </AuthWrapper>
  );
}
