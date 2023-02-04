import { useMenu } from './menuContext';
import React from 'react';
import MobileMarkup from '../MobileMenu/MobileMarkup/MobileMarkup';
import MenuIcon from '@mui/icons-material/Menu';
import { Btn } from '../MobileMenu/MobileMenu.styled';

export const MobMenu = () => {
  const { isOpen, open, close } = useMenu();

  return (
    <div>
      <Btn onClick={open}>
        <MenuIcon />
      </Btn>
      {isOpen && <MobileMarkup onClose={close} />}
    </div>
  );
};
