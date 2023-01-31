import styled from '@emotion/styled';
import { Box, Button } from '@mui/material';

export const AuthNavigation = styled(Box)({
  '@media screen and (max-width: 767px)': {
    display: 'none',
  },
  '@media screen and (min-width: 768px)': {
    marginLeft: '246px',
  },
  //   '@media screen and (min-width: 1280px)': {
  //     marginLeft: '351px',
  //   },
});
export const AuthItem = styled(Button)({
  color: '#111111',
  backgroundColor: 'white',
  '&:not(:last-child)': {
    marginRight: '20px',
  },
  '&:hover, focus': {
    color: 'white',
    backgroundColor: 'orange',
  },
});

export const AuthLink = styled.a`
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
