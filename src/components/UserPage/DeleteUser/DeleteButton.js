import React, { useState } from 'react';
import Modal from 'components/Modal/Modal';
import DeleteUserModal from '../DeleteUserModal/DeleteUserModal';
import { StyledLogoutButton, StyledButtonTitle } from '../Logout/Logput.styled';
import { StyledDeleteIcon } from './DeleteButton.styled';

function DeleteButton() {
  const [modalIsShown, setModalIsShown] = useState(false);
  const toggleModal = () => {
    setModalIsShown(prev => !prev);
  };
  return (
    <>
      <StyledLogoutButton variant="outlined" onClick={toggleModal}>
        <StyledDeleteIcon />
        <StyledButtonTitle>Delete Account</StyledButtonTitle>
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
