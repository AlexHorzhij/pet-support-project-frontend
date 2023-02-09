import styled from '@emotion/styled';
import { Box } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { Button } from '@mui/material';

export const AuthNavigation = styled(Box)({
  '@media screen and (max-width: 767px)': {
    display: 'none',
  },
  '@media screen and (min-width: 768px)': {
    marginLeft: '246px',
  },
});

export const AuthBtn = styled(Button)`
  @media screen and (min-width: 768px) {
    &:not(:last-child) {
      margin-right: 12px;
    }
  }
  @media screen and (min-width: 1280px) {
    &:not(:last-child) {
      margin-right: 20px;
    }
  }
`;
export const AuthLink = styled(NavLink)`
  text-transform: capitalize;
  color: inherit;
  @media screen and (min-width: 768px) {
    font-family: 'Manrope';
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 27px;
    align-items: center;
    letter-spacing: 0.04em;
  }
  text-decoration: none;
`;
