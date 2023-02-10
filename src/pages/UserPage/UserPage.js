import React, { useEffect } from 'react';
import { Box, Dialog, Typography } from '@mui/material';
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
  // PetsPawIcon,
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
import { useTranslation } from 'react-i18next';

function UserPage() {
  const [openAddPetForm, setOpenAddPetForm] = React.useState(false);
  const { t } = useTranslation('common');

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
              {t('User.title')}
            </UserDataTypography>
            <UserData />
          </Box>
          <PetDataBox>
            <UserDataTypography variant="h3">
              {t('User.title2')}
            </UserDataTypography>
            <UserDataIconButton onClick={handleCloseAddNotice}>
              <AddPetTypography variant="h5" color="text.primary">
                {t('User.addPetBtn')}
              </AddPetTypography>
              <AddPetIcon />
            </UserDataIconButton>
            {pets.length > 0 ? (
              <>
                <PetsData />
              </>
            ) : (
              <SceletonWrapper>
                <Typography sx={{ fontSize: '30px' }}>
                  {t('User.nonePetsMsg')}
                </Typography>
                <PetsOutlinedIcon
                  sx={{ marginTop: '30px', fontSize: '100px', color: 'grey' }}
                />
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
