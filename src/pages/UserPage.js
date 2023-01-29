import React, { useState } from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import UserData from 'components/UserPage/UserData/UserData';
import PetsData from 'components/UserPage/PetsData/PetsData';
import { IconButton } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import Modal from 'components/Modal/Modal';
import ModalAddsPet from 'components/UserPage/ModalAddsPet/ModalAddsPet';
function UserPage() {
  const [modalIsShown, setModalIsShown] = useState(true);

  const toogleModal = () => {
    setModalIsShown(prev => !prev);
  };
  return (
    <Container
      sx={{
        flexDirection: 'row',
        display: 'flex',
        backgroundColor: '#FDF7F2',
        gap: '32px',
      }}
    >
      <Box>
        <Typography
          variant="h3"
          sx={{ ml: '17px', fontSize: '28px', mb: '24px' }}
        >
          My information:
        </Typography>
        <UserData />
      </Box>
      <Box sx={{ position: 'relative' }}>
        <Typography
          variant="h3"
          sx={{ ml: '17px', fontSize: '28px', mb: '24px' }}
        >
          My pets:
        </Typography>
        <PetsData />
        <IconButton
          sx={{
            borderRadius: '10px',
            position: 'absolute',
            top: '0',
            right: '0',
          }}
          onClick={toogleModal}
        >
          <Typography sx={{ fontSize: '20px', color: 'black' }}>
            Add pet
          </Typography>
          <AddCircleIcon
            sx={{ color: '#F59256', fontSize: '25px', ml: '5px' }}
          />
        </IconButton>
      </Box>
      {modalIsShown && (
        <Modal onModalClose={toogleModal}>
          <ModalAddsPet onModalClose={toogleModal} />
        </Modal>
      )}
    </Container>
  );
}

export default UserPage;
