import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router';

import { getAuth } from 'redux/auth/authSelectors';
import { Button, Container } from '@mui/material';
import { fetchNotices } from 'redux/notices/noticesOperations';


export default function NoticesCategoryList() {
  const [active, setActive] = useState('')

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const params = useParams()
  const { isLoggedIn } = useSelector(getAuth);

  const { categoryName } = params

  useEffect(() => {
    dispatch(fetchNotices({ categoryName }))
  }, [categoryName, dispatch])

  const onClick = (e) => {
    const { name } = e.target
    setActive(name)
    navigate(`/notices/${name}`)
  }

  return (
    <Container sx={{ mb: 6 }}>
      <Button
        name='sell'
        variant={active === 'sell' ? "contained" : "outlined"}
        sx={{ textTransform: 'lowercase' }}
        onClick={onClick}
      >
        sell
      </Button>
      <Button
        name='lost-found'
        variant={active === 'lost-found' ? "contained" : "outlined"}
        sx={{ textTransform: 'lowercase' }}
        onClick={onClick}
      >
        lost/found
      </Button>
      <Button
        variant={active === 'for-free' ? "contained" : "outlined"}
        name='for-free'
        sx={{ textTransform: 'lowercase' }}
        onClick={onClick}
      >
        in good hands
      </Button>
      {isLoggedIn && <>
        <Button
          variant={active === 'favorite' ? "contained" : "outlined"}
          name='favorite'
          sx={{ textTransform: 'lowercase' }}
          onClick={onClick}
        >
          favorite ads
        </Button>
        <Button
          variant={active === 'own' ? "contained" : "outlined"}
          name='own'
          sx={{ textTransform: 'lowercase' }}
          onClick={onClick}
        >
          my ads
        </Button>
      </>}
    </Container>
  );
}
