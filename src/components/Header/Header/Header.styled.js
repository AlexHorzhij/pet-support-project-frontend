import styled from '@emotion/styled';

export const HeaderStyled = styled.header`
  margin: 0;
  padding: 0;
  display: flex;

  background-color: rgb(249, 214, 193);
  @media screen and (max-width: 767px) {
    width: 280px;
    height: 42px;
  }

  @media screen and (min-width: 768px) {
    width: 768px;
    height: 48px;
  }
  @media screen and (min-width: 1280px) {
    width: 1280px;
  }
`;
export const HeaderWrapper = styled.div`
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  align-items: center;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  @media screen and (max-width: 767px) {
    margin-left: 163px;
  }

  @media screen and (min-width: 768px) {
    margin-left: 25px;
  }
  @media screen and (min-width: 1280px) {
    display: none;
  }
`;
