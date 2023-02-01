import React from 'react';
import {
  MobileAuthNavigation,
  AuthWrapper,
  MobileAuthLink,
} from '../MobileAuth/MobileAuth.styled';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { MobileAccounItem } from './MobileUserNav.styled';
export default function MobileUserNav() {
  return (
    <AuthWrapper>
      <MobileAuthNavigation>
        <MobileAccounItem color="inherit" variant="outlined">
          <AccountCircleIcon />
          <MobileAuthLink to="/login">Account</MobileAuthLink>
        </MobileAccounItem>
      </MobileAuthNavigation>
    </AuthWrapper>
  );
}
