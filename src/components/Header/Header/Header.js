import React from 'react';
import Logo from '../Logo/Logo';
import Nav from '../Nav/Nav';
// import UserNav from '../UserNav';
import { HeaderStyled, HeaderWrapper } from './Header.styled';
import {} from './Header.styled';
import { Button } from './Header.styled';

export default function Header() {
  return (
    <HeaderStyled>
      <HeaderWrapper>
        <Logo />
        <Nav />
        <Button type="button"></Button>
      </HeaderWrapper>
    </HeaderStyled>
  );
}
//emotion.container
