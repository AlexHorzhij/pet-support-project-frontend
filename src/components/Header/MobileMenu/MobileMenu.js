import React from 'react';
import MobileMarkup from './MobileMarkup/MobileMarkup';
import MenuIcon from '@mui/icons-material/Menu';
import { Btn } from './MobileMenu.styled';
import { useMenu } from '../Context/menuContext';

export default function MobileMenu() {
  const { isOpen, open, close } = useMenu();

  return (
    <div>
      <Btn onClick={open}>
        <MenuIcon />
      </Btn>
      {isOpen && <MobileMarkup onClose={close} />}
    </div>
  );
}
