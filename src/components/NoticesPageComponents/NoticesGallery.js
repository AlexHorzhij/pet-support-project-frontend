import Grid from '@mui/material/Grid';
import NoticesCategoryItem from './NoticesCategoryItem/NoticesCategoryItem';
import { Loader } from 'components/index';

export default function NoticesGallery({ data }) {
  const isLoading = false;
  console.log(data);
  return (
    <Grid component="ul" container gap={'32px'}>
      {/* {error && <p>{error.data}</p>} */}
      {isLoading ? <Loader /> : ''}
      {data &&
        data.map(item => {
          return (
            <Grid item md={6} key={item._id}>
              <NoticesCategoryItem data={item} />
            </Grid>
          );
        })}
    </Grid>
  );
}
