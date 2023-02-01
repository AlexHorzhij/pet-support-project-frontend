import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
import {
  Navigation,
  NavList,
  ListItem,
  LinkNav,
} from 'components/Header/Nav/Nav.styled';

export const MobileNavigation = styled(Navigation)({
  '@media screen and (max-width: 767px)': {
    display: 'flex',
    flexDirection: 'column',
  },
});
// export const MobileNavigation = styled.nav`
//   margin: 0;
//   padding: 0;
//   display: flex;
//   align-items: center;
//   flexdirection: column;
// `;

export const MobileNavList = styled(NavList)({
  display: 'flex',
  justifyContent: 'center',
  alignContent: 'center',
  flexDirection: 'column',
  listStyle: 'none',
});

// export const MobileNavList = styled.ul`
//   display: flex;
//   justifycontent: center;
//   aligncontent: center;
//   margin: 0;
//   padding: 0;
//   flexdirection: column;
//   liststyle: none;
// `;

export const MobileNavListItem = styled(ListItem)({
  marginBottom: '40px',
  marginLeft: '0',
});
// export const MobileNavListItem = styled.li`marginBottom: '40px',
//   marginLeft: '0',`;

export const MobileNavLink = styled(NavLink)({
  fontFamily: 'Manrope',
  fontStyle: 'normal',
  fontWeight: '500',
  fontSize: '32px',
  lineHeight: '44px',
  display: 'flex',
  alignItems: 'center',
  letterSpacing: '0.04em',
  color: '#181C27',
  '&:hover &:focus': {
    color: 'rgba(245, 146, 86, 1)',
  },
});

// export const MobileNavLink = styled.a`
//     font-family: 'Manrope';
//     font-style: normal;
//     font-weight: 500;
//     font-size: 32px;
//     line-height: 44px;
//     letter-spacing: 0.04em;
//     color: inherit;
//     display: flex;
//    alignItems: center;
//   }
//   &:hover,
//   &:focus {
//     color: rgba(245, 146, 86, 1);
//   }
//   text-decoration: none;`;
