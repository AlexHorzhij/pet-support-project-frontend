import React from 'react';
import { AuthNavigation, AuthLink } from '../AuthNav/AuthNav.styled';
import { UserAuthItem, UserAuthLink } from './UserNav.styled';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
export default function UserNav() {
  return (
    <AuthNavigation>
      <UserAuthItem color="inherit" variant="outlined">
        <AccountCircleIcon />
        <UserAuthLink to="/login">Account</UserAuthLink>
      </UserAuthItem>
    </AuthNavigation>
  );
}
