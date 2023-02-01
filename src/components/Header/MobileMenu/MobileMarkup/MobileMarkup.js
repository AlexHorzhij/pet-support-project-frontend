import React from 'react';
import {
  MobileMenuContainer,
  MobileMenu,
  BtnClose,
} from './MobileMarkup.styled';
import MobileNav from '../Mobile.Nav/MobileNav';
import MobileAuth from '../MobileAuth/MobileAuth';
import UserNav from 'components/Header/UserNav/UserNav';
import Logo from 'components/Header/Logo/Logo';
import MobileUserNav from '../MobileUserNav/MobileUserNav';

export default function MobileMarkup({ onClose }) {
  const isLogIn = true;
  return (
    <MobileMenu>
      <Logo />
      <MobileMenuContainer>
        {isLogIn ? <MobileUserNav /> : <MobileAuth />}
        {/* <MobileAuth /> */}
        <MobileNav />
      </MobileMenuContainer>
      <BtnClose onClick={onClose}>CLOSE</BtnClose>
    </MobileMenu>
  );
}
