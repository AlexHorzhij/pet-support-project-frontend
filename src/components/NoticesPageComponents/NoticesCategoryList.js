import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router';

import { getAuth } from 'redux/auth/authSelectors';
import { fetchNotices } from 'redux/notices/noticesOperations';

import { Button } from '@mui/material';

export default function NoticesCategoryList() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const category = useParams()

  useEffect(() => {
    dispatch(fetchNotices(category))
  }, [category, dispatch])

  const { isLoggedIn } = useSelector(getAuth)
  // const isLoggedIn = true
  return (
    <>
      <Button
        variant="contained"
        style={{ margin: '5px' }}
        onClick={() => navigate('/notices/sell')}
      >
        sell
      </Button>
      <Button
        variant="contained"
        style={{ margin: '5px' }}
        onClick={() => navigate('/notices/lost-found')}
      >
        lost/found
      </Button>
      <Button
        variant="contained"
        style={{ margin: '5px' }}
        onClick={() => navigate('/notices/for-free')}
      >
        in good hands
      </Button>
      {isLoggedIn && <>
        <Button
          variant="contained"
        style={{ margin: '5px' }}
        onClick={() => navigate('/notices/favorite')}
        >
          favorite ads
        </Button>
        <Button
          variant="contained"
        style={{ margin: '5px' }}
        onClick={() => navigate('/notices/my-ads')}
        >
          my ads
        </Button>
      </>}
    </>
  );
}