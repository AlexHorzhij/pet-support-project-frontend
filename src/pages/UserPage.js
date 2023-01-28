import React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import UserData from 'components/UserPage/UserData';
import PetsData from 'components/UserPage/PetsData';

function UserPage() {
  return (
    <Container
      sx={{
        flexDirection: 'row',
        display: 'flex',
        backgroundColor: '#FDF7F2',
      }}
    >
      <Box>
        <Typography variant="h3" sx={{ ml: '17px' }}>
          My information:
        </Typography>
        <UserData />
      </Box>
      <Box>
        <Typography variant="h3" sx={{ ml: '17px' }}>
          My pets:
        </Typography>
        <PetsData />
      </Box>
    </Container>
  );
}

export default UserPage;
