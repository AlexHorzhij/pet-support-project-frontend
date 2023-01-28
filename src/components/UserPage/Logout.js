import React from 'react';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import { IconButton, Typography } from '@mui/material';

function Logout() {
  return (
    <>
      <IconButton
        sx={{
          borderRadius: '5px',
          height: '26px',
          alignSelf: 'start',
          p: '0',
          mt: '10px',
        }}
      >
        <LogoutRoundedIcon sx={{ width: '20px', color: '#F59256' }} />
        <Typography sx={{ fontSize: '12px' }}>Log Out</Typography>
      </IconButton>
    </>
  );
}

export default Logout;
