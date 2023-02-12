import { Typography } from '@mui/material';
import React from 'react';
import {
  AuthContainer,
  ContentWrapper,
} from 'pages/LoginPage/LoginPage.styled';
import ResetPasswordForm from 'components/ForgotPassword/ResetPasswordForm';
import { useParams } from 'react-router-dom';

export default function ResetPasswordPage() {
  const { confirmationToken } = useParams();

  return (
    <AuthContainer>
      <ContentWrapper>
        <Typography variant="h3" sx={{ mb: 3 }}>
          Enter your new password
        </Typography>
        <ResetPasswordForm confirmationToken={confirmationToken} />
      </ContentWrapper>
    </AuthContainer>
  );
}
