import React from 'react';
import { useSelector } from 'react-redux';
import {
  MobileMenuContainer,
  MobileMenu,
  BtnClose,
} from './MobileMarkup.styled';
import MobileNav from '../Mobile.Nav/MobileNav';
import MobileAuth from '../MobileAuth/MobileAuth';
import Logo from 'components/Header/Logo/Logo';
import MobileUserNav from '../MobileUserNav/MobileUserNav';
import CloseIcon from '@mui/icons-material/Close';
import { getAuth } from 'redux/auth/authSelectors';

export default function MobileMarkup({ onClose }) {
  const { isLoggedIn } = useSelector(getAuth);

  return (
    <MobileMenu>
      <Logo />
      <MobileMenuContainer>
        {isLoggedIn ? <MobileUserNav /> : <MobileAuth />}

        <MobileNav />
      </MobileMenuContainer>
      <BtnClose onClick={onClose}>
        <CloseIcon />
      </BtnClose>
    </MobileMenu>
  );
}
