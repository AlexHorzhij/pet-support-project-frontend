import React from 'react';
import RegisterForm from 'components/RegisterForm/RegisterForm';
import { Typography } from '@mui/material';
import {
  Background,
  ContentWrapper,
  Switcher,
} from 'pages/LoginPage/LoginPage.styled';
import { Link } from 'react-router-dom';

function RegisterPage() {
  return (
    <Background>
      <ContentWrapper>
        <Typography sx={{ textAlign: 'center', mb: '40px' }} variant="h3">
          Register
        </Typography>
        <RegisterForm />
        <Switcher>
          Already have an account? <Link to="/login">Login</Link>
        </Switcher>
      </ContentWrapper>
    </Background>
  );
}

export default RegisterPage;
