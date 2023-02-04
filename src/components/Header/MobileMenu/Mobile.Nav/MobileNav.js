import React from 'react';
import {
  MobileNavigation,
  MobileNavList,
  MobileNavListItem,
  MobileNavLink,
} from './MobileNav.styled';
import { useMenu } from 'components/Header/Context/menuContext';

export default function MobileNav() {
  const { close } = useMenu();
  return (
    <MobileNavigation>
      <MobileNavList>
        <MobileNavListItem>
          <MobileNavLink to="/news" onClick={close}>
            News
          </MobileNavLink>
        </MobileNavListItem>
        <MobileNavListItem>
          <MobileNavLink to="/notice" onClick={close}>
            Find pet
          </MobileNavLink>
        </MobileNavListItem>
        <MobileNavListItem>
          <MobileNavLink to="/friends" onClick={close}>
            Our friends
          </MobileNavLink>
        </MobileNavListItem>
      </MobileNavList>
    </MobileNavigation>
  );
}
