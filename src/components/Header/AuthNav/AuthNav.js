import React from 'react';

import { AuthNavigation, AuthBtn, AuthLink } from './AuthNav.styled';
import { useTranslation } from 'react-i18next';

export default function AuthNav() {
  const { t } = useTranslation();
  return (
    <AuthNavigation>
      <AuthBtn variant="outlined">
        <AuthLink to="/login">{ t('Login')}</AuthLink>
      </AuthBtn>
      <AuthBtn variant="outlined">
        <AuthLink to="register">{ t('Registration')}</AuthLink>
      </AuthBtn>
    </AuthNavigation>
  );
}
