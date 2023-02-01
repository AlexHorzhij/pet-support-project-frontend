import React from 'react';
import {
  MobileMenuContainer,
  MobileMenu,
  BtnClose,
} from './MobileMarkup.styled';
import MobileNav from '../Mobile.Nav/MobileNav';
import MobileAuth from '../MobileAuth/MobileAuth';
import UserNav from 'components/Header/UserNav';
import AuthNav from 'components/Header/AuthNav/AuthNav';
import Nav from 'components/Header/Nav/Nav';

export default function MobileMarkup({ onClose }) {
  const isLogIn = false;
  return (
    <MobileMenu>
      <MobileMenuContainer>
        <AuthNav />
        <Nav />
        {/* {isLogIn ? <UserNav /> : <MobileAuth />} */}
        {/* <MobileAuth /> */}
        {/* <MobileNav /> */}
      </MobileMenuContainer>
      <BtnClose onClick={onClose}>CLOSE</BtnClose>
    </MobileMenu>
  );
}
