import React from 'react';
import { Navigation, NavList, ListItem, LinkNav } from './Nav.styled';
import { useTranslation } from 'react-i18next';

export default function Nav() {
  const {t} = useTranslation('common')
  return (
    <>
      <Navigation>
        <NavList>
          <ListItem>
            <LinkNav to="/news" className="Mui-selected">
              {t('Header.nav.news')}
            </LinkNav>
          </ListItem>
          <ListItem>
            <LinkNav to="/notices/sell" selected className="Mui-selected">
              {t('Header.nav.find')}
            </LinkNav>
          </ListItem>
          <ListItem>
            <LinkNav to="/friends" className="Mui-selected">
              {t('Header.nav.friends')}
            </LinkNav>
          </ListItem>
        </NavList>
      </Navigation>
    </>
  );
}
