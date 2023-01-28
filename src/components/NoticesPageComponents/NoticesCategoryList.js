import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router';

import { getAuth } from 'redux/auth/authSelectors';
import { fetchNotices } from 'redux/notices/noticesOperations';

import { Btn } from './NoticesCategoryList.styled';

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
      <Btn
        variant="contained"
        style={{ margin: '5px' }}
        onClick={() => navigate('/notices/sell')}
      >
        sell
      </Btn>
      <Btn
        variant="contained"
        style={{ margin: '5px' }}
        onClick={() => navigate('/notices/lost-found')}
      >
        lost/found
      </Btn>
      <Btn
        variant="contained"
        style={{ margin: '5px' }}
        onClick={() => navigate('/notices/for-free')}
      >
        in good hands
      </Btn>
      {isLoggedIn && <>
        <Btn
          variant="contained"
        style={{ margin: '5px' }}
        onClick={() => navigate('/notices/favorite')}
        >
          favorite ads
        </Btn>
        <Btn
          variant="contained"
        style={{ margin: '5px' }}
        onClick={() => navigate('/notices/own')}
        >
          my ads
        </Btn>
      </>}
    </>
  );
}