import styled from '@emotion/styled';
import { Navigation, NavList, LinkNav } from 'components/Header/Nav/Nav.styled';

export const MobileNavigation = styled(Navigation)({
  '@media screen and (max-width: 1279px)': {
    display: 'flex',
    flexDirection: 'column',
  },
  '@media screen and (min-width: 768px) and (max-width: 1279px)': {
    marginTop: '88px',
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
  alignItems: 'center',
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

// export const MobileNavListItem = styled(ListItem)({
//   marginBottom: '40px',
//   marginLeft: 0,
// });
export const MobileNavListItem = styled.li`
      margin-bottom: 40px;
  }
`;
// export const MobileNavListItem = styled.li`marginBottom: '40px',
//   marginLeft: '0',`;

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
  '&:hover &:focus': {
    color: 'rgba(245, 146, 86, 1)',
  },
  '@media screen and (min-width: 768px) and (max-width: 1279px)': {
    fontSize: '48px',
    lineHeight: '66px',
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
