import Grid from '@mui/material/Grid';
import NoticesCardItem from './NoticesCardItem/NoticesCardItem';
// import { Loader } from 'components/index';
import { useDispatch, useSelector } from 'react-redux';
import { getNotices } from 'redux/notices/noticesSelectors';
import { getAuth } from 'redux/auth/authSelectors';
import { sortObjByDate } from 'services/sortObjByDate';
import { removeNoticeFromUserById } from 'redux/notices/noticesOperations';

export default function NoticesGallery() {
  const { items, 
    // error, isLoading
   } = useSelector(getNotices);
  const { token } = useSelector(getAuth);
  const dispatch = useDispatch();
  const data = sortObjByDate(items, 'create_at');

  const deleteCard = e => {
    dispatch(removeNoticeFromUserById(e.target.id));
  };


  return (
    <Grid container sx={{ pb: 6 }}>
      {/* {error && <p>{error.data}</p>}
      <div style={{height: '30px', display: 'flex', justifyContent: 'center', width: '100%'}}>
        {isLoading ? <Loader /> : ''}
      </div> */}
      {data &&
        data.map(item => {
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
              // openModal={openModal}
              />
            </Grid>
          );
        })}
    </Grid>
  );
}
