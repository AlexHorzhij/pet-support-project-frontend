import React from 'react';
import { Navigation, NavList, ListItem, LinkNav } from './Nav.styled';
export default function Nav() {
  return (
    <>
      <Navigation>
        <NavList>
          <ListItem>
            <LinkNav to="/news">News</LinkNav>
          </ListItem>
          <ListItem>
            <LinkNav to="/notices">Find pet</LinkNav>
          </ListItem>
          <ListItem>
            <LinkNav to="/friends">Our friends</LinkNav>
          </ListItem>
        </NavList>
      </Navigation>
    </>
  );
}
