import React, { useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import UserDataItem from '../UserDataItem/UserDataItem';
import Logout from '../Logout/Logout';
import { useDropzone } from 'react-dropzone';
import { ThreeCircles } from 'react-loader-spinner';
import { useTheme } from '@mui/material';
import {
  BoxWrapper,
  BoxImageWrapper,
  BoxImageBackdrop,
  BoxImageContainer,
  StyledButton,
  ImageBox,
  PhotoCameraIconStyled,
  WrapperBox,
} from './UserData.styled';
import { useDispatch, useSelector } from 'react-redux';
import { getUser, isLoadingUpdate } from 'redux/userData/userDataSelectors';
import { updateUser } from 'redux/userData/userDataOperations';

function UserData() {
  const dispatch = useDispatch();
  const user = useSelector(getUser);
  const isBeingUpdated = useSelector(isLoadingUpdate);
  const theme = useTheme();
  const { getRootProps, getInputProps, acceptedFiles } = useDropzone({});

  useEffect(() => {
    if (acceptedFiles.length > 0) {
      dispatch(updateUser({ name: 'avatarUrl', value: acceptedFiles[0] }));
    }
  }, [dispatch, acceptedFiles]);

  return (
    <>
      {user && (
        <BoxWrapper>
          <BoxImageWrapper>
            <BoxImageBackdrop>
              <BoxImageContainer>
                <ImageBox
                  component="img"
                  src={user.avatarUrl}
                  alt="user avatar"
                />
              </BoxImageContainer>
            </BoxImageBackdrop>
            <div className="container">
              <div {...getRootProps({ className: 'dropzone' })}>
                <input {...getInputProps()} />
                <StyledButton>
                  {isBeingUpdated ? (
                    <Box style={{ marginRight: '5px' }}>
                      <ThreeCircles
                        height="20"
                        width="20"
                        color={theme.palette.primary.main}
                        visible={true}
                        ariaLabel="three-circles-rotating"
                      />
                    </Box>
                  ) : (
                    <PhotoCameraIconStyled />
                  )}
                  <Typography sx={{ fontSize: '12px' }}>Edit photo</Typography>
                </StyledButton>
              </div>
            </div>
          </BoxImageWrapper>
          <WrapperBox>
            <WrapperBox>
              {user && (
                <>
                  <UserDataItem title={'Name'} value={user.name} />
                  <UserDataItem title={'Email'} value={user.email} />
                  <UserDataItem title={'Birthday'} value={user.birthdate} />
                  <UserDataItem title={'Phone'} value={user.phone} />
                  <UserDataItem title={'City'} value={user.city} />
                </>
              )}
            </WrapperBox>
            <Logout />
          </WrapperBox>
        </BoxWrapper>
      )}
    </>
  );
}

export default UserData;
