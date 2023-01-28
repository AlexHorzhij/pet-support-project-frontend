import React from 'react';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import { StyledLogoutButton, StyledButtonTitle } from './Logput.styled';

function Logout() {
  return (
    <>
      <StyledLogoutButton>
        <LogoutRoundedIcon sx={{ width: '20px', color: '#F59256' }} />
        <StyledButtonTitle>Log Out</StyledButtonTitle>
      </StyledLogoutButton>
    </>
  );
}

export default Logout;
