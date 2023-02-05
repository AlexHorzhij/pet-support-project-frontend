import React from 'react';
import { LogoWrapper, LogoInfo, Span } from './Logo.styled';
import { Typography } from '@mui/material';

export default function Logo() {
  return (
    <LogoWrapper>
      <LogoInfo>
        pe<Span>t</Span>ly
      </LogoInfo>
    </LogoWrapper>
  );
}
