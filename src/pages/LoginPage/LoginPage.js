import React, { useState } from 'react';
import LoginForm from 'components/LoginForm/LoginForm';
import RemindPasswordModal from 'components/LoginForm/RemindPasswordModal';
import { Link } from 'react-router-dom';
import {
  AuthContainer,
  ContentWrapper,
  HeaderText,
  Switcher,
  RemindButton,
} from './LoginPage.styled';
import { Modal } from 'components';

function LoginPage() {
  const [modalIsShown, setModalIsShown] = useState(false);

  const toggleModal = () => {
    setModalIsShown(prev => !prev);
  };

  return (
    <>
      <AuthContainer>
        <ContentWrapper>
          <HeaderText>Login</HeaderText>
          <LoginForm />
          <Switcher>
            Don't have an account? <Link to="/register">Register</Link>
          </Switcher>
          <Switcher>
            Forgot your password?
            <RemindButton variant="outlined" onClick={toggleModal}>
              Remind
            </RemindButton>
          </Switcher>
        </ContentWrapper>
      </AuthContainer>
      {modalIsShown && (
        <Modal onModalClose={toggleModal}>
          <RemindPasswordModal onModalClose={toggleModal} />
        </Modal>
      )}
    </>
  );
}

export default LoginPage;
