import React, { useState } from 'react';
import { ForgotPasswordModal, Modal, LoginForm } from 'components';
import {
  AuthContainer,
  ContentWrapper,
  HeaderText,
  Switcher,
  RemindButton,
} from './LoginPage.styled';
import { Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function LoginPage() {
  const { t } = useTranslation('common');
  const [modalIsShown, setModalIsShown] = useState(false);
  const navigate = useNavigate();

  const toggleModal = () => {
    setModalIsShown(prev => !prev);
  };

  const verifyNavigate = () => {
    navigate('/verification');
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
          <Switcher>
            {t('Login.form.footer.forgotPass')}
            <RemindButton variant="outlined" onClick={toggleModal}>
              {t('Login.form.footer.forgotPassLink')}
            </RemindButton>
          </Switcher>
          <Switcher>
            {t('Login.form.footer.verify')}
            <RemindButton variant="outlined" onClick={verifyNavigate}>
              {t('Login.form.footer.verifyLink')}
            </RemindButton>
          </Switcher>
        </ContentWrapper>
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
