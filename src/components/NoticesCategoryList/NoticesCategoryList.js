import React from 'react';
// import { useSelector } from 'react-redux';
// import { useEffect, useState } from 'react';
// import { useParams } from 'react-router';
import { useNavigate } from 'react-router';

// import { selectorIsLoggedIn } from 'redux/auth/authSelectors';

import { Button } from '@material-ui/core';

export default function NoticesCategoryList() {
  const navigate = useNavigate();

  // const isLoggedIn = useSelector(selectorIsLoggedIn)
  const isLoggedIn = true; //заглушка

  return (
    <>
      <Button
        variant="contained"
        color="white"
        onClick={() => navigate('/sell')}
        style={{ margin: '5px' }}
      >
        sell
      </Button>
      <Button
        variant="contained"
        color="white"
        onClick={() => navigate('/lost-found')}
        style={{ margin: '5px' }}
      >
        lost/found
      </Button>
      <Button
        variant="contained"
        color="white"
        onClick={() => navigate('/for-free')}
        style={{ margin: '5px' }}
      >
        in good hands
      </Button>
      {isLoggedIn && (
        <>
          <Button
            variant="contained"
            color="white"
            onClick={() => navigate('/favorite')}
            style={{ margin: '5px' }}
          >
            favorite ads
          </Button>
          <Button
            variant="contained"
            color="white"
            onClick={() => navigate('/my-ads')}
            style={{ margin: '5px' }}
          >
            my ads
          </Button>
        </>
      )}
    </>
  );
}
