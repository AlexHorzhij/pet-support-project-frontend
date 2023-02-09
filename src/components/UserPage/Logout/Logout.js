import React from 'react';
import { useDispatch } from 'react-redux';
import { logoutUser } from 'redux/auth/authOperations';
import {
  StyledLogoutButton,
  StyledButtonTitle,
  StyledLogoutIcon,
} from './Logput.styled';
import { useTranslation } from 'react-i18next';


function Logout() {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const onLogoutClick = () => {
    dispatch(logoutUser());
  };

  return (
    <StyledLogoutButton onClick={onLogoutClick}>
      <StyledLogoutIcon />
      <StyledButtonTitle>{ t('LogOut')}</StyledButtonTitle>
    </StyledLogoutButton>
  );
}

export default Logout;
