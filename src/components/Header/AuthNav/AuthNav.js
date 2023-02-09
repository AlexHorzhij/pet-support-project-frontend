import React from 'react';
import { useState } from 'react';

import { AuthList, AuthItem, AuthLink } from './AuthNav.styled';

export default function AuthNav() {
  const [isActive, setIsOpen] = useState(true);
  const toggle = () => setIsOpen(isActive => !isActive);
  const activeStyle = { color: '#ffffff', background: '#f59256' };
  const activeBtn = () => {
    const active = true;
  };

  return (
    <AuthList>
      <AuthItem>
        <AuthLink
          to="/login"
          onClick={toggle}
          style={isActive ? activeStyle : undefined}
        >
          Login
        </AuthLink>
      </AuthItem>
      <AuthItem onClick={toggle}>
        <AuthLink to="register">Registration</AuthLink>
      </AuthItem>
    </AuthList>
  );
}
