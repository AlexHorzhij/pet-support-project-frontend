import React, { useState } from 'react';

import { CardMedia, CardContent, Box } from '@mui/material';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { AddToFavorite, Modal, LearnMoreModal } from 'components';
import distanceBetweenDateAndNowWords from 'services/distanceBetweenDateAndNowWords';
import {
  Li,
  ItemsList,
  ItemText,
  Title,
  CategoryLable,
  NoticeCard,
  Btn,
} from './NoticesCardItem.styled';
import nophoto from 'assets/images/nophoto.gif';

export default function NoticesCardItem({
  data,
  deleteCard,
  handleChange,
  user = null,
}) {
  // console.log('data: ', data);
  // const user = useSelector(getUser);
  // console.log('user: ', user);
  // const userID = user?._id ? user._id : null;
  // // console.log('userID: ', userID);

  const [modalIsShown, setModalIsShown] = useState(false);

  const {
    owner,
    _id,
    title,
    breed,
    location,
    birthdate,
    price,
    avatarUrl,
    category,
    favorite,
  } = data;

  const age = distanceBetweenDateAndNowWords(birthdate);
  const toggleModal = () => {
    setModalIsShown(prev => !prev);
  };

  // useEffect(() => {
  //   if (data && user) {
  //     // console.log('isDelete: ', owner._id === user._id);
  //     // console.log('user._id: ', user._id);
  //     // console.log('owner._id: ', owner._id);
  //   }
  // }, [data, owner, user]);

  return (
    <>
      <NoticeCard
        variant="notice"
        sx={{
          width: '280px',
          height: '660px',
          borderRadius: '0 0 40px 40px',
        }}
      >
        <CardMedia
          image={nophoto}
          style={{
            height: '288px',
            width: '100%',
            position: 'relative',
            objectFit: 'cover',
          }}
        >
          <CardMedia
            image={avatarUrl}
            style={{
              height: '100%',
              width: '100%',
              objectFit: 'cover',
              backgroundPosition: '50% 50%',
            }}
          />
          <CategoryLable>{category}</CategoryLable>
          <AddToFavorite
            handleChange={handleChange}
            bg={'rgba(255, 255, 255, 0.6)'}
            id={_id}
            favorite={favorite}
            right="50px"
            top="50px"
            style={{ position: 'absolute', right: '50px', top: '50px' }}
          />
        </CardMedia>
        <Box
          sx={{
            px: 2,
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <CardContent style={{ padding: '20px 16px 0px 16px' }}>
            <Title>{title}</Title>
            <ItemsList>
              <Li sx={{ height: '40px' }}>
                <ItemText>Place:</ItemText>
                <ItemText>{location}</ItemText>
              </Li>
              <Li>
                <ItemText>Breed:</ItemText>
                <ItemText>{breed}</ItemText>
              </Li>
              <Li>
                <ItemText>Age:</ItemText>
                {age ? <ItemText>{age}</ItemText> : <ItemText>-</ItemText>}
              </Li>

              <Li>
                <ItemText>Price:</ItemText>
                {price ? (
                  <ItemText>{price} $</ItemText>
                ) : (
                  <ItemText>free</ItemText>
                )}
              </Li>
            </ItemsList>
          </CardContent>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              padding: '4px',
              justifyContent: 'center',
              alignItems: 'center',
              height: '100px',
            }}
          >
            <Btn
              id={_id}
              onClick={toggleModal}
              variant="outlined"
              sx={{ width: '100%', color: '#F59256' }}
            >
              Learn more
            </Btn>

            {user?._id === owner?._id && (
              <Btn
                id={_id}
                onClick={deleteCard}
                variant="outlined"
                sx={{ width: '100%', color: '#F59256', mb: '12px', mt: 'auto' }}
                endIcon={<DeleteOutlineIcon />}
              >
                Delete
              </Btn>
            )}
          </div>
        </Box>
      </NoticeCard>
      {modalIsShown && (
        <Modal onModalClose={toggleModal}>
          <LearnMoreModal onModalClose={toggleModal} data={data} />
        </Modal>
      )}
    </>
  );
}
