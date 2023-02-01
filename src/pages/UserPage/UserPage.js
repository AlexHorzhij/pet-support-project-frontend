import React, { useState } from 'react';
import { Box } from '@mui/material';
import { UserData, PetsData, ModalAddsPet, Modal } from 'components';
import {
  UserDataContainer,
  UserDataTypography,
  UserDataIconButton,
  AddPetTypography,
  AddPetIcon,
  PetDataBox,
} from './UserPage.styled';
function UserPage() {
  const [modalIsShown, setModalIsShown] = useState(false);

  const toogleModal = () => {
    setModalIsShown(prev => !prev);
  };
  return (
    <UserDataContainer>
      <Box>
        <UserDataTypography variant="h3">My information:</UserDataTypography>
        <UserData />
      </Box>
      <PetDataBox>
        <UserDataTypography variant="h3">My pets:</UserDataTypography>
        <PetsData />
        <UserDataIconButton onClick={toogleModal}>
          <AddPetTypography variant="h5" color="text.primary">
            Add pet
          </AddPetTypography>
          <AddPetIcon />
        </UserDataIconButton>
      </PetDataBox>
      {modalIsShown && (
        <Modal onModalClose={toogleModal}>
          <ModalAddsPet onModalClose={toogleModal} />
        </Modal>
      )}
    </UserDataContainer>
  );
}

export default UserPage;
