import React from 'react';

import { AuthNavigation, AuthBtn, AuthLink } from './AuthNav.styled';
import { useTranslation } from 'react-i18next';

export default function AuthNav() {
  const { t } = useTranslation('common');
  return (
    <AuthNavigation>
      <AuthBtn variant="outlined">
        <AuthLink to="/login">{ t('Header.auth.login')}</AuthLink>
      </AuthBtn>
      <AuthBtn variant="outlined">
        <AuthLink to="register">{ t('Header.auth.reg')}</AuthLink>
      </AuthBtn>
    </AuthNavigation>
  );
}
