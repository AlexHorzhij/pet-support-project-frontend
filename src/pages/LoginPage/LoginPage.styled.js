import styled from '@emotion/styled';

import mobile from '../../assets/backgrounds/mobile.png';
import tablet from '../../assets/backgrounds/tablet.png';
import desktop from '../../assets/backgrounds/desktop.png';

export const Background = styled.div`
  width: 100%;
  height: 100vh;
  padding-top: 100px;
  background-color: #fdf7f2;
  background-image: url(${mobile});
  background-size: 100% 160px;
  background-repeat: no-repeat;
  background-position: bottom;
  background-size: contain;
  background-attachment: fixed;
  overflow: auto;

  @media screen and (min-width: 768px) {
    padding-top: 240px;
    background-size: 100% 400px;
    background-image: url(${tablet});
  }

  @media screen and (min-width: 1280px) {
    padding-top: 150px;
    background-size: 100% 390px;
    background-image: url(${desktop});
  }
`;

export const ContentWrapper = styled.div`
  width: 280px;
  padding: 40px 0 40px 0;
  margin-right: auto;
  margin-left: auto;

  @media screen and (min-width: 768px) {
    width: 608px;
    min-height: 300px;
    padding: 60px 80px 40px 80px;
    background-color: #fff;
    border-radius: 40px;
    box-shadow: 7px 4px 14px rgba(0, 0, 0, 0.11);
  }

  @media screen and (min-width: 1280px) {
    width: 618px;
    padding: 60px 80px 60px 80px;
  }
`;

export const Switcher = styled.p`
  margin-top: 40px;
  font-weight: 400;
  font-size: 12px;
  line-height: 1.3;
  text-align: center;
`;
