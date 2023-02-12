import React from 'react';
import { AuthNavigation } from '../AuthNav/AuthNav.styled';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useTranslation } from 'react-i18next';
import { UserAuthLink, UserAuthItem, IconSpan } from './UserNav.styled';

export default function UserNav() {
  const { t } = useTranslation('common');
  return (
    <AuthNavigation>
      <UserAuthItem>
        <UserAuthLink to="/login">
          <IconSpan>
            <AccountCircleIcon />
          </IconSpan>
          {t('Header.accountBtn')}
        </UserAuthLink>
      </UserAuthItem>
    </AuthNavigation>
  );
}
