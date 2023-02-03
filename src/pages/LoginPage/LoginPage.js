import React from 'react';
import LoginForm from 'components/LoginForm/LoginForm';
import { Link } from 'react-router-dom';
import {
  AuthContainer,
  ContentWrapper,
  HeaderText,
  Switcher,
} from './LoginPage.styled';

function LoginPage() {
  return (
    <AuthContainer>
      <ContentWrapper>
        <HeaderText>Login</HeaderText>
        <LoginForm />
        <Switcher>
          Don't have an account? <Link to="/register">Register</Link>
        </Switcher>
      </ContentWrapper>
    </AuthContainer>
  );
}

export default LoginPage;
