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
  '&:not(:last-child)': {
    marginRight: '20px',
  },
});

export const AuthLink = styled.a`
  @media screen and (min-width: 768px) {
    font-family: 'Manrope';
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 27px;
    align-items: center;
    letter-spacing: 0.04em;
  }
  &:hover,
  &:focus {
    color: rgba(245, 146, 86, 1);
  }
  text-decoration: none;
`;
