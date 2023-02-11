import React, { useState } from 'react';
import {
  ForgotPasswordModal,
  Modal,
  LoginForm
} from 'components';
import {
  AuthContainer,
  ContentWrapper,
  HeaderText,
  Switcher,
  RemindButton,
} from './LoginPage.styled';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function LoginPage() {
  const { t } = useTranslation('common');
  const [modalIsShown, setModalIsShown] = useState(false);

  const toggleModal = () => {
    setModalIsShown(prev => !prev);
  };

  return (
    <>
      <AuthContainer>
        <ContentWrapper>
          <HeaderText>{t('Login.title')}</HeaderText>
          <LoginForm />
          <Switcher>
            {t('Login.form.footer.msg')}{' '}
            <Link to="/register">{t('Login.form.footer.link')}</Link>
          </Switcher>
        </ContentWrapper>
        <Switcher>
          Forgot your password?
          <RemindButton variant="outlined" onClick={toggleModal}>
            Remind
          </RemindButton>
        </Switcher>
      </AuthContainer>
      {modalIsShown && (
        <Modal onModalClose={toggleModal}>
          <ForgotPasswordModal onModalClose={toggleModal} />
        </Modal>
      )}
    </>
  );
}

export default LoginPage;
