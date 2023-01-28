import React from 'react';
import Logo from './Logo';
import Nav from './Nav';
import AuthNav from './AuthNav';
export default function Header() {
  return (
    <header>
      <Logo />
      <Nav />
      <AuthNav />
    </header>
  );
}
