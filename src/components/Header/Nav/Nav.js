import React from 'react';
import { Navigation, NavList, ListItem, LinkNav } from './Nav.styled';
export default function Nav() {
  return (
    <>
      <Navigation>
        <NavList>
          <ListItem>
            <LinkNav to="/news" className="Mui-selected">
              News
            </LinkNav>
          </ListItem>
          <ListItem>
            <LinkNav to="/notices/sell" selected className="Mui-selected">
              Find pet
            </LinkNav>
          </ListItem>
          <ListItem>
            <LinkNav to="/friends" className="Mui-selected">
              Our friends
            </LinkNav>
          </ListItem>
        </NavList>
      </Navigation>
    </>
  );
}
