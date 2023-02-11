import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router';

import { getAuth } from 'redux/auth/authSelectors';
import { Box, Button, Container } from '@mui/material';
import {
  fetchNotices,
  fetchAuthNotices,
} from 'redux/notices/noticesOperations';
import { ThreeCircles } from 'react-loader-spinner';
import { useTheme } from '@mui/material';
import { getNotices } from 'redux/notices/noticesSelectors';
import { useTranslation } from 'react-i18next';

export default function NoticesCategoryList() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const params = useParams();
  const { isLoggedIn, token } = useSelector(getAuth);
  const { categoryName } = params;
  const { isLoading } = useSelector(getNotices);
  const { t } = useTranslation('common');

  const theme = useTheme();
  useEffect(() => {
    if (token) {
      dispatch(fetchAuthNotices({ token, categoryName }));
    } else {
      dispatch(fetchNotices({ categoryName }));
    }
  }, [categoryName, dispatch, token]);

  const onClick = e => {
    const { name } = e.target;
    navigate(`/notices/${name}`);
  };

  return (
    <Container sx={{ mb: 6, position: 'relative' }}>
      <Button
        name="sell"
        variant={categoryName === 'sell' ? 'contained' : 'outlined'}
        sx={{ textTransform: 'lowercase' }}
        onClick={onClick}
      >
        {t('NoticesPage.categoryBtn.1category')}
      </Button>
      <Button
        name="lost-found"
        variant={categoryName === 'lost-found' ? 'contained' : 'outlined'}
        sx={{ textTransform: 'lowercase' }}
        onClick={onClick}
      >
        {t('NoticesPage.categoryBtn.2category')}
      </Button>
      <Button
        variant={categoryName === 'for-free' ? 'contained' : 'outlined'}
        name="for-free"
        sx={{ textTransform: 'lowercase' }}
        onClick={onClick}
      >
        {t('NoticesPage.categoryBtn.3category')}
      </Button>
      {isLoggedIn && (
        <>
          <Button
            variant={categoryName === 'favorite' ? 'contained' : 'outlined'}
            name="favorite"
            sx={{ textTransform: 'lowercase' }}
            onClick={onClick}
          >
            {t('NoticesPage.categoryBtn.4category')}
          </Button>
          <Button
            variant={categoryName === 'own' ? 'contained' : 'outlined'}
            name="own"
            sx={{ textTransform: 'lowercase' }}
            onClick={onClick}
          >
            {t('NoticesPage.categoryBtn.5category')}
          </Button>
        </>
      )}
      {isLoading && (
        <Box
          sx={{
            position: 'absolute',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            bottom: '-45px',

            // transform: 'translate(-50%,-50%)',
          }}
        >
          <ThreeCircles
            height="40"
            width="40"
            color={theme.palette.primary.main}
            visible={true}
            ariaLabel="three-circles-rotating"
          />
        </Box>
      )}
    </Container>
  );
}
