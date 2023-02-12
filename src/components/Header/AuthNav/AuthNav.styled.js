import styled from '@emotion/styled';
import { Box } from '@mui/material';
import { NavLink } from 'react-router-dom';
// import { Button } from '@mui/material';

export const AuthNavigation = styled(Box)({
  '@media screen and (max-width: 767px)': {
    display: 'none',
  },
  // '@media screen and (min-width: 768px)': {
  //   marginLeft: '246px',
  // },
});
export const AuthList = styled.ul`
  display: flex;
  align-items: center;
  margin-right: auto;
  @media screen and (max-width: 767px) {
    display: none;
  }
`;
export const AuthItem = styled.li`
  font-family: 'Manrope';
  font-weight: 500;
  font-size: 14px;
  line-height: 1.35;
  align-items: center;
  letter-spacing: 0.04em;
  text-decoration: none;
  &:not(:last-child) {
    margin-right: 12px;
  }
  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
  @media screen and (min-width: 1280px) {
    &:not(:last-child) {
      margin-right: 20px;
    }
  }
  &:first-of-type.active {
    border-radius: 40px;
    color: #ffffff;
    background: #f59256;
  }
`;
export const AuthLink = styled(NavLink)`
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: flex-start;
  padding: 10px 28px;
  align-items: center;
  pointer-events: initial;
  height: 44px;
  color: #111111;
  background: #ffffff;
  border: 2px solid #f59256;
  border-radius: 40px;
  text-decoration: none;
  &:first-of-type.active {
    border-radius: 40px;
    color: #ffffff;
    background: #f59256;
  }
`;
