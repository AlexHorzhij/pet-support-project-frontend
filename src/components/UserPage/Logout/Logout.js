import React from 'react';
import {
  StyledLogoutButton,
  StyledButtonTitle,
  StyledLogoutIcon,
} from './Logput.styled';

function Logout() {
  return (
    <StyledLogoutButton>
      <StyledLogoutIcon />
      <StyledButtonTitle>Log Out</StyledButtonTitle>
    </StyledLogoutButton>
  );
}

export default Logout;
