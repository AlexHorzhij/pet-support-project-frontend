import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router';

import { getAuth } from 'redux/auth/authSelectors';
import { Button, Container } from '@mui/material';
import { fetchNoticesByCategory } from 'redux/notices/noticesOperations';


export default function NoticesCategoryList() {

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const params = useParams()

  const { categoryName } = params

  useEffect(() => {
    dispatch(fetchNoticesByCategory(categoryName))
  }, [categoryName, dispatch])

  const { isLoggedIn } = useSelector(getAuth);
  // const isLoggedIn = true

  return (
    <Container sx={{ mb: 6 }}>
      <Button
        variant="outlined"
        sx={{ textTransform: 'lowercase' }}
        onClick={() => navigate('/notices/sell')}
      >
        sell
      </Button>
      <Button
        variant="outlined"
        sx={{ textTransform: 'lowercase' }}
        onClick={() => navigate('/notices/lost-found')}
      >
        lost/found
      </Button>
      <Button
        variant="outlined"
        sx={{ textTransform: 'lowercase' }}
        onClick={() => navigate('/notices/for-free')}
      >
        in good hands
      </Button>
      {isLoggedIn && <>
        <Button
          variant="outlined"
          sx={{ textTransform: 'lowercase' }}
          onClick={() => navigate('/notices/favorite')}
        >
          favorite ads
        </Button>
        <Button
          variant="outlined"
          sx={{ textTransform: 'lowercase' }}
          onClick={() => navigate('/notices/own')}
        >
          my ads
        </Button>
      </>}
    </Container>
  );
}
