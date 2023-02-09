import React, { useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import UserDataItem from '../UserDataItem/UserDataItem';
import Logout from '../Logout/Logout';
import { useDropzone } from 'react-dropzone';
import { ThreeCircles } from 'react-loader-spinner';
import { useTheme, useMediaQuery } from '@mui/material';
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
  const isMobileScreens = useMediaQuery('(max-width: 415.98px)');
  const { getRootProps, getInputProps, acceptedFiles } = useDropzone({
    accept: {
      'image/jpeg': ['.jpg', '.jpeg', '.png'],
    },
  });

  // ========================= regex Patterns ==========================
  const datePattern = /^[0-3][0-9].[0-3][0-9].(?:[0-9][0-9])?[0-9][0-9]$/;
  const phonePattern =
    /^(?=(?:\D*\d){10,15}\D*$)\+?[0-9]{1,3}[\s-]?(?:\(0?[0-9]{1,5}\)|[0-9]{1,5})[-\s]?[0-9][\d\s-]{5,7}\s?(?:x[\d-]{0,4})?$/;
  const locationPattern = /^[A-Z][a-zA-Z\s]+,\s+[A-Z][a-zA-Z\s]*$/;
  const emailPattern = /[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$/;
  const namePattern = /^[a-zA-Z\s]*$/;
  // ========================= regex Patterns ==========================

  useEffect(() => {
    if (acceptedFiles.length > 0) {
      dispatch(updateUser({ name: 'avatarUrl', value: acceptedFiles[0] }));
    }
  }, [dispatch, acceptedFiles]);

  return (
    <>
      {user && (
        <BoxWrapper>
          <Box
            sx={{
              position: 'absolute',
              top: '20px',
              right: '20px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column',
            }}
          >
            {isBeingUpdated ? (
              <>
                {isMobileScreens ? null : (
                  <Typography sx={{ marginBottom: '5px' }}>Updating</Typography>
                )}

                <ThreeCircles
                  height="30"
                  width="30"
                  color={theme.palette.primary.main}
                  visible={true}
                  ariaLabel="three-circles-rotating"
                />
              </>
            ) : null}
          </Box>
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
                  <PhotoCameraIconStyled />
                  <Typography sx={{ fontSize: '12px' }}>Edit photo</Typography>
                </StyledButton>
              </div>
            </div>
          </BoxImageWrapper>
          <WrapperBox>
            <WrapperBox>
              {user && (
                <>
                  <UserDataItem
                    title={'Email'}
                    value={user.email}
                    pattern={emailPattern}
                    textMessage={'Enter valid email'}
                  />
                  <UserDataItem
                    title={'Name'}
                    value={user.name}
                    pattern={namePattern}
                    textMessage={'Enter valid full name, at least 2 cheracter'}
                  />

                  <UserDataItem
                    title={'Phone'}
                    value={user.phone}
                    pattern={phonePattern}
                    textMessage={
                      'Enter valid phone number range 10 to 15 digits'
                    }
                  />
                  <UserDataItem
                    title={'City'}
                    value={user.city}
                    pattern={locationPattern}
                    textMessage={
                      'Location name should begin with capital letters,and devided by comma and space'
                    }
                  />
                  <UserDataItem
                    title={'Birthday'}
                    value={user.birthdate}
                    pattern={datePattern}
                    textMessage={
                      'Enter valid date of bitrh, valid format DD.MM.YYYY'
                    }
                  />
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
