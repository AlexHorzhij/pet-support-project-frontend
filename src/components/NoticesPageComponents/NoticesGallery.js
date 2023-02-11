import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Pagination, Typography, Grid } from '@mui/material';
import PetsOutlinedIcon from '@mui/icons-material/PetsOutlined';
import { sortObjByDate, usePagination } from 'services';
import { getUser } from 'redux/userData/userDataSelectors';
import { getNotices } from 'redux/notices/noticesSelectors';

import NoticesCardItem from './NoticesCardItem/NoticesCardItem';
import { getAuth } from 'redux/auth/authSelectors';
import {
  removeNoticeFromUserById,
  setFavorite,
} from 'redux/notices/noticesOperations';
import { toast } from 'react-hot-toast';
import { SceletonWrapper } from 'pages/UserPage/UserPage.styled';

export default function NoticesGallery() {
  const { items } = useSelector(getNotices);
  const { categoryName } = useParams();
  const { token } = useSelector(getAuth);
  const user = useSelector(getUser);
  const dispatch = useDispatch();

  const data = sortObjByDate(items, 'create_at');

  const newData = data.filter(value => {
    if (categoryName === 'lost-found') {
      return value.category === 'lost/found';
    }
    if (categoryName === 'for-free') {
      return value.category === 'in good hands';
    }
    return value;
  });

  const handleChange = event => {
    const favorite = event.target.checked;
    const id = event.target.id;
    if (!token) {
      return toast.error(`Please authorize for using this option`);
    }
    const req = favorite ? 'post' : 'delete';
    const newData = { id, req, categoryName };

    dispatch(setFavorite(newData));
  };
  const [title, setTitle] = useState('');

  useEffect(() => {
    sceletonTitleHandler(categoryName);
  }, [categoryName]);

  const sceletonTitleHandler = category => {
    switch (category) {
      case 'lost-found':
        setTitle(
          'This section is temporary empty, you can add your advertisement here'
        );
        break;
      case 'sell':
        setTitle(
          'This section is temporary empty, you can add your advertisement here'
        );
        break;
      case 'for-free':
        setTitle(
          'This section is temporary empty, you can add your advertisement here'
        );
        break;
      case 'favorite':
        setTitle(
          'This section is temporary empty, you can add your favorite advertisements here'
        );
        break;
      case 'own':
        setTitle(
          'This section is temporary empty, here will be shown all your advertisements'
        );
        break;

      default:
        break;
    }
  };

  // ===========================
  const [page, setPage] = useState(1);
  const PER_PAGE = 16;

  const count = Math.ceil(newData.length / PER_PAGE);
  const paginationData = usePagination(newData, PER_PAGE);
  const handleChangePagination = (event, page) => {
    setPage(page);
    paginationData.jump(page);
  };

  const deleteCard = e => {
    dispatch(removeNoticeFromUserById(e.target.id));
  };

  return (
    <>
      <Grid
        container
        spacing={4}
        sx={{
          pb: 6,
          // gap: '32px',
        }}
      >
        {/* {error && <p>{error.data}</p>}
      <div style={{height: '30px', display: 'flex', justifyContent: 'center', width: '100%'}}>
        {isLoading ? <Loader /> : ''}
      </div> */}

        {newData.length > 0 ? (
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
                  handleChange={handleChange}
                  token={token}
                  data={item}
                  deleteCard={deleteCard}
                  user={user}
                />
              </Grid>
            );
          })
        ) : (
          <Box sx={{ width: '100%' }}>
            <SceletonWrapper sx={{ marginBottom: '30px' }}>
              <Typography sx={{ fontSize: '30px' }}>{title}</Typography>
              <PetsOutlinedIcon
                sx={{ marginTop: '30px', fontSize: '100px', color: 'grey' }}
              />
            </SceletonWrapper>
          </Box>
        )}
      </Grid>
      {newData.length > 0 && (
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
      )}
    </>
  );
}
