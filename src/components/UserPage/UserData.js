import React from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import UserDataItem from './UserDataItem';
import Logout from './Logout/Logout';
function UserData() {
  return (
    <>
      <Box
        sx={{
          boxSizing: 'border-box',
          backgroundColor: '#ffffff',
          borderTopRightRadius: '40px',
          borderBottomRightRadius: '40px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '20px 16px',
          width: '411px',
          ml: '-24px',
          boxShadow: '4px 4px 8px 0px rgba(34, 60, 80, 0.2)',
        }}
      >
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            position: 'relative',
            justifyContent: 'center',
            mb: '36px',
          }}
        >
          <Box sx={{ width: '233px', borderRadius: '50%', overflow: 'hidden' }}>
            <Box
              sx={{
                width: '100%',
                paddingTop: '100%',
                backgroundColor: 'black',
                position: 'relative',
              }}
            >
              <img
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                }}
                src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1361&q=80"
                alt="user avatar"
                width={233}
              />
            </Box>
          </Box>
          <IconButton
            sx={{
              borderRadius: '5px',
              height: '26px',
              p: '3px',
              position: 'absolute',
              bottom: 0,
              right: 0,
            }}
          >
            <PhotoCameraIcon sx={{ color: '#F59256', height: '20px' }} />
            <Typography sx={{ fontSize: '12px' }}>Edit photo</Typography>
          </IconButton>
        </Box>
        <Box sx={{ width: '100%' }}>
          <UserDataItem title={'Name'} value={'Anna'} />
          <UserDataItem title={'Email'} value={'anna00@gmail.com'} />
          <UserDataItem title={'Birthday'} value={'00.00.0000'} />
          <UserDataItem title={'Phone'} value={'+38000000000'} />
          <UserDataItem title={'City'} value={'Kyiv'} />
        </Box>
        <Logout />
      </Box>
    </>
  );
}

export default UserData;
