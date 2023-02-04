import React, { useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';
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
import {
  getPets,
  isLoading,
  isLoadingUpdatePet,
} from 'redux/userData/userDataSelectors';
import { useTheme } from '@mui/system';
import { ThreeCircles } from 'react-loader-spinner';
import PetsOutlinedIcon from '@mui/icons-material/PetsOutlined';

function UserPage() {
  const [modalIsShown, setModalIsShown] = useState(false);
  const isLoadindUser = useSelector(isLoading);
  const pets = useSelector(getPets);
  const dispatch = useDispatch();
  const theme = useTheme();
  const isLoadingUpdate = useSelector(isLoadingUpdatePet);
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
            <UserDataIconButton onClick={togleModal}>
              <AddPetTypography variant="h5" color="text.primary">
                Add pet
              </AddPetTypography>
              <AddPetIcon />
            </UserDataIconButton>
            {pets.length > 0 ? (
              <>
                <PetsData />
              </>
            ) : (
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  flexDirection: 'column',
                  marginTop: '150px',
                }}
              >
                <Typography sx={{ fontSize: '30px' }}>
                  Your pets will be shown here
                </Typography>
                <PetsOutlinedIcon
                  sx={{ marginTop: '30px', fontSize: '100px', color: 'grey' }}
                />
              </Box>
            )}
            {isLoadingUpdate && (
              <Box
                sx={{
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginTop: '30px',
                }}
              >
                <ThreeCircles
                  height="50"
                  width="50"
                  color={theme.palette.primary.main}
                  visible={true}
                  ariaLabel="three-circles-rotating"
                />
              </Box>
            )}
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
