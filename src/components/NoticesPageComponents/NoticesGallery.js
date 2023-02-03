import Grid from '@mui/material/Grid';
import NoticesCardItem from './NoticesCardItem/NoticesCardItem';
import { Loader } from 'components/index';
import { useSelector } from 'react-redux';
import { getNotices } from '../../redux/notices/noticesSelectors';

export default function NoticesGallery() {
  const notice = useSelector(getNotices);
  const isLoading = false;
  const data = notice.items.data?.result;

  return (
    <Grid container>
      {/* {error && <p>{error.data}</p>} */}
      {isLoading ? <Loader /> : ''}
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
              <NoticesCardItem data={item} />
            </Grid>
          );
        })}
    </Grid>
  );
}
