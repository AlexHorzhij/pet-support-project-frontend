import React from 'react';

import { AuthList, AuthItem, AuthLink } from './AuthNav.styled';

export default function AuthNav() {
  return (
    <AuthList>
      <AuthItem>
        <AuthLink to="/login">Login</AuthLink>
      </AuthItem>
      <AuthItem>
        <AuthLink to="register">Registration</AuthLink>
      </AuthItem>
    </AuthList>
  );
}
