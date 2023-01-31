import React from 'react';
import LoginForm from 'components/LoginForm/LoginForm';
import { Link } from 'react-router-dom';

import { Typography } from '@mui/material';
import { Background, ContentWrapper, Switcher } from './LoginPage.styled';

function LoginPage() {
  return (
    <Background>
      <ContentWrapper>
        <Typography sx={{ textAlign: 'center', mb: '40px' }} variant="h3">
          Login
        </Typography>
        <LoginForm />
        <Switcher>
          Don't have an account? <Link to="/register">Register</Link>
        </Switcher>
      </ContentWrapper>
    </Background>
  );
}

export default LoginPage;
