import React from 'react';
import {
  MobileNavigation,
  MobileNavList,
  MobileNavListItem,
  MobileNavLink,
} from './MobileNav.styled';
import { useMenu } from 'components/Header/Context/menuContext';
import { useTranslation } from 'react-i18next';


export default function MobileNav() {
  const {t} = useTranslation()  
  const { close } = useMenu();
  return (
    <MobileNavigation>
      <MobileNavList>
        <MobileNavListItem>
          <MobileNavLink to="/news" onClick={close}>
            {t('MobileMenu.1link')} 
          </MobileNavLink>
        </MobileNavListItem>
        <MobileNavListItem>
          <MobileNavLink to="/notices/sell" onClick={close}>
            {t('MobileMenu.2link') }
          </MobileNavLink>
        </MobileNavListItem>
        <MobileNavListItem>
          <MobileNavLink to="/friends" onClick={close}>
            {t('MobileMenu.3link') }
          </MobileNavLink>
        </MobileNavListItem>
      </MobileNavList>
    </MobileNavigation>
  );
}
