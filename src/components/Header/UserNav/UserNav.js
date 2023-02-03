import React from 'react';
import { AuthNavigation } from '../AuthNav/AuthNav.styled';
// import { UserAuthItem, UserAuthLink } from './UserNav.styled';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Button } from '@mui/material';
import { AuthLink } from '../AuthNav/AuthNav.styled';

export default function UserNav() {
  return (
    <AuthNavigation>
      <Button variant="contained">
        <AccountCircleIcon />
        <AuthLink to="/login">Account</AuthLink>
      </Button>
    </AuthNavigation>
  );
}
