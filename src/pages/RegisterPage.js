import React from 'react';
import RegisterForm from 'components/RegisterForm/RegisterForm';
import { Link } from 'react-router-dom';
import {
  AuthContainer,
  ContentWrapper,
  HeaderText,
  Switcher,
} from 'pages/LoginPage/LoginPage.styled';
import { useTranslation } from 'react-i18next';

function RegisterPage() {
  const {t} = useTranslation('common')
  return (
    <AuthContainer>
      <ContentWrapper>
        <HeaderText> {t('Registration.title')} </HeaderText>
        <RegisterForm />
        <Switcher>
          {t('Registration.footer.msg')} <Link to="/login">{ t('Registration.footer.link')}</Link>
        </Switcher>
      </ContentWrapper>
    </AuthContainer>
  );
}

export default RegisterPage;
