import React from 'react';
import { AuthNavigation, AuthItem, AuthLink } from './AuthNav/AuthNav.styled';

export default function UserNav() {
  return (
    <AuthNavigation>
      <AuthItem color="inherit" variant="outlined">
        <AuthLink href="">Account</AuthLink>
      </AuthItem>
    </AuthNavigation>
  );
}
