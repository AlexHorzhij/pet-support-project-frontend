import React from 'react';
import { LogoWrapper, LogoInfo, Span } from './Logo.styled';

export default function Logo() {
  return (
    <LogoWrapper>
      <LogoInfo href="https://reg-pet-support.netlify.app/">
        pe<Span>t</Span>ly
      </LogoInfo>
    </LogoWrapper>
  );
}
