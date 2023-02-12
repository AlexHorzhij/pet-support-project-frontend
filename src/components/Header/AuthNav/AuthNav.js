import React from 'react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { AuthList, AuthItem, AuthLink } from './AuthNav.styled';

export default function AuthNav() {
  const [isActive, setisActive] = useState(true);
  const toggle = () => setisActive(isActive => !isActive);
  const activeStyle = { color: '#ffffff', background: '#f59256' };
  const { t } = useTranslation('common');
  return (
    <AuthList>
      <AuthItem>
        <AuthLink
          to="/login"
          onClick={toggle}
          style={isActive ? activeStyle : undefined}
        >
          {t('Header.auth.login')}
        </AuthLink>
      </AuthItem>
      <AuthItem>
        <AuthLink to="register" onClick={toggle}>
          {t('Header.auth.reg')}
        </AuthLink>
      </AuthItem>
    </AuthList>
  );
}
