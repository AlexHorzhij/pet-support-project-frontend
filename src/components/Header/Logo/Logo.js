import React from 'react';
import { LogoWrapper, LogoInfo, Span } from './Logo.styled';

export default function Logo() {
  return (
    <LogoWrapper>
      <LogoInfo to="/">
        pe<Span>t</Span>ly
      </LogoInfo>
    </LogoWrapper>
  );
}
