import React, { useCallback, useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import UserDataItem from '../UserDataItem/UserDataItem';
import Logout from '../Logout/Logout';
import Dropzone from 'react-dropzone';
import {
  BoxWrapper,
  BoxImageWrapper,
  BoxImageBackdrop,
  BoxImageContainer,
  StyledButton,
  ImageBox,
} from './UserData.styled';
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from 'redux/userData/userDataSelectors';
import { fetchUserData } from 'redux/userData/userDataOperations';
function UserData() {
  const dispatch = useDispatch();
  const user = useSelector(getUser);
  const [userPicture, setUserPicture] = useState(null);

  useEffect(() => {
    dispatch(fetchUserData());
  }, [dispatch]);
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

          <Dropzone onDrop={acceptedFiles => setUserPicture(acceptedFiles)}>
            {({ getRootProps, getInputProps }) => (
              <section>
                <div {...getRootProps()}>
                  <input {...getInputProps()} />
                  <p>Drag 'n' drop some files here, or click to select files</p>
                </div>
              </section>
            )}
          </Dropzone>
        </BoxImageWrapper>
        <Box sx={{ width: '100%' }}>
          {user.name && (
            <>
              <UserDataItem title={'Name'} value={user.name} />
              <UserDataItem title={'Email'} value={user.email} />
              <UserDataItem title={'Birthday'} value={user.birthday} />
              <UserDataItem title={'Phone'} value={user.phone} />
              <UserDataItem title={'City'} value={user.city} />
            </>
          )}
        </Box>
        <Logout />
      </BoxWrapper>
    </>
  );
}

export default UserData;

// <StyledButton>
//   <PhotoCameraIcon
//     sx={{ color: '#F59256', height: '20px' }}
//   />
//   <Typography sx={{ fontSize: '12px' }}>
//     Edit photo
//   </Typography>
// </StyledButton>
