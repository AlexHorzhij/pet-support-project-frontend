import React from 'react';
import { useDispatch } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { logoutUser } from 'redux/auth/authOperations';
import {
  StyledLogoutButton,
  StyledButtonTitle,
  StyledLogoutIcon,
} from './Logput.styled';

function Logout() {
  const dispatch = useDispatch();

  const onLogoutClick = () => {
    const response = dispatch(logoutUser());
    if (response.success) {
      return <Navigate to="/login" replace />;
    }
  };

  return (
    <StyledLogoutButton onClick={onLogoutClick}>
      <StyledLogoutIcon />
      <StyledButtonTitle>Log Out</StyledButtonTitle>
    </StyledLogoutButton>
  );
}

export default Logout;
