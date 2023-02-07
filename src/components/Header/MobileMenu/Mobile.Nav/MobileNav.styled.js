import styled from '@emotion/styled';
import { Navigation, NavList, LinkNav } from 'components/Header/Nav/Nav.styled';

export const MobileNavigation = styled(Navigation)({
  '@media screen and (max-width: 1279px)': {
    display: 'flex',
    flexDirection: 'column',
    height: '100vw',
  },
  '@media screen and (min-width: 768px) and (max-width: 1279px)': {
    marginTop: '88px',
  },
});

export const MobileNavList = styled(NavList)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  alignContent: 'center',
  flexDirection: 'column',
  listStyle: 'none',
});


export const MobileNavListItem = styled.li`
      margin-bottom: 40px;
  }
`;


export const MobileNavLink = styled(LinkNav)({
  fontFamily: 'Manrope',
  fontStyle: 'normal',
  fontWeight: '500',
  fontSize: '32px',
  lineHeight: '44px',
  display: 'flex',
  alignItems: 'center',
  letterSpacing: '0.04em',
  color: '#181C27',
  textDecoration: 'none',
  '&:hover &:focus': {
    color: 'rgba(245, 146, 86, 1)',
    textDecorationLine: 'underline',
  },
  '@media screen and (min-width: 768px) and (max-width: 1279px)': {
    fontSize: '48px',
    lineHeight: '66px',
  },
});