import Grid from '@mui/material/Grid';
import NoticesCategoryItem from '../NoticesCategoryItem/NoticesCategoryItem';
import { Loader } from 'components/index';
import Container from 'components/Container/Container';

export default function NoticesCategoryItemList({ data }) {
  const isLoading = false;
  console.log(data);
  return (
    <Container>
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
    </Container>
  );
}

// export const NewsGrid = styled(Grid)({
//   paddingLeft: '0px',
//   marginTop: '0px',
//   marginBottom: '0px',
// });
