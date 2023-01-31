import styled from '@emotion/styled';

export const Navigation = styled.nav`
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  @media screen and (max-width: 1279px) {
    display: none;
  }
`;
export const NavLink = styled.a`
  @media screen and (min-width: 767px) {
    font-family: 'Manrope';
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 27px;
    letter-spacing: 0.04em;
    color: inherit;
  }
  &:hover,
  &:focus {
    color: rgba(245, 146, 86, 1);
  }
  text-decoration: none;
`;
export const NavList = styled.ul`
  display: flex;
  justify-content: center;
  margin: 0;
  padding: 0;
  list-style: none;
`;
export const ListItem = styled.li`
      margin-left: 80px;
  }
`;
