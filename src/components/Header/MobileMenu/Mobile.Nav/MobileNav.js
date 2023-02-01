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
          <MobileNavLink href="/news">News</MobileNavLink>
        </MobileNavListItem>
        <MobileNavListItem>
          <MobileNavLink href="/notice">Find pet</MobileNavLink>
        </MobileNavListItem>
        <MobileNavListItem>
          <MobileNavLink href="/friends">Our friends</MobileNavLink>
        </MobileNavListItem>
      </MobileNavList>
    </MobileNavigation>
  );
}
