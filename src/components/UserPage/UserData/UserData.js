import React, { useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import UserDataItem from '../UserDataItem/UserDataItem';
import Logout from '../Logout/Logout';
import { useDropzone } from 'react-dropzone';
import { useMediaQuery } from '@mui/material';
import {
  BoxWrapper,
  BoxImageWrapper,
  BoxImageBackdrop,
  BoxImageContainer,
  StyledButton,
  ImageBox,
  PhotoCameraIconStyled,
  WrapperBox,
  LoaderWrapper,
  StyledLink,
} from './UserData.styled';
import { useDispatch, useSelector } from 'react-redux';
import { getUser, isLoadingUpdate } from 'redux/userData/userDataSelectors';
import { updateUser } from 'redux/userData/userDataOperations';
import { Loader } from 'components/Loader/Loader';
import { useTranslation } from 'react-i18next';
import DeleteButton from 'components/UserPage/DeleteUser/DeleteButton';

import { getNotices } from 'redux/notices/noticesSelectors';
import { getAuth } from 'redux/auth/authSelectors';
import { fetchAuthNotices } from 'redux/notices/noticesOperations';

function UserData() {
  const { token } = useSelector(getAuth);
  const dispatch = useDispatch();
  const user = useSelector(getUser);
  const isBeingUpdated = useSelector(isLoadingUpdate);
  const { items } = useSelector(getNotices);
  console.log('items: ', items);
  const isMobileScreens = useMediaQuery('(max-width: 415.98px)');
  const { getRootProps, getInputProps, acceptedFiles } = useDropzone({
    accept: {
      'image/jpeg': ['.jpg', '.jpeg', '.png'],
    },
  });
  const { t } = useTranslation('common');

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
  const categoryName = 'own';
  useEffect(() => {
    dispatch(fetchAuthNotices({ token, categoryName }));
  }, [dispatch, token]);

  return (
    <>
      {user && (
        <BoxWrapper>
          <LoaderWrapper>
            {isBeingUpdated ? (
              <>
                {isMobileScreens ? null : (
                  <Typography sx={{ marginBottom: '5px' }}>
                    {t('User.card.onUpdate')}
                  </Typography>
                )}
                <Loader />
              </>
            ) : null}
          </LoaderWrapper>
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
                  <Typography sx={{ fontSize: '12px' }}>
                    {t('User.card.editPhotoBtn')}
                  </Typography>
                </StyledButton>
              </div>
            </div>
          </BoxImageWrapper>
          <WrapperBox>
            <WrapperBox>
              {user && (
                <>
                  <UserDataItem
                    title={t('User.card.2line')}
                    value={user.email}
                    pattern={emailPattern}
                    textMessage={t('User.card.2lineErrMsg')}
                  />
                  <UserDataItem
                    title={t('User.card.1line')}
                    value={user.name}
                    pattern={namePattern}
                    textMessage={t('User.card.1lineErrMsg')}
                  />

                  <UserDataItem
                    title={t('User.card.4line')}
                    value={user.phone}
                    pattern={phonePattern}
                    textMessage={t('User.card.4lineErrMsg')}
                  />
                  <UserDataItem
                    title={t('User.card.5line')}
                    value={user.city}
                    pattern={locationPattern}
                    textMessage={t('User.card.5lineErrMsg')}
                  />
                  <UserDataItem
                    title={t('User.card.3line')}
                    value={user.birthdate}
                    pattern={datePattern}
                    textMessage={t('User.card.3lineErrMsg')}
                  />
                </>
              )}
            </WrapperBox>
            <Box sx={{ mt: '10px', mb: '10px' }}>
              <StyledLink to="/notices/own">
                {items.length > 0 && (
                  <>
                    My notices
                    <span
                      style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginLeft: '15px',
                        backgroundColor: '#e7e7e7',
                        padding: '5px',
                        borderRadius: '50%',
                        width: '30px',
                        height: '30px',
                        fontSize: '15px',
                      }}
                    >
                      {items.length}
                    </span>
                  </>
                )}
              </StyledLink>
            </Box>
            <Logout />
            <DeleteButton />
          </WrapperBox>
        </BoxWrapper>
      )}
    </>
  );
}

export default UserData;
