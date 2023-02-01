import React from 'react';
import {
  MobileNavigation,
  MobileNavList,
  MobileNavListItem,
  MobileNavLink,
} from './MobileNav.styled';

export default function MobileNav() {
  return (
    <MobileNavigation>
      <MobileNavList>
        <MobileNavListItem>
          <MobileNavLink to="/news">News</MobileNavLink>
        </MobileNavListItem>
        <MobileNavListItem>
          <MobileNavLink to="/notice">Find pet</MobileNavLink>
        </MobileNavListItem>
        <MobileNavListItem>
          <MobileNavLink to="/friends">Our friends</MobileNavLink>
        </MobileNavListItem>
      </MobileNavList>
    </MobileNavigation>
  );
}
