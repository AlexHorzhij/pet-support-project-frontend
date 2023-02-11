import React from 'react';
import LoginForm from 'components/LoginForm/LoginForm';
import { Link } from 'react-router-dom';
import {
  AuthContainer,
  ContentWrapper,
  HeaderText,
  Switcher,
} from './LoginPage.styled';
import { useTranslation } from 'react-i18next';

function LoginPage() {
  const {t} = useTranslation('common')
  return (
    <AuthContainer>
      <ContentWrapper>
        <HeaderText>{t('Login.title')}</HeaderText>
        <LoginForm />
        <Switcher>
        
            {t('Login.form.footer.msg')} <Link to="/register">{t('Login.form.footer.link')}</Link>
      
          
        </Switcher>
      </ContentWrapper>
    </AuthContainer>
  );
}

export default LoginPage;
