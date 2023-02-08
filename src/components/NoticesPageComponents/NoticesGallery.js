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
  console.log('data: ', data);

  useEffect(() => {
    dispatch(fetchUserData());
  }, [dispatch]);

  const deleteCard = e => {
    dispatch(removeNoticeFromUserById(e.target.id));
  };

  // const openModal = e => {t
  //   console.log(e.target.id);
  // };

  return (
    <Grid container sx={{ pb: 6 }}>
      {/* {error && <p>{error.data}</p>}
      <div style={{height: '30px', display: 'flex', justifyContent: 'center', width: '100%'}}>
        {isLoading ? <Loader /> : ''}
      </div> */}
      {data.length > 0 &&
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
                user={user}
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

// const items = [
//   {
//     _id: '63d9358f6c046f80886bb64e',
//     title: 'Im your biggest fan',
//     sex: 'male',
//     location: 'Kyiv, Kyiv',
//     avatarUrl: 'https://unsplash.com/photos/5yAhL8ViUVg',
//     comments: 'Puppy is not happy',
//     owner: {
//       _id: '63d8fd7f90130531be818cdd',
//       name: 'Kate Sko',
//       phone: '+380668368484',
//     },
//     create_at: '2023-01-31T15:36:47.957Z',
//     category: 'lost/found',
//     favorite: true,
//   },
//   {
//     _id: '63d936fa01c7d526a17e1b71',
//     title: 'Good lovely dog for sell',
//     name: 'Bobby',
//     birthdate: '01.01.2023',
//     breed: 'husky',
//     sex: 'female',
//     location: 'Kyiv, Kyiv',
//     price: 20,
//     avatarUrl: 'https://unsplash.com/photos/ISahwf9hCNg',
//     comments: 'good dog for family with little kids',
//     owner: {
//       _id: '63d8fd7f90130531be818cdd',
//       name: 'Kate Sko',
//       phone: '+380668368484',
//     },
//     create_at: '2023-01-31T15:42:50.388Z',
//     category: 'sell',
//     favorite: false,
//   },
//   {
//     _id: '63d9376f01c7d526a17e1b74',
//     title: 'Found little puppy',
//     sex: 'male',
//     location: 'Kyiv, Kyiv',
//     avatarUrl: 'https://unsplash.com/photos/sVtcRzphxbk',
//     comments: 'Cute puppy is looking for his muster',
//     owner: {
//       _id: '63d8fd7f90130531be818cdd',
//       name: 'Kate Sko',
//       phone: '+380668368484',
//     },
//     create_at: '2023-01-31T15:44:47.053Z',
//     category: 'lost/found',
//     favorite: false,
//   },
//   {
//     _id: '63d937f301c7d526a17e1b77',
//     title: 'Good lovely cat',
//     name: 'John',
//     birthdate: '12.12.2015',
//     sex: 'male',
//     location: 'Kyiv, Kyiv',
//     avatarUrl: 'https://unsplash.com/photos/75715CVEJhI',
//     comments: 'perfect cat',
//     owner: {
//       _id: '63d8fd7f90130531be818cdd',
//       name: 'Kate Sko',
//       phone: '+380668368484',
//     },
//     create_at: '2023-01-31T15:46:59.862Z',
//     category: 'in good hands',
//     favorite: true,
//   },
//   {
//     _id: '63e0e9e45de61aa4f6237abf',
//     title: 'Very good dog',
//     name: null,
//     birthdate: null,
//     breed: null,
//     sex: 'male',
//     location: 'Poltava123',
//     avatarUrl:
//       'http://res.cloudinary.com/djkbwd06u/image/upload/v1675352872/foewy92xelkruou5221u.jpg',
//     comments: 'Puppy1 is not happy',
//     owner: {
//       _id: '63dd4ec90739cae4a8edb372',
//       name: 'Alex',
//       phone: '+380668375565',
//     },
//     create_at: '2023-02-06T11:52:04.837Z',
//     favorite: false,
//   },
// ];
