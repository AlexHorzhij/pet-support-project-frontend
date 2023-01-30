import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router';

import { getAuth } from 'redux/auth/authSelectors';
import { fetchNotices } from 'redux/notices/noticesOperations';

import { Button, useTheme } from '@mui/material';
// import useTheme from '@mui/material';

export default function NoticesCategoryList() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const category = useParams()

  useEffect(() => {
    dispatch(fetchNotices(category))
  }, [category, dispatch])

  const { isLoggedIn } = useSelector(getAuth)
  // const isLoggedIn = true
  const { palette } = useTheme()
  const pitchColor = palette.primary.main

  return (
    <>
      <Button
        sx={{
          textTransform: 'lowercase',
          color: pitchColor,
          backgroundColor: 'background.paper',
        }}
        variant="outlined"
        onClick={() => navigate('/notices/sell')}
      >
        sell
      </Button>
      <Button
        sx={{
          textTransform: 'lowercase',
          color: 'ButtonText'
        }}
        color='primary'
        variant="outlined"
        onClick={() => navigate('/notices/lost-found')}
      >
        lost/found
      </Button>
      <Button
        sx={{
          textTransform: 'lowercase',
          color: 'ButtonText'
        }}
        variant="outlined"
        style={{ margin: '5px' }}
        onClick={() => navigate('/notices/for-free')}
      >
        in good hands
      </Button>
      {isLoggedIn && <>
        <Button
          sx={{
            textTransform: 'lowercase',
            color: 'ButtonText'
          }}
          variant="outlined"
          style={{ margin: '5px' }}
          onClick={() => navigate('/notices/favorite')}
        >
          favorite ads
        </Button>
        <Button
          sx={{
            textTransform: 'lowercase',
            color: 'ButtonText'
          }}
          variant="outlined"
          style={{ margin: '5px' }}
          onClick={() => navigate('/notices/own')}
        >
          my ads
        </Button>
      </>}
    </>
  );
}