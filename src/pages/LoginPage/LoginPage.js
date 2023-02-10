import React from 'react';
import LoginForm from 'components/LoginForm/LoginForm';
import { Link } from 'react-router-dom';
import {
  AuthContainer,
  ContentWrapper,
  HeaderText,
  Switcher,
} from './LoginPage.styled';
import { useTranslation, Trans } from 'react-i18next';

function LoginPage() {
  return (
    <AuthContainer>
      <ContentWrapper>
        <HeaderText>Login</HeaderText>
        <LoginForm />
        <Switcher>
          <Trans i18nKey='loginFooter'>
            Don't have an account? <Link to="/register">Register</Link>
          </Trans>
        </Switcher>
      </ContentWrapper>
    </AuthContainer>
  );
}

export default LoginPage;
