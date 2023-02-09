import React from 'react';
import { AuthNavigation } from '../AuthNav/AuthNav.styled';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Button } from '@mui/material';
import { AuthLink } from '../AuthNav/AuthNav.styled';
import { useTranslation } from 'react-i18next';


export default function UserNav() {
  const { t } = useTranslation()
  return (
    <AuthNavigation>
      <Button variant="contained">
        <AccountCircleIcon />
        <AuthLink to="/login">{t('Account')}</AuthLink>
      </Button>
    </AuthNavigation>
  );
}
