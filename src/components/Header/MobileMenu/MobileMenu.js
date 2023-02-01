import React from 'react';
import { useState } from 'react';
import MobileMarkup from './MobileMarkup/MobileMarkup';
// import MenuIcon from '@mui/icons-material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import { Btn } from './MobileMenu.styled';

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(isOpen => !isOpen);

  return (
    <div>
      <Btn onClick={toggle}>
        <MenuIcon />
      </Btn>
      {/* <MobileMarkup onClose={toggle} /> */}
      {isOpen && <MobileMarkup onClose={toggle} />}
    </div>
  );
}
