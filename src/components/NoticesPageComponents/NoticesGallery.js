import Grid from '@mui/material/Grid';
import NoticesCardItem from './NoticesCardItem/NoticesCardItem';
// import { Loader } from 'components/index';
import { useDispatch, useSelector } from 'react-redux';
import { getNotices } from 'redux/notices/noticesSelectors';
import { getAuth } from 'redux/auth/authSelectors';
import { sortObjByDate } from 'services/sortObjByDate';
import { removeNoticeFromUserById } from 'redux/notices/noticesOperations';
import { useEffect } from 'react';
import { fetchUserData } from 'redux/userData/userDataOperations';

import { useState } from 'react';
import { Pagination } from '@mui/material';
import usePagination from 'services/pagination';
import { getUser } from 'redux/userData/userDataSelectors';

export default function NoticesGallery() {
  const {
    items,
    // error, isLoading
  } = useSelector(getNotices);
  const { token } = useSelector(getAuth);
  const user = useSelector(getUser);
  const dispatch = useDispatch();
  const data = sortObjByDate(items, 'create_at');

  useEffect(() => {
    dispatch(fetchUserData());
  }, [dispatch]);

  // ===========================
  const [page, setPage] = useState(8);
  const PER_PAGE = 8;

  const count = Math.ceil(data.length / PER_PAGE);
  const paginationData = usePagination(data, PER_PAGE);
  const handleChangePagination = (event, page) => {
    setPage(page);
    paginationData.jump(page);
  };
  // =========================

  const deleteCard = e => {
    dispatch(removeNoticeFromUserById(e.target.id));
  };

  return (
    <>
      <Grid container sx={{ pb: 6 }}>
        {/* {error && <p>{error.data}</p>}
      <div style={{height: '30px', display: 'flex', justifyContent: 'center', width: '100%'}}>
        {isLoading ? <Loader /> : ''}
      </div> */}

        {data.length > 0 &&
          paginationData.currentData().map(item => {
            return (
              <Grid
                item
                justifyContent="center"
                display="flex"
                xs={12}
                sm={12}
                md={6}
                lg={3}
                xl={3}
                key={item._id}
              >
                <NoticesCardItem
                  token={token}
                  data={item}
                  deleteCard={deleteCard}
                  user={user}
                  // openModal={openModal}
                />
              </Grid>
            );
          })}
      </Grid>
      <Pagination
        color="primary"
        count={count}
        size="large"
        page={page}
        variant="outlined"
        shape="rounded"
        onChange={handleChangePagination}
        style={{ display: 'flex', justifyContent: 'center' }}
      />
    </>
  );
}
