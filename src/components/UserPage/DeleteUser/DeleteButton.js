import React, { useState } from 'react';
import Modal from 'components/Modal/Modal';
import DeleteUserModal from '../DeleteUserModal/DeleteUserModal';
import { StyledLogoutButton, StyledButtonTitle } from '../Logout/Logput.styled';
import { StyledDeleteIcon } from './DeleteButton.styled';
import { useTranslation } from 'react-i18next';

function DeleteButton() {
  const [modalIsShown, setModalIsShown] = useState(false);
  const {t} = useTranslation('common')
  const toggleModal = () => {
    setModalIsShown(prev => !prev);
  };


  return (
    <>
      <StyledLogoutButton variant="outlined" onClick={toggleModal}>
        <StyledDeleteIcon />
        <StyledButtonTitle> {t('User.card.deleteAcc')} </StyledButtonTitle>
      </StyledLogoutButton>
      {modalIsShown && (
        <Modal onModalClose={toggleModal}>
          <DeleteUserModal onModalClose={toggleModal} />
        </Modal>
      )}
    </>
  );
}

export default DeleteButton;
