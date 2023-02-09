import React from 'react';

import { AuthNavigation, AuthBtn, AuthLink } from './AuthNav.styled';

export default function AuthNav() {
  return (
    <AuthNavigation>
      <AuthBtn variant="outlined">
        <AuthLink to="/login">Login</AuthLink>
      </AuthBtn>
      <AuthBtn variant="outlined">
        <AuthLink to="register">Registration</AuthLink>
      </AuthBtn>
    </AuthNavigation>
  );
}
