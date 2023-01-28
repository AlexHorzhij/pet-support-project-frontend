import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router';

import { getAuth } from 'redux/auth/authSelectors';
import { fetchNotices } from 'redux/notices/noticesOperations';

import { Button } from '@material-ui/core';


export default function NoticesCategoryList() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const category = useParams()

  useEffect(() => {
    
    console.log(category)
    dispatch(fetchNotices(category))
  }, [category, dispatch])

  const { isLoggedIn } = useSelector(getAuth)
  // const isLoggedIn = true
  return (
    <>
      <Button
        variant="contained"
        color="default"
        onClick={() => navigate('/notices/sell')}
        style={{ margin: '5px' }}
      >
        sell
      </Button>
      <Button
        variant="contained"
        color="default"
        onClick={() => navigate('/notices/lost-found')}
        style={{ margin: '5px' }}
      >
        lost/found
      </Button>
      <Button
        variant="contained"
        color="default"
        onClick={() => navigate('/notices/for-free')}
        style={{ margin: '5px' }}
      >
        in good hands
      </Button>
      {isLoggedIn && (
        <>
          <Button
            variant="contained"
            color="default"
            onClick={() => navigate('/notices/favorite')}
            style={{ margin: '5px' }}
          >
            favorite ads
          </Button>
          <Button
            variant="contained"
            color="default"
            onClick={() => navigate('/notices/my-ads')}
            style={{ margin: '5px' }}
          >
            my ads
          </Button>
        </>
      )}
    </>
  );
}
