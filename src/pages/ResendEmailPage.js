import { Typography, Box } from '@mui/material';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { resendVerificationEmail } from 'redux/auth/authOperations';
import { useSelector } from 'react-redux';
import {
  StyledInput,
  ErrorText,
  FormButton,
} from 'components/RegisterForm/Forms.styled';
import {
  AuthContainer,
  ContentWrapper,
} from 'pages/LoginPage/LoginPage.styled';
import { Form, Formik, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { LoaderWhite } from 'components/Loader/Loader';
import { getAuth } from 'redux/auth/authSelectors';
import { useTranslation } from 'react-i18next';

const schema = yup.object().shape({
  email: yup
    .string()
    .min(8)
    .max(63)
    .matches(
      /^[^-n]+[a-zA-Z0-9.,!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9]+)*$/,
      'Email must not contain the "-" as a first or last character'
    )
    .email()
    .required(),
});

export default function ResendEmailPage() {
  const { isLoading } = useSelector(getAuth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { t } = useTranslation('common');

  const onResendClick = ({ email }) => {
    dispatch(resendVerificationEmail({ email: email }));
  };

  const onLoginClick = () => {
    navigate('/login');
  };

  return (
    <AuthContainer>
      <ContentWrapper>
        <Typography variant="h3" sx={{ mb: 3 }}>
          {t('ResendEmailPage.title')}
        </Typography>
        <FormButton
          variant="contained"
          onClick={onLoginClick}
          sx={{ mt: 0, mb: 2 }}
        >
          {t('ResendEmailPage.loginBtn')}
        </FormButton>
        <Typography variant="h3" sx={{ mb: 5 }}>
          {t('ResendEmailPage.title2')}
        </Typography>
        <Formik
          initialValues={{ email: '' }}
          validationSchema={schema}
          onSubmit={onResendClick}
        >
          <Form>
            <Box sx={{ position: 'relative' }}>
              <StyledInput
                type="email"
                name="email"
                placeholder={t('ResendEmailPage.inputPlaceholder')}
                disableunderline="true"
              />
              <ErrorMessage name="email">
                {msg => <ErrorText>*{msg}</ErrorText>}
              </ErrorMessage>
            </Box>
            <FormButton variant="contained" type="submit" sx={{ mt: 0 }}>
              {!isLoading ? t('ResendEmailPage.resendBtn') : <LoaderWhite />}
            </FormButton>
          </Form>
        </Formik>
      </ContentWrapper>
    </AuthContainer>
  );
}
