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
} from './UserPage.styled';
import { fetchUserData } from 'redux/userData/userDataOperations';
import {
  getPets,
  isLoading,
  isUploadingPet,
} from 'redux/userData/userDataSelectors';
import { useTheme } from '@mui/system';
import { ThreeCircles } from 'react-loader-spinner';
import PetsOutlinedIcon from '@mui/icons-material/PetsOutlined';
import ModalAddPetsNew from 'components/UserPage/ModalAddpetsNew/ModalAddPetsNew';
import { ModalDialogContent } from 'components/UserPage/PetItem/PetItem.styled';
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
  const theme = useTheme();
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
            <UserDataTypography variant="h3">{t('User.title2')}</UserDataTypography>
            <UserDataIconButton onClick={handleCloseAddNotice}>
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
              <SceletonWrapper>
                <Typography sx={{ fontSize: '30px' }}>
                  {t('User.nonePetsMsg')}
                </Typography>
                <PetsOutlinedIcon
                  sx={{ marginTop: '30px', fontSize: '100px', color: 'grey' }}
                />
              </SceletonWrapper>
            )}
            {isUploadingPetData && (
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
