import React, { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import { UserData, PetsData, ModalAddsPet, Modal } from 'components';
import { useDispatch, useSelector } from 'react-redux';
import {
  UserDataContainer,
  UserDataTypography,
  UserDataIconButton,
  AddPetTypography,
  AddPetIcon,
  PetDataBox,
} from './UserPage.styled';
import { fetchUserData } from 'redux/userData/userDataOperations';
import { isLoading } from 'redux/userData/userDataSelectors';

function UserPage() {
  const [modalIsShown, setModalIsShown] = useState(false);
  const isLoadindUser = useSelector(isLoading);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUserData());
  }, [dispatch]);

  const togleModal = () => {
    setModalIsShown(prev => !prev);
  };
  return (
    <UserDataContainer component="main">
      {!isLoadindUser && (
        <>
          <Box>
            <UserDataTypography variant="h3">
              My information:
            </UserDataTypography>
            <UserData />
          </Box>
          <PetDataBox>
            <UserDataTypography variant="h3">My pets:</UserDataTypography>
            <PetsData />
            <UserDataIconButton onClick={togleModal}>
              <AddPetTypography variant="h5" color="text.primary">
                Add pet
              </AddPetTypography>
              <AddPetIcon />
            </UserDataIconButton>
          </PetDataBox>
          {modalIsShown && (
            <Modal onModalClose={togleModal}>
              <ModalAddsPet onModalClose={togleModal} />
            </Modal>
          )}
        </>
      )}
    </UserDataContainer>
  );
}

export default UserPage;
