import styled from '@emotion/styled';
import { Box } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { Button } from '@mui/material';

export const AuthWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 60px;
`;
export const MobileAuthNavigation = styled(Box)({
  '@media screen and (max-width: 767px)': {
    display: 'flex',
  },
  '@media screen and (max-width: 320px)': {
    maxWidth: '100%',
  },
  '@media screen and (min-width: 768px)': {
    display: 'none',
  },
});

export const MobileAuthLink = styled(NavLink)({
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'row',
  alignItems: 'flex-start',
  fontSize: '14px',
  lineHeight: '19px',
  textDecoration: 'none',
  color: '#111111',
  '@media screen and (max-width: 320px)': {
    maxWidth: '100%',
  },
  '&.current': {
    color: '#ffffff',
  },
});
export const AuthBtn = styled(Button)({
  color: '#ffffff',
  '&:first-of-type.active': {
    color: '#ffffff',
    background: '#f59256',
  },
});
