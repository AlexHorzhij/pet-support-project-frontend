import React, { useEffect } from 'react';
import { Box, Dialog } from '@mui/material';
import { UserData, PetsData } from 'components';
import { useDispatch, useSelector } from 'react-redux';

import {
  UserDataContainer,
  UserDataTypography,
  UserDataIconButton,
  AddPetTypography,
  AddPetIcon,
  PetDataBox,
  SceletonWrapper,
  PetsPawIcon,
} from './UserPage.styled';
import { fetchUserData } from 'redux/userData/userDataOperations';
import {
  getPets,
  isLoading,
  isUploadingPet,
} from 'redux/userData/userDataSelectors';
import ModalAddPetsNew from 'components/UserPage/ModalAddpetsNew/ModalAddPetsNew';
import { ModalDialogContent } from 'components/UserPage/PetItem/PetItem.styled';
import { Loader70 } from 'components/Loader/Loader';

function UserPage() {
  const [openAddPetForm, setOpenAddPetForm] = React.useState(false);

  const handleCloseAddNotice = () => {
    setOpenAddPetForm(prev => !prev);
  };

  const isLoadindUser = useSelector(isLoading);
  const pets = useSelector(getPets);
  const dispatch = useDispatch();
  const isUploadingPetData = useSelector(isUploadingPet);

  useEffect(() => {
    dispatch(fetchUserData());
  }, [dispatch]);

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
            <UserDataIconButton onClick={handleCloseAddNotice}>
              <AddPetTypography variant="h5">Add pet</AddPetTypography>
              <AddPetIcon />
            </UserDataIconButton>
            {pets.length > 0 ? (
              <>
                <PetsData />
              </>
            ) : (
              <SceletonWrapper>
                <AddPetTypography variant="h3">
                  Your pets will be shown here
                </AddPetTypography>
                <PetsPawIcon />
              </SceletonWrapper>
            )}
            {isUploadingPetData && <Loader70 />}
          </PetDataBox>
          <Dialog
            sx={{ backdropFilter: 'blur(5px)' }}
            maxWidth="modal"
            open={openAddPetForm}
            onClose={handleCloseAddNotice}
          >
            <ModalDialogContent>
              <ModalAddPetsNew onModalClose={handleCloseAddNotice} />
            </ModalDialogContent>
          </Dialog>
        </>
      )}
    </UserDataContainer>
  );
}

export default UserPage;
