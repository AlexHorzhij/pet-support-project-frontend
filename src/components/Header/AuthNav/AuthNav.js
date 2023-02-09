import React from 'react';
import { useState } from 'react';

import { AuthList, AuthItem, AuthLink } from './AuthNav.styled';
import { useTranslation } from 'react-i18next';

export default function AuthNav() {
  const [isActive, setisActive] = useState(true);
  const toggle = () => setisActive(isActive => !isActive);
  const activeStyle = { color: '#ffffff', background: '#f59256' };
  const { t } = useTranslation();
  return (
    <AuthList>
      <AuthItem>
        <AuthLink
          to="/login"
          onClick={toggle}
          style={isActive ? activeStyle : undefined}
        >
          {t('Login')}
        </AuthLink>
      </AuthItem>
      <AuthItem>
        <AuthLink to="register" onClick={toggle}>
          {t('Registration')}
        </AuthLink>
      </AuthItem>
    </AuthList>
  );
}
