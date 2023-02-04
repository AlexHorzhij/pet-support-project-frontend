import React from 'react';
import { useDispatch } from 'react-redux';
import { logoutUser } from 'redux/auth/authOperations';
import {
  StyledLogoutButton,
  StyledButtonTitle,
  StyledLogoutIcon,
} from './Logput.styled';

function Logout() {
  const dispatch = useDispatch();

  const onLogoutClick = () => {
    dispatch(logoutUser());
  };

  return (
    <StyledLogoutButton onClick={onLogoutClick}>
      <StyledLogoutIcon />
      <StyledButtonTitle>Log Out</StyledButtonTitle>
    </StyledLogoutButton>
  );
}

export default Logout;
