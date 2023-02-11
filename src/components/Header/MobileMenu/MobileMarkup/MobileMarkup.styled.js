import styled from '@emotion/styled';
export const MobileMenuContainer = styled.div`
  height: 100vw;
  position: relative;
  padding-top: 48px;
  overflow: auto;
`;
export const MobileMenu = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  background-color: #fdf7f2;
  width: 100vw;
  height: 796px;
  display: flex;
  padding-top: 12px;
  padding-bottom: 12px;
  flex-direction: column;
  z-index: 99;
  overflow-y: auto;
  @media screen and (min-width: 1280px) {
    display: none;
  }
`;
export const BtnClose = styled.button`
  position: absolute;
  top: 24px;
  right: 30px;
  display: flex;
  align-items: center;
  background-color: transparent;
  border: none;
  padding: 0;
  line-height: 0;
`;
export const BurgerMenuHeader = styled.div`
  display: flex;
  align-items: center;
  @media screen and (min-width: 768px) {
    align-items: center;
  }
`;
export const LangBurgerWrapper = styled.div`
  position: absolute;
  right: 64px;
`;
