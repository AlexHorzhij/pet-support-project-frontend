import React from 'react';
import {
  MobileAuthNavigation,
  AuthWrapper,
} from '../MobileAuth/MobileAuth.styled';
import { MobileUserLink } from './MobileUserNav.styled';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useMenu } from 'components/Header/Context/menuContext';
import { Button } from '@mui/material';
import { useTranslation } from 'react-i18next';

export default function MobileUserNav() {
  const { close } = useMenu();
  const { t } = useTranslation('common');

  return (
    <AuthWrapper>
      <MobileAuthNavigation>
        <Button variant="contained">
          <AccountCircleIcon />
          <MobileUserLink to="/login" onClick={close}>
            {t('MobileMenu.auth.accBtn')}
          </MobileUserLink>
        </Button>
      </MobileAuthNavigation>
    </AuthWrapper>
  );
}
