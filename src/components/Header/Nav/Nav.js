import React from 'react';
import { Navigation, NavList, ListItem, LinkNav } from './Nav.styled';
import { useTranslation } from 'react-i18next';

export default function Nav() {
  const { t } = useTranslation();
  const activeStyle = {
    color: 'rgba(245, 146, 86, 1)',
    textDecoration: 'underline',
  };
  const pasStyle = {
    color: 'inherit',
    textDecoration: 'none',
  };
  return (
    <>
      <Navigation>
        <NavList>
          <ListItem>
            <LinkNav
              to="/"
              style={({ isActive }) => (isActive ? activeStyle : pasStyle)}
            >
              {t('Home')}
            </LinkNav>
          </ListItem>
          <ListItem>
            <LinkNav
              to="/news"
              style={({ isActive }) => (isActive ? activeStyle : pasStyle)}
            >
              {t('News')}
            </LinkNav>
          </ListItem>
          <ListItem>
            <LinkNav
              to="/notices/sell"
              style={({ isActive }) => (isActive ? activeStyle : pasStyle)}
            >
              {t('Find')}
            </LinkNav>
          </ListItem>
          <ListItem>
            <LinkNav
              to="/friends"
              style={({ isActive }) => (isActive ? activeStyle : pasStyle)}
            >
              {t('friends')}
            </LinkNav>
          </ListItem>
        </NavList>
      </Navigation>
    </>
  );
}
