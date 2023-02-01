import styled from '@emotion/styled';
export const MobileMenuContainer = styled.div`
  height: 100vw;
  position: relative;
  padding-top: 48px;
`;
export const MobileMenu = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  background-color: #fdf7f2;
  width: 100vw;
  height: 796px;
  display: flex;
  flex-direction: column;
  z-index: 99;
  @media screen and (min-width: 1280px) {
    display: none;
  }
`;
export const BtnClose = styled.button`
  position: absolute;
  top: 12px;
  right: 22px;
  display: flex;
  align-items: center;
  background-color: transparent;
  border: none;
  padding: 0;
  line-height: 0;
`;
