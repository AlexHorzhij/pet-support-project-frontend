import React from 'react';
import { Box, Typography } from '@mui/material';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import UserDataItem from '../UserDataItem/UserDataItem';
import Logout from '../Logout/Logout';
import {
  BoxWrapper,
  BoxImageWrapper,
  BoxImageBackdrop,
  BoxImageContainer,
  StyledButton,
  ImageBox,
} from './UserData.styled';

function UserData() {
  return (
    <>
      <BoxWrapper>
        <BoxImageWrapper>
          <BoxImageBackdrop>
            <BoxImageContainer>
              <ImageBox
                component="img"
                src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1361&q=80"
                alt="user avatar"
              />
            </BoxImageContainer>
          </BoxImageBackdrop>
          <StyledButton>
            <PhotoCameraIcon sx={{ color: '#F59256', height: '20px' }} />
            <Typography sx={{ fontSize: '12px' }}>Edit photo</Typography>
          </StyledButton>
        </BoxImageWrapper>
        <Box sx={{ width: '100%' }}>
          <UserDataItem title={'Name'} value={'Anna'} />
          <UserDataItem title={'Email'} value={'anna00@gmail.com'} />
          <UserDataItem title={'Birthday'} value={'00.00.0000'} />
          <UserDataItem title={'Phone'} value={'+38000000000'} />
          <UserDataItem title={'City'} value={'Kyiv'} />
        </Box>
        <Logout />
      </BoxWrapper>
    </>
  );
}

export default UserData;
