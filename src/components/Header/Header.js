import React from 'react';
import Logo from './Logo';
import Nav from './Nav';
import { GiHamburgerMenu } from 'react-icons/gi';
import UserNav from './UserNav';
import { HeaderStyled } from './Header.styled';
import { HeaderWrapper } from './Header.styled';
import { Button } from './Header.styled';

export default function Header() {
  return (
    <HeaderStyled>
      <HeaderWrapper>
        <Logo />
        <Nav />
        <Button type="button">
          <GiHamburgerMenu />
        </Button>
      </HeaderWrapper>
    </HeaderStyled>
  );
}
