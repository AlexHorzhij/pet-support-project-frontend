import React from 'react';
import RegisterForm from 'components/RegisterForm/RegisterForm';
import { Link } from 'react-router-dom';
import {
  AuthContainer,
  ContentWrapper,
  HeaderText,
  Switcher,
} from 'pages/LoginPage/LoginPage.styled';

function RegisterPage() {
  return (
    <AuthContainer>
      <ContentWrapper>
        <HeaderText>Registration</HeaderText>
        <RegisterForm />
        <Switcher>
          Already have an account? <Link to="/login">Login</Link>
        </Switcher>
      </ContentWrapper>
    </AuthContainer>
  );
}

export default RegisterPage;
