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
            {t('News')} 
          </MobileNavLink>
        </MobileNavListItem>
        <MobileNavListItem>
          <MobileNavLink to="/notices/sell" onClick={close}>
            {t('Find') }
          </MobileNavLink>
        </MobileNavListItem>
        <MobileNavListItem>
          <MobileNavLink to="/friends" onClick={close}>
            {t('friends') }
          </MobileNavLink>
        </MobileNavListItem>
      </MobileNavList>
    </MobileNavigation>
  );
}
