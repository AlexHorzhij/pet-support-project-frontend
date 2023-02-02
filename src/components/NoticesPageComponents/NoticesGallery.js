import Grid from '@mui/material/Grid';
import NoticesCategoryItem from './NoticesCategoryItem/NoticesCategoryItem';
import { Loader } from 'components/index';

export default function NoticesGallery({ data }) {
  const isLoading = false;
  console.log(data);
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
              <NoticesCategoryItem data={item} />
            </Grid>
          );
        })}
    </Grid>
  );
}
