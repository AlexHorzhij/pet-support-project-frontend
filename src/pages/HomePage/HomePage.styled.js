import styled from '@emotion/styled';
import { Typography } from '@mui/material';

import homeMobile from '../../assets/backgrounds/home-mobile.png';
import homeDesktopB from '../../assets/backgrounds/home-desk-b.png';
import homeDesktopS from '../../assets/backgrounds/home-desk-s.png';
import womanImg from '../../assets/backgrounds/woman.png';
import heartImg from '../../assets/backgrounds/heart.png';

export const AdaptiveTypography = styled(Typography)`
  width: 280px;
  font-size: 32px;

  @media screen and (min-width: 768px) {
    width: 588px;
    font-size: 68px;
  }
`;

export const Background = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  padding-top: 120px;
  padding-left: 20px;
  background-color: #fdf7f2;
  background-image: url(${homeMobile});
  background-size: 90% 400px;
  background-repeat: no-repeat;
  background-position: bottom;
  background-size: contain;
  background-attachment: fixed;
  overflow: hidden;

  @media screen and (min-width: 768px) {
    padding-top: 160px;
    background-size: 100% 990px;
  }

  @media screen and (min-width: 1280px) {
    background-size: 100% 400px;
    background-image: url(${homeDesktopB});
  }
`;

export const AdditionalImage = styled.div`
  @media screen and (min-width: 1280px) {
    position: fixed;
    bottom: 0;
    right: 0;
    width: 511px;
    height: 440px;
    background-color: transparent;
    background-image: url(${homeDesktopS});
    background-repeat: no-repeat;
    background-size: cover;
    z-index: 1;
  }
`;

export const WomanImage = styled.div`
  position: fixed;
  bottom: 0;
  right: 0;
  width: 320px;
  height: 337px;
  background-color: transparent;
  background-image: url(${womanImg});
  background-repeat: no-repeat;
  background-size: contain;
  z-index: 2;

  @media screen and (min-width: 768px) {
    width: 700px;
    height: 733px;
  }

  @media screen and (min-width: 1280px) {
    width: 625px;
    height: 655px;
  }
`;

export const HeartImage = styled.div`
  @media screen and (min-width: 1280px) {
    position: fixed;
    top: 170px;
    right: 475px;
    width: 94px;
    height: 90px;
    background-color: transparent;
    background-image: url(${heartImg});
    background-size: cover;
    z-index: 3;
  }
`;
