import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router';

import { getAuth } from 'redux/auth/authSelectors';
import { Button, Container } from '@mui/material';
import {
  fetchNotices,
  fetchAuthNotices,
} from 'redux/notices/noticesOperations';

export default function NoticesCategoryList() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const params = useParams();
  const { isLoggedIn, token } = useSelector(getAuth);
  const { categoryName } = params;

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
    <Container sx={{ mb: 6 }}>
      <Button
        name="sell"
        variant={categoryName === 'sell' ? 'contained' : 'outlined'}
        sx={{ textTransform: 'lowercase' }}
        onClick={onClick}
      >
        sell
      </Button>
      <Button
        name="lost-found"
        variant={categoryName === 'lost-found' ? 'contained' : 'outlined'}
        sx={{ textTransform: 'lowercase' }}
        onClick={onClick}
      >
        lost/found
      </Button>
      <Button
        variant={categoryName === 'for-free' ? 'contained' : 'outlined'}
        name="for-free"
        sx={{ textTransform: 'lowercase' }}
        onClick={onClick}
      >
        in good hands
      </Button>
      {isLoggedIn && (
        <>
          <Button
            variant={categoryName === 'favorite' ? 'contained' : 'outlined'}
            name="favorite"
            sx={{ textTransform: 'lowercase' }}
            onClick={onClick}
          >
            favorite ads
          </Button>
          <Button
            variant={categoryName === 'own' ? 'contained' : 'outlined'}
            name="own"
            sx={{ textTransform: 'lowercase' }}
            onClick={onClick}
          >
            my ads
          </Button>
        </>
      )}
    </Container>
  );
}
