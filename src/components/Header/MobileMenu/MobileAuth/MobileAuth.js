import React from 'react';
import {
  MobileAuthNavigation,
  AuthWrapper,
  MobileAuthLink,
} from './MobileAuth.styled';
import { useMenu } from 'components/Header/Context/menuContext';
import { Button } from '@mui/material';
import { useTranslation } from 'react-i18next';

export default function MobileAuth() {
  const { t } = useTranslation();
  const { close } = useMenu();

  return (
    <AuthWrapper>
      <MobileAuthNavigation>
        <Button variant="contained">
          <MobileAuthLink to="/login" onClick={close} className="current">
            {t('Login')}
          </MobileAuthLink>
        </Button>
        <Button variant="outlined">
          <MobileAuthLink to="register" onClick={close}>
            {t('Registration')}
          </MobileAuthLink>
        </Button>
      </MobileAuthNavigation>
    </AuthWrapper>
  );
}