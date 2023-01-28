import React from 'react';
import { AuthList, ListItem, AuthLink } from './AuthNav.styled';
export default function AuthNav() {
  return (
    <AuthList>
      <ListItem>
        <AuthLink href="">Login</AuthLink>
      </ListItem>
      <ListItem>
        <AuthLink href="">Registration</AuthLink>
      </ListItem>
    </AuthList>
  );
}
