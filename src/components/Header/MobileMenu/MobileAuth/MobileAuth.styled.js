import styled from '@emotion/styled';
import { AuthItem, AuthLink } from 'components/Header/AuthNav/AuthNav.styled';
import { Box } from '@mui/material';
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
export const MobileAuthItem = styled(AuthItem)({
  background: '#FFFFFF',
  border: '2px solid #F59256',
  borderRadius: '40px',
});
export const MobileAuthLink = styled(AuthLink)({
  fontSize: '14px',
  lineHeight: '19px',
  '@media screen and (max-width: 320px)': {
    maxWidth: '100%',
  },
});
