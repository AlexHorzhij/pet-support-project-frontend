import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Navigation = styled.nav`
  margin-left: 50px;
  padding: 0;
  display: flex;
  align-items: center;
  @media screen and (max-width: 1279px) {
    display: none;
  }
`;

export const LinkNav = styled(NavLink)`
  @media screen and (min-width: 767px) {
    font-family: 'Manrope';
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 27px;
    letter-spacing: 0.04em;
    color: inherit;
    text-decoration: none;
  }
  &:hover,
  &:focus {
    color: rgba(245, 146, 86, 1);
    text-decoration-line: underline;
    &.Mui-selected {
      color: rgba(245, 146, 86, 1);
      text-decoration-line: underline;
    }
  }
`;

export const NavList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 0;
  list-style: none;
`;
export const ListItem = styled.li`
      width: 132px;          
      &:not(:first-child){
        margin-left: 30px;
      }
      text-align: center
  }
`;
